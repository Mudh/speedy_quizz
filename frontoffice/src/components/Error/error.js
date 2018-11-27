/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Layout from '../../containers/Layout';

// Styles
import './error.scss';

/**
 * Code
 */

const error = () => (
  <Layout layoutClass="error">
    <h2 className="error__title">ERREUR n° ***</h2>
    <div className="error__content">
        
    </div>
  </Layout>
);

/**
 * Export
 */

export default error;
