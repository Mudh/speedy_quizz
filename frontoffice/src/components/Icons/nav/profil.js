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
const Profil = ({ active }) => (
  <div id="icons">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="-214.4 -91.1 1024 1024"
    >
      {!active && (
        <g>
          <linearGradient
            id="PROFIL"
            gradientUnits="userSpaceOnUse"
            x1="-77.0733"
            y1="215.5583"
            x2="722.3147"
            y2="886.3245"
          >
            <stop offset="0" style={{ stopColor: '#FFFB59' }} />
            <stop offset="1" style={{ stopColor: '#F8C32A' }} />
          </linearGradient>
          <path
            fill="url(#PROFIL)"
            d="M421.1,618.9l9.9-70.5C514.3,468,579.8,328,579.8,209c0-178.9-148.2-280.7-282.2-280.7
              S15.5,30.1,15.5,209c0,115.2,61.4,250.1,140.9,331.6l11.1,78.8c-219.7,16.8-381.8,75.2-381.8,144.6c0,82.6,229.2,149.5,512,149.5
              s512-66.9,512-149.5C809.6,693.9,644.2,635.1,421.1,618.9z"
          />
        </g>
      )}
      {active && (
        <g>
          <linearGradient
            id="PROFIL_ACTIVE"
            gradientUnits="userSpaceOnUse"
            x1="-77.0733"
            y1="215.5583"
            x2="722.3147"
            y2="886.3245"
          >
            <stop offset="0" style={{ stopColor: '#73669D' }} />
            <stop offset="1" style={{ stopColor: '#3E3269' }} />
          </linearGradient>
          <path
            fill="url(#PROFIL_ACTIVE)"
            d="M421.1,618.9l9.9-70.5C514.3,468,579.8,328,579.8,209c0-178.9-148.2-280.7-282.2-280.7
              S15.5,30.1,15.5,209c0,115.2,61.4,250.1,140.9,331.6l11.1,78.8c-219.7,16.8-381.8,75.2-381.8,144.6c0,82.6,229.2,149.5,512,149.5
              s512-66.9,512-149.5C809.6,693.9,644.2,635.1,421.1,618.9z"
          />
        </g>
      )}
    </svg>
  </div>
);

/**
 * Export
 */
export default Profil;
