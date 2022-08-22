/* eslint-disable react/forbid-prop-types */
import React from 'react';
import '../styles/InputProfessionalExperience.css';
import PropTypes from 'prop-types';

import SimpleInput from './SimpleInput';
import DescriptionInput from './DescriptionInput';
import CheckInput from './CheckInput';
import Button from './Button';

class InputProfessionalExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { professionalExperience, handleProfessionalExperience } = this.props;
    return (
      <div className="input-professional-experience">
        <form
          id={professionalExperience.id}
          action="#"
          onSubmit={handleProfessionalExperience}
          className="professional-experience-form form"
        >
          <SimpleInput
            parent="professional-experience"
            name="jobTitle"
            value={professionalExperience.jobTitle}
            title="Job title"
            type="text"
            id={professionalExperience.id}
          />
          <SimpleInput
            parent="professional-experience"
            name="employer"
            value={professionalExperience.employer}
            title="Employer"
            type="text"
            id={professionalExperience.id}
          />
          <div className="date-wrapper">
            <SimpleInput
              parent="professional-experience"
              value={professionalExperience.startDate}
              name="startDate"
              title="Start date"
              type="date"
              id={professionalExperience.id}
            />

            {!professionalExperience.current
              ? (
                <SimpleInput
                  parent="professional-experience"
                  value={professionalExperience.endDate}
                  name="endDate"
                  title="End date"
                  type="date"
                  id={professionalExperience.id}
                />
              ) : <div />}
          </div>
          <CheckInput
            parent="professional-experience"
            name="current"
            value={professionalExperience.current}
            title="Currently working there"
          />
          <DescriptionInput
            parent="professional-experience"
            name="description"
            value={professionalExperience.description}
            title="Description"
          />
          <Button type="submit" />
          <Button type="delete" />
        </form>
      </div>
    );
  }
}

InputProfessionalExperience.propTypes = {
  professionalExperience: PropTypes.object.isRequired,
  handleProfessionalExperience: PropTypes.func.isRequired,
};

export default InputProfessionalExperience;
