import React, {useState} from "react";
import s from './Skills.module.css'
import {Skill} from "./Skill";
import stylesContainer from "../common/styles/Container.module.css";

export const Skills = () => {
const [text, setText] = useState([
    {id: 1, skill: "HTML", aboute: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quis."},
    {id: 2, skill: "CSS", aboute: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quis."},
    {id: 3, skill: "React", aboute: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae consectetur cupiditate deserunt earum, expedita fuga iste magnam nam, necessitatibus nemo neque nisi, optio provident sed tempore vel veritatis vitae?"},
])
    let skill = text.map(el => {
        return <Skill skill={el.skill} id={el.id} about={el.aboute}/>
    })
    return (
        <div className={s.skillBlock}>
            <div className={`${stylesContainer.containerMain} ${s.container}`}>
                <h2 className={s.header}>My skills</h2>
                <div className={s.skills}>
                    {skill}
                </div>
            </div>
        </div>
    )
}