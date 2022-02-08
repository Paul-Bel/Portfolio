import React from "react";
import s from './NavBar.module.scss'

export const NavBar = () => {


    return (
        <div className={s.nav}>
            <ul className={s.listMenu}>
                <li className={s.menuItem} ><a href="#1">Menu</a></li>
                <li className={s.menuItem}><a href="#2">Skills</a></li>
                <li className={s.menuItem}><a href="#3">Projects</a></li>
                <li className={s.menuItem}><a href="#4">Contacts</a></li>
            </ul>


        </div>

    )
}