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
    const {
      professionalExperience,
      handleProfessionalExperience,
      deleteProfessionalExperience,
      handleCurrentCheckProfessionalExperience,
    } = this.props;

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
            title="Job title"
            type="text"
            id={professionalExperience.id}
            required="required"
          />
          <SimpleInput
            parent="professional-experience"
            name="employer"
            title="Employer"
            type="text"
            id={professionalExperience.id}
            required="required"
          />
          <div className="date-wrapper">
            <SimpleInput
              parent="professional-experience"
              name="startDate"
              title="Start date"
              type="date"
              id={professionalExperience.id}
              required="required"
            />
            {!professionalExperience.current
              ? (
                <SimpleInput
                  parent="professional-experience"
                  name="endDate"
                  title="End date"
                  type="date"
                  id={professionalExperience.id}
                />
              ) : <div />}
          </div>
          <CheckInput
            name="current"
            title="Currently working there"
            id={professionalExperience.id}
            onCheck={handleCurrentCheckProfessionalExperience}
            checked={professionalExperience.current}
          />
          <DescriptionInput
            parent="professional-experience"
            name="description"
            title="Description"
          />
          <Button
            type="submit"
            parent="professional-experience"
            id={`${professionalExperience.id}-submit`}
          />
          <Button
            type="delete"
            id={`${professionalExperience.id}-delete`}
            parent="professional-experience"
            deleteProfessionalExperience={deleteProfessionalExperience}
          />
        </form>
      </div>
    );
  }
}

InputProfessionalExperience.propTypes = {
  professionalExperience: PropTypes.object.isRequired,
  handleProfessionalExperience: PropTypes.func.isRequired,
  deleteProfessionalExperience: PropTypes.func.isRequired,
  handleCurrentCheckProfessionalExperience: PropTypes.func.isRequired,
};

export default InputProfessionalExperience;
