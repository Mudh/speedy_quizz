/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Components

// Styles
import '../icons.scss';

/**
 * Code
 */
const Home = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="-214.4 -69.1 1024 1024"
    className="icon"
  >
    <g>
      <linearGradient
        id="HOME"
        gradientUnits="userSpaceOnUse"
        x1="-53.6988"
        y1="252.2072"
        x2="664.1414"
        y2="854.5466"
      >
        <stop offset="0" style={{ stopColor: '#FFFB59' }} />
        <stop offset="1" style={{ stopColor: '#F8C32A' }} />
      </linearGradient>
      <path
        fill="url(#HOME)"
        className="icon__inactive"
        d="M799.3,431.6L333.4-40.9c-13.7-13.7-36.3-14.3-50-0.6L-203.4,431c-10.7,10.1-13.7,25.6-8.3,39.3
              c5.4,13.7,18.5,22,32.8,22h92.4V826c0,19.7,16.1,35.7,35.7,35.7l175.4-1.8l173.1,77.2c19.7,0,35.7-16.1,35.7-35.7V552.3l-199.8-59.5
              h295.6v331.4c0,19.7,16.1,35.7,35.7,35.7l181.3,1.8c19.7,0,35.7-16.1,35.7-35.7V492.4h92.3c14.3,0,27.4-8.9,32.8-22
              C812.4,457.2,809.4,441.7,799.3,431.6z"
      />
    </g>
    <g>
      <linearGradient
        id="HOME_ACTIVE"
        gradientUnits="userSpaceOnUse"
        x1="-53.6988"
        y1="252.2072"
        x2="664.1414"
        y2="854.5466"
      >
        <stop offset="0" style={{ stopColor: '#73669D' }} />
        <stop offset="1" style={{ stopColor: '#3E3269' }} />
      </linearGradient>
      <path
        fill="url(#HOME_ACTIVE)"
        className="icon__active"
        d="M799.3,431.6L333.4-40.9c-13.7-13.7-36.3-14.3-50-0.6L-203.4,431c-10.7,10.1-13.7,25.6-8.3,39.3
              c5.4,13.7,18.5,22,32.8,22h92.4V826c0,19.7,16.1,35.7,35.7,35.7l175.4-1.8l173.1,77.2c19.7,0,35.7-16.1,35.7-35.7V552.3
              l-199.8-59.5h295.6v331.4c0,19.7,16.1,35.7,35.7,35.7l181.3,1.8c19.7,0,35.7-16.1,35.7-35.7V492.4h92.3c14.3,0,27.4-8.9,32.8-22
              C812.4,457.2,809.4,441.7,799.3,431.6z"
      />
    </g>
  </svg>
);

Home.propTypes = {
  active: PropTypes.bool.isRequired,
};
/**
 * Export
 */
export default Home;
