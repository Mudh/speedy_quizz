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
  const themes = [
    'Le système solaire',
    'La grammaire anglaise',
    'La vie des lamentins',
    'Le système solaire',
    'La grammaire anglaise',
    'La vie des lamentins',
    'Le système solaire',
    'La grammaire anglaise',
    'La vie des lamentins',
  ];
  const levels = ['Facile', 'Moyen', 'Difficile'];

  return (
    <Layout layoutClass="homeMember">
      <h1 className="homeMember__title">Choisis ton thème et ta difficulté</h1>
      <section className="homeMember__themes">
        {themes.map(theme => (
          <div className="theme">
            <h2 className="theme__title">{theme}</h2>
            <div className="theme__levels">
              {levels.map(level => (
                <Button key={level} btnClass="primary" btnText={level} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

/**
 * Export
 */
export default HomeMembre;
