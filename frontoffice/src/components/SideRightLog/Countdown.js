/**
 * NPM import
 */
import React from 'react';
import Countdown from 'react-countdown-now';
/**
 * Local import
 */
// Components

// Styles
import 'src/components/Icons/icons.scss';
import './SideRightLog.scss';

/**
 * Code
 */
class CountdownPure extends React.PureComponent {
  componentDidMount() {
    const { setCurrentTimer, currentTimer } = this.props;
    setInterval(() => {
      setCurrentTimer(1);
      console.log(currentTimer);
    }, 1000);
  }
  render() {
    const countDownDisplay = ({ minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <span className="logo__commentary">Finish!</span>;
      } else {
        // Render a countdown
        return (
          <span>
            {minutes}:{seconds}
          </span>
        );
      }
    };
    return (
      <span className="logo__commentary">
        <Countdown
          onComplete={console.log('fin du decompte')}
          date={Date.now() + 120000}
          renderer={countDownDisplay}
        />
      </span>
    );
  }
}

export default CountdownPure;
