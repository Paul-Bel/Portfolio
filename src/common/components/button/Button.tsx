import React from "react";
import s from './Button.module.scss'

type ButtonPropsType = { title: string, disabled?: string }
export const Button = (props: ButtonPropsType) => {
    let {title, disabled} = props
    // disabled && (title = 'wait')
    return <>
        {title !== "send"
            ?<a href={"#4"} className={s.button} type={"submit"}>{title}</a>
            :<button disabled={disabled === "disabled"}
                     className={disabled==='disabled'? s.button+' '+s.disabled : s.button}
                     type={"submit"}>{title}</button>
        }
    </>
}

//s.button+' '+