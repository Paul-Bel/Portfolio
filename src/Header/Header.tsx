import React from "react";
import s from './Header.module.scss'
import {NavBar} from "../NavBar/NavBar";
import {Zoom} from "react-awesome-reveal";


export const Header = () => {


    return (
        <div className={s.header} >
            <Zoom>
                <NavBar />
            </Zoom>
        </div>
    )
}