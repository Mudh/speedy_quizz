/**
 * NPM import
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
// Components
import Layout from '../../containers/Layout';
import Button from '../Button';
import Launch from '../../containers/Modal/Launch';
import Score from '../../containers/Modal/Score';

// Styles
import './homeMembre.scss';
import '../Home/home.scss';
/**
 * Code
 */
const HomeMembre = ({
  startQuiz,
  isAuthenticated,
  themes,
  islaunchOpen,
  isScoreOpen,
}) => {
  const levels = ['Facile', 'Moyen', 'Difficile'];

  const launch = islaunchOpen ? <Launch /> : null;
  const score = isScoreOpen ? <Score /> : null;

  return (
    <Layout layoutClass="homeMember">
      <h1 className="homeMember__title">Choisis ton thème et ta difficulté</h1>
      <section className="homeMember__themes">
        {themes.map(theme => (
          <div key={theme.id} className="theme">
            <h2 className="theme__title">{theme.title}</h2>
            <div className="theme__levels">
              {levels.map(level => (
                <Button
                  key={level}
                  btnClass="primary"
                  btnText={level}
                  onClick={() => startQuiz(theme.title, level)}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
      {launch}
      {score}
      {!isAuthenticated && <Redirect to="/" />}
    </Layout>
  );
};

/**
 * Export
 */
export default HomeMembre;
