import React from "react";
import s from './Main.module.css'
import stylesContainer from '../common/styles/Container.module.css'

export const Main = () => {


    return (
        <div className={s.mainblock}>

            <div className={stylesContainer.containerMain}>
                <div className={s.about}>
                    <span>Hi There</span>
                    <h1>I am Paul Beloborodov</h1>
                    <span>frontend Developer</span>
                </div>
                <div className={s.photo}>Foto</div>
            </div>

        </div>
    )
}