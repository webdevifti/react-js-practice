import React from "react";
import Home from "./Home";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Single from "./Single";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
function Navbar(){
    return(
        <Router>
            <header>
                <div className="logo">
                    <NavLink to="/">webdevifti</NavLink>
                </div>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink exact to="/services" activeClassName="active">Services</NavLink></li>
                    <li><NavLink exact to="/blog" activeClassName="active">Blog</NavLink></li>
                    <li><NavLink exact to="/contact" activeClassName="active">Contact</NavLink></li>
                    <button>Dark Mode</button>
                </ul>
            </header>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/single-post">
                    <Single />
                </Route>
            </Switch>
        </Router>
        
    );
}

export default Navbar;