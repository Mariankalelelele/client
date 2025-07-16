import cl from "./../style.module.css"
import logo from "./../../public/img/photo.png"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.header__container}>
                <Link to="/">
                    <img className={cl.header__logo} src={logo} alt="логотип" />
                </Link>
                <nav className={cl.header__navigation}>
                    <a href="">
                        Главная
                    </a>
                    <a href="">
                        Услуги
                    </a>
                    <a href="">
                        О нас
                    </a>
                    <a href="">
                        Контакты
                    </a>
                    <a href="">
                        Информация
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header 