import React from 'react';
import './SideRightLog.scss';

const SideRightLog = props => (
  <div className="SideRightLog__container">
    <h2>Bonjour Marco</h2>
    <p> (logoengrenage) nb partie/s</p>
    <p className="SideRightLog__container__p1"> (logoetoile) nb partie/s</p>
    <p> (logoporte) nb Skip</p>
    <p> (logocoeur) nb Revive</p>
    <p> (logochrono) nb Timer</p>
    <p className="SideRightLog__container__p1"> (logoreglage) nb 50/50</p>
    <div className="SideRightLog__button">
    <button type="button">New Game</button>
  </div>
  </div>

);

export default SideRightLog;
