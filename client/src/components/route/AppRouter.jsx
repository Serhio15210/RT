import {Redirect, Route, Router, Switch} from "react-router-dom";
import React, {useContext} from "react";
import {AuthContext} from "../../context";
import {privateRoutes, publicRoutes} from "./index";
import Loader from "../../UI/Loader/Loader";


const AppRouter = () => {

    const {isAuth, setIsAuth, isLoading, isSignUp,user} = useContext(AuthContext)

    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route component={route.component} path={route.path} exact={route.exact} key={route.path}/>
                )}
                  <Redirect to={'/home'}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route component={route.component} path={route.path} exact={route.exact} key={route.path}/>
                )}
                <Redirect to="/enter"/>

            </Switch>

    );
};

export default AppRouter;