import React, { useState, useEffect, useRef } from 'react';

interface Props {
  className?: string;
}

interface GradientPosition {
  x: number;
  y: number;
  rotation: number;
}

interface Square {
  x: number;
  y: number;
  opacity: number;
  targetOpacity: number;
}

const DynamicBackgroundSVG: React.FC<Props> = ({ className }) => {
  const [gradientPositions, setGradientPositions] = useState<{
    [key: string]: GradientPosition;
  }>({
    purple: { x: 50, y: 50, rotation: 180 },
    orange: { x: 50, y: 50, rotation: 180 },
    yellow: { x: 50, y: 50, rotation: 180 },
  });

  const [squares, setSquares] = useState<Square[]>([
    { x: 320, y: 109, opacity: 0, targetOpacity: 0 },
    { x: 160, y: 349, opacity: 0, targetOpacity: 0 },
    { x: 1200, y: 269, opacity: 0, targetOpacity: 0 },
    { x: 1360, y: 429, opacity: 0, targetOpacity: 0 },
    { x: 480, y: 189, opacity: 0, targetOpacity: 0 },
    { x: 720, y: 509, opacity: 0, targetOpacity: 0 },
    { x: 960, y: 669, opacity: 0, targetOpacity: 0 },
    { x: 640, y: 29, opacity: 0, targetOpacity: 0 },
  ]);

  const animationRef = useRef<number>();
  const timeRef = useRef<number>(0);

  const updateAnimation = (time: number) => {
    if (timeRef.current === 0) {
      timeRef.current = time;
    }

    timeRef.current = time;

    setGradientPositions({
      purple: {
        x: 50 * Math.sin(time * 0.0002) + 50,
        y: 50 * Math.cos(time * 0.0003) + 50,
        rotation: 180 * Math.sin(time * 0.0001) + 180,
      },
      orange: {
        x: 50 * Math.sin(time * 0.0003) + 50,
        y: 50 * Math.cos(time * 0.0002) + 50,
        rotation: 180 * Math.cos(time * 0.00015) + 180,
      },
      yellow: {
        x: 50 * Math.cos(time * 0.0004) + 50,
        y: 50 * Math.sin(time * 0.0005) + 50,
        rotation: 180 * Math.sin(time * 0.0002) + 180,
      },
    });

    setSquares(prev => prev.map(square => {
      const newOpacity = square.opacity + (square.targetOpacity - square.opacity) * 0.05;
      return { ...square, opacity: newOpacity };
    }));

    animationRef.current = requestAnimationFrame(updateAnimation);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(updateAnimation);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSquares(prev => prev.map(square => ({
        ...square,
        targetOpacity: Math.random() > 0.7 ? 0.3 : 0,
      })));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <svg className={className} viewBox="0 0 1440 860" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="viewportClip">
          <rect width="1440" height="860" />
        </clipPath>
        <filter id="filter0_f_798_5188" x="167.5" y="-503" width="2097" height="1897" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_798_5188"/>
        </filter>
        <filter id="filter1_f_798_5188" x="-703" y="-603" width="1565" height="1645" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_798_5188"/>
        </filter>
        <filter id="filter2_f_798_5188" x="-426" y="-12" width="1406" height="1412" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_798_5188"/>
        </filter>
        <linearGradient id="paint0_linear_798_5188" x1="1290.5" y1="-103" x2="1290.5" y2="994" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5959C8"/>
          <stop offset="1" stopColor="#CD48FC"/>
        </linearGradient>
        <linearGradient id="paint1_linear_798_5188" x1="79.5" y1="-103" x2="79.5" y2="542" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF470D"/>
          <stop offset="1" stopColor="#5151FF"/>
        </linearGradient>
        <linearGradient id="paint2_linear_798_5188" x1="386.056" y1="565.531" x2="157.952" y2="704.269" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E7FF4A"/>
          <stop offset="1" stopColor="#02FF8F"/>
        </linearGradient>
        <linearGradient id="paint3_linear_798_5188" x1="720" y1="181" x2="720" y2="856" gradientUnits="userSpaceOnUse">
          <stop stopOpacity="0"/>
          <stop offset="1" stopColor="#232323"/>
        </linearGradient>
      </defs>

      <g>
        <rect width="1440" height="860" fill="#14374A"/>
        {/* Keep existing paths and groups */}
        <g filter="url(#filter0_f_798_5188)">
          <path 
            d="M1361.5 -103H1864.5L1070.5 994H567.5L1361.5 -103Z" 
            fill="url(#paint0_linear_798_5188)"
            transform={`translate(${gradientPositions.purple.x}, ${gradientPositions.purple.y}) rotate(${gradientPositions.purple.rotation}, 1216, 445.5)`}
          />
        </g>
        <g filter="url(#filter1_f_798_5188)">
          <path 
            d="M362 108C362 224.532 124.532 542 8 542C-108.532 542 -203 224.532 -203 108C-203 -8.53208 -108.532 -103 8 -103C124.532 -103 362 -8.53208 362 108Z" 
            fill="url(#paint1_linear_798_5188)"
            transform={`translate(${gradientPositions.orange.x}, ${gradientPositions.orange.y}) rotate(${gradientPositions.orange.rotation}, 79.5, 219.5)`}
          />
        </g>
        <g filter="url(#filter2_f_798_5188)">
          <path 
            d="M74 641.963C74 784.473 125.447 900 188.911 900C252.374 900 480 680.525 480 538.015C480 395.505 252.374 602.83 188.911 602.83C125.447 602.83 74 499.454 74 641.963Z" 
            fill="url(#paint2_linear_798_5188)"
            transform={`translate(${gradientPositions.yellow.x}, ${gradientPositions.yellow.y}) rotate(${gradientPositions.yellow.rotation}, 277, 751)`}
          />
        </g>
        <g opacity="0.05">
          {[...Array(11)].map((_, i) => (
            <line key={`h${i}`} y1={29.5 + i * 80} x2="1440" y2={29.5 + i * 80} stroke="white"/>
          ))}
        </g>
        <g opacity="0.05">
          {[...Array(18)].map((_, i) => (
            <line key={`v${i}`} x1={1360.5 - i * 80} y1="0.000122092" x2={1360.5 - i * 80} y2="860" stroke="white"/>
          ))}
        </g>
        <rect width="1440" height="860" fill="url(#paint3_linear_798_5188)"/>
        {squares.map((square, index) => (
          <rect 
            key={index}
            opacity={square.opacity} 
            x={square.x} 
            y={square.y} 
            width="81" 
            height="81" 
            fill="#D9D9D9"
          />
        ))}
      </g>
    </svg>
  );
};

export default DynamicBackgroundSVG;