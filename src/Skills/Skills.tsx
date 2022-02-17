import React from "react";
import s from './Skills.module.scss'
import {Skill} from "./Skill";
import stylesContainer from "../common/styles/Container.module.scss";
import {Title} from "../common/components/Title/Title";
import react from "../assets/img/React.png";
import TS from "../assets/img/TS.png";
import JSand from "../assets/img/HTML_and.png";

export const Skills = () => {
    const text = [
        {id: 1, skill: "React/Redux", about: "Lorem ipsum quis.", style: {backgroundImage: `url(${react})`},},
        {id: 2, skill: "TypeScript", about: "Lorem quis.", style: {backgroundImage: `url(${TS})`},},
        {
            id: 3,
            skill: "JS, HTML, CSS",
            about: "vel veritatis vitae?",
            style: {backgroundImage: `url(${JSand})`},
        },
    ]
    let skill = text.map(el => {
        return <Skill style={el.style} skill={el.skill} id={el.id} about={el.about}/>
    })
    return (
        <div className={s.skillBlock} id={'2'} >
            <div className={`${stylesContainer.containerMain} ${s.container}`}>
                <div className={s.skillItem}>
                <Title title={'Skils'}/>
                </div>
                <div className={s.skills}>
                    {skill}
                </div>
            </div>
        </div>
    )
}