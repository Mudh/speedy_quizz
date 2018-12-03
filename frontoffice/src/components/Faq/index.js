/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Layout from '../../containers/Layout';

// Styles
import './faq.scss';

/**
 * Code
 */

const faq = () => (
  <Layout layoutClass="faq">
    <h2 className="faq__title">Règles du jeu</h2>
    <div className="faq__content">
      <h3>Présentation</h3>
      <p>
        Speedy quizz est un jeu de quizz solo qui se déroule en 3 étapes. A tout
        moment, le joueur peut arrêter la partie et remporter le nombre de
        points en cours. Evidemment, plus le joueur va loin, plus il gagne de
        points. Mais UNE mauvaise réponse et tous les points sont perdus !
      </p>
      <span>
        Le quizz est limité dans le temps. Si le joueur n’a pas fini de répondre
        à l’ensemble des questions des 3 étapes à la fin du temps imparti, alors
        il perd la partie. Pour s’aider, le joueur peut faire appel à 4 jokers :
        <ul>
          <li>Le 50/50 : Enlève 2 mauvaises réponses (étape 2 uniquement)</li>
          <li>Le Skip : Permet de passer à la question suivante</li>
          <li>
            Revive : Permet de recommencer à l’étape en cours en cas de mauvaise
            réponse
          </li>
          <li>Timer+ : Rajoute du temps au chronomètre </li>
        </ul>
      </span>
      <h3>Un quizz est composé de 3 étapes :</h3>
      <ul>
        <li>
          Etape 1 : Elle comporte 5 questions avec 2 choix possibles par
          question.
        </li>
        <li>
          Etape 2 : Elle comporte 5 questions avec 4 choix possible par
          question.
        </li>
        <li>
          Etape 3 : Elle ne comporte pas de choix de réponse. C’est au joueur de
          devoir écrire la bonne réponse.
        </li>
      </ul>
      <h3>Les difficultés:</h3>
      <p>
        La difficulté du quizz dépend du temps disponible au joueur pour arriver
        au bout ainsi que de la pénalité des jokers.
      </p>
      <ul>
        <li>Le temps : Facile (2m30) - Intermédiaire (2m) - Avancé (1m30)</li>
        <li>
          Les Jokers (utilisables une fois par quiz et ne concerne pas "Revive")
          :
          <ul>
            <li>
              • Facile : Utilisation normale des jokers Intermédiaire :
              Utilisation des jokers avec pénalités (on divise les points de la
              question par deux)
            </li>
            <li>
              • Intermédiaire : Utilisation des jokers avec pénalités (on divise
              les points de la question par deux)
            </li>
            <li>
              • Avancé : Utilisation des jokers avec pénalités (on soustrait
              100% des points de la question au résultat final)
            </li>
          </ul>
        </li>
      </ul>
      <h3>Les points :</h3>
      <p>
        Chaque question comporte un certain nombre de points en fonction de la
        difficulté choisie par le joueur et de l’étape en cours à laquelle il se
        trouve.
      </p>
      <p>Niveau Facile :</p>
      <ul>
        <li>Etape 1 : La question rapporte 2 points</li>
        <li>Etape 2 : La question rapporte 5 points</li>
        <li>Etape 3 : La question rapporte 10 points</li>
      </ul>
      <p>Niveau Intermédiaire : </p>
      <ul>
        <li>Etape 1 : La question rapporte 4 points</li>
        <li>Etape 2 : La question rapporte 7 points </li>
        <li>Etape 3 : La question rapporte 15 points </li>
      </ul>
      <p>Niveau Avancé : </p>
      <ul>
        <li>Etape 1 : La question rapporte 6 points </li>
        <li>Etape 2 : La question rapporte 10 points</li>
        <li>Etape 3 : La question rapporte 30 points</li>
      </ul>
    </div>
  </Layout>
);

/**
 * Export
 */

export default faq;
