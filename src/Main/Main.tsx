import React from "react";
import s from './Main.module.css'

export const Main = () => {


    return (
        <div className={s.main}>
            <div className={s.about}>
                <span>Hi There</span>
                <h1>I am Paul Beloborodov</h1>
                <span>frontend Developer</span>
            </div>
            <div className={s.photo}>Foto</div>
        </div>
    )
}