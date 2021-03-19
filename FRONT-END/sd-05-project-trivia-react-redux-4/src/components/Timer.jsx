import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGameTimer } from '../actions/gameActions';

class Timer extends Component {
  // https://www.w3schools.com/howto/howto_js_countdown.asp
  timerCountdown() {
    const { timer, updateTimer } = this.props;
    setTimeout(() => updateTimer(timer), 1000);
  }

  render() {
    const { timer } = this.props;
    return (
      <section>
        {this.timerCountdown()}
        <h3>{timer}</h3>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  timer: state.gameReducer.timer,
});

const mapDispatchToProps = {
  updateTimer: getGameTimer,
};

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
  updateTimer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
