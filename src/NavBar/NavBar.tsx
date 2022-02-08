import React from "react";
import s from './NavBar.module.scss'

export const NavBar = () => {


    return (
        <div className={s.nav}>
            <ul className={s.listMenu}>
                <li className={s.menuItem} ><a href="#1">Главная</a></li>
                <li className={s.menuItem}><a href="#2">Скилы</a></li>
                <li className={s.menuItem}><a href="#3">Проекты</a></li>
                <li className={s.menuItem}><a href="#4">Контакты</a></li>
            </ul>


        </div>

    )
}