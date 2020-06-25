import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

export default class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVideoPlaying: false,
    };
  }

  render() {
    const PLAYBACK_DELAY = 1000;
    const {movieInfo, onClick} = this.props;
    const {isVideoPlaying} = this.state;
    const {title, poster, previewSrc} = movieInfo;
    let timeout;

    return <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image" onMouseEnter={() => {
        timeout = setTimeout(() => {
          this.setState({
            isVideoPlaying: true,
          });
        }, PLAYBACK_DELAY);
      }} onMouseLeave={() => {
        clearTimeout(timeout);
        this.setState({
          isVideoPlaying: false,
        });
      }}>
        {isVideoPlaying ? <VideoPlayer isPlaying={isVideoPlaying} isMuted={true} isAutoplayEnabled={isVideoPlaying} src={previewSrc} poster={poster}/> : <img src={poster} alt={title} width="280" height="175" onClick={onClick}/>}
      </div>
      <h3 className="small-movie-card__title" onClick={onClick}>
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>;
  }
}

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewSrc: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
