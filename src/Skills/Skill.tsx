import React from "react";
import s from './Skills.module.scss'


type SkillTypeProps = {
    id: number,
    skill: string,
    about: string,
    style: { backgroundImage: string }
}
export const Skill = (props: SkillTypeProps) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <div className={s.iconBox}>
                    <i style={props.style} className={s.img}> </i>
                </div>
                <div className={s.aboutSkill}>
                    <h3>{props.skill}</h3>
                    <div className={s.inconeDesc}> </div>
                </div>


                {/*<span className={s.aboutSkill}>{props.about}</span>*/}

            </div>

        </div>
    )
}