import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <div>
      <h3>Statistics</h3>
      <List>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {percentage}%</li>
      </List>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
