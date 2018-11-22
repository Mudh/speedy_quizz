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
const Classement = () => {
  const classements = ['Le nombre de points', 'Le nombre de questions'];
  return (
    <Layout layoutClass="classement">
      <h1 className="classement__title">Classements</h1>
      <div className="classement__tables">
        {classements.map(classement => (
          <div key={classement} className="table">
            <div className="table__title">{classement}</div>
            <ul>
              <li> nb*** + nickName+name + nb points </li>
              <li> nb*** + nickName+name + nb points </li>
              <li> nb*** + nickName+name + nb points </li>
              <li> nb*** + nickName+name + nb points </li>
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
};
/**
 * Export
 */
export default Classement;
