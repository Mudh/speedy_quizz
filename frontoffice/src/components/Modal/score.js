/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Components
import ModalLayout from './modalLayout';
import Button from '../Button';
// Styles
import './modal.scss';

/**
 * Code
 */
const Score = ({ closeScore, totalOwnedPoints, isBounceAnimate }) => {
  const finalMessage =
    totalOwnedPoints > 0
      ? `Bravo vous avez gagné ${totalOwnedPoints} points`
      : "Il va falloir s'entraîner pour gagner des points !";
  return (
    <ModalLayout
      bounce={isBounceAnimate}
      modalClass="score"
      onClick={closeScore}
    >
      <Button btnClass="close" btnText="+" onClick={closeScore} />
      <p>
        Fin de la partie !!
        <br />
        {finalMessage}
      </p>
    </ModalLayout>
  );
};

Score.propTypes = {
  closeScore: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Score;
