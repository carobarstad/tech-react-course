import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../view/Home';
import CharacterDetails from '../components/CharacterDetails';
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
          </ul>
        </nav>

        <Switch>
          {/* Oppgave 3. Sett inn en route til /character/:id */}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
