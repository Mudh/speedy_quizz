/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components

// Styles
import '../icons.scss';

/**
 * Code
 */
const Score = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 1024 1024"
  >
    <g>
      <linearGradient
        id="SCORE"
        gradientUnits="userSpaceOnUse"
        x1="103.7608"
        y1="273.3916"
        x2="886.2794"
        y2="930.0027"
      >
        <stop offset="0" style={{ stopColor: '#73669D' }} />
        <stop offset="1" style={{ stopColor: '#3E3269' }} />
      </linearGradient>
      <polygon
        fill="url(#SCORE)"
        points="512,25.1 662.1,354.7 1024,397 754.9,636.9 828.4,998.9 512,811.3 195.6,998.9 269.1,636.9 
	                0,397 361.9,354.7 "
      />
    </g>
    )}
  </svg>
);

/**
 * Export
 */
export default Score;
