import React from 'react';
import { connect } from "react-redux";
import SpecialFilling from '../special-filling';
import SpecialSize from '../special-size';
import SpecialDesign from '../special-design';
import SpecialChoise from '../special-choise';

import { handleClickFilling, handleWeightChange1, handleWeightChange2, handleWeightChange5, handleWeightChange8, handleDesignChoiseBerry, handleDesignChoiseMarshmallow } from "../redux";

function CakesSpecial ({ idNumberFilling, weightSize, design, filling, handleClickFilling, handleWeightChange1, handleWeightChange2, handleWeightChange5, handleWeightChange8, handleDesignChoiseBerry, handleDesignChoiseMarshmallow }) {
        return (
            <form className="cakes-special container">
                <h3 id="individual-order">Индивидуальный заказ</h3>
                <span>Соберите торт в 3 шага</span>
                <SpecialFilling filling={filling} idNumberFilling={idNumberFilling} handleClickFilling={handleClickFilling} />
                <SpecialSize filling={filling} handleWeightChange1={handleWeightChange1} handleWeightChange2={handleWeightChange2} handleWeightChange5={handleWeightChange5} handleWeightChange8={handleWeightChange8}  />
                <SpecialDesign design={design} handleDesignChoiseBerry={handleDesignChoiseBerry} handleDesignChoiseMarshmallow={handleDesignChoiseMarshmallow} />
                <SpecialChoise idNumberFilling={idNumberFilling} weightSize={weightSize} design={design} filling={filling} />
            </form>
        )
    }

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    idNumberFilling: state.special.idNumberFilling,
      email: state.special.email,
      question: state.special.question,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClickFilling: (e) => dispatch(handleClickFilling(e)),
    handleWeightChange1: () => dispatch(handleWeightChange1()),
    handleWeightChange2: () => dispatch(handleWeightChange2()),
    handleWeightChange5: () => dispatch(handleWeightChange5()),
    handleWeightChange8: () => dispatch(handleWeightChange8()),
    handleDesignChoiseBerry: () => dispatch(handleDesignChoiseBerry()),
    handleDesignChoiseMarshmallow: () => dispatch(handleDesignChoiseMarshmallow()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakesSpecial);