import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

function Button(props) {
  function handleOnClick(e) {
    const {
      type, parent, deleteProfessionalExperience, deleteEducationItem,
    } = props;

    if (type === 'delete') {
      if (parent === 'professional-experience') {
        return deleteProfessionalExperience(e);
      } if (parent === 'education') {
        return deleteEducationItem(e);
      }
    }
    return null;
  }

  const { type, id } = props;

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      id={id}
      className={`btn ${type}`}
      onClick={handleOnClick}
    >
      {String(type).slice(0, 1).toUpperCase() + type.slice(1)}
    </button>
  );
}

Button.defaultProps = {
  deleteProfessionalExperience: null,
  deleteEducationItem: null,
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  parent: PropTypes.string.isRequired,
  deleteProfessionalExperience: PropTypes.func,
  deleteEducationItem: PropTypes.func,
};

export default Button;
