import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Mainpage from './components/Mainpage/Mainpage';
import BooksPage from './components/BooksPage/BooksPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (<div>
    <Header />

      <Switch>
        <Route path="/books">
          <BooksPage />
        </Route>
        <Route path="/">
          <Mainpage />
        </Route>
      </Switch>

  </div>
  );
}

export default App;
