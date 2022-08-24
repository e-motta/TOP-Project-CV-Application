import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CheckInput.css';

class CheckInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      name, title, id, onCheck,
    } = this.props;

    let { checked } = this.props;

    if (checked === 'on') checked = true;

    return (
      <div className="check-input">
        <input
          id={id}
          name={name}
          type="checkbox"
          onChange={onCheck}
          defaultChecked={checked}
        />
        <label
          htmlFor={id}
        >
          {title}
        </label>
      </div>
    );
  }
}

CheckInput.defaultProps = {
  checked: false,
};

CheckInput.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onCheck: PropTypes.func.isRequired,
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default CheckInput;
