import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/SimpleInput.css';

function SimpleInput(props) {
  const {
    parent,
    name,
    title,
    type,
    id,
    required,
  } = props;

  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  function onFocus() {
    setFocused(true);
  }

  function onBlur(e) {
    setFocused(false);

    if (e.target.value !== '') {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }

  const requiredIndicator = required ? '*' : '';

  return (
    <div className={type === 'date' ? 'input-component date-input-component' : 'input-component'}>
      <label
        htmlFor={parent + title + id}
        className={focused || filled ? 'simple-label-focused' : 'simple-label'}
      >
        {`${title} ${requiredIndicator}`}
      </label>
      <input
        id={parent + title + id}
        type={type === 'date' ? 'text' : type}
        name={name}
        className={type === 'date' ? 'simple-input date-input' : 'simple-input'}
        onFocus={onFocus}
        onBlur={onBlur}
        onInput={onFocus}
        placeholder={type === 'date' && focused ? 'MM/AAAA' : ''}
        required={required}
      />
    </div>
  );
}

SimpleInput.defaultProps = {
  id: '0',
  required: '',
};

SimpleInput.propTypes = {
  parent: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  required: PropTypes.string,
};

export default SimpleInput;
