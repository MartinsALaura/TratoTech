import Header from "components/Header";
import style from './Home.module.scss'
import  relogio from '../../assets/inicial.png'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home () {
    const categorias = useSelector(state => {
        const regeexp = new RegExp(state.busca, 'i')
        return state.categorias.filter(categoria =>  categoria.nome.match(regeexp))
    
    })
    const navigate = useNavigate()
    return (
        <div>
            <Header
              title='Classificados Tech'
              desc='Compre diversos tipos de produtos no melhor site do Brasil!'
              className={style.header}
              img={relogio}
            />
            <div className={style.categorias}>
                <div className={style['categorias-title']}>
                    <h1>Categorias</h1>
                </div>
                <div className={style['categorias-container']}>    
                    {categorias.map((categoria, index) => {
                        
                        return (
                            
                            <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
                                <img src={categoria.thumbnail} alt={categoria.nome}/>
                                <h1>{categoria.nome}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}