/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Layout from '../../containers/Layout';
import Pencil from 'src/components/Icons/global/pencil';
// Styles
import './profil.scss';

/**
 * Code
 */

const Profil = () => (
  <Layout layoutClass="profil">
    <h2 className="profil__title">Profil Membre</h2>
    <div className="profil__content">
      <div className="profil__left">
        <ul>
          <li className="profil__item">
            <span className="profil__label">Nom :</span>
            <span className="profil__text">Mon Nom</span>
          </li>
          <li className="profil__item">
            <span className="profil__label">Prénom :</span>
            <span className="profil__text">Mon Prénom</span>
          </li>
          <li className="profil__item">
            <span className="profil__label">Email :</span>
            <span className="profil__text">Mon Email</span>
          </li>
          <li className="profil__item">
            <span className="profil__label">Résumé :</span>
            <p className="profil__description">
              Summum maximeque sinistra sub insertas nimia sudant sinistra ut
              tenuitate expandentes ipsis quas species ponderibus.
            </p>
          </li>
        </ul>
        <p className="profil__text">
          <Pencil /> Modifier
        </p>
      </div>
      <div className="profil__right">
        <span className="profil__text , line">Questions proposées</span>

        <ul>
          <li className="profil__text">• Quand est ce qu'il fera beau ?</li>
          <li className="profil__text">• C'est loin l'Australie ?</li>
        </ul>
        <p className="profil__text">
          <Pencil />
          Proposez une question
        </p>
      </div>
    </div>
  </Layout>
);

/**
 * Export
 */

export default Profil;
