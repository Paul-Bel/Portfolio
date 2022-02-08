import React from "react";
import s from './Footer.module.scss'


export const Footer = () => {
    const squares = (a: number) => {
        let i = 0
        let arr: Array<any> = []
        while (i < a) {
            if (i % 2 === 0) {
                arr = [...arr, <div className={s.squares}> </div>]}
            i++
            if (i % 2 === 1) {
                arr = [...arr, <div className={s.square}> </div>]}
            i++
        }
        return arr
    }
    return (
        <div className={s.footer}>
            <div>
                <h3>Pavel Beloborodov</h3>
                <div className={s.containerSqu}>
                    {squares(7)}
                </div>
                <span>© 2022 Все права защищены</span>
            </div>
        </div>
    )
}