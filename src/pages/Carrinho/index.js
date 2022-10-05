import Header from 'components/Header'
import style from './carrinho.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import Item from 'components/item';
import { resetarCarrinho } from 'store/reducers/carrinho';
export default function Carrinho(){
    const dispatch = useDispatch();
    const {carrinho, total} = useSelector(state => {
        let total = 0
        const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
           const regexp = new RegExp(state.busca, 'i')
            const item = state.itens.find(item => item.id === itemNoCarrinho.id)
            total += item.preco * itemNoCarrinho.quantidade
            if(item.title.match(regexp)) {
                itens.push({
                    ...item,
                    quantidade: itemNoCarrinho.quantidade
                })
            }
            return itens
        }, [])
        return {
            carrinho: carrinhoReduce, 
            total,
        }
    })
    return (
        <div>
            <Header
                title='Carrinho de Compras'
                desc='Confira produtos que você adicionou ao carrinho.'
            />
            <div className={style.carrinho}>
                {carrinho.map(item => <Item key={item.id} {...item} carrinho/>)}
                <div className={style.total}>
                    <strong>
                        Resumo da Compra
                    </strong>
                    <span>
                        Subtotal: <strong> R$ {total.toFixed(2)}</strong>
                    </span>
                </div>
                <button className={style.finalizar} onClick={() => dispatch(resetarCarrinho())}>
                    Finalizar Compra
                </button>
            </div>
        </div>
    )
}