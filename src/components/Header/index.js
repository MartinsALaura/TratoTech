import style from './Header.module.scss';
import TituloSemImg from './TituloSemImg'
import TituloComImg from './TituloComImg'

export default function Header({title, desc, className = '', img}) {
    return (
        <header className={style.header}>
            {title && !img && 
                <TituloSemImg/>
            }
            {title && img &&
                <TituloComImg/> 
            }
        </header>
    )
}