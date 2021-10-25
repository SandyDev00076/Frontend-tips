import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GenreList from "components/GenreList";
import GenrePage from "components/GenrePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/genre/:id">
          <GenrePage />
        </Route>
        <Route path="/" exact>
          <GenreList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
