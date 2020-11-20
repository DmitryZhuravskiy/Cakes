import React from 'react';

const CakesForClient = () => {
    return (
        <section className="cakes-for-clients container">
            <article className="cakes-for-clients__text">
                <h3>Забота о клиентах</h3>
                <span>Для нас важно</span>
                <p>Нам важно, чтобы каждый торт был безупречным, как внутри, так и снаружи, чтобы он был создан
                исключительно для вас и для вашего события.</p>
            </article>
            <article className="cakes-for-clients__image">
                <picture className="advantage-card__fresh">
                    <source media="(min-width: 1200px)" srcSet="./img/cakes-for-clients--desktop.png" />
                    <source media="(min-width: 768px)" srcSet="./img/cakes-for-clients--tablet.png" />
                    <img src="./img/cakes-for-clients--mobile.png" width="320" height="325" alt="Торт за 24 часа" />
                </picture>
            </article>
        </section>
    )
}

export default CakesForClient;