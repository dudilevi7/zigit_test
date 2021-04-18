import { Button } from '@material-ui/core';
import { PersonOutline } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../redux/auth/authActions';
import './Header.css';

const Header = () => {
    const name = useSelector(state=>state.auth.personalDetails.name)
    const dispatch = useDispatch();

    const onLogoutClick = () => {
        dispatch(setLogout())
    }

    return (<div className="headerContainer">
                <div className="helloMsg">
                    <PersonOutline fontSize="large" color="primary"/>
                    <strong className="hello">Hello , {name} </strong>
                </div>
                <Button variant="contained" color="primary" disableElevation onClick={onLogoutClick}>LOGOUT</Button>
            </div>)
}
export default Header