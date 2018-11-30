/**
 * NPM import
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Components
import Layout from '../../containers/Layout';
import Pencil from 'src/components/Icons/global/pencil';
import ProfilModal from '../../containers/Modal/Profil';
import AddQuestion from '../../containers/Modal/AddQuestion';
// Styles
import './profil.scss';

/**
 * Code
 */

const Profil = ({
  isAuthenticated,
  openProfil,
  openAddQuestion,
  isProfilOpen,
  isAddQuestionOpen,
  firstname,
  lastname,
  username,
  email,
  description,
}) => {
  const profil = isProfilOpen ? <ProfilModal /> : null;
  const addQuestion = isAddQuestionOpen ? <AddQuestion /> : null;

  return (
    <Layout layoutClass="profil">
      <h2 className="profil__title">Profil Membre</h2>
      <div className="profil__content">
        <div className="profil__left">
          <ul>
            <li className="profil__item">
              <span className="profil__label">Nom :</span>
              <span className="profil__text">{lastname}</span>
            </li>
            <li className="profil__item">
              <span className="profil__label">Prénom :</span>
              <span className="profil__text">{firstname}</span>
            </li>
            <li className="profil__item">
              <span className="profil__label">Pseudo :</span>
              <span className="profil__text">{username}</span>
            </li>
            <li className="profil__item">
              <span className="profil__label">Email :</span>
              <span className="profil__text">{email}</span>
            </li>
            <li className="profil__item">
              <span className="profil__label">Résumé :</span>
              <p className="profil__description">{description}</p>
            </li>
          </ul>
          <span className="profil__modify" onClick={openProfil}>
            <Pencil />
            <span className="profil__text">Modifier</span>
          </span>
        </div>
        <div className="profil__right">
          <h3 className="profil__subtitle">Questions proposées</h3>
          <span className="hr" />
          <ul>
            <li className="profil__question">
              • Quand est ce qu'il fera beau ?
            </li>
            <li className="profil__question">• C'est loin l'Australie ?</li>
          </ul>
          <span className="profil__modify" onClick={openAddQuestion}>
            <Pencil />
            <span className="profil__text">Proposez une question</span>
          </span>
        </div>
      </div>
      {profil}
      {addQuestion}
      {!isAuthenticated && <Redirect to="/" />}
    </Layout>
  );
};

Profil.propTypes = {
  openProfil: PropTypes.func.isRequired,
  openAddQuestion: PropTypes.func.isRequired,
  isProfilOpen: PropTypes.bool.isRequired,
  isAddQuestionOpen: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
/**
 * Export
 */

export default Profil;
