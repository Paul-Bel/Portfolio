import React from "react";
import s from './Button.module.scss'

type ButtonPropsType = { title: string }
export const Button = (props: ButtonPropsType) => {
    const {title} = props
    return <>
        {title !== "send"
            ?<a href={"#4"} className={s.button} type={"submit"}>{title}</a>
            :<button className={s.button} type={"submit"}>{title}</button>
        }
    </>
}