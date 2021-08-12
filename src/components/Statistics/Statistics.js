import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";
import Notification from "../Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 && (
        <ul className={s.StatList}>
          <li className={s.StatItem}>Good: {good}</li>
          <li className={s.StatItem}>Neutral: {neutral}</li>
          <li className={s.StatItem}>Bad: {bad}</li>
          <li className={s.StatItem}>Total: {total}</li>
          <li className={s.StatItem}>
            Positive Percentage: {positivePercentage}
          </li>
        </ul>
      )}
      {total === 0 && <Notification message="No feedback gives" />}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
