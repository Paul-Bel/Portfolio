import React from "react";
import s from ".//Title.module.css";

type TitleTypeProps ={title: string}

export const Title = (props: TitleTypeProps) => {

    return <div className={s.title}>
        <h2>{props.title}</h2>
    </div>
}