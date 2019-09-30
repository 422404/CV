import React from "react";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import Home from "./Home";
import MyProjects from "./MyProjects";
import Hacking from "./Hacking";
import Header from "./Header";
import Contact from "./Contact";
import Page404 from "./Page404";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="text-light bg-dark min-vh-100">
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projets" exact component={MyProjects} />
                    <Route path="/hacking" exact component={Hacking} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/404" component={Page404} />
                    <Redirect to="/404" />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
