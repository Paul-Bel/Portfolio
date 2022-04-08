import React from "react";
import s from './Button.module.scss'

type ButtonPropsType = { title: string, disabled?: boolean }
export const Button = (props: ButtonPropsType) => {
    let {title, disabled} = props
    // disabled && (title = 'wait')
    console.log("disabled", disabled)
    return <>
        {title !== "send"
            ?<a href={"#4"} className={s.button} type={"submit"}>{title}</a>
            :<button disabled={disabled}
                     className={!!disabled ? s.button+' '+s.disabled : s.button}
                     type={"submit"}>{title}</button>
        }
    </>
}

//s.button+' '+