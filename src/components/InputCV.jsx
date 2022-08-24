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
      deleteProfessionalExperience,
      deleteEducationItem,
      handleCurrentCheckProfessionalExperience,
      handleCurrentCheckEducation,
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
              deleteProfessionalExperience={deleteProfessionalExperience}
              handleCurrentCheckProfessionalExperience={handleCurrentCheckProfessionalExperience}
            />
            <div className="small-spacer" />
          </div>
        ))}

        <div>
          <div className="small-spacer" />
          <button type="button" className="add-btn">+ Add professional experience</button>
          <div className="spacer" />
        </div>

        <SectionTitle title="Education" />

        {education.map((item) => (
          <div key={item.id}>
            <InputEducation
              educationItem={item}
              handleEducation={handleEducation}
              deleteEducationItem={deleteEducationItem}
              handleCurrentCheckEducation={handleCurrentCheckEducation}
            />
            <div className="small-spacer" />
          </div>
        ))}

        <div>
          <div className="small-spacer" />
          <button type="button" className="add-btn">+ Add education</button>
          <div className="spacer" />
        </div>

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
  deleteProfessionalExperience: PropTypes.func.isRequired,
  deleteEducationItem: PropTypes.func.isRequired,
  handleCurrentCheckProfessionalExperience: PropTypes.func.isRequired,
  handleCurrentCheckEducation: PropTypes.func.isRequired,
};

export default InputCV;
