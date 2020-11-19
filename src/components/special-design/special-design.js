import React from "react";

class SpecialDesign extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <section className="cakes-special__design">
                <article className="design__number">
                    <p className="number-of-design">03</p>
                    <p className="choise-of-design">Оформление</p>
                </article>
                <article className="design__emblem">
                    <picture className="emblem__picture">
                        <source media="(min-width: 1200px)" srcset="./img/design__emblem--desktop.png" />
                        <img src="./img/design__emblem--tablet.png" width="119" height="157" alt="Торт" />
                    </picture>
                </article>
                <article className="design__card card__berry-assorted" onClick={this.props.handleDesignChoiseBerry} value='berry'>
                    <picture className="design__berry-assorted">
                        <source media="(min-width: 1200px)" srcset="./img/design__berry-assorted--desktop.jpg" />
                        <img src="./img/design__berry-assorted--tablet.jpg" width="214" height="281" alt="Торт" />
                    </picture>
                    <p className="description__title">Ягодное ассорти</p>
                    <p className="card__price">700 руб/кг</p>
                    <button className="btn description-btn">Выбрать</button>
                </article>
                <article className="design__card card__marshmallow" onClick={this.props.handleDesignChoiseMarshmallow} value='marshmallow'>
                    <picture className="design__marshmallow">
                        <source media="(min-width: 1200px)" srcset="./img/design__marshmallow--desktop.jpg" />
                        <source media="(min-width: 768px)" srcset="./img/design__marshmallow--tablet.jpg" />
                        <img src="./img/design__marshmallow--mobile.jpg" width="177" height="204" alt="Торт" />
                    </picture>
                    <p className="description__title">Маршмэллоу</p>
                    <p className="card__price">600 руб/кг</p>
                    <button className="btn description-btn">Выбрать</button>
                </article>
                <p className="card-number">1/12</p>
                <article className="design__radiobuttons">
                    <input name="design" type="radio" value="1" checked />
                    <input name="design" type="radio" value="2" />
                    <input name="design" type="radio" value="3" />
                    <input name="design" type="radio" value="4" />
                    <input name="design" type="radio" value="5" />
                    <input name="design" type="radio" value="6" />
                </article>
            </section>
        )
    }
}

export default SpecialDesign;