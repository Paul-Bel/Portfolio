import React, {useEffect, useState} from "react";
import s from './Main.module.scss'
import stylesContainer from '../common/styles/Container.module.scss'
import foto from '../assets/img/myFoto.jpg'
import BackIMG from '../assets/img/Portfolio_startPage.gif'
import {Header} from "../Header/Header";

export const Main = () => {
    const photoPortfolio = {backgroundImage: `url(${foto})`}
    const fotoStartPage = {backgroundImage: `url(${BackIMG})`}
    const [info, setInfo] = useState<string>('')
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        let intervalID = setInterval(() => {

            let a = "frontend developer ()=>({ JS, React, Redux })   "
            if (info !== a) {
                setInfo(prevState => prevState.concat(a[count]));
                setCount(prevState => prevState + 1)
            }
            else setInfo('b')
            if(info === a) {setInfo(''); setCount(() => 0)}
        }, 250)

        return () => {
            clearInterval(intervalID)
        }
    }, [info, count])

    return (
        <div className={s.mainblock} id={'1'} style={fotoStartPage}>
            <Header/>
            <div className={stylesContainer.containerMain}>
                <div className={s.about}>
                    <span className={s.text_about}>Hi There</span>
                    <h1 className={s.text_h1}>I am
                        <span className={s.name}> Paul Beloborodov </span>
                    </h1>
                    <p/>
                    <span className={s.text_aboutSecond}>
                        {/*frontend developer*/}
                        {info}_
                    </span>
                </div>
                <div className={s.photo} style={photoPortfolio}> </div>
            </div>
        </div>
    )
}