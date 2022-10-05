import style from './item.module.scss'
import { 
    AiOutlineHeart,
    AiFillHeart,
    AiFillMinusCircle,
    AiFillPlusCircle,
} from 'react-icons/ai'
import { FaCartPlus} from 'react-icons/fa'
import { mudarFavorito } from 'store/reducers/itens'
import { useDispatch, useSelector } from 'react-redux'
import { mudarCarrinho, mudarQuantidade } from 'store/reducers/carrinho'
import classNames from 'classnames';

const iconeProps = {
    size: 24,
    color: '#041833'
}
const quantidadeProps = {
    size: 32,
    color: '#1875e8'
}
export default function Item(props) {
    const {
        id,
        title,
        foto,
        preco,
        descricao,
        favorito,
        carrinho,
        quantidade,
    } = props
    const Dispatch = useDispatch()
    const estaNoCarrinho = useSelector(state => state.carrinho.some(itemNoCarrinho => itemNoCarrinho.id === id))
    
    function mudarFav() {
        Dispatch(mudarFavorito(id))
    }

    function resolverCarrinho() {
        Dispatch(mudarCarrinho(id))
    }

    return(
        <div className={classNames(style.item, {[style.itemNoCarrinho]: carrinho,})}>
            <div className={style['item-imagem']}>
                <img src={foto} alt={title}/>
            </div>
            <div className={style['item-descricao']}>
                <div className={style['item-titulo']}>
                    <h2>{title}</h2>
                    <p>{descricao}</p>
                </div>
                <div className={style['item-info']}>
                    <div className={style['item-preco']}>
                        R$ {preco.toFixed(2)}
                    </div>
                    <div className={style['item-acoes']}>
                        {favorito
                            ? <AiFillHeart
                                {...iconeProps}
                                    color='#ff0000'
                                    className={style['item-acao']} 
                                    onClick={mudarFav}
                                />
                            : <AiOutlineHeart 
                                    {...iconeProps} 
                                    className={style['item-acao']} 
                                    onClick={mudarFav}
                                />
                        }
                        {carrinho
                         ? (
                            <div className={style.quantidade}>
                                Quantidade:
                                <AiFillMinusCircle 
                                    {...quantidadeProps} 
                                    onClick={() => {
                                        if(quantidade>=1) Dispatch(mudarQuantidade({id, quantidade: -1}))
                                    }}
                                />
                                <span>{String(quantidade).padStart(2)}</span>
                                <AiFillPlusCircle 
                                    {...quantidadeProps} 
                                    onClick={() => Dispatch(mudarQuantidade({id, quantidade: +1}))}
                                />
                            </div>
                         )
                         :(<FaCartPlus 
                                {...iconeProps} 
                                color={estaNoCarrinho ? '#1875e8' : iconeProps.color} 
                                className={style['item-acao']}
                                onClick={resolverCarrinho}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}