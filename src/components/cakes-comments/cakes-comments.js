import React from 'react';

const CakesComments = () => {
    return (
        <section className="cakes-comments container">
            <h3 id="comments">Отзывы</h3>
            <div className="comments">
                <picture className="comments__picture-of-autor">
                    <source media="(min-width: 1200px)" srcSet="./img/comments__picture-of-autor--desktop.jpg" />
                    <source media="(min-width: 768px)" srcSet="./img/comments__picture-of-autor--tablet.jpg" />
                    <img src="./img/comments__picture-of-autor--mobile.jpg" width="59" height="59" alt="Фото рецензента" />
                </picture>
                <div className="comments__about">
                    <p className="comments__name">Мария</p>
                    <p className="comments__profession-age">Юрист,33 года</p>
                    <p className="comments__text">Заказывала торт брауни на юбилей мужа. Гости были в восторге! Отдельное
                    спасибо за своевременную доставку! Теперь будем заказывать торты только у вас для наших семейных
                    праздников</p>
                    <p className="comments__page">1/26</p>
                </div>
            </div>
        </section>
    )
}

export default CakesComments;