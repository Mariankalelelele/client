import cl from "./cover.module.css"

const Cover = () => {
    return (
        <div className={cl.cover}>
            <div className={cl.overlay}></div>
            <div className={cl.content}>
                <h1>Здравствуйте, добро пожаловать на сайт, постященный путешествиям!</h1>
                <p>Наш сайт предлагает уникальные маршруты и вдохновение для путешественников, желающих исследовать
                    новые горизонты. Здесь вы найдете советы по планированию поездок, интересные факты о культуре и
                    традициях разных стран, а также рекомендации по лучшим местам для отдыха и развлечений.</p>
                
            </div>
        </div>
    )
}

export default Cover