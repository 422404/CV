import React from "react";
import {Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler} from "reactstrap";
import {NavLink} from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggle = () => this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <Navbar className="mb-5 shadow" color="dark" expand="md" dark>
                <NavbarBrand href="/">Elyan Poujol</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link ml-3" activeClassName="navlink-current" to="/" exact>Accueil</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link ml-3" activeClassName="navlink-current" to="/projets" exact>Projets</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link ml-3" activeClassName="navlink-current" to="/hacking" exact>Hacking</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link ml-3" activeClassName="navlink-current" to="/contact" exact>Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
