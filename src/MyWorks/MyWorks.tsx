import s from './My_works.module.scss'
import stylesContainer from "../common/styles/Container.module.scss";
import {MyWork} from "./MyWork";
import {Title} from "../common/components/Title/Title";
import TDIMG from '../assets/img/TDList.jpg'
import Social from '../assets/img/Social.jpg'

type WorkType = {
    id: number,
    title: string,
    about: string,
    divStyle: { backgroundImage: string },
    project: string
}
export const MyWorks = () => {

    const work: Array<WorkType> = [
        {
            id: 1,
            title: 'Todolist',
            about: 'project lorem',
            divStyle: {backgroundImage: `url(${TDIMG})`},
            project: 'https://paul-bel.github.io/TodoListForLearning/'
        },
        {
            id: 2,
            title: 'Social Network',
            about: 'about project lorem about project lorem about project lorem',
            divStyle: {backgroundImage: `url(${Social})`},
            project: '',
        },
    ]

    const works = work.map(el => {
        return (<MyWork key={el.id} project={el.project} title={el.title} about={el.about} styleImg={el.divStyle}/>)
    })

    return (
        <div className={s.block} id={'3'}>
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