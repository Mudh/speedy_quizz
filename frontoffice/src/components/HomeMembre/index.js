/**
 * NPM import
 */
import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
/**
 * Local import
 */
// Components
import Layout from '../../containers/Layout';
import Button from '../Button';

// Styles
import './homeMembre.scss';
import '../Home/home.scss';

/**
 * Code
 */
const HomeMembre = withRouter(
  ({ startQuiz, isAuthenticated, themes, history }) => {
    const levels = ['Facile', 'Moyen', 'Difficile'];

    const handleQuizStart = (theme, level) => {
      history.push('/quiz');
      startQuiz(theme, level);
      console.log(theme, level);
    };

    return (
      <Layout layoutClass="homeMember">
        <h1 className="homeMember__title">
          Choisis ton thème et ta difficulté
        </h1>
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
                    onClick={() => handleQuizStart(theme.title, level)}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
        {!isAuthenticated && <Redirect to="/" />}
      </Layout>
    );
  },
);

/**
 * Export
 */
export default HomeMembre;
