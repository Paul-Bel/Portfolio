import React from "react";
import s from './Footer.module.scss'
import IN from '../../assets/img/forLinks/linkedIn.png'
import HH from '../../assets/img/forLinks/HeadHunter_logo.png'
import Tel from '../../assets/img/forLinks/telegram.svg'
import GH from '../../assets/img/forLinks/GH.png'
import {AttentionSeeker} from "react-awesome-reveal";

const links = [
    {id: 1, profilePage: 'Linkedin', link: 'https://www.linkedin.com/in/paul-beloborodov-b9812921a/', style: `${IN}`},
    {
        id: 2,
        profilePage: 'HH',
        link: 'https://voronezh.hh.ru/resume/a681457aff0987bd6a0039ed1f7a5566476c4c',
        style: `${HH}`
    },
    {id: 3, profilePage: 'Telegram', link: 'https://t.me/Bel_Paul', style: `${Tel}`},
    {id: 4, profilePage: 'GitHub', link: 'https://github.com/Paul-Bel', style: `${GH}`},
    // {id: 5, profilePage: 'CV', link: '', style: 'string' },
]


export const Footer = () => {

    const linksContact = links.map((m) => {
        return <div key={m.id + m.profilePage} className={s.contactMe}>
            <img className={s.square} src={m.style}
                 alt={m.profilePage}/>
            <a className={s.squares} href={m.link} target={'_blank'}/>
                </div>
    })

    return (
        <div className={s.footer}>
            <AttentionSeeker effect={"bounce"} triggerOnce={false} duration={1500}>
                <div>
                    <h3>Paul Beloborodov</h3>
                    <div className={s.containerSqu}>
                        {linksContact}
                    </div>
                    <span>© 2022 Все права защищены</span>
                </div>
            </AttentionSeeker>
        </div>
    )
}