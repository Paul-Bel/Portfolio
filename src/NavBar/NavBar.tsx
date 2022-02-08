import React from "react";
import s from './NavBar.module.scss'

export const NavBar = () => {


    return (
        <div className={s.nav}>
            <ul className={s.listMenu}>
                <li className={s.menuItem} ><a href="">Главная</a></li>
                <li className={s.menuItem}><a href="">Скилы</a></li>
                <li className={s.menuItem}><a href="">Проекты</a></li>
                <li className={s.menuItem}><a href="">Контакты</a></li>
            </ul>


        </div>

    )
}