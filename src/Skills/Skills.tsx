import React from "react";
import s from './Skills.module.css'
import {Skill} from "./Skill";
import stylesContainer from "../common/styles/Container.module.css";

export const Skills = () => {

    return (
        <div className={s.skillBlock}>
            <div className={`${stylesContainer.containerMain} ${s.container}`}>
                <h2 className={s.header}>My skills</h2>
                <div className={s.skills}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>

                </div>

            </div>
        </div>
    )
}