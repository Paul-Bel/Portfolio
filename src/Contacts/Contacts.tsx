import React from "react";
import s from './Contacts.module.scss'
import {Title} from "../common/components/Title/Title";
import {Button} from "../common/components/button/Button";
import {Fade} from "react-awesome-reveal";

export const Contacts = () => {

    return (
        <div className={s.block} id={"4"}>
            <div className={s.blockContact}>
                <div>
                    <Fade direction={"up"} triggerOnce={false} duration={1500}>
                        <Title title={"Contacts"}/>
                    </Fade>
                </div>
                <form className={s.input}>
                    <input type="text" placeholder={"Name"}/>
                    <input type="text" placeholder={"E-mail"}/>
                    <textarea placeholder={"Your message"}/>
                    <Button title={'send'}/>
                    {/*<button type={"submit"}>send</button>*/}
                </form>
            </div>
        </div>
    )
}
