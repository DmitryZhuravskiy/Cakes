import React from 'react';

class CakesContacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            question: ''
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(e) {
        this.setState({ name: e.target.value });
    }

    handleChangeEmail(e) {
        this.setState({ email: e.target.value });
    }

    handleChangeQuestion(e) {
        this.setState({ question: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(`Вы, ${this.state.name.toUpperCase()} спрашиваете у нас с мыла ${this.state.email} дословно ${this.state.question.toUpperCase()} ? Так вот, мы не знаем!`);
    }

    render() {
        return (
            <section className="cakes-contacts container">
                <article className="cakes-contacts__title">
                    <h3 className="cakes-contacts__description" id="contacts">Контакты</h3>
                    <span className="cakes-contacts__question-time">Остались вопросы?</span>
                </article>
                <form className="cakes-contacts__form" action="https://barbershop.ru" method="get" onSubmit={this.handleSubmit}>
                    <p className="cakes-contacts__form-text">Заполните форму ниже и наш кондитер свяжется с Вами</p>
                    <input type="text" name="name" placeholder="Ваше имя" onChange={this.handleChangeName} value={this.state.name} />
                    <input type="text" name="email" placeholder="Email адрес" onChange={this.handleChangeEmail} value={this.state.email} />
                    <textarea className="cakes-contacts__form-textarea" 
                    name="your-question" id="" cols="30" 
                    rows="7" placeholder="Ваш вопрос" 
                    onChange={this.handleChangeQuestion}
                    value={this.state.question}></textarea>
                    <input type="submit" className="btn cakes-contacts__btn" value="Отправить" />
                </form>
                <article className="cakes-contacts__phone-mail-social">
                    <p className="cakes-contacts-phone">
                        Или позвоните по телефону:<br />+7 906 899 92 96
                </p>
                    <p className="cakes-contacts__mail">Наша почта: bakerybypavel@mail.ru</p>
                    <p className="cakes-contacts__social">Мы в соц.сетях:</p>
                    <ul className='cakes-contacts__social-button'>
                        <li className="cakes-contacts__contact">
                            <a className="contact__link" href="https://www.instagram.com/"><img src="./img/footer-inst.png" alt="instagram" /></a></li>
                        <li className="cakes-contacts__contact">
                            <a className="contact__link" href="https://vk.com/"><img src="./img/footer-vk.png" alt="vkontakte" /></a></li>
                    </ul>
                    <picture className="cakes-contacts__strawberry">
                        <source media="(min-width: 1200px)" srcSet="./img/cake-strawberry--desktop.png" />
                        <img src="./img/cake-strawberry--tablet.png" width="602" height="401" alt="Клубничка" />
                    </picture>
                </article>
            </section>
        )
    }
}

export default CakesContacts;