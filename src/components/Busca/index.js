import style from './Busca.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { mudarBusca, resetarBusca } from 'store/reducers/busca'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export default function Busca() {
    const busca = useSelector(state => state.busca)
    const Dispatch = useDispatch()
    const location = useLocation()
    useEffect(() => {
        Dispatch(resetarBusca)
    },[location.pathname, Dispatch])
    return (
        <div className={style.busca}>
            <input 
              className={style.input}
              placeholder='O que você procura?'
              value={busca}
              onChange={e => Dispatch(mudarBusca(e.target.value))}
            />
        </div>
    )
}