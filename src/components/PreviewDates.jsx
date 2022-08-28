import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PreviewDates.css';

function PreviewDates(props) {
  const { startDate, endDate } = props;

  return (
    <span className="preview-title">
      <span>{startDate}</span>
      {' '}
      —
      {' '}
      <span>{endDate}</span>
    </span>
  );
}

PreviewDates.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default PreviewDates;
