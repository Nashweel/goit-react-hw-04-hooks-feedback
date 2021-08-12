import React, { useState } from "react";

import FeedbackOptions from "./components/Feedback";
import Notification from "./components/Notification";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import { CONSTANS_FEEDBACK } from "./data/constans";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [visible, setVisible] = useState(false);

  const onLeaveFeedback = (options) => {
    switch (options) {
      case "good":
        setGood((state) => state + 1);
        break;

      case "neutral":
        setNeutral((state) => state + 1);
        break;

      case "bad":
        setBad((state) => state + 1);
        break;

      default:
        break;
    }
    setVisible(true);
  };

  const countTotalFeedbacks = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPostivePercentage = () => {
    let positivePercentage = 0;
    if (good !== 0 || bad !== 0) {
      positivePercentage = (good / (bad + good)) * 100;
    }
    return Math.round(positivePercentage);
  };

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={CONSTANS_FEEDBACK}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!visible && <Notification message="No feedback given" />}
        {visible && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedbacks()}
            positivePercentage={countPostivePercentage()}
          />
        )}
      </Section>
    </div>
  );
}
