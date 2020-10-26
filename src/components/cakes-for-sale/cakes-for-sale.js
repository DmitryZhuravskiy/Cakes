import React from "react";

const CakesForSale = () => {
    return (
        <section className="cakes-for-sale container">
            <h1 className="cakes-for-sale__title">Торты<br />на заказ</h1>
            <span className="cakes-for-sale__sub-title">Ручная работа</span>
            <a className="btn cakes-for-sale__btn" href="#">Выбрать торт</a>
            <div className="cakes-for-sale__natural-free">
                <div className="cakes-for-sale__natural">
                    <picture className="cakes-for-sale__img">
                        <source media="(min-width: 768px)" srcset="./img/spikelet-tablet.png" />
                        <img src="./img/spikelet.png" width="33" height="33" alt="Spikelet" />
                    </picture>
                    <p>Натуральные ингридиенты</p>
                </div>
                <div className="cakes-for-sale__free">
                    <picture className="cakes-for-sale__img">
                        <source media="(min-width: 768px)" srcset="./img/gift-tablet.png" />
                        <img src="./img/gift.png" width="33" height="32" alt="Gift" />
                    </picture>
                    <p>Доставка бесплатно при заказе от 2000 рублей*</p>
                </div>
            </div>
            <picture className="cakes-for-sale__strawberry-top">
                <source media="(min-width: 1200px)" srcset="./img/strawberry-top--desktop.png" />
                <img src="./img/strawberry-top--tablet.png" width="72" height="71" alt="Клубничка хвостиков вверх" />
            </picture>

            <picture className="cakes-for-sale__raspberry">
                <source media="(min-width: 1200px)" srcset="./img/raspberry--desktop.png" />
                <img src="./img/raspberry--tablet.png" width="40" height="39" alt="Малинка" />
            </picture>

            <picture className="cakes-for-sale__strawberry-bottom">
                <source media="(min-width: 1200px)" srcset="./img/strawberry-bottom--desktop.png" />
                <img src="./img/strawberry-bottom--tablet.png" width="99" height="71" alt="Клубничка хвостиком вниз" />
            </picture>
        </section>
    )
}

export default CakesForSale;