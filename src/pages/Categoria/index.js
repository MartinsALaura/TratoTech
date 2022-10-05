import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from './categoria.module.scss'
import Item from "components/item";

export default function Categoria() {
    const {nomeCategoria} = useParams()
    const {categoria, itens} = useSelector(state => {
        const regeexp = new RegExp(state.busca, 'i')
        return {
            categoria: state.categorias.find(categoria => categoria.id === nomeCategoria),
            itens: state.itens.filter(item => item.categoria === nomeCategoria && item.title.match(regeexp))
        }
    })

    return (
        <div>
            <Header
              title={categoria.nome}
              desc={categoria.desc}
              img={categoria.header}
            />
            <div className={style.itens}>
                {itens?.map(item => (
                    <Item key={item.id} {...item}/>
                ))}
            </div>
        </div>
    )
}