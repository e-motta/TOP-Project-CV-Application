import React from 'react';
import PropTypes from 'prop-types';

import PreviewTitle from './PreviewTitle';
import PreviewDates from './PreviewDates';
import PreviewDescription from './PreviewDescription';

function PreviewItem(props) {
  const {
    position, place, startDate, endDate, description,
  } = props;

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

PreviewItem.propTypes = {
  position: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PreviewItem;
