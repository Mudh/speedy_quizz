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
import Login from '../../containers/Modal/Login';
import Subscribe from '../../containers/Modal/Subscribe';

// Styles
import './home.scss';

/**
 * Code
 */
const Home = ({ openLogin, openSubscribe, isLoginOpen, isSubscribeOpen }) => {
  const themes = [
    'Grammaire Anglaise',
    'PHP OOP',
    'ES6 le nouveau Javascript',
    'La vie des Lamantins',
  ];
  const login = isLoginOpen ? <Login /> : null;
  const subscribe = isSubscribeOpen ? <Subscribe /> : null;

  return (
    <Layout layoutClass="home">
      <header className="home__header">
        <Button btnText="Connexion" onClick={openLogin} />
        <span>/</span>
        <Button btnText="Inscription" onClick={openSubscribe} />
      </header>
      <h1 className="home__title">Speedy Quiz</h1>
      <p className="home__paragraph">
        Testez-vous et mesurez-vous à la communauté de SpeedyQuizer
      </p>
      <Button btnClass="primary" btnText="commencer" onClick={openLogin} />
      <h2 className="home__subtitle">Quiz les plus populaires</h2>
      <div className="home__themes">
        {themes.map(theme => (
          <div key={theme} className="theme">
            <div className="theme__title">{theme}</div>
            <Like />
          </div>
        ))}
      </div>
      {login}
      {subscribe}
    </Layout>
  );
};

/**
 * Export
 */
export default Home;
