import { PRICE_CURRENCY_FROM_QUOTE } from "overlay-sdk/dist/constants";
import { MARKETS_FULL_LOGOS } from "../constants/markets";
import { limitDigitsInDecimals, toPercentUnit, toScientificNumber } from "overlay-sdk";

export interface Market {
  name: string;
  price: string;
  icon: string;
  up: boolean;
  row?: number[];
}

interface ApiMarket {
  _id: string;
  marketName: string;
  logo: string;
  currency: string;
  descriptionText: string;
  indexesConstruction: string[];
  fullLogo: string;
  oracleLogo: string;
  chains: {deploymentAddress: string}[]
  __v: number;
  marketId: string;
}

interface PriceData {
  marketAddress: string;
  latestPrice: number;
  priceSevenDaysAgo: number;
}

export const formatPriceWithCurrency = (price: string | number, priceCurrency: string, significantFigures?: number): string => {
  const formattedPrice = priceCurrency === '%' 
      ? toPercentUnit(price).toString() 
      : toScientificNumber(limitDigitsInDecimals(price.toString().replaceAll(",", "")), significantFigures);

  return priceCurrency === '%' ? formattedPrice + priceCurrency : priceCurrency + formattedPrice
}

export const fetchMarkets = async (): Promise<(Market | null)[]> => {
  const responseMarkets = await fetch('https://api.overlay.market/data/api/markets/chain/421614');
  const markets: ApiMarket[] = await responseMarkets.json();

  const responsePrices = await fetch('https://api.overlay.market/sepolia-charts/v1/charts/marketsPricesOverview');
  const prices: PriceData[] = await responsePrices.json();

  const priceMap = prices.reduce((acc, price) => {
    acc[price.marketAddress] = price;
    return acc;
  }, {} as Record<string, PriceData>);
  console.log({markets})

  return markets.map((market): Market | null => {
    const priceData = priceMap[market.chains[0].deploymentAddress.toLowerCase()];
    const marketDetailsCurrency = market?.currency.trim();
    const priceCurrency = marketDetailsCurrency ? PRICE_CURRENCY_FROM_QUOTE[marketDetailsCurrency as keyof typeof PRICE_CURRENCY_FROM_QUOTE] : '';
    const price = priceData ? `${formatPriceWithCurrency(priceData.latestPrice, priceCurrency)}` : 'N/A';
    const up = priceData ? priceData.latestPrice > priceData.priceSevenDaysAgo : false;
    const icon = MARKETS_FULL_LOGOS[market.marketId] ?? null
    if (!priceData || !icon) return null

    return {
      name: market.marketName,
      price,
      icon,
      up,
    };
  });
};

export const marketConfig = await fetchMarkets();
