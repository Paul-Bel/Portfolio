import React from "react";
import s from './Button.module.scss'
import l from './loader.module.css'

type ButtonPropsType = { title: string, disabled?: string }
export const Button = (props: ButtonPropsType) => {
    let {title, disabled} = props
    return <>
        {title !== "send"
            ?<a href={"#4"} className={s.button} type={"submit"}>{title}</a>
            :<><button disabled={disabled === "disabled"}
                     className={disabled==='disabled'? s.button+' '+s.disabled: s.button}
                     type={"submit"}> {title}</button>
                {disabled==='disabled' && <div className={l.loader}/>}
            </>
        }
    </>
}

//s.button+' '+