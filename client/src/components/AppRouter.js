import React, {useContext} from 'react';
import {Routes, Router, Route, Navigate} from 'react-router-dom'

import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)

    console.log(user)
    return (
      <Router>
       <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Navigate to={SHOP_ROUTE}/>
            </Routes>
        </Router>
    );
});

export default AppRouter;
