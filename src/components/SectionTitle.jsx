import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SectionTitle.css';

function SectionTitle(props) {
  const { title } = props;
  return (
    <h2 className="section-title">
      {title}
    </h2>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
