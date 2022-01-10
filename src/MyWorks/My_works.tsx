import s from './My_works.module.css'
import stylesContainer from "../common/styles/Container.module.css";
import {useState} from "react";
import {My_work} from "./My_work";

export const My_works = () => {
    const [work, setWork] = useState([
        {id: 1, title: 'Todolist', about: 'project lorem'},
        {
            id: 1, title: 'Social Network', about: 'about project lorem about project lorem about project lorem\n' +
                '    about project lorem about project lorem about project lorem'
        },
    ])
    const works = work.map(el => {
        return (<My_work key={el.id} title={el.title} about={el.about}/>)
    })

    return (
        <div className={s.block}>
            <div className={`${stylesContainer.containerMain} ${s.header}`}>
                <div className={s.title}><h2>My works</h2></div>
                <div className={s.content}>
                    {works}
                </div>
            </div>
        </div>
    )
}