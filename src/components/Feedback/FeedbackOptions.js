import React from "react";
import PropTypes from "prop-types";
import s from "./Feedback.module.css";

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      className={s.FeedbackButton}
      type="button"
      data-feedback={feedback}
      onClick={onLeaveFeedback}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) =>
    FeedbackButton({ feedback: option, onLeaveFeedback })
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
