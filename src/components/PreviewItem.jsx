import React from 'react';
import PropTypes from 'prop-types';

import PreviewTitle from './PreviewTitle';
import PreviewDates from './PreviewDates';
import PreviewDescription from './PreviewDescription';

class PreviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      position, place, startDate, endDate, description,
    } = this.props;
    return (
      <div className="preview-item">
        <h3 className="title-item">
          <PreviewTitle
            title={`${position} at ${place}`}
          />
          <span>|</span>
          <PreviewDates
            startDate={startDate}
            endDate={endDate}
          />
        </h3>
        <div className="small-spacer" />
        <PreviewDescription
          text={description}
        />
        <div className="spacer" />
      </div>
    );
  }
}

PreviewItem.propTypes = {
  position: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PreviewItem;
