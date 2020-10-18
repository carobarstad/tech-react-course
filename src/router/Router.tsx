import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../view/Home';
import CharacterDetails from '../components/CharacterDetails';
import Search from '../view/Search';
import './router.css';
import CharacterList from '../components/CharacterList';

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
          </ul>
        </nav>

        <Switch>
          <Route path="/characterList">
            <CharacterList />
          </Route>
          <Route path="/character/:id">
            <CharacterDetails />
          </Route>
          <Route exact Path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
