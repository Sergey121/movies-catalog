import React from 'react';
import styles from './App.module.scss';
import { NavBar } from './components/nav-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { PopularPage } from './pages/popular';
import { MovieDetailsPage } from './pages/movie-details';
import { FavoritePage } from './pages/favorite';
import { WatchLaterPage } from './pages/watch-later';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar/>
        <main className={styles.content}>
          <Switch>
            <Route exact={true} path={'/'} component={PopularPage}/>
            <Route exact={true} path={'/movie/:id'} component={MovieDetailsPage}/>
            <Route exact={true} path={'/favorite'} component={FavoritePage}/>
            <Route exact={true} path={'/watch-later'} component={WatchLaterPage}/>
            <Redirect to={'/'}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
