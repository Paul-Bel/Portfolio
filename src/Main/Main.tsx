import React, {useEffect, useState} from "react";
import s from './Main.module.scss'
import stylesContainer from '../common/styles/Container.module.scss'
import foto from '../assets/img/myFoto.jpg'
import BackIMG from '../assets/img/Portfolio_startPage.gif'
import {Header} from "../Header/Header";

export const Main = () => {
    const [info, setInfo] = useState<string>('')
    const [refresh, setRefresh] = useState<string>('')
    const [count, setCount] = useState<number>(0)
    const [change, setChange] = useState(true)

    useEffect(() => {
        let intervalID = setInterval(() => {
            let a = "frontend developer ()=>({ TS, JS, React, Redux })          "
                if(change) {
                    if (info !== a) {
                        setInfo(info.concat(a[count]));
                        setCount(count + 1)
                    }
                    if (info.length === a.length) {
                        setRefresh(a)
                        setChange(false)
                    }
                }
                    if(!change) {
                    if (refresh.length !== 0) {
                        setRefresh(refresh.substring(0, (refresh.length-1)));
                        setCount(count - 1)
                    }
                    if (refresh.length === 0) {
                        setInfo('')
                        setChange(true)
                    }
            }

        }, 100)

        return () => {
            clearInterval(intervalID)
        }
    }, [info, count, refresh, change])

    return (
        <div className={s.mainblock} id={'1'}>
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
                        {change ? info : refresh}_
                    </span>
                </div>
                <div className={s.photo}>
                <div className={s.img}> </div>
                </div>
            </div>
        </div>
    )
}