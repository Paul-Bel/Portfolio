import React from "react";
import s from './Work_remotely.module.scss'
import {Title} from "../components/Title/Title";
import {Button} from "../components/button/Button";

export const WorkRemotely = () => {


    return (
        <div className={s.block}>
            <div className={s.container}>
                <div>
                    <Title title={"considering options for remote work"}/>
                </div>
                <div>
                    <Button title={'hire me'} />
                    {/*<button>hire me</button>*/}
                </div>


            </div>
        </div>
    )
}