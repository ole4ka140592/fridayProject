import React from "react";
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <nav>
            <div><NavLink to={'/'}>Profile</NavLink></div>
            <div><NavLink to={'/login'}>Login</NavLink></div>
            <div><NavLink to={'/newPassword'}>NewPassword</NavLink></div>
            <div><NavLink to={'/passwordRecovery'}>PasswordRecovery</NavLink></div>
            <div><NavLink to={'/registration'}>Registration</NavLink></div>
            <div><NavLink to={'/testPage'}>TestPage</NavLink></div>
            <div><NavLink to={'/error404'}>Error404</NavLink></div>
        </nav>
    )
}