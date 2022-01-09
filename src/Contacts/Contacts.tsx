import React from "react";
import stylesContainer from "../common/styles/Container.module.css";
import s from './Contacts.module.css'

export const Contacts = () => {

    return (
        <div className={s.block}>
            <div
                // className={`${stylesContainer.containerMain} ${s.blockContacts}`
                className={s.blockContact}
                >
                <div className={s.title}><h3>Contacts</h3></div>
                <div className={s.input}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" ></textarea>
                </div>



                <div className={s.button}>
                    <button>send</button>
                </div>
            </div>
        </div>
    )
}
