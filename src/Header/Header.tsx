import React from "react";
import s from './Header.module.scss'
import {NavBar} from "../NavBar/NavBar";

export const Header = () => {


    return (
        <div className={s.header} id={'1'}>
<NavBar/>
        </div>
    )
}