import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {MyWorks} from "./MyWorks/MyWorks";
import {WorkRemotely} from "./common/Work_remotely/WorkRemotely";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./common/Footer/Footer";
import {NavBar} from "./NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<NavBar/>*/}
            <Main/>
            <Skills/>
            <MyWorks/>
            <WorkRemotely/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
