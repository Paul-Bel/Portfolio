import s from './My_works.module.css'
import stylesContainer from "../common/styles/Container.module.css";
import {MyWork} from "./MyWork";
import {Title} from "../common/components/Title/Title";
import TDIMG from '../assets/img/Todolist.jpg'
import Social from '../assets/img/Social.jpg'

export const MyWorks = () => {

    const work = [
        {id: 1, title: 'Todolist', about: 'project lorem', divStyle: {backgroundImage: `url(${TDIMG})`}},
        {id: 2, title: 'Social Network', about: 'about project lorem about project lorem about project lorem\n' +
                '    about project lorem about project lorem about project lorem', divStyle: {backgroundImage: `url(${Social})`}},
    ]

    const works = work.map(el => {
        return (<MyWork key={el.id} title={el.title} about={el.about} styleImg={el.divStyle}/>)
    })

    return (
        <div className={s.block}>
            <div className={`${stylesContainer.containerMain} ${s.header}`}>
                <Title title={"My Works"}/>
                {/*<div className={s.title}>*/}
                {/*    <h2>My works</h2>*/}
                {/*</div>*/}
                <div className={s.content}>
                    {works}
                </div>
            </div>
        </div>
    )
}