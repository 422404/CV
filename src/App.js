import React from "react";
import {BrowserRouter, Route, Redirect, Switch, NavLink} from "react-router-dom";
import {Navbar, NavbarBrand, Nav, NavItem} from "reactstrap";
import Home from "./Home";
import Page404 from "./Page404";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar className="mb-4" color="dark" dark>
                <NavbarBrand href="/">Elyan Poujol</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink className="text-muted ml-3" activeClassName="navlink-current" to="/">Accueil</NavLink>
                        <NavLink className="text-muted ml-3" activeClassName="navlink-current" to="/projets">Projets</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projets" exact children={() => (
                    <p>Mes projets</p>
                )} />
                <Route path="/404" component={Page404} />
                <Redirect to="/404" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
