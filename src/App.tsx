import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {My_works} from "./MyWorks/My_works";
import {Work_remotely} from "./common/Work_remotely/Work_remotely";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./common/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <My_works/>
            <Work_remotely/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
