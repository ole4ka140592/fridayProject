import React from 'react';
import './App.css';
import {Navbar} from "./Navbar/Navbar";
import {Login} from "./Pages/Login";
import {Route} from "react-router-dom";
import {NewPassword} from "./Pages/NewPassword";
import {PasswordRecovery} from "./Pages/PasswordRecovery";
import {Profile} from "./Pages/Profile";
import {Registration} from "./Pages/Registration";
import {TestPage} from "./Pages/TestPage";
import {Error404} from "./Pages/Error404";
import {Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className='navbar'>
                <Navbar/>
            </div>
            <Routes>
                <Route path={'/login'} element={<Login/>} />
                <Route path={'/newPassword'}element={<NewPassword/>}/>
                <Route path={'/passwordRecovery'}element={<PasswordRecovery/>}/>
                <Route path={'/'} element={<Profile/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/testPage'} element={<TestPage/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>

        </div>
    );
}

export default App;
