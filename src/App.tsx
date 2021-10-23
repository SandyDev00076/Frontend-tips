import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GenreList from "components/GenreList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <GenreList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
