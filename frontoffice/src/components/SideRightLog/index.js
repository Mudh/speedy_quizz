import React from 'react';
import Credits from 'src/components/Icons/sidebar/credits';
import FiftyFifty from 'src/components/Icons/sidebar/fiftyFifty';
import Revive from 'src/components/Icons/sidebar/revive';
import Score from 'src/components/Icons/sidebar/score';
import Skip from 'src/components/Icons/sidebar/skip';
import Timer from 'src/components/Icons/sidebar/timer';


import 'src/components/Icons/icons.scss';
import './SideRightLog.scss';

const SideRightLog = props => (
  <div className="sideRightLog">
    <div className="sideRightLog__Top">
      <h2>Bonjour Marco</h2>
      <div className="sideRightLog_party">
        <Credits />
      </div>
      <Score />
      <p className="sideRightLog__pfinish"></p>
      <Skip />
      <Revive />
      <Timer />
      <FiftyFifty />
      <p className="sideRightLog__pfinish"></p>
    </div>
    <div className="sideRightLog__button">
      <button type="button">New Game</button>
    </div>
  </div>

);

export default SideRightLog;
