import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    const {
      type, parent, deleteProfessionalExperience, deleteEducationItem,
    } = this.props;

    if (type === 'delete') {
      if (parent === 'professional-experience') {
        return deleteProfessionalExperience(e);
      } if (parent === 'education') {
        return deleteEducationItem(e);
      }
    }
    return null;
  }

  render() {
    const {
      type,
      id,
    } = this.props;

    return (
      <button
        type={type === 'submit' ? 'submit' : 'button'}
        id={id}
        className={`btn ${type}`}
        onClick={this.handleOnClick}
      >
        {String(type).slice(0, 1).toUpperCase() + type.slice(1)}
      </button>
    );
  }
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
