import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CheckInput.css';

function CheckInput(props) {
  const {
    name, title, id, onCheck,
  } = props;
  let { checked } = props;
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
