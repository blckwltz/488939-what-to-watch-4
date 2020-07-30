import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Operation as MoviesOperation} from '../../store/movies/movies';

interface Props {
  id: number,
  isFavorite: boolean,
  onClick: (id: number, status: number) => void,
  onStatusChange: () => void,
}

class FavoriteButton extends PureComponent<Props> {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    const {id, onClick, isFavorite, onStatusChange} = this.props;
    const status = isFavorite ? 0 : 1;

    onClick(id, status);
    onStatusChange();
  }

  render() {
    const {isFavorite} = this.props;

    return <button className="btn btn--list movie-card__button" type="button" onClick={this._handleClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? `#in-list` : `#add`}/>
      </svg>
      <span>My list</span>
    </button>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClick(id, status) {
    dispatch(MoviesOperation.updateMovieStatus(id, status));
  },
});

export {FavoriteButton};
export default connect(null, mapDispatchToProps)(FavoriteButton);
