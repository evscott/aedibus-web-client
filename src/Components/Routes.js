import React from 'react';
import { Switch, Route } from "react-router-dom";
import LandingPage from "./Authentication/LandingPage";
import Dashboard from "./Dashboard/Dashboard";

// const AuthenticatedRoute = ({ component: Component, ...rest}) => {
//     return <Route
//         {...rest}
//         render={props => localStorage.getItem("token") ? <Component {...props}/> : <Redirect to={'/'}/>}
//     />
// };

export default () => (
    <Switch>
        <Route exact path={"/"} component={LandingPage}/>
        <Route exact path={"/home"} component={Dashboard}/>
    </Switch>
);