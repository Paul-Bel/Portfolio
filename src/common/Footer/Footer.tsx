import React from "react";
import s from './Footer.module.css'

const squares = (a: number) => {
    let i = 0
    while ( i < a) {
        if (i % 2 === 0) {
            console.log('if')
            return <div className={s.squares}></div>
        } i++
        if (i % 2 === 1) {
            console.log('else')
            return <div className={s.square}></div>
        }
        i++
    }
}

export const Footer = () => {




return (
    <div className={s.footer}>
        <div>
            <h3>Pavel Beloborodov</h3>
            <div className={s.containerSqu}>
                {/*{squares(7)}*/}

            <div className={s.squares}></div>
            <div className={s.square}></div>
            <div className={s.squares}></div>
            <div className={s.square}></div>
            <div className={s.squares}></div>
            <div className={s.square}></div>
            <div className={s.squares}></div>
            <div className={s.square}></div>
            </div>
            <span>© 2022 Все права защищены</span>
        </div>
    </div>
)
}