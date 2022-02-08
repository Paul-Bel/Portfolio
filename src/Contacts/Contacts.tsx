import React from "react";
import s from './Contacts.module.scss'
import {Title} from "../common/components/Title/Title";

export const Contacts = () => {

    return (
        <div className={s.block}>
            <div className={s.blockContact}>
                <div><Title title={"Contacts"}/></div>
                <form className={s.input}>
                    <input type="text" placeholder={"Name"}/>
                    <input type="text" placeholder={"E-mail"}/>
                    <textarea placeholder={"Your message"}/>
                    <button type={"submit"}>send</button>
                </form>

                {/*<div className={s.button}>*/}
                {/*    */}
                {/*</div>*/}


            </div>
        </div>
    )
}
