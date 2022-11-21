import React, { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  onLeaveFeedback = event => {
    let name = event.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  getTotalFeedback = () => {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  getPositivePersentage = () => {
    return Math.round((this.state.good / this.getTotalFeedback()) * 100);
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {Object.values(this.state).some(item => item > 0) ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.getTotalFeedback()}
            percentage={this.getPositivePersentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}

export default Feedback;
