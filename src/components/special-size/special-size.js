import React from "react";
class SpecialSize extends React.Component {
    render() {
        return (
            <section className="cakes-special__size">
                <article className="size__number">
                    <p className="number-of-size">02</p>
                    <p className="choise-of-size">Размер</p>
                </article>
                <article className="size__characteristics weight-kg1" onClick={this.props.handleWeightChange1}>
                    <p className="characteristics__weight kg1">1кг</p>
                    <p className="characteristics__radius-of-cake">17-18 см</p>
                    <p className="characteristics__number-of-person">(1 кг - 6 персон)</p>
                </article>
                <article className="size__characteristics weight-kg2" onClick={this.props.handleWeightChange2}>
                    <p className="characteristics__weight kg2">2кг</p>
                    <p className="characteristics__radius-of-cake">23-24 см</p>
                    <p className="characteristics__number-of-person">(10-12 персон)</p>
                </article>
                <article className="size__characteristics weight-kg5" onClick={this.props.handleWeightChange5}>
                    <p className="characteristics__weight kg5">5кг</p>
                    <p className="characteristics__radius-of-cake">Два яруса 25 и 20 см</p>
                    <p className="characteristics__number-of-person">(15-20 персон)</p>
                </article>
                <article className="size__characteristics not-for-your-eyes weight-kg8" onClick={this.props.handleWeightChange8}>
                    <p className="characteristics__weight kg8">8кг</p>
                    <p className="characteristics__radius-of-cake">Три яруса 30, 25 и 18 см</p>
                    <p className="characteristics__number-of-person">(25-30 персон)</p>
                </article>
                <button className="btn size-btn" onClick={this.props.handleWeightChange}>Выбрать</button>
                <article className="size__radiobuttons">
                    <input name="size" type="radio" id="size_1" defaultChecked />
                    <input name="size" type="radio" id="size_2" />
                    <input name="size" type="radio" id="size_3" />
                    <input name="size" type="radio" id="size_4" />
                    <div className="slider-controls">
                        <label htmlFor="size_1" onClick={this.props.handleWeightChange1}></label>
                        <label htmlFor="size_2" onClick={this.props.handleWeightChange2}></label>
                        <label htmlFor="size_3" onClick={this.props.handleWeightChange5}></label>
                        <label htmlFor="size_4" onClick={this.props.handleWeightChange8}></label>
                    </div>
                </article>
            </section>
        )
    }
}
export default SpecialSize;