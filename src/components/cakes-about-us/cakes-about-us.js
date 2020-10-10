import React from 'react';

const CakesAboutUs = () => {
    return (
        <section className="cakes-about-us container">
            <h3 className="cakes-about-us__title">О нас</h3>
            <article className="cakes-about-us__photo">
                <picture className="comments__picture-of-autor">
                    <source media="(min-width: 1200px)" srcset="./img/cakes-about-us__photo--desktop.jpg" />
                    <source media="(min-width: 768px)" srcset="./img/cakes-about-us__photo--tablet.jpg" />
                    <img src="./img/cakes-about-us__photo--mobile.jpg" width="156" height="155" alt="Торт" />
                </picture>
                <ul className="cakes-about-us__links-bar links-bar__photo">
                    <li className="btn-social"><a href="#">инстаграмм<img src="./img/links-bar__inst.png" alt="instagram" width="18"
                        height="18" /></a></li>
                    <li className="btn-social"><a href="#">вконтакте<img src="./img/links-bar__vk.png" alt="vkontakte" width="25"
                        height="17" /></a></li>
                    <li className="btn-social"><a href="#">твиттер<img src="./img/links-bar__tw.png" alt="twitter" width="19" height="16" /></a>
                    </li>
                </ul>
            </article>
            <article className="cakes-about-us__information">
                <h3 className="information__title" id="about-us">О нас</h3>
                <span className="information__personality">О кондитере</span>
                <p className="information__cakes-as-calling-title">Кондитер - как призвание</p>
                <p className="information__cakes-as-calling-text">Павел - профессиональный повар в различных
                гастрономических областях, но однажды его сердце покорило кондитерское искусство. С ранних лет он
                увлекался утонченным мастерством и обратился к своим талантам как кондитер</p>
                <p className="information__natural-title">Принцип - натуральные ингридиенты</p>
                <p className="information__natural-text">Сегодня Павел радуется изделиями не только близких, но и тех, кто
                предпочитает качественную продукцию для торжества, а главным принципом является выбор натуральных
                ингридиентов.</p>
                <ul className="cakes-about-us__links-bar links-bar__information">
                    <li className="links-bar__link btn-social">
                        <a className="links-bar__icon" href="#"><img src="./img/links-bar__inst.png" alt="instagram" width="18" height="18" /></a></li>
                    <li className="links-bar__link btn-social">
                        <a className="links-bar__icon" href="#"><img src="./img/links-bar__vk.png" alt="vkontakte" width="25" height="17" /></a></li>
                    <li className="links-bar__link btn-social">
                        <a className="links-bar__icon" href="#"><img src="./img/links-bar__tw.png" alt="twitter" width="19" height="16" /></a></li>
                </ul>
            </article>
            <article className="cakes__quote">
                <div className="quote__commas">
                    <picture>
                        <source media="(min-width: 1200px)" srcset="./img/quote__commas--desktop.png" />
                        <img src="./img/quote__commas--tablet.png" width="35" height="22" alt="Кавычки" />
                    </picture>
                </div>
                <p className="quote__text">Я за простые рецепты. В Италии это называют cucina povera: когда обычные
                ингридиенты превращаются в божественное блюдо.</p>
                <picture className="quote__signature">
                    <source media="(min-width: 1200px)" srcset="./img/quote__signature--desktop.png" />
                    <source media="(min-width: 768px)" srcset="./img/quote__signature--tablet.png" />
                    <img src="./img/quote__signature--mobile.png" width="64" height="31" alt="Подпись" />
                </picture>
            </article>
        </section>
    )
}

export default CakesAboutUs;