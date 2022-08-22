import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type } = this.props;

    return (
      <button
        type="submit"
        className={`btn ${type}`}
      >
        {String(type).slice(0, 1).toUpperCase() + type.slice(1)}

      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Button;
