import s from './My_works.module.scss'



type WorkPropsType = { title: string, about: string, styleImg: {backgroundImage: string}, project: string, img: string }

export const MyWork = (props: WorkPropsType) => {
    console.log(props.project)
    return (
        <div className={s.work}>
            <div className={s.img}
                 // onClick={href={}}
                 // style={props.styleImg}
            >
                <img src={props.img}
                     className={s.project}
                     alt=""/>
                <a href={props.project}
                   target={'_blank'}
                   // className={s.button}

                >looks</a>
            </div>
            <div className={s.about}>
                <h3>{props.title}</h3>
                <span className={s.about_works}> {props.about} </span>
            </div>
        </div>
    )
}