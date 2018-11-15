import React from 'react';
import Disconnect from 'src/components/Icons/nav/disconnect';
import Faq from 'src/components/Icons/nav/faq';
import Home from 'src/components/Icons/nav/home';
import Infos from 'src/components/Icons/nav/infos';
import Podium from 'src/components/Icons/nav/podium';
import Socials from 'src/components/Icons/nav/socials';
import Profil from 'src/components/Icons/nav/profil';
import 'src/components/SideDrawer/DrawerToggleButton.scss';
import './nav.scss';
import 'src/components/Icons/icons.scss';

const Nav = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__navigation-items">
        <ul>
          <li><a href="#"><Home /></a></li>
          <li><a href="#"><Podium /></a></li>
          <li><a href="#"><Faq /></a></li>
          <li><a href="#"><Profil /></a></li>
          <li><a href="#"><Disconnect /></a></li>
        </ul>
      </div>
      <div className="toolbar__navigation-items">
        <ul>
          <li><a href="#"><Socials /></a></li>
          <li><a href="#"><Infos /></a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Nav;
