import React from "react";
import s from './Main.module.scss'
import stylesContainer from '../common/styles/Container.module.scss'
import foroPortfolio from '../assets/img/myFoto.jpg'
import {url} from "inspector";

export const Main = () => {
const fotoPortfolio = {backgroundImage: `url(${foroPortfolio})`}

    return (
        <div className={s.mainblock}>
            <div className={stylesContainer.containerMain}>
                <div className={s.about}>
                    <span className={s.text_about}>Hi There</span>
                    <h1 className={s.text_about}>I am Paul Beloborodov</h1>
                    <span className={s.text_about}>frontend Developer</span>
                </div>
                <div className={s.photo} style={fotoPortfolio}> </div>
            </div>

        </div>
    )
}