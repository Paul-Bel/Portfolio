import React from "react";
import s from './Skills.module.css'


type SkillTypeProps = {
    id: number,
    skill: string,
    about: string,
}
export const Skill = (props: SkillTypeProps) => {

    return (
        <div className={s.skill}>

            <div className={s.icon}>pages</div>

            <div className={s.about}>
                <h3>{props.skill}</h3>
                <span className={s.aboutSkill}>{props.about}</span>
            </div>

        </div>
    )
}