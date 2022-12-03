import React, { useState } from 'react';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Notification from '../components/Notification/Notification';
import Section from '../components/Section/Section';
import Statistics from '../components/Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onLeaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      default:
        throw new Error();
    }
  };

  function getTotalFeedback() {
    return good + bad + neutral;
  }

  function getPositivePersentage() {
    return Math.round((good / getTotalFeedback()) * 100);
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, bad, neutral })}
          onLeaveFeedback={onLeaveFeedback}
        />
        {getTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={getTotalFeedback()}
            percentage={getPositivePersentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
