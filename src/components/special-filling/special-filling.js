import React from "react";

class SpecialFilling extends React.Component {
  render() {
    let ID = Number(this.props.idNumberFilling);
    return (
      <section className="cakes-special__filling">
        <div id="last_fil">
          <div className="balka_1"></div>
          <div className="balka_2"></div>
        </div>
        <div id="next_fil">
          <div className="balka_3"></div>
          <div className="balka_4"></div>
        </div>
        <article className="filling__number">
          <p className="number-of-filling">01</p>
          <p className="choise-of-filling">Выберете начинку</p>
        </article>
        <article className="filling__material filling__ganash">
          <picture>
            <source
              media="(min-width: 1200px)"
              srcSet={this.props.filling[ID].imgDesktop}
            />
            <source
              media="(min-width: 768px)"
              srcSet={this.props.filling[ID].imgTablet}
            />
            <img
              src={this.props.filling[ID].imgMobile}
              width="241"
              height="113"
              alt={this.props.filling[ID].title}
            />
          </picture>
          <p>{Number(this.props.filling[ID].id)}/12</p>
        </article>
        <article className="filling__radiobuttons">
          <input
            name="filling"
            type="radio"
            id="fil_1"
            value="0"
            onChange={this.props.handleClickFilling}
            defaultChecked
          />
          <input
            name="filling"
            type="radio"
            id="fil_2"
            value="1"
            onChange={this.props.handleClickFilling}
          />
          <input
            name="filling"
            type="radio"
            id="fil_3"
            value="2"
            onChange={this.props.handleClickFilling}
          />
          <input
            name="filling"
            type="radio"
            id="fil_4"
            value="3"
            onChange={this.props.handleClickFilling}
          />
          <input
            name="filling"
            type="radio"
            id="fil_5"
            value="4"
            onChange={this.props.handleClickFilling}
          />
          <div className="slider-controls">
            <label htmlFor="fil_1" value="0"></label>
            <label htmlFor="fil_2" value="1"></label>
            <label htmlFor="fil_3" value="2"></label>
            <label htmlFor="fil_4" value="3"></label>
            <label htmlFor="fil_5" value="4"></label>
          </div>
        </article>
        <article className="filling__descriptions">
          <div className="filling__descriptions--ganash">
            <p className="description__title">{this.props.filling[ID].title}</p>
            <p className="filling__description-ganash">
              {this.props.filling[ID].description}
            </p>
            <p className="filling__price">{this.props.filling[ID].price}</p>
            <button className="btn description-btn" name="1">
              Выбрать
            </button>
          </div>
        </article>
      </section>
    );
  }
}

export default SpecialFilling;

/*
          <picture>
            <source
              media="(min-width: 1200px)"
              srcset={this.state.filling[this.state.idNumber].imgDesktop}
            />
            <source
              media="(min-width: 768px)"
              srcset={this.state.filling[this.state.idNumber].imgTablet}
            />
            <img
              src={this.state.filling[this.state.idNumber].imgMobile}
              width="241"
              height="113"
              alt={this.state.filling[this.state.idNumber].title}
            />
          </picture>
*/
