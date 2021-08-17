import React from "react";
import PropTypes from "prop-types";
import { controls, button } from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={controls}>
    {options.map((option, index) => (
      <button
        type="button"
        className={button}
        name={option}
        onClick={onLeaveFeedback}
        key={index}
      >
        {option}
      </button>
    ))}
  </div>
);

// eslint-disable-next-line react/no-typos
FeedbackOptions.propTypes  = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
