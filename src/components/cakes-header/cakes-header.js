import React, {useState} from 'react';

const Header = () => {
    const [isShown, setIsShown] = useState(false);
    const toggleFIeldset = () => setIsShown(!isShown);

    return (
        <header className="page-header container" id="header">
            <div className="page-header__title-burger">
                <p className="page-header__title">Cakes</p>
                <div className="main-nav__toggle" onClick={toggleFIeldset} >
                    <button className="main-nav__toggle-strike">Открыть меню</button>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li><a href="#our-cakes">Наши торты</a></li>
                    <li><a href="#individual-order">Индивидуальный заказ</a></li>
                    <li><a href="#comments">Отзывы</a></li>
                    <li><a href="#about-us">О нас</a></li>
                    <li><a href="#how-order">Как заказать</a></li>
                    <li><a href="#contacts">Контакты</a></li>
                </ul>
            </div>
            {isShown && 
            <div className="navigation navigation--mobile">
                <ul>
                    <li><a href="#our-cakes">Наши торты</a></li>
                    <li><a href="#individual-order">Индивидуальный заказ</a></li>
                    <li><a href="#comments">Отзывы</a></li>
                    <li><a href="#about-us">О нас</a></li>
                    <li><a href="#how-order">Как заказать</a></li>
                    <li><a href="#contacts">Контакты</a></li>
                </ul>
            </div>
            }
            <p className="phone-number">+ 7 906 899 92 96</p>
        </header>
    )
}

export default Header;