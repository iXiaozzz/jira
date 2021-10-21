import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import ProjectList from './screens/project-list'
import {LoginScreen} from './screens/login'

function App() {
    // fetch('/login').then(res=>{
    //     console.log(res);
    // })
    return (
        <div>
            {/*<ProjectList/>*/}
            <LoginScreen/>
        </div>
    );
}

export default App;
