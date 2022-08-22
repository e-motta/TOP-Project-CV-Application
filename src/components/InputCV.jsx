/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/InputCV.css';

import SectionTitle from './SectionTitle';
import InputPersonalDetails from './InputPersonalDetails';
import InputProfessionalExperience from './InputProfessionalExperience';
import InputEducation from './InputEducation';

class InputCV extends React.Component {
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
      professionalExperiences,
      education,
      handlePersonalDetails,
      handleProfessionalExperience,
      handleEducation,
    } = this.props;

    return (
      <div className="input-cv">
        <SectionTitle title="Personal Details" />

        <InputPersonalDetails
          firstName={firstName}
          lastName={lastName}
          jobTitle={jobTitle}
          email={email}
          phone={phone}
          professionalSummary={professionalSummary}
          handlePersonalDetails={handlePersonalDetails}
        />
        <div className="spacer" />

        <SectionTitle title="Professional Experience" />
        {professionalExperiences.map((item) => (
          <div key={item.id}>
            <InputProfessionalExperience
              professionalExperience={item}
              handleProfessionalExperience={handleProfessionalExperience}
            />
            <div className="small-spacer" />
          </div>
        ))}

        <button type="button" className="add-btn">+ Add professional experience</button>
        <div className="spacer" />

        <SectionTitle title="Education" />

        {education.map((item) => (
          <div key={item.id}>
            <InputEducation
              educationItem={item}
              handleEducation={handleEducation}
            />
            <div className="spacer" />
          </div>
        ))}

        <button type="button" className="add-btn">+ Add education</button>
        <div className="spacer" />
      </div>
    );
  }
}

InputCV.defaultProps = {
  professionalExperiences: [],
  education: [],
};

InputCV.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  professionalSummary: PropTypes.string.isRequired,
  professionalExperiences: PropTypes.array,
  education: PropTypes.array,
  handlePersonalDetails: PropTypes.func.isRequired,
  handleProfessionalExperience: PropTypes.func.isRequired,
  handleEducation: PropTypes.func.isRequired,
};

export default InputCV;