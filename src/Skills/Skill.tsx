import React from "react";
import s from './Skills.module.css'

export const Skill = () => {

    return (
        <div className={s.containerSkill}>
            <div className={s.aboutSkill}>
                <div className={s.img}>
                    <div className={s.border}>image</div>
                </div>
                <div className={s.imgText}>React</div>
            </div>
            <div className={s.about}>about skill</div>
        </div>
    )
}