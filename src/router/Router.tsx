import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../view/Home';
import CharacterDetails from '../view/CharacterDetails';
import Search from '../view/Search';
import './router.css';

export default function Router() {
  return (
    <BrowserRouter>
      <div className="router">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characterList">Character List</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/characterList">
            <CharacterDetails />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route exact Path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
