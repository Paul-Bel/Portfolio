import React from "react";
import s from './Skills.module.scss'


type SkillTypeProps = {
    id: number,
    skill: string,
    about: string,
    style: {backgroundImage: string}
}
export const Skill = (props: SkillTypeProps) => {
    return (
        <div className={s.skill}>
            <div className={s.icon} style={props.style}>pages</div>
            <div className={s.about} >
                <h3>{props.skill}</h3>

                {/*<span className={s.aboutSkill}>{props.about}</span>*/}

            </div>

        </div>
    )
}