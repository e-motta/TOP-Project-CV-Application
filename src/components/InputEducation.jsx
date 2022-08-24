/* eslint-disable react/forbid-prop-types */
import React from 'react';
import '../styles/InputEducation.css';
import PropTypes from 'prop-types';

import SimpleInput from './SimpleInput';
import DescriptionInput from './DescriptionInput';
import CheckInput from './CheckInput';
import Button from './Button';

class InputEducation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      educationItem,
      handleEducation,
      deleteEducationItem,
      handleCurrentCheckEducation,
    } = this.props;

    return (
      <div className="input-education">
        <form
          id={educationItem.id}
          action="#"
          onSubmit={handleEducation}
          className="education-form form"
        >
          <SimpleInput
            parent="education"
            name="school"
            title="School"
            type="text"
            id={educationItem.id}
            required="required"
          />
          <SimpleInput
            parent="education"
            name="degree"
            title="Degree"
            type="text"
            id={educationItem.id}
            required="required"
          />
          <div className="date-wrapper">
            <SimpleInput
              parent="education"
              name="startDate"
              title="Start date"
              type="date"
              id={educationItem.id}
              required="required"
            />
            {!educationItem.current
              ? (
                <SimpleInput
                  parent="education"
                  name="endDate"
                  title="End date"
                  type="date"
                  id={educationItem.id}
                  required="required"
                />
              ) : <div />}
          </div>
          <CheckInput
            parent="education"
            name="current"
            title="Currently studying there"
            id={educationItem.id}
            onCheck={handleCurrentCheckEducation}
            checked={educationItem.current}
          />
          <DescriptionInput
            parent="education"
            name="description"
            title="Description"
          />
          <Button
            type="submit"
            parent="education"
            id={`${educationItem.id}-submit`}
          />
          <Button
            type="delete"
            id={`${educationItem.id}-delete`}
            parent="education"
            deleteEducationItem={deleteEducationItem}
          />
        </form>
      </div>
    );
  }
}

InputEducation.propTypes = {
  educationItem: PropTypes.object.isRequired,
  handleEducation: PropTypes.func.isRequired,
  deleteEducationItem: PropTypes.func.isRequired,
  handleCurrentCheckEducation: PropTypes.func.isRequired,
};

export default InputEducation;
