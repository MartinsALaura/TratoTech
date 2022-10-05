import style from './TituloComImg.module.scss'
export default function TitulComImg ({
    title,
    desc,
    img,
    className
  }) {
    return (
        <div className={`${className} ${style.header}`}>
      <div className={style['header-texto']}>
        <h1>{title}</h1>
        <h2>{desc}</h2>
      </div>
      <div className={style['header-imagem']}>
        <img
          alt={title}
          src={img}
        />
      </div>
    </div>
    )
}