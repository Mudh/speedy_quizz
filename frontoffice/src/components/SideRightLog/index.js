import React from 'react';
import './SideRightLog.scss';

const SideRightLog = props => (
  <div className="sideRightLog">
    <div className="sideRightLog__Top">
      <h2>Bonjour Marco</h2>
      <p> (logoengrenage) nb partie/s</p>
      <p className="sideRightLog__pfinish"> (logoetoile) nb partie/s</p>
      <p> (logoporte) nb Skip</p>
      <p> (logocoeur) nb Revive</p>
      <p> (logochrono) nb Timer</p>
      <p className="sideRightLog__pfinish"> (logoreglage) nb 50/50</p>
    </div>
    <div className="sideRightLog__button">
      <button type="button">New Game</button>
    </div>
  </div>

);

export default SideRightLog;
