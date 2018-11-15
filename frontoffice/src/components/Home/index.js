/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Layout from '../Layout';
import Like from '../Icons/global/like';

// Styles
import './home.scss';

/**
 * Code
 */
const Home = () => {
  const themes = [
    'Grammaire Anglaise',
    'PHP OOP',
    'ES6 le nouveau Javascript',
    'La vie des Lamantins',
  ];
  return (
    <div className="home">
      <Layout>
        <header className="home__header">
          <button>Connexion</button>
          <span>/</span>
          <button>Inscription</button>
        </header>
        <h1 className="home__title">Speedy Quiz</h1>
        <p className="home__paragraph">
          Testez-vous et mesurez-vous à la communauté de SpeedyQuizer
        </p>
        <button className="home__btn-start">commencer</button>
        <h2 className="home__subtitle">Quiz les plus populaires</h2>
        <div className="home__themes">
          {themes.map(theme => (
            <div className="theme">
              <div className="theme__title">{theme}</div>
              <Like />
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};
/**
 * Export
 */
export default Home;
