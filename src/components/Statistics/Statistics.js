import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <ul className="stat-list">
      {stats.map(item => (
        <li
          className="item"
          style={{
            backgroundColor: '#' + Math.random().toString(16).slice(3, 9),
          }}
          key={item.id}
        >
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;