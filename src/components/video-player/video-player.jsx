import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._isMounted = false;
    this._videoRef = createRef();
    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {
    const {src, poster, isMuted, isAutoplayEnabled} = this.props;
    const video = this._videoRef.current;

    this._isMounted = true;
    video.src = src;
    video.poster = poster;
    video.muted = isMuted;
    video.autoplay = isAutoplayEnabled;

    video.oncanplaythrough = () => {
      this.setState({
        isLoading: false,
      });
    };

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.onpause = () => {
      this.setState({
        isPlaying: false,
      });
    };

    video.ontimeupdate = () => {
      this.setState({
        progress: video.currentTime
      });
    };

    // video.play()
    //   .then(() => {
    //     if (this._isMounted) {
    //       this.setState({
    //         isPlaying: true,
    //       });
    //     }
    //   });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    this._isMounted = false;
    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.src = ``;
  }

  render() {
    return <video width="280" height="175" ref={this._videoRef}/>;
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();
      return;
    }

    video.pause();
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isAutoplayEnabled: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
