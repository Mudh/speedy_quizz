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
    <Layout layoutClass="home">
      <header className="home__header">
        <Button btnText="Connexion" />
        <span>/</span>
        <Button btnText="Inscription" />
      </header>
      <h1 className="home__title">Speedy Quiz</h1>
      <p className="home__paragraph">
        Testez-vous et mesurez-vous à la communauté de SpeedyQuizer
      </p>
      <Button btnClass="home__btn-start" btnText="commencer" />
      <h2 className="home__subtitle">Quiz les plus populaires</h2>
      <div className="home__themes">
        {themes.map(theme => (
          <div key={theme} className="theme">
            <div className="theme__title">{theme}</div>
            <Like />
          </div>
        ))}
      </div>
    </Layout>
  );
};
/**
 * Export
 */
export default Home;
