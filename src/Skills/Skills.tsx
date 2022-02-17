import React from "react";
import s from './Skills.module.scss'
import {Skill} from "./Skill";
import stylesContainer from "../common/styles/Container.module.scss";
import {Title} from "../common/components/Title/Title";
import react from "../assets/img/R.jpg";

export const Skills = () => {
    const text = [
        {id: 1, skill: "React", about: "Lorem ipsum quis.", style: {backgroundImage: `url(${react})`},},
        {id: 2, skill: "CSS", about: "Lorem quis.", style: {backgroundImage: `url(${''})`},},
        {
            id: 3,
            skill: "HTML",
            about: "vel veritatis vitae?",
            style: {backgroundImage: `url(${''})`},
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