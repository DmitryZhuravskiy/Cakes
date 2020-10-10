import React from 'react';

const CakesOurAdvantage = () => {
    return (
        <section className="cakes__our-advantage container">
        <article className="our-advantage__title">
            <h3>Наши преимущества</h3>
            <span>Почему нас выбирают?</span>
        </article>
        <article className="our-advantage__img">
            <picture className="advantage-card__fresh">
                <source media="(min-width: 1200px)" srcset="./img/advantage-card__fruit-cake--desktop.png" />
                <img src="./img/advantage-card__fruit-cake--tablet.png" width="285" height="310" alt="Торт из ягод" />
            </picture>
        </article>
        <article className="our-advantage__list">
            <div className="our-advantage__advantage-card">
                <picture className="advantage-card__natural">
                    <source media="(min-width: 1200px)" srcset="./img/advantage-card__natural--mobile.png" />
                    <source media="(min-width: 768px)" srcset="./img/advantage-card__natural--tablet.png" />
                    <img src="./img/advantage-card__natural--mobile.png" width="61" height="61" alt="Эль-Натураль" />
                </picture>
                <p className="advantage-card__natural-title">Без искусственных добавок</p>
                <p className="advantage-card__natural-text">Работаем с натуральными ингридиентами и свежими продуктами
                </p>
            </div>
            <div className="our-advantage__advantage-card advantage-card">
                <picture className="advantage-card__fresh">
                    <source media="(min-width: 1200px)" srcset="./img/advantage-card__fresh--desktop.png" />
                    <source media="(min-width: 768px)" srcset="./img/advantage-card__fresh--tablet.png" />
                    <img src="./img/advantage-card__fresh--mobile.png" width="84" height="50" alt="Торт из ягод" />
                </picture>
                <p className="advantage-card__fresh-title">Свежий торт в день торжества</p>
                <p className="advantage-card__fresh-text">Торты изготавливаются в течение суток до отправки</p>
            </div>
        </article>
        <picture className="cakes__our-advantage__raspberry">
            <source media="(min-width: 1200px)" srcset="./img/adventage-raspberry--desktop.png" />
            <img src="./img/adventage-raspberry--tablet.png" width="30" height="30" alt="Малинка" />
        </picture>
        <picture className="cakes__our-advantage__leafe">
            <source media="(min-width: 1200px)" srcset="./img/leafe--desktop.png" />
            <img src="./img/leafe--tablet.png" width="56" height="81" alt="Листочек" />
        </picture>
        <picture className="cakes__our-advantage__apple">
            <source media="(min-width: 1200px)" srcset="./img/apple--desktop.png" />
            <img src="./img/apple--tablet.png" width="28" height="26" alt="Яблочко" />
        </picture>
        <picture className="cakes__our-advantage__flower">
            <source media="(min-width: 1200px)" srcset="./img/flower--desktop.png" />
            <img src="./img/flower--tablet.png" width="92" height="73" alt="Цветочек" />
        </picture>
    </section> 
    )
}

export default CakesOurAdvantage;
