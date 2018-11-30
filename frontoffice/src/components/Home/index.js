/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Components
import Button from '../Button';
import Like from '../Icons/global/like';
import Layout from '../../containers/Layout';
import Login from '../../containers/Modal/Login';
import Subscribe from '../../containers/Modal/Subscribe';

// Styles
import './home.scss';

/**
 * Code
 */
class Home extends React.Component {
  componentDidMount() {
    const { loadHomeVisitor } = this.props;
    loadHomeVisitor();
  }
  render() {
    const {
      openLogin,
      openSubscribe,
      isLoginOpen,
      isSubscribeOpen,
      homeData,
    } = this.props;
    if (homeData.themes === undefined) return false;

    const themes = homeData.themes;
    const login = isLoginOpen ? <Login /> : null;
    const subscribe = isSubscribeOpen ? <Subscribe /> : null;

    return (
      <Layout layoutClass="home">
        <header className="home__header">
          <Button btnText="Connexion" onClick={openLogin} />
          <span>/</span>
          <Button btnText="Inscription" onClick={openSubscribe} />
        </header>
        <h1 className="home__title">Speedy Quiz</h1>
        <p className="home__paragraph">
          Testez-vous et mesurez-vous à la communauté de SpeedyQuizer
        </p>
        <Button btnClass="primary" btnText="commencer" onClick={openLogin} />
        <h2 className="home__subtitle">Quiz les plus populaires</h2>
        <div className="home__themes">
          {themes.map(theme => (
            <div key={theme.title} className="theme">
              <div className="theme__title">{theme.title}</div>
              <Like />
            </div>
          ))}
        </div>
        {login}
        {subscribe}
      </Layout>
    );
  }
}

Home.propTypes = {
  openLogin: PropTypes.func.isRequired,
  openSubscribe: PropTypes.func.isRequired,
  isLoginOpen: PropTypes.bool.isRequired,
  isSubscribeOpen: PropTypes.bool.isRequired,
};
/**
 * Export
 */
export default Home;
