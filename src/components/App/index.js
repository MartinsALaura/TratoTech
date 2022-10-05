import Navbar from 'components/Navbar'
import style from './App.module.scss'
import { Outlet } from 'react-router-dom'
import Footer from 'components/Footer'

export default function App() {
    return (
        <div className={style.container}>
            <Navbar/>
            <div className={style['container-outlet']}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}