import s from './My_works.module.css'

type WorkPropsType = { title: string, about: string }

export const My_work = (props: WorkPropsType) => {


    return (
        <div className={s.work}>
            <div className={s.img}>
                <img src="" alt="work"/>
                <button className={s.button}>looks</button>
            </div>
            <div className={s.about}>
                <h3>{props.title}</h3>
                <span> {props.about} </span>
            </div>
        </div>
    )
}