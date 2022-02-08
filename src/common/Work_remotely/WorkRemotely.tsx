import React from "react";
import s from './Work_remotely.module.scss'
import {Title} from "../components/Title/Title";

export const WorkRemotely = () => {


    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.title}>
                    <Title title={"considering options for remote work"}/>
                </div>
                <div className={s.click}>
                    <button>hire me</button>
                </div>


            </div>
        </div>
    )
}