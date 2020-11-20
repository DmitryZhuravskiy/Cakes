import React from 'react';

const Footer = () => {
    return (
        <footer className="footer container">
            <div className="footer-wrapper">
                <p className="footer__title">Cakes</p>
                <ul className="footer__links-bar">
                    <li><a href="#our-cakes">Наши торты</a></li>
                    <li><a href="#individual-order">Индивидуальный заказ</a></li>
                    <li><a href="#comments">Отзывы</a></li>
                    <li><a href="#about-us">О нас</a></li>
                    <li><a href="#how-order">Как заказать</a></li>
                    <li><a href="#contacts">Контакты</a></li>
                    <li className="footer__social-phone"><a href="tel:+79068999296">+7 906 899 92 96</a></li>
                </ul>
                <div className="social-links-wrapper">
                    <div className="footer__social-links" id="contacts">
                        <a href="https://www.instagram.com/">
                            <picture>
                                <source media="(min-width: 1200px)" srcSet="./img/grey-inst--desktop.png" />
                                <img src="./img/grey-inst.png" width="23" height="23" alt="instagram" />
                            </picture>
                        </a>
                        <a href="https://vk.com/">
                            <picture>
                                <source media="(min-width: 1200px)" srcSet="./img/grey-vk--desktop.png" />
                                <img src="./img/grey-vk.png" width="31" height="19" alt="vkontakte" />
                            </picture>
                        </a>
                    </div>
                    <p className="footer__copyright">© 2018 Cakes</p>
                </div>
            </div>
            <div className="social-links-wrapper-2">
                <div className="footer__social-links">
                    <a href="https://www.instagram.com/">
                        <picture>
                            <source media="(min-width: 1200px)" srcSet="./img/grey-inst--desktop.png" />
                            <img src="./img/grey-inst.png" width="23" height="23" alt="instagram" />
                        </picture>
                    </a>
                    <a href="https://vk.com/">
                        <picture>
                            <source media="(min-width: 1200px)" srcSet="./img/grey-vk--desktop.png" />
                            <img src="./img/grey-vk.png" width="31" height="19" alt="vkontakte" />
                        </picture>
                    </a>
                </div>
                <p className="footer__copyright">© 2018 Cakes</p>
            </div>
        </footer>
    )
}

export default Footer;