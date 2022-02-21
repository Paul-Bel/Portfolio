import React, {useEffect, useState} from "react";
import s from './Main.module.scss'
import stylesContainer from '../common/styles/Container.module.scss'
import {Header} from "../Header/Header";

type stateType = [string, number, boolean]
export const Main = () => {
    const [info, setInfo] = useState<stateType>(['', 0, true])
    useEffect(() => {
        let intervalID = setInterval(() => {
            let a = "front-end developer ()=>({ TS, JS, React, Redux })          "
            if (info[2]) {
                if (info[0] !== a) {
                    let copyInfo: stateType = [info[0].concat(a[info[1]]), (1 + info[1]), true]
                    setInfo(copyInfo);
                }
                if (info[0].length === a.length) {
                    setInfo([info[0], 0, false])
                }
            }
            if (!info[2]) {
                if (info[0].length !== 0) {
                    let copyInfo: stateType = [info[0].substring(0, (info[0].length - 1)), 0, false]
                    setInfo(copyInfo);
                }
                if (info[0].length === 0) {
                    setInfo([info[0], 0, true])
                }
            }

        }, 150)
        return () => {
            clearInterval(intervalID)
        }
    }, [info])

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
                        {info[0]}|
                    </span>
                </div>
                <div className={s.photo}>
                    <div className={s.img}></div>
                </div>
            </div>
        </div>
    )
}