import React from "react";
import { connect } from "react-redux";
import {
  handleChangeName,
  handleChangeEmail,
  handleChangeQuestion,
  handleSubmit,
} from "../redux";

function CakesContacts({
  name,
  email,
  question,
  handleChangeName,
  handleChangeEmail,
  handleChangeQuestion,
  handleSubmit,
}) {
  return (
    <section className="cakes-contacts container">
      <article className="cakes-contacts__title">
        <h3 className="cakes-contacts__description">Контакты</h3>
        <span className="cakes-contacts__question-time">Остались вопросы?</span>
      </article>
      <form className="cakes-contacts__form" onSubmit={() => handleSubmit()}>
        <p className="cakes-contacts__form-text">
          Заполните форму ниже и наш кондитер свяжется с Вами
        </p>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          onChange={(e) => handleChangeName(e)}
          value={name}
        />
        <input
          type="text"
          name="email"
          placeholder="Email адрес"
          onChange={(e) => handleChangeEmail(e)}
          value={email}
        />
        <textarea
          className="cakes-contacts__form-textarea"
          name="your-question"
          id=""
          cols="30"
          rows="7"
          placeholder="Ваш вопрос"
          onChange={(e) => handleChangeQuestion(e)}
          value={question}
        ></textarea>
        <input
          type="submit"
          className="btn cakes-contacts__btn"
          value="Отправить"
        />
      </form>
      <article className="cakes-contacts__phone-mail-social">
        <p className="cakes-contacts-phone">
          Или позвоните по телефону:
          <br />
          +7 906 899 92 96
        </p>
        <p className="cakes-contacts__mail">
          Наша почта: bakerybypavel@mail.ru
        </p>
        <p className="cakes-contacts__social">Мы в соц.сетях:</p>
        <ul className="cakes-contacts__social-button">
          <li className="cakes-contacts__contact">
            <a className="contact__link">
              <img src="./img/footer-inst.png" alt="instagram" />
            </a>
          </li>
          <li className="cakes-contacts__contact">
            <a className="contact__link">
              <img src="./img/footer-vk.png" alt="vkontakte" />
            </a>
          </li>
        </ul>
        <picture className="cakes-contacts__strawberry">
          <source
            media="(min-width: 1200px)"
            srcset="./img/cake-strawberry--desktop.png"
          />
          <img
            src="./img/cake-strawberry--tablet.png"
            width="602"
            height="401"
            alt="Клубничка"
          />
        </picture>
      </article>
    </section>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    name: state.contacts.name,
    email: state.contacts.email,
    question: state.contacts.question,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeName: () => dispatch(handleChangeName()),
    handleChangeEmail: () => dispatch(handleChangeEmail()),
    handleChangeQuestion: () => dispatch(handleChangeQuestion()),
    handleSubmit: () => dispatch(handleSubmit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakesContacts);
