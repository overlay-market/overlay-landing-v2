import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Logo from "./assets/icons/logo+logotype-white.no-bkgr.png";
import Vector1 from "./assets/images/vector-50.png";
import Vector2 from "./assets/images/vector-51.png";
import Vector3 from "./assets/images/vector-52.png";
import Pepe1 from "./assets/images/pepe-1.png";
import Pepe2 from "./assets/images/pepe-2.png";
import "./App.css";
import Typography from "@mui/material/Typography";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  styled,
} from "@mui/material";

const BootstrapButton = styled(Button)({
  marginTop: "45px",
  padding: "16px 36px",
  gap: "10px",
  background: "#353B4F",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "103%",
  color: "#FFF",
  borderRadius: "8px",
  "&:hover": {
    background: "#353B4F",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    color: "#FFF",
  },
});

function App() {
  return (
    <Container
      sx={{
        margin: "0",
        padding: "0",
      }}
    >
      <Box>
        <img
          src={Logo}
          alt="Logo"
          style={{ paddingTop: "219px", width: "250px" }}
        />
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${Vector1})`,
          height: 700,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          width: "1130px",
          "@media (max-width: 768px)": {
            height: "1800px",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "85px",
            fontsx: "inherit",
            fontWeight: 700,
            lineHeight: "103%",
          }}
        >
          Ok awesome, you're here
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${Vector2})`,
          height: 1000,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          width: "1130px",
          "@media (max-width: 768px)": {
            height: "1800px",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",

              color: "white",
              fontSize: "65px",
              fontsx: "inherit",
              fontWeight: 700,
              lineHeight: "103%",
              width: "50vw",
            }}
          >
            but you should have
          </Typography>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              color: "var(--v-2-dark-blue-2, #71CEFF)",
              fontSize: "65px",
              fontsx: "inherit",
              fontWeight: 700,
              lineHeight: "103%",
              width: "50vw",
              textDecorationLine: "underline",
            }}
          >
            opened the app, dummy -{">"}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "-webkit-center",
          position: "relative",
          paddingBottom: "586px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "left",
            color: "#FFF",
            fontSize: "34px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "103%",
            width: "30vw",
          }}
        >
          Overlay allows you to trade nearly anything by converting data into a
          market.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: "left",
            color: "#FFF",
            fontSize: "34px",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: "103%",
            width: "30vw",
            paddingTop: "35px",
          }}
        >
          BTC Dominance, Sneaker Indexes, Elon Sentiment...
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: "left",
            color: "#FFF",
            fontSize: "34px",
            fontStyle: "italic",
            fontWeight: 700,
            lineHeight: "103%",
            width: "30vw",
            paddingTop: "35px",
          }}
        >
          - all possible on Overlay -
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: "left",
            color: "#FFF",
            fontSize: "34px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "103%",
            width: "30vw",
            paddingTop: "35px",
          }}
        >
          Traders go long/short on market data with Overlay{"’"}s native token,
          OV, as collateral. Profit is paid out in OV. Losses burn collateral.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: "left",
            color: "#FFF",
            fontSize: "34px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "103%",
            width: "30vw",
            paddingTop: "35px",
          }}
        >
          Overlay does not require liquidity to create a market.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: "left",
            color: "#FFF",
            fontSize: "34px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "103%",
            width: "30vw",
            paddingTop: "35px",
            textDecorationLine: "underline",
          }}
        >
          Read the docs -{">"}
        </Typography>
      </Box>
      <Box sx={{ textAlign: "-webkit-center", position: "relative" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "#FFF",
            fontSize: "54px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "103%",
            width: "30vw",
          }}
        >
          oh,<br></br> still here?<br></br> k...
        </Typography>
      </Box>
      <Box sx={{ textAlign: "-webkit-center", position: "relative" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "#FFF",
            fontSize: "54px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "103%",
            width: "30vw",
            paddingTop: "392px",
          }}
        >
          blah blah<br></br> polychain
        </Typography>
      </Box>
      <Box sx={{ textAlign: "-webkit-center", position: "relative" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "#FFF",
            fontSize: "54px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "103%",
            width: "30vw",
            paddingTop: "392px",
          }}
        >
          blah blah<br></br> unreadable<br></br> whitepaper
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${Vector3})`,
          height: 900,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          width: "1130px",
          "@media (max-width: 768px)": {
            height: "1800px",
          },
          marginBottom: "2239px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontSize: "54px",
              fontsx: "inherit",
              fontWeight: 700,
              lineHeight: "103%",
            }}
          >
            ooooo...ahhhh....
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontSize: "54px",
              fontsx: "inherit",
              fontWeight: 700,
              lineHeight: "103%",
              width: "max-content",
              background:
                "linear-gradient(91deg, #FFED4B -10.57%, #D06CFF 21.53%, #6CA7FF 56.65%, #FFF616 83.9%, #3FFF3B 109.34%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            WORK FOR THE DAO -{">"}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontSize: "54px",
              fontsx: "inherit",
              fontWeight: 700,
              lineHeight: "103%",
            }}
          >
            so cute
          </Typography>
          <img
            src={Pepe1}
            alt="Pepe"
            style={{ width: "115px", height: "115px" }}
          />
        </Box>
      </Box>
      <Box sx={{ textAlign: "-webkit-center", position: "relative" }}>
        <Box sx={{ paddingBottom: "68px" }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              color: "#FFF",
              fontSize: "74px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "103%",
              width: "max-content",
            }}
          >
            ffs still here?
          </Typography>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              color: "#FFF",
              fontSize: "74px",
              fontStyle: "normal",
              fontWeight: 100,
              lineHeight: "103%",
              width: "30vw",
            }}
          >
            fine...
          </Typography>
        </Box>
        <Box sx={{ textAlign: "-webkit-center", position: "relative" }}>
          <Container maxWidth="sm">
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} style={{ paddingLeft: "50px" }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, color: "#FFF", textAlign: "left" }}
                >
                  Protocol
                </Typography>
                <List>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <ListItemText
                      sx={{ textDecorationLine: "underline", color: "#FFF" }}
                      primary="Github"
                    />
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <ListItemText
                      sx={{ textDecorationLine: "underline", color: "#FFF" }}
                      primary="Documentation"
                    />
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <ListItemText
                      sx={{ textDecorationLine: "underline", color: "#FFF" }}
                      primary="White Paper V1"
                    />
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <ListItemText
                      sx={{ textDecorationLine: "underline", color: "#FFF" }}
                      primary="Spearbit Audit"
                    />
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <ListItemText
                      sx={{ textDecorationLine: "underline", color: "#FFF" }}
                      primary="Least Authority Audit"
                    />
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <ListItemText
                      sx={{ textDecorationLine: "underline", color: "#FFF" }}
                      primary="Trail of Bits Audit"
                    />
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <ListItemText
                      sx={{ textDecorationLine: "underline", color: "#FFF" }}
                      primary="Immunefi Bounty"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4} style={{ paddingLeft: "50px" }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, color: "#FFF", textAlign: "left" }}
                >
                  Connect
                </Typography>
                <List>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <ListItemText
                      sx={{ textDecorationLine: "underline", color: "#FFF" }}
                      primary="Discord"
                    />
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <ListItemText
                      sx={{ textDecorationLine: "underline", color: "#FFF" }}
                      primary="Twitter"
                    />
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <ListItemText
                      sx={{ textDecorationLine: "underline", color: "#FFF" }}
                      primary="Mirror"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4} style={{ paddingLeft: "50px" }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, color: "#FFF", textAlign: "left" }}
                >
                  Legal
                </Typography>
                <List>
                  <ListItem sx={{ paddingLeft: "0px" }}>
                    <ListItemText
                      sx={{ textDecorationLine: "underline", color: "#FFF" }}
                      primary="Terms of Service"
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "-webkit-center",
          position: "relative",
          paddingTop: "9550px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "#FFF",
            fontSize: "74px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "103%",
          }}
        >
          congrats,<br></br> you scrolled to the end 🙄
        </Typography>
        <BootstrapButton variant="contained">
          Claim: I{"’"}m a complete idiot and total loser NFT
        </BootstrapButton>
        <Box sx={{marginTop: "45px"}}>
        <img
            src={Pepe2}
            alt="Pepe"
            style={{ width: "115px", height: "115px", marginBottom: "-6px" }}
          />
        <hr style={{marginTop: 0}}/>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
