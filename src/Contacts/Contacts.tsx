import React, {FormEvent, useEffect, useState} from "react";
import s from './Contacts.module.scss'
import {Title} from "../common/components/Title/Title";
import {Button} from "../common/components/button/Button";
import {Fade} from "react-awesome-reveal";
import axios from "axios";

export const Contacts = () => {
    const [disabled, setDisabled] = useState<boolean>(false)
    const [alertMesage, setAlertMessage] = useState<boolean>(true)
    const [count, setCount] = useState<number>(0|Number(localStorage.getItem('count')))
    const sendHandlet = (e: FormEvent<HTMLFormElement>) => {
        let formData = new FormData(e.currentTarget)
        let [name, email, message]: any = [formData.get("name"), formData.get("email"), formData.get("message")]
        let sends = Number(localStorage.getItem('count'))
        if (sends >= 2) return alert("You have already sent two messages, use the contacts below")
        if (name.length !== 0 && email.length !== 0 && message.length !== 0) {
            setDisabled(true)
            axios.post('https://my-smtp-server-nodejs-2022.herokuapp.com/sendMessage', {from: name, subject: email, text: message})
                .then(res => {
                    console.log((res.data))
                    setCount(count => count + 1)
                    localStorage.setItem('count', count.toLocaleString())
                })
                .catch(err => alert('try later'))
                .finally(() => setDisabled(false))
            e.preventDefault()
        }
    }
    useEffect(() => {
        if(count !== 0 && count < 3){
            setAlertMessage(false)
            var message = setInterval(() => {
                setAlertMessage(true)
            }, 8000)
        }
        else return () => {
            clearInterval(message)
        }
    },[count])

    return (
        <div className={s.block} id={"4"}>
            <div className={s.blockContact}>
                <div>
                    <Fade direction={"up"} triggerOnce={false} duration={1500}>
                        <Title title={"Contacts"}/>
                    </Fade>
                </div>
                {alertMesage && count <=2
                    ?<Fade direction={"left"} triggerOnce={false} duration={1500} className={s.inputBlock}>
                    <form className={s.input} onSubmit={sendHandlet}>
                        <input type="text" placeholder={"Name"} name={"name"}/>
                        <input type="text" placeholder={"E-mail"} name={"email"}/>
                        <textarea placeholder={"Your message"} name={"message"}/>
                        <Button disabled={disabled} title={'send'}/>
                    </form>
                </Fade>
                :<Fade direction={"top-left"} triggerOnce={false} duration={1500} className={s.inputBlock}
                      style={{border: "none"}}>
                    <div className={s.alert}>Thank you for your letter. I will definitely contact you.</div>
                </Fade>}
            </div>
        </div>
    )
}
