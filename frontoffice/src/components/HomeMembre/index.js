/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Layout from '../Layout';
import Button from '../Button';


// Styles
import './homeMembre.scss';
import '../Home/home.scss';

/**
 * Code
 */

const HomeMembre = () => {
  const difficullvls = [
    'Facile',
    'Moyen',
    'Difficile',
  ];

  return (
    <Layout layoutClass="home">
      <h1 className="home__title">Choisis ton thème et ta difficulté</h1>
      <h2 className="home__subtitle"> Le thème de mon jeu</h2>
      <div className="home__difficullvls">
        {difficullvls.map(difficullvl => (
          <div key={difficullvl} className="difficullvl">
            <Button btnClass="home__btn-start" btnText={difficullvl} />
          </div>
        ))}
      </div>
    </Layout>
  );
};
const home2 = () => {
  const difficullvls = [
    'prout',
    'Moyen',
    'Difficile',
  ];

  return (
    <Layout layoutClass="home">
      <h1 className="home__title">Choisis ton thème et ta difficulté</h1>
      <h2 className="home__subtitle"> Le thème de mon jeu</h2>
      <div className="home__difficullvls">
        {difficullvls.map(difficullvl => (
          <div key={difficullvl} className="difficullvl">
            <Button btnClass="home__btn-start" btnText={difficullvl} />
          </div>
        ))}
      </div>
    </Layout>
  );
};


/**
 * Export
 */
export default HomeMembre;
