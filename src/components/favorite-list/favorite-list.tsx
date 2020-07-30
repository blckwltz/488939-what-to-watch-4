import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Movie} from '../../types/movie';
import {Operation as UserOperation} from '../../store/user/user';
import {getFavoriteList} from '../../store/user/selectors';
import {AppRoute} from '../../routing/route';
import UserBlock from '../user-block/user-block';
import MoviesList from '../movies-list/movies-list';

interface Props {
  favoriteList: Movie[];
  onLoad: () => void;
}

class FavoriteList extends PureComponent<Props> {
  constructor(props) {
    super(props);

    this._handleFavoriteListLoad = this._handleFavoriteListLoad.bind(this);
  }

  componentDidMount() {
    this._handleFavoriteListLoad();
  }

  _handleFavoriteListLoad() {
    const {onLoad} = this.props;

    onLoad();
  }

  render() {
    const {favoriteList} = this.props;

    if (!favoriteList) {
      return null;
    }

    return <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList movies={favoriteList}/>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2020 What to watch Ltd.</p>
        </div>
      </footer>
    </div>;
  }
}

const mapStateToProps = (state) => ({
  favoriteList: getFavoriteList(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad() {
    dispatch(UserOperation.loadFavoriteList());
  }
});

export {FavoriteList};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
