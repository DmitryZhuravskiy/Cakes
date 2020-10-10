import {
  HANDLE_FILLING, HANDLE_WEIGHT_1, HANDLE_WEIGHT_2, HANDLE_WEIGHT_5, HANDLE_WEIGHT_8, HANDLE_CHOISE_BERRY, HANDLE_CHOISE_MARSHMALLOW
} from "./specialTypes";

const initialState = {
  idNumberFilling: 0,
  weightSize: '1кг',
  design: 'Маршмэллоу',
  filling: [
    {
      id: "01",
      imgMobile: "./img/filling-chocolate--mobile.jpg",
      imgTablet: "./img/filling-chocolate--tablet.jpg",
      imgDesktop: "./img/filling-chocolate--desktop.jpg",
      title: "Шоколадный ганаш",
      description:
        "Ароматный шоколадный бисквит, густой шоколадный крем - самый шоколадный из всех возможных десертов!",
      price: "1000 руб/кг",
    },

    {
      id: "02",
      imgMobile: "./img/rafaello.jpg",
      imgTablet: "./img/rafaello.jpg",
      imgDesktop: "./img/rafaello.jpg",
      title: "Рафаэлло",
      description:
        "Эта начинка приносит по-настоящему райское наслаждение. Ванильный бисквит с кокосово-миндальным наполнением и нежным сливочным кремом на основе творожного сыра маскарпоне.",
      price: "1200 руб/кг",
    },

    {
      id: "03",
      imgMobile: "./img/zaher.jpg",
      imgTablet: "./img/zaher.jpg",
      imgDesktop: "./img/zaher.jpg",
      title: "Классический захер",
      description:
        "Австрийский шедевр не мог быть не замечен нашими кондитерами. Сочный, плотный, насыщенный шоколадный бисквит пропитан аппетитным абрикосовым конфитюром с толстым слоем вкуснейшей шоколадной глазури. Не зря этот торт стал популярным во всем мире!",
      price: "1488 руб/кг",
    },

    {
      id: "04",
      imgMobile: "./img/yogurt.jpg",
      imgTablet: "./img/yogurt.jpg",
      imgDesktop: "./img/yogurt.jpg",
      title: "Йогуртовый торт",
      description:
        "Йогуртовый бисквит, крем на основе творожного маскарпоне с кусочками лесных ягод не смогут остваить Вас равнодушными к этой начинке. Начинка является нашей новинкой, но уже успела набрать свой фан-клуб.",
      price: "900 руб/кг",
    },

    {
      id: "05",
      imgMobile: "./img/snikers.jpg",
      imgTablet: "./img/snikers.jpg",
      imgDesktop: "./img/snikers.jpg",
      title: "Сникерс",
      description:
        "Шоколадный бисквит с шоколадом, карамелью и арахисом. Настоящий сникерс в мире тортов.",
      price: "1100 руб/кг",
    },
  ],
};

const specialReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_FILLING:
      return { ...state, idNumberFilling: action.payload };

    case HANDLE_WEIGHT_1:
      return { ...state, weightSize: '1кг' };

    case HANDLE_WEIGHT_2:
      return { ...state, weightSize: '2кг' };

    case HANDLE_WEIGHT_5:
      return {
        ...state,
        weightSize: '5кг'
      };

    case HANDLE_WEIGHT_8:
      return {
        ...state,
        weightSize: '8кг'
      };

    case HANDLE_CHOISE_BERRY:
      return {
        ...state,
        design: 'Ягодное ассорти'
      };

    case HANDLE_CHOISE_MARSHMALLOW:
      return {
        ...state,
        design: 'Маршмэллоу'
      };

    default:
      return state;
  }
}

export default specialReducer