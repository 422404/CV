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
            <div className="text-light bg-dark min-vh-100">
                <Navbar className="mb-5 shadow" color="dark" dark>
                    <NavbarBrand href="/">Elyan Poujol</NavbarBrand>
                    <Nav className="mr-auto navbar-expand-sm" navbar>
                        <NavItem>
                            <NavLink className="nav-link ml-3" activeClassName="navlink-current" to="/" exact>Accueil</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link ml-3" activeClassName="navlink-current" to="/projets" exact>Projets</NavLink>
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
            </div>
        </BrowserRouter>
    );
}

export default App;
