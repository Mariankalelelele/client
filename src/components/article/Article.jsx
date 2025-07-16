import cl from "./article.module.css"
import photo1 from "./../../../public/img/travels/Moscow.jpg"
import photo2 from "./../../../public/img/travels/Kazan.jpg"
import photo3 from "./../../../public/img/travels/Sakhalin.jpg"
import { Link } from "react-router-dom"

const Article = () => {
    return (
        <div className={cl.cards}>
            <div className={cl.card}>
                <img src={photo1} alt=""/>
                <div className={cl.card__container}>  
                    <h2>Москва</h2>
                    <p>Москва – столица России, город с многовековой историей, яркой культурой и современными ритмами жизни.
                        Это место, где переплетаются старинные соборы и небоскребы, а традиции гармонично сочетаются с
                        новаторством.</p>
                    <Link to="/article/1">продолжить</Link>
                </div>
            </div>
            <div className={cl.card}>
                <img src={photo2} alt=""/>
                <div className={cl.card__container}>
                    <h2>Казань</h2>
                    <p>Казань – столица Республики Татарстан, один из самых красивых и динамично развивающихся городов
                        России. Это место, где переплетаются татарская и русская культуры,а традиции гармонично сочетаются с
                        современностью.</p>
                    <Link to="/article/2">продолжить</Link>
                </div>
                
            </div>
            <div className={cl.card}>
                <img src={photo3} alt=""/>
                <div className={cl.card__container}>
                    <h2>Сахалин</h2>
                    <p>Сахалин – самый крупный остров России. Это место
                        потрясающей природы, где горы встречаются с океаном, а уникальная флора и фауна создают ощущение
                        настоящего приключения.</p>
                    <Link to="/article/3">продолжить</Link>
                </div>
                
            </div>
        </div>
    )
}

export default Article