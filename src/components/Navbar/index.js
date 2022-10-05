import style from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Busca from '../Busca'
import classNames from 'classnames';
import {
  RiShoppingCart2Line,
  RiShoppingCartFill
} from 'react-icons/ri';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const iconeProps = {
  color: 'white',
  size: 24
}

export default function Navbar() {
  const location = useLocation()
  const navigate =  useNavigate()
  return (
    <nav className={style.nav}>
      <Logo className={style.logo} onClick={() => navigate('/')}/>
      <div className={style.links}>
        <div>
          <Link to='/' className={classNames(style.link, {
            [style.selected]: location.pathname === '/'
          })}>
            Página inicial
          </Link>
        </div>
      </div>
      <div className={style.busca}>
          <Busca/>
      </div>
      <div className={style.icones}>
        <Link to="/carrinho">
          {location.pathname === '/carrinho'
            ? <RiShoppingCartFill {...iconeProps} />
            : <RiShoppingCart2Line {...iconeProps} />
          }
        </Link>
      </div>
    </nav>
  )
}