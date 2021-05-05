import {Redirect} from 'react-router-dom';
import {userContext} from '../components/userContext'
import React,{useContext} from 'react'

export const LogOut = ()=> {
    const {setLoggedUser,setLoggedAdmin,setLogout} = useContext(userContext)

    setLoggedAdmin(false);
    setLoggedUser(false);
    setLogout(true);
    localStorage.clear();

    return (
        <Redirect to={`/`} />
    );
}