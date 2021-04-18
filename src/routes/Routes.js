import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import InfoPage from '../pages/InfoPage/InfoPage';
import LoginPage from '../pages/LoginPage/LoginPage';

const Routes = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <Switch>
            <Route exact path = '/' render = {() => (isLoggedIn ? <Redirect to= "/info" /> : <LoginPage/>)}/>
            <Route exact path = '/info' render = {() => (isLoggedIn ? <InfoPage/> : <Redirect to= "/" />  )}/>
        </Switch>
    )
}
export default Routes;