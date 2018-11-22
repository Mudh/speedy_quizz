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
const Podium = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="-214.4 -141.1 1024 1024"
  >
    <g>
      <linearGradient
        id="PODIUM_1"
        gradientUnits="userSpaceOnUse"
        x1="-78.0145"
        y1="91.5073"
        x2="665.3817"
        y2="715.2908"
      >
        <stop offset="0" style={{ stopColor: '#FFFB59' }} />
        <stop offset="1" style={{ stopColor: '#F8C32A' }} />
      </linearGradient>
      <path
        fill="url(#PODIUM_1)"
        className="icon__inactive"
        d="M685.2,246.5c0-213.7-173.9-387.6-387.6-387.6C83.9-141.1-89.9,32.8-89.9,246.5
              c0,121.9,56.5,230.7,144.8,301.8l10.5,322.8c-1.3,9.4,9,15.5,15.7,9.3L273.3,769c14.7-10.1,34.1-10.1,48.7,0l192.2,111.4
              c6.7,6.2,17,0.1,15.7-9.3l10.5-322.8C628.7,477.3,685.2,368.4,685.2,246.5z M-38.4,246.5c0-185.3,150.8-336.1,336.1-336.1
              S633.7,61.2,633.7,246.5S483,582.6,297.6,582.6S-38.4,431.8-38.4,246.5z"
      />
      <linearGradient
        id="PODIUM_2"
        gradientUnits="userSpaceOnUse"
        x1="131.0956"
        y1="140.5332"
        x2="453.0619"
        y2="410.6949"
      >
        <stop offset="0" style={{ stopColor: '#FFFB59' }} />
        <stop offset="1" style={{ stopColor: '#F8C32A' }} />
      </linearGradient>
      <path
        fill="url(#PODIUM_2)"
        className="icon__inactive"
        d="M102.6,242.3l72,60.9l-22.5,91.4c-3.3,13.2-0.4,26.8,7.8,37.4c8.3,10.7,21.3,17,34.7,17
              c8.1,0,16-2.3,23-6.7l79.9-49.7l79.9,49.7c7,4.3,15,6.6,23,6.6c0,0,0,0,0,0c13.4,0,26.3-6.4,34.7-17c8.3-10.6,11.1-24.3,7.9-37.4
              l-22.5-91.5l71.9-60.8c13.8-11.5,19.1-29.9,13.7-46.9c-5.4-17-20.5-28.9-38.5-30.3l-94-6.8l-35.4-87.1
              C331.6,54.7,315.6,44,297.7,44c-18,0-33.9,10.7-40.5,27.2l-35.4,87.2l-94.1,6.8c-17.8,1.4-32.9,13.2-38.4,30.2
              C83.8,212.4,89,230.8,102.6,242.3z"
      />
    </g>
    <g>
      <linearGradient
        id="PODIUM_ACTIVE_1"
        gradientUnits="userSpaceOnUse"
        x1="-78.0145"
        y1="91.5073"
        x2="665.3817"
        y2="715.2908"
      >
        <stop offset="0" style={{ stopColor: '#73669D' }} />
        <stop offset="1" style={{ stopColor: '#3E3269' }} />
      </linearGradient>
      <path
        className="icon__active"
        fill="url(#PODIUM_ACTIVE_1)"
        d="M685.2,246.5c0-213.7-173.9-387.6-387.6-387.6C83.9-141.1-89.9,32.8-89.9,246.5
              c0,121.9,56.5,230.7,144.8,301.8l10.5,322.8c-1.3,9.4,9,15.5,15.7,9.3L273.3,769c14.7-10.1,34.1-10.1,48.7,0l192.2,111.4
              c6.7,6.2,17,0.1,15.7-9.3l10.5-322.8C628.7,477.3,685.2,368.4,685.2,246.5z M-38.4,246.5c0-185.3,150.8-336.1,336.1-336.1
              S633.7,61.2,633.7,246.5S483,582.6,297.6,582.6S-38.4,431.8-38.4,246.5z"
      />
      <linearGradient
        id="PODIUM_ACTIVE_2"
        gradientUnits="userSpaceOnUse"
        x1="131.0956"
        y1="140.5332"
        x2="453.0619"
        y2="410.6949"
      >
        <stop offset="0" style={{ stopColor: '#73669D' }} />
        <stop offset="1" style={{ stopColor: '#3E3269' }} />
      </linearGradient>
      <path
        fill="url(#PODIUM_ACTIVE_2)"
        className="icon__active"
        d="M102.6,242.3l72,60.9l-22.5,91.4c-3.3,13.2-0.4,26.8,7.8,37.4c8.3,10.7,21.3,17,34.7,17
              c8.1,0,16-2.3,23-6.7l79.9-49.7l79.9,49.7c7,4.3,15,6.6,23,6.6c0,0,0,0,0,0c13.4,0,26.3-6.4,34.7-17c8.3-10.6,11.1-24.3,7.9-37.4
              l-22.5-91.5l71.9-60.8c13.8-11.5,19.1-29.9,13.7-46.9c-5.4-17-20.5-28.9-38.5-30.3l-94-6.8l-35.4-87.1
              C331.6,54.7,315.6,44,297.7,44c-18,0-33.9,10.7-40.5,27.2l-35.4,87.2l-94.1,6.8c-17.8,1.4-32.9,13.2-38.4,30.2
              C83.8,212.4,89,230.8,102.6,242.3z"
      />
    </g>
  </svg>
);

Podium.propTypes = {
  active: PropTypes.bool.isRequired,
};
/**
 * Export
 */
export default Podium;
