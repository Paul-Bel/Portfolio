import React from "react";
import s from './NavBar.module.scss'
import {Link} from "react-scroll";

export const NavBar = () => {


    return (
        <div className={s.nav} >
            {/*<ul className={s.listMenu}>*/}
            {/*    <li className={s.menuItem} ><a href="#1">Home</a></li>*/}
            {/*    <li className={s.menuItem}><a href="#2">Skills</a></li>*/}
            {/*    <li className={s.menuItem}><a href="#3">Projects</a></li>*/}
            {/*    <li className={s.menuItem}><a href="#4">Contacts</a></li>*/}
            {/*</ul>*/}
            <ul className={s.listMenu} >
                <li className={s.menuItem}><Link activeClass={s.active} spy={true} to="1" duration={1500} smooth={true}>About</Link></li>
                <li className={s.menuItem}><Link activeClass={s.active} spy={true} to="2" duration={1500} smooth={true}>Skills</Link></li>
                <li className={s.menuItem}><Link activeClass={s.active} spy={true} to="3" duration={1500}  smooth={true}>Projects</Link></li>
                <li className={s.menuItem}><Link activeClass={s.active} spy={true} to="4" duration={1500}  smooth={true}>Contacts</Link></li>
            </ul>

        </div>

    )
}