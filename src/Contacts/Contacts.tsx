import React, {FormEvent, useEffect, useState} from "react";
import s from './Contacts.module.scss'
import {Title} from "../common/components/Title/Title";
import {Button} from "../common/components/button/Button";
import {Fade} from "react-awesome-reveal";
import axios from "axios";

type ChangeStatusType = 'disabled' | 'alert' | 'errorName' | 'errorEmail' | 'errorMessage' | ''

export const Contacts = () => {
    const [changeStatus, setChangeStatus] = useState<ChangeStatusType>('')
    const [count, setCount] = useState<number>(Number(localStorage.getItem('count')) | 0)
    const sendHandler = (e: FormEvent<HTMLFormElement>) => {
        let formData = new FormData(e.currentTarget)
        let [name, email, message]: any = [formData.get("name"), formData.get("email"), formData.get("message")]
        let sends = Number(localStorage.getItem('count'))
        if (sends > 1) return alert("You have already sent two messages, use the contacts below")
        if (name.length !== 0 && email.length !== 0 && message.length !== 0) {
            setChangeStatus('disabled')
            axios.post('https://my-smtp-server-nodejs-2022.herokuapp.com/sendMessage', {
                from: name,
                subject: email,
                text: message
            })
                .then(res => {
                    console.log((res.data))
                    setCount(count + 1)
                    localStorage.setItem('count', (count + 1).toLocaleString())
                })
                .catch(err => alert('try later'))
                .finally(() => setChangeStatus(''))
            e.preventDefault()
        } else {
            if(name.length === 0) {setChangeStatus('errorName')}
            if(email.length === 0) {setChangeStatus('errorEmail')}
            if(message.length === 0) {setChangeStatus('errorMessage')}
            e.preventDefault()
        }
    }
    const onChangeStatus = () => {
        setChangeStatus('')
    }
    useEffect(() => {
        if (count !== 0 && count < 2) {
            setChangeStatus('alert')
            var message = setInterval(() => {
                setChangeStatus('')
            }, 8000)
        } else return () => {
            clearInterval(message)
        }
    }, [count])
    return (
        <div className={s.block} id={"4"}>
            <div className={s.blockContact}>
                <div>
                    <Fade direction={"up"} triggerOnce={false} duration={1500}>
                        <Title title={"Contacts"}/>
                    </Fade>
                </div>
                {changeStatus !== 'alert' && count < 2
                    ? <Fade direction={"left"} triggerOnce={false} duration={1500} className={s.inputBlock}>
                        <form className={s.input} onSubmit={sendHandler}>
                            <input type="text" placeholder={"*Name"} name={"name"} onTouchEnd={onChangeStatus}
                                   className={changeStatus === 'errorName' ? s.errors : ''}/>
                            <input type="email" placeholder={"*Email"} name={"email"} onTouchEnd={onChangeStatus}
                                   className={changeStatus === 'errorEmail' ? s.errors : ''}/>
                            <textarea placeholder={"*Your message"} name={"message"} onTouchEnd={onChangeStatus}
                                      className={changeStatus === 'errorMessage' ? s.errors : ''}/>
                            <Button disabled={changeStatus} title={'send'}/>
                        </form>
                    </Fade>
                    : <Fade direction={"bottom-right"} triggerOnce={false} duration={1500} className={s.inputBlock}
                            style={{border: "none"}}>
                        <div className={s.alert} ><div>Thanks for your letter.</div>
                            <div onDoubleClick={()=>localStorage.setItem('count', '0')}>I will definitely contact you.</div>
                            </div>
                    </Fade>}
            </div>
        </div>
    )
}
