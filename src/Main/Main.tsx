import React, {useEffect, useState} from "react";
import s from './Main.module.scss'
import stylesContainer from '../common/styles/Container.module.scss'
import foroPortfolio from '../assets/img/myFoto.jpg'

export const Main = () => {
    const fotoPortfolio = {backgroundImage: `url(${foroPortfolio})`}
    const [info, setInfo] = useState<string>('')
    const [count, setCount] = useState<number>(0)

    let c = 0
    let b = ''
    useEffect(() => {
        let intervalID = setInterval(() => {

            let a = "frontend developer..."
            if (info !== a) {
                setInfo(prevState => prevState.concat(a[count]));
                setCount(prevState => prevState + 1)
            }
            else setInfo(b)
            if(info === a) {setInfo(''); setCount(prevState => 0)}
        }, 300)

        return () => clearInterval(intervalID)
    }, [info, count])

    return (
        <div className={s.mainblock} id={'1'}>
            <div className={stylesContainer.containerMain}>
                <div className={s.about}>
                    <span className={s.text_about}>Hi There</span>
                    <h1 className={s.text_h1}>I am
                        <span className={s.name}> Paul Beloborodov </span>
                    </h1>
                    <p/>
                    <span className={s.text_aboutSecond}>
                        {/*frontend developer*/}
                        {info}
                    </span>
                </div>
                <div className={s.photo} style={fotoPortfolio}></div>
            </div>
        </div>
    )
}