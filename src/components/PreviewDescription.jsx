import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PreviewDescription.css';

function PreviewDescription(props) {
  const { text } = props;

  return (
    <div className="preview-description">
      <p>{text}</p>
    </div>
  );
}

PreviewDescription.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PreviewDescription;
