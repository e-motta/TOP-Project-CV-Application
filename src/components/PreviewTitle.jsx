import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PreviewTitle.css';

function PreviewTitle(props) {
  const { title } = props;

  return (
    <span className="preview-title">
      {title}
    </span>
  );
}

PreviewTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PreviewTitle;
