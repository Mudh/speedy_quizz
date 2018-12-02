/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Components
import Disconnect from 'src/components/Icons/nav/disconnect';
import Faq from 'src/components/Icons/nav/faq';
import Home from 'src/components/Icons/nav/home';
import Infos from 'src/components/Icons/nav/infos';
import Podium from 'src/components/Icons/nav/podium';
import Socials from 'src/components/Icons/nav/socials';
import Profil from 'src/components/Icons/nav/profil';

import './nav.scss';

const Nav = ({ isAuthenticated, onClickDisconnect }) => {
  const active = false;
  return (
    <aside className="toolbar">
      <nav className="toolbar__navigation">
        <ul className="toolbar__navigation-top">
          <li>
            <NavLink exact to="/" activeClassName="selected">
              <Home active={active} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/classement" activeClassName="selected">
              <Podium active={active} />
            </NavLink>
          </li>
          {isAuthenticated && (
            <li>
              <NavLink to="/profil" activeClassName="selected">
                <Profil active={active} />
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="/faq" activeClassName="selected">
              <Faq active={active} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/cgu" activeClassName="selected">
              <Infos />
            </NavLink>
          </li>
          {isAuthenticated && (
            <li onClick={onClickDisconnect}>
              <span>
                <Disconnect />
              </span>
            </li>
          )}
        </ul>
        <ul className="toolbar__navigation-bottom">
          {/* <li>
            <a href="#">
              <Socials />
            </a>
          </li> */}
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;
