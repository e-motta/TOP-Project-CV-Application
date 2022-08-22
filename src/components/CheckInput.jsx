import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CheckInput.css';

class CheckInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { parent, name, title } = this.props;
    return (
      <div className="check-input">
        <input
          id={parent + title}
          name={name}
          type="checkbox"
        />
        <label
          htmlFor={parent + title}
        >
          {title}
        </label>
      </div>
    );
  }
}

CheckInput.propTypes = {
  parent: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CheckInput;
