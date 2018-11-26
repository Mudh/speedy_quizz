/**
 * NPM import
 */
import React from 'react';
/**
 * Local import
 */
// Components
import Countdown from '../../containers/Countdown';
import Credits from 'src/components/Icons/sidebar/credits';
import FiftyFifty from 'src/components/Icons/sidebar/fiftyFifty';
import Revive from 'src/components/Icons/sidebar/revive';
import Score from 'src/components/Icons/sidebar/score';
import Skip from 'src/components/Icons/sidebar/skip';
import Timer from 'src/components/Icons/sidebar/timer';
import Button from '../Button';

// Styles
import 'src/components/Icons/icons.scss';
import './SideRightLog.scss';

/**
 * Code
 */
const SideRightLog = ({
  parties,
  totalPoints,
  skip,
  revive,
  timer,
  fiftyFifty,
}) => {
  return (
    <aside className="sideRightLog">
      <div className="sideRightLog__wrapper">
        <div className="sideRightLog__Top">
          <h2>Bonjour Marco</h2>
          <ul className="sideRightLog__party">
            <li className="sideRightLog__items">
              <Credits />
              <span className="logo__commentary">x{parties} Parties</span>
            </li>
            <li className="sideRightLog__items">
              <Score />
              <span className="logo__commentary">{totalPoints} Points</span>
            </li>
          </ul>
          <ul className="sideRightLog__jokers">
            <li className="sideRightLog__items">
              <Skip />
              <span className="logo__commentary">x{skip.count} Skip</span>
            </li>
            <li className="sideRightLog__items">
              <Revive />
              <span className="logo__commentary">x{revive.count} Revive</span>
            </li>
            <li className="sideRightLog__items">
              <FiftyFifty />
              <span className="logo__commentary">
                x{fiftyFifty.count} 50/50
              </span>
            </li>
            <li className="sideRightLog__items">
              <Timer />
              <span className="logo__commentary">x{timer.count} Timer</span>
            </li>
          </ul>
        </div>
        <Countdown />
        <Button btnClass="primary" btnText="New Game" />
      </div>
    </aside>
  );
};

export default SideRightLog;
