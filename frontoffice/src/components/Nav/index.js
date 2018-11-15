import React from 'react';
import 'src/components/SideDrawer/DrawerToggleButton.scss';

import './nav.scss';

const Nav = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__navigation-items">
        <ul>
          <li><a href="#">Logo1</a></li>
          <li><a href="#">Logo2</a></li>
          <li><a href="#">Logo3</a></li>
          <li><a href="#">Logo4</a></li>
        </ul>
      </div>
      <div className="toolbar__navigation-items">
        <ul>
          <li><a href="#">Logo5</a></li>
          <li><a href="#">Logo6</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Nav;
