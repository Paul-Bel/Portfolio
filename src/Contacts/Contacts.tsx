import React from "react";
import s from './Contacts.module.scss'

export const Contacts = () => {

    return (
        <div className={s.block}>
            <div className={s.blockContact}>
                <div><h3>Contacts</h3></div>
                <form className={s.input}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea> </textarea>
                    <button type={"submit"}>send</button>
                </form>

                {/*<div className={s.button}>*/}
                {/*    */}
                {/*</div>*/}


            </div>
        </div>
    )
}
