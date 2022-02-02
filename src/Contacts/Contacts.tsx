import React from "react";
import s from './Contacts.module.css'

export const Contacts = () => {

    return (
        <div className={s.block}>
            <div
                // className={`${stylesContainer.containerMain} ${s.blockContacts}`
                className={s.blockContact}
                >
                <div className={s.title}><h3>Contacts</h3></div>
                <form className={s.input}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" ></textarea>
                    <button type={"submit"}>send</button>
                </form>

                {/*<div className={s.button}>*/}
                {/*    */}
                {/*</div>*/}


            </div>
        </div>
    )
}
