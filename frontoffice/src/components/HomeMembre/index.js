/**
 * NPM import
 */
import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';
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

const HomeMembre = ({ sendRequest, fakeAuth, setStartTimer }) => {
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
        {themes.map((theme, index) => (
          <div key={`${theme}${index}`} className="theme">
            <h2 className="theme__title">{theme}</h2>
            <div className="theme__levels">
              {levels.map(level => (
                <NavLink
                  key={level}
                  to="/quiz"
                  className="primaryDemo"
                  onClick={setStartTimer}
                >
                  {level}
                </NavLink>
              ))}
              {/* {levels.map(level => (
                <Button
                  key={level}
                  btnClass="primary"
                  btnText={level}
                  onClick={sendRequest}
                />
              ))} */}
            </div>
          </div>
        ))}
      </section>
      {!fakeAuth && <Redirect to="/" />}
    </Layout>
  );
};

/**
 * Export
 */
export default HomeMembre;
