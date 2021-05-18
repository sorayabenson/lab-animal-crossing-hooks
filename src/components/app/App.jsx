import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Villagers from '../../containers/Villagers';
import Detail from '../../containers/Detail';
import './app.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route 
          path="/"
          exact
          render={(routerProps) => <Villagers {...routerProps}/>}/>

        <Route 
          path="/:id"
          render={(routerProps) => <Detail {...routerProps}/>}/>
      </Switch>
    </Router>
  );
}
