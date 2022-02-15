import React from "react";
import s from './Contacts.module.scss'
import {Title} from "../common/components/Title/Title";
import {Button} from "../common/components/button/Button";

export const Contacts = () => {

    return (
        <div className={s.block} id={"4"}>
            <div className={s.blockContact}>
                <div><Title title={"Contacts"}/></div>
                <form className={s.input}>
                    <input type="text" placeholder={"Name"}/>
                    <input type="text" placeholder={"E-mail"}/>
                    <textarea placeholder={"Your message"}/>
                    <Button title={'send'}/>
                    {/*<button type={"submit"}>send</button>*/}
                </form>

                {/*<div className={s.button}>*/}
                {/*    */}
                {/*</div>*/}


            </div>
        </div>
    )
}
