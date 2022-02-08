import React from "react";
import s from './Main.module.scss'
import stylesContainer from '../common/styles/Container.module.scss'
import foroPortfolio from '../assets/img/myFoto.jpg'

export const Main = () => {
const fotoPortfolio = {backgroundImage: `url(${foroPortfolio})`}

    return (
        <div className={s.mainblock} id={'1'}>
            <div className={stylesContainer.containerMain}>
                <div className={s.about}>
                    <span className={s.text_about}>Hi There</span>
                    <h1 className={s.text_h1}>I am
                        <span className={s.name}> Paul Beloborodov </span>
                    </h1>
                    <p/>
                    <span className={s.text_aboutSecond}>      frontend developer</span>
                </div>
                <div className={s.photo} style={fotoPortfolio}> </div>
            </div>
        </div>
    )
}