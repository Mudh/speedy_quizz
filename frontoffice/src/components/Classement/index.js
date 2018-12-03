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
import './classement.scss';

/**
 * Code
 */
const Classement = ({ ranking }) => {
  return (
    <Layout layoutClass="classement">
      <h1 className="classement__title">Classements</h1>
      <div className="classement__tables">
        <div className="table__title">Le nombre de points</div>
        <div className="table">
          <ul>
            {ranking.map((rank, index) => (
              <li key={rank.username}>
                <span>
                  {index + 1 === 1 ? `${index + 1} er` : `${index + 1} ème`}
                </span>
              </li>
            ))}
          </ul>
          <ul>
            {ranking.map((rank, index) => (
              <li key={rank.username}>
                <span>{rank.username}</span>
              </li>
            ))}
          </ul>
          <ul>
            {ranking.map((rank, index) => (
              <li key={rank.username}>
                <span>{`${rank.nb_points} points`}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};
/**
 * Export
 */
export default Classement;
