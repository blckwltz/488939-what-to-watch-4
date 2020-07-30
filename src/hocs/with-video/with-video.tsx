import React, {PureComponent, createRef, ComponentProps, RefObject} from 'react';
import {Subtract} from 'utility-types';
import {Movie} from '../../types/movie';

interface InjectingProps {
  isPlaying?: boolean;
  isMuted: boolean;
  isPreview: boolean;
  movie: Movie;
}

interface State {
  duration: number;
  progress: number;
  isLoading: boolean;
  isPlaying: boolean;
  isFullScreen: boolean;
}

interface VideoElement extends HTMLVideoElement {
  exitFullscreen: () => Promise<void>;
}

const withVideo = (Component) => {
  type P = ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithVideo extends PureComponent<T, State> {
    private readonly _videoRef: RefObject<VideoElement>;

    constructor(props) {
      super(props);

      this._videoRef = createRef();
      this.state = {
        duration: 0,
        progress: 0,
        isLoading: true,
        isPlaying: props.isPlaying || false,
        isFullScreen: false,
      };

      this._handleVideoMount = this._handleVideoMount.bind(this);
      this.handlePlaybackStatusChange = this.handlePlaybackStatusChange.bind(this);
      this.handleFullScreenRequest = this.handleFullScreenRequest.bind(this);
    }

    componentDidMount() {
      const {movie} = this.props;

      if (movie) {
        this._handleVideoMount();
      }
    }

    componentDidUpdate(prevProps) {
      const {movie: prevMovie} = prevProps;
      const video = this._videoRef.current;
      const {isPlaying} = this.state;

      if (!video) {
        return;
      }

      if (!prevMovie || !video.src) {
        this._handleVideoMount();
      }

      if (isPlaying) {
        video.play();
        return;
      }

      video.pause();
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      if (!video) {
        return;
      }

      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
      video.src = ``;
    }

    _handleVideoMount() {
      const {movie, isMuted, isPreview} = this.props;
      const {poster, previewSrc, videoSrc} = movie;
      const video = this._videoRef.current;

      if (!video) {
        return;
      }

      video.src = isPreview ? previewSrc : videoSrc;
      video.poster = poster;
      video.muted = isMuted;

      video.oncanplaythrough = () => {
        this.setState({
          isLoading: false,
          duration: Math.floor(video.duration),
        });
      };

      video.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      video.onpause = () => {
        video.load();
        this.setState({
          isPlaying: false,
        });
      };

      video.ontimeupdate = () => {
        this.setState({
          progress: Math.floor(video.currentTime),
        });
      };
    }

    handlePlaybackStatusChange() {
      const {isPlaying} = this.state;

      this.setState({
        isPlaying: !isPlaying
      });
    }

    handleFullScreenRequest() {
      const {isFullScreen} = this.state;
      const video = this._videoRef.current;

      if (isFullScreen) {
        video.exitFullscreen();
      } else {
        video.requestFullscreen();
      }

      this.setState({
        isFullScreen: !isFullScreen,
      });
    }

    render() {
      const {duration, progress, isLoading, isPlaying} = this.state;

      return <Component
        {...this.props}
        isLoading={isLoading}
        isPlaying={isPlaying}
        duration={duration}
        progress={progress}
        onPlaybackStatusChange={this.handlePlaybackStatusChange}
        onFullScreenRequest={this.handleFullScreenRequest}
      >
        <video className="player__video" width="280" height="175" ref={this._videoRef}/>
      </Component>;
    }
  }

  return WithVideo;
};

export default withVideo;
