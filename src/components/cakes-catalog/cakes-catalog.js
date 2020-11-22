import React from 'react';

const CakesCatalog = () => {
    return (
        <section className="cakes-catalog container">
        <h3 className="cakes-catalog__title" id="our-cakes">Наши торты</h3>
        <div className="cakes-catalog__type cake-classic">
            <p className="cakes-catalog__kind-of-cakes">Классические</p>
            <p className="cakes-catalog__how-many">24 вида</p>
        </div>
        <div className="cakes-catalog__wrapper cakes-catalog__wrapper-reverse">
            <div className="cakes-catalog__type cake-mousse">
                <p className="cakes-catalog__kind-of-cakes">Муссовые</p>
                <p className="cakes-catalog__how-many">12 видов</p>
            </div>
            <div className="cakes-catalog__type cake-wedding">
                <p className="cakes-catalog__kind-of-cakes">Свадебные</p>
                <p className="cakes-catalog__how-many">20 видов</p>
            </div>
        </div>
        <div className="cakes-catalog__wrapper">
            <div className="cakes-catalog__type cake-male">
                <p className="cakes-catalog__kind-of-cakes">Мужчинам</p>
                <p className="cakes-catalog__how-many">12 видов</p>
            </div>
            <div className="cakes-catalog__type cake-woman">
                <p className="cakes-catalog__kind-of-cakes">Женщинам</p>
                <p className="cakes-catalog__how-many">16 видов</p>
            </div>
        </div>
        <div className="cakes-catalog__type cake-child">
            <p className="cakes-catalog__kind-of-cakes">Детские</p>
            <p className="cakes-catalog__how-many">18 вида</p>
        </div>
    </section>
    )
}

export default CakesCatalog;