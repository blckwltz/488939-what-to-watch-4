import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getTimeString} from '../../utils/utils.js';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._handleExitButtonClick = this._handleExitButtonClick.bind(this);
  }

  _handleExitButtonClick() {
    const {history} = this.props;

    history.goBack();
  }

  render() {
    const {children, movie, isPlaying, duration, progress, onPlaybackStatusChange, onFullScreenRequest} = this.props;

    if (!movie) {
      return null;
    }

    const {title} = movie;

    return <div className="player">
      {children}

      <button type="button" className="player__exit" onClick={this._handleExitButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration}/>
            <div className="player__toggler" style={{left: `${(progress / duration) * 100}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getTimeString(duration)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlaybackStatusChange}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}/>
            </svg>
            <span>{isPlaying ? `Pause` : `Play`}</span>
          </button>
          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen" onClick={onFullScreenRequest}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>;
  }
}

VideoPlayer.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string,
  }),
  duration: PropTypes.number,
  progress: PropTypes.number,
  isPlaying: PropTypes.bool,
  onPlaybackStatusChange: PropTypes.func,
  onFullScreenRequest: PropTypes.func,
};

export default VideoPlayer;
