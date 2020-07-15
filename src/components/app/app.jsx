import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderMainPage() {
    return <Main/>;
  }

  _renderMoviePage() {
    return <MoviePage/>;
  }

  render() {
    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderMainPage()}
        </Route>
        <Route exact path="/movie-page">
          {this._renderMoviePage()}
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = {};

export default App;
