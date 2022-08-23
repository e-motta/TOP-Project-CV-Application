/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/InputPersonalDetails.css';

import SimpleInput from './SimpleInput';
import DescriptionInput from './DescriptionInput';
import Button from './Button';

class InputPersonalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      firstName,
      lastName,
      jobTitle,
      email,
      phone,
      professionalSummary,
      // professionalExperiences,
      // education,
      handlePersonalDetails,
    } = this.props;

    return (
      <div className="input-personal-details">
        <form action="#" method="post" onSubmit={handlePersonalDetails} className="personal-details-form form">
          <SimpleInput parent="personal-details" name="firstName" title="First name" type="text" value={firstName} />
          <SimpleInput parent="personal-details" name="lastName" title="Last name" type="text" value={lastName} />
          <SimpleInput parent="personal-details" name="email" title="Email" type="email" value={email} />
          <SimpleInput parent="personal-details" name="phone" title="Phone" type="tel" value={phone} />
          <SimpleInput parent="personal-details" name="jobTitle" title="Job title" type="text" value={jobTitle} />
          <DescriptionInput parent="personal-details" name="professionalSummary" title="Professional summary" value={professionalSummary} />
          <Button type="submit" id="submit" parent="personal-details" />
        </form>
      </div>
    );
  }
}

// InputPersonalDetails.defaultProps = {
//   professionalExperiences: [],
//   education: [],
// };

InputPersonalDetails.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  professionalSummary: PropTypes.string.isRequired,
  // professionalExperiences: PropTypes.array,
  // education: PropTypes.array,
  handlePersonalDetails: PropTypes.func.isRequired,
};

export default InputPersonalDetails;
