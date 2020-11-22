import React from 'react';

const CakesOrder = () => {
    return (
        <section className="cakes-order container">
            <div className="cakes-order__container">
                <h3 className="cakes-order__title" id="how-order">Как заказать</h3>
                <div className="cakes-order__step">
                    <p className="step__number">1</p>
                    <p className="step__title">Срок заказа</p>
                    <p className="step__description">Размещать заказы желательно за 2-3 дня. На выходные заказы лучше
                    размещать минимум за неделю.</p>
                </div>
                <div className="cakes-order__step">
                    <p className="step__number">2</p>
                    <p className="step__title">Доставка по городу</p>
                    <p className="step__description">Доставка в пределах города 200 рублей,<br />при заказе на сумму более
                    2000 доставка бесплатно.</p>
                </div>
                <div className="cakes-order__step">
                    <p className="step__number">3</p>
                    <p className="step__title">Доставка за городом</p>
                    <p className="step__description">Доставка за пределами города<br />рассчитывается индивидуально.</p>
                </div>
            </div>
        </section>
    )
}

export default CakesOrder;