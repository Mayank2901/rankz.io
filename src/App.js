import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import routes from './routes'
import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map((route) => ( <Route {...route} /> ))
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;