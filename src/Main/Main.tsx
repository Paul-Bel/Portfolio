import React from "react";
import s from './Main.module.css'
import stylesContainer from '../common/styles/Container.module.scss'

export const Main = () => {


    return (
        <div className={s.mainblock}>

            <div className={stylesContainer.containerMain}>
                <div className={s.about}>
                    <span className={s.text_about}>Hi There</span>
                    <h1 className={s.text_about}>I am Paul Beloborodov</h1>
                    <span className={s.text_about}>frontend Developer</span>
                </div>
                <div className={s.photo}>Foto</div>
            </div>

        </div>
    )
}