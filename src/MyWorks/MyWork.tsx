import s from './My_works.module.scss'

type WorkPropsType = { title: string, about: string, styleImg: any, project: string }

export const MyWork = (props: WorkPropsType) => {

    return (
        <div className={s.work}>
            <div className={s.img} style={props.styleImg}>
                {/*<a href={''}>click</a>*/}
                {/*<button >*/}
                    <a href={props.project} target={'_blank'} className={s.button}>looks</a>
                {/*</button>*/}
            </div>
            <div className={s.about}>
                <h3>{props.title}</h3>
                <span className={s.about_works}> {props.about} </span>
            </div>
        </div>
    )
}