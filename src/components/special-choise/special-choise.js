import React from "react";

class SpecialChoise extends React.Component {
    render() {
        return (
            <section className="cakes-special__choise container">
                <h3 id="choise">Выш выбор</h3>
                <div className="choise__parameters">
                    <article className="choise__parameter parameter__filling">
                        <label htmlFor="filling">Начинка</label>
                        <input type="text" id="filling" placeholder={this.props.filling[this.props.idNumberFilling].title} />
                    </article>
                    <article className="choise__parameter parameter__size">
                        <label htmlFor="size">Размер</label>
                        <input type="text" id="size" placeholder={this.props.weightSize} />
                    </article>
                    <article className="choise__parameter  parameter__design">
                        <label htmlFor="design">Оформление</label>
                        <input type="text" id="design" placeholder={this.props.design} />
                    </article>
                    <input className="btn btn-form-choise" type="submit" value="Заказать" />
                </div>
                <div className="choise__img-left">
                    <picture>
                        <source media="(min-width: 1200px)" srcSet="./img/choise__img-left--desktop.png" />
                        <img src="./img/choise__img-left--tablet.png" width="315" height="76" alt="Занавеска слева" />
                    </picture>
                </div>
                <div className="choise__img-right">
                    <picture>
                        <source media="(min-width: 1200px)" srcSet="./img/choise__img-right--desktop.png" />
                        <img src="./img/choise__img-right--tablet.png" width="313" height="77" alt="Занавеска справа" />
                    </picture>
                </div>
            </section>
        )
    }
}

export default SpecialChoise;