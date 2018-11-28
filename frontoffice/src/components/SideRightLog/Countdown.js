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
  componentDidUpdate(nextProps) {
    const { timer } = this.props;
    return timer.used !== nextProps.timer.used;
  }

  render() {
    const {
      timer,
      levelTimer,
      extraTimer,
      isQuizStart,
      setQuizStop,
    } = this.props;
    const timerUpdate = timer.used ? extraTimer : levelTimer;

    const countDownDisplay = ({ minutes, seconds, completed }) => {
      if (completed) {
        return <span className="logo__commentary">Finish!</span>;
      } else {
        return (
          <span>
            {minutes}:{seconds}
          </span>
        );
      }
    };
    return (
      <div className="sideRightLog__countdown">
        {isQuizStart && (
          <Countdown
            onComplete={setQuizStop}
            date={Date.now() + timerUpdate}
            renderer={countDownDisplay}
          />
        )}
      </div>
    );
  }
}

export default CountdownPure;
