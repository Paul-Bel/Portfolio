import React, {useState} from "react";
import s from './Skills.module.css'
import {Skill} from "./Skill";
import stylesContainer from "../common/styles/Container.module.css";

export const Skills = () => {
    const [text, setText] = useState([
        {id: 1, skill: "HTML", about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quis."},
        {id: 2, skill: "CSS", about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quis."},
        {
            id: 3,
            skill: "React",
            about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae consectetur cupiditate deserunt earum, expedita fuga iste magnam nam, necessitatibus nemo neque nisi, optio provident sed tempore vel veritatis vitae?"
        },
    ])
    let skill = text.map(el => {
        return <Skill skill={el.skill} id={el.id} about={el.about}/>
    })
    return (
        <div className={s.skillBlock}>
            <div className={`${stylesContainer.containerMain} ${s.container}`}>
                <div className={s.skillItem}>
                <h2 className={s.header}>
                    My skills
                </h2>
                </div>
                <div className={s.skills}>
                    {skill}
                    {/*<Skill id={44} skill={'ffffref'} about={'refergregergergergegeg'}/>*/}
                    {/*<Skill id={44} skill={'ffffref'} about={'refergregergergergegeg'}/>*/}
                    {/*<Skill id={44} skill={'ffffref'} about={'refergregergergergegeg'}/>*/}
                </div>
            </div>
        </div>
    )
}