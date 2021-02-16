import React  from 'react';
import styles from './App.module.scss';
import { NavBar } from './components/nav-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { PopularPage } from './pages/popular';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <main className={styles.content}>
        <Router>
          <Switch>
            <Route exact={true} path={'/'} component={PopularPage}/>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
