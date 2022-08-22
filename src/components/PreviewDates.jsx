import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PreviewDates.css';

class PreviewDates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { startDate, endDate } = this.props;
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
}

PreviewDates.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default PreviewDates;
