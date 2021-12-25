import React from "react";
import {
    BrowserRouter as BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from "./Navbar";
import Alert from "./Alert";
import About from "./About";
import UserDetails from "./UserDetails";
import GithubState from "../context/githubState";
import AlertState from "../context/alertState";
import Home from "./Home";
import NotFound404 from "./NotFound404";

const App = () => {
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar />
                    <Alert />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/user/:login" component={UserDetails} />
                        <Route component={NotFound404} />
                    </Switch>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    );
};

export default App;
