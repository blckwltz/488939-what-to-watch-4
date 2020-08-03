import React, {PureComponent, createRef, ReactNode, RefObject} from 'react';
import {Movie} from '../../types/movie';
import {getTimeString} from '../../utils/utils';

interface Props {
  history: {
    goBack: () => void;
  };
  children: ReactNode | ReactNode[];
  movie: Movie;
  duration: number;
  progress: number;
  isPlaying: boolean;
  onPlaybackStatusChange: () => void;
}

class VideoPlayer extends PureComponent<Props> {
  private readonly _playerRef: RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);

    this._playerRef = createRef();
    this._handleFullScreenRequest = this._handleFullScreenRequest.bind(this);
    this._handleExitButtonClick = this._handleExitButtonClick.bind(this);
  }

  _handleFullScreenRequest() {
    const player = this._playerRef.current;

    player.requestFullscreen();
  }

  _handleExitButtonClick() {
    const {history} = this.props;

    history.goBack();
  }

  render() {
    const {children, movie, isPlaying, duration, progress, onPlaybackStatusChange} = this.props;

    if (!movie) {
      return null;
    }

    const {title} = movie;

    return <div className="player" ref={this._playerRef}>
      {children}

      <button type="button" className="player__exit" onClick={this._handleExitButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration}/>
            <div className="player__toggler" style={{left: `${(progress / duration) * 100}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getTimeString(duration - progress)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlaybackStatusChange}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}/>
            </svg>
            <span>{isPlaying ? `Pause` : `Play`}</span>
          </button>
          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen" onClick={this._handleFullScreenRequest}>
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

export default VideoPlayer;
