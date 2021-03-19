import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";

function App() {

    return (

            <Router>
                <Switch>
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Signup" component={Signup} />
                    <Route exact path="/Todo" component={Todo} />
                    <Redirect to="/Login" />
                </Switch>
            </Router>
    );
}

export default App;