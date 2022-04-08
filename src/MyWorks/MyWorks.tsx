import s from './My_works.module.scss'
import stylesContainer from "../common/styles/Container.module.scss";
import {MyWork} from "./MyWork";
import {Title} from "../common/components/Title/Title";
import TDIMG from '../assets/img/TDList.jpg'
import Social from '../assets/img/Social.jpg'
import Dis from '../assets/img/Dispex.jpg'
import Cont from '../assets/img/Cont.jpg'
import {Fade} from "react-awesome-reveal";
import React from "react";


type WorkType = {
    id: number,
    title: string,
    about: string,
    divStyle: { backgroundImage: string },
    project: string
    img: string
}
export const MyWorks = () => {

    const work: Array<WorkType> = [
        {
            id: 1,
            title: 'Todolist',
            about: 'The list of cases stored on the server, with the functionality of authorization, filtering, adding / deleting.',
            divStyle: {backgroundImage: `url(${TDIMG})`},
            project: 'https://paul-bel.github.io/TodoListForLearning/#/login',
            img: `${TDIMG}`,
        },
        {
            id: 2,
            title: 'Social Network',
            about: ' Using TypeScript for best code control; Reusable components development; Refactoring, bug fixing, deploying; Organizing correct app architecture',
            divStyle: {backgroundImage: `url(${Social})`},
            project: 'https://paul-bel.github.io/SocialNetworkPrototype/',
            img: `${Social}`,
        }, {
            id: 3,
            title: 'Contacts',
            about: 'Application for creating and displaying contacts. Implemented using mock server and sessionStorage instead of cookies',
            divStyle: {backgroundImage: `url(${Cont})`},
            project: 'https://paul-bel.github.io/Contacts/#/login',
            img: `${Cont}`,
        }, {
            id: 4,
            title: 'Dispex',
            about: 'Not a large test project using data from the server of the managing organization',
            divStyle: {backgroundImage: `url(${Dis})`},
            project: 'https://paul-bel.github.io/TestCaseDispex/',
            img: `${Dis}`,
        },
    ]

    const works = work.map(el => {
        return (<MyWork key={el.id} img={el.img} project={el.project} title={el.title} about={el.about}
                        styleImg={el.divStyle}/>)
    })

    return (
        <div className={s.block} id={'3'}>
            <div className={`${stylesContainer.containerMain} ${s.header}`}>
                <Fade direction={"up"} triggerOnce={false} duration={1500}>
                    <Title title={"My Works"}/>
                </Fade>
                <div className={s.content}>
                    <Fade direction={"up"} triggerOnce={false} duration={1500}>
                        {works}
                    </Fade>

                </div>

            </div>
        </div>
    )
}