import React from "react";
import s from './Skills.module.scss'
import {Skill} from "./Skill";
import stylesContainer from "../common/styles/Container.module.scss";
import {Title} from "../common/components/Title/Title";
import react from "../assets/img/React.png";
import TS from "../assets/img/TS.png";
import HTML from "../assets/img/HTML.jpg";
import Redux from "../assets/img/Redux.svg";
import CSS from "../assets/img/css.png";
import SCSS from "../assets/img/SCSS.png";
import JS from "../assets/img/js.png";
import MA from "../assets/img/MA.png";
import SB from "../assets/img/SB.svg";

export const Skills = () => {
    const text = [
        {id: 1, skill: "React", about: "Lorem ipsum quis.", style: {backgroundImage: `url(${react})`},},
        {id: 2, skill: "Redux", about: "Lorem ipsum quis.", style: {backgroundImage: `url(${Redux})`},},
        {id: 3, skill: "TypeScript", about: "Lorem quis.", style: {backgroundImage: `url(${JS})`},},
        {id: 3, skill: "JS", about: "Lorem quis.", style: {backgroundImage: `url(${TS})`},},
        {id: 4, skill: "HTML", about: "vel veritatis vitae?", style: {backgroundImage: `url(${HTML})`},},
        {id: 5, skill: "CSS", about: "vel veritatis vitae?", style: {backgroundImage: `url(${CSS})`},},
        {id: 5, skill: "SCSS", about: "vel veritatis vitae?", style: {backgroundImage: `url(${MA})`},},
        {id: 5, skill: "Material UI", about: "vel veritatis vitae?", style: {backgroundImage: `url(${SCSS})`},},
        {id: 5, skill: "Storybook", about: "vel veritatis vitae?", style: {backgroundImage: `url(${SB})`},},
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