import style from './TituloSemImg.module.scss'
export default function TituloSemImg ({ title, desc}) {
    return (
        <div className={style.container}>
            <h1 className={style.title}>
                {title}
            </h1>
            <h2 className={style.dec}>
                {desc}
            </h2>
        </div>
    )
}