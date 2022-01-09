import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {My_works} from "./MyWorks/My_works";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <My_works/>
        </div>
    );
}

export default App;
