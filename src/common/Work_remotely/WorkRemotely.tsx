import React from "react";
import s from './Work_remotely.module.scss'
import {Title} from "../components/Title/Title";
import {Button} from "../components/button/Button";
import {Fade} from "react-awesome-reveal";

export const WorkRemotely = () => {
    return (
        <div className={s.block}>
            <div className={s.container}>
                <div>
                    <Fade direction={"up"} triggerOnce={false}>
                        <Title title={"considering options for remote work"}/>
                    </Fade>
                </div>
                <div>
                    <Fade direction={"up"} triggerOnce={false}>
                        <Button title={'hire me'}/>
                    </Fade>
                </div>
            </div>
        </div>
    )
}