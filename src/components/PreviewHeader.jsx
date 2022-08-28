import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PreviewHeader.css';

function PreviewHeader(props) {
  const {
    firstName,
    lastName,
    jobTitle,
    email,
    phone,
  } = props;

  return (
    <header className="header-inner preview-header">
      <div className="header-left">
        <div className="name">
          <span>{`${firstName} ${lastName}`}</span>
        </div>
        <div className="job-title">{jobTitle}</div>
      </div>
      <div className="header-right">
        <div className="email">{email}</div>
        <div className="phone">{phone}</div>
      </div>
    </header>
  );
}

PreviewHeader.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default PreviewHeader;
