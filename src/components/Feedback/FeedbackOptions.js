import React from "react";
import PropTypes from "prop-types";
import s from "./Feedback.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          className={s.FeedbackButton}
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
