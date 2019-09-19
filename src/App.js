import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
