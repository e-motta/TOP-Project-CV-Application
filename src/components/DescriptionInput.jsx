import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/DescriptionInput.css';

function DescriptionInput(props) {
  const { parent, name, title } = props;

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

  return (
    <div className="input-component description-component">
      <label
        htmlFor={parent + title}
        className={focused || filled ? 'simple-label-focused' : 'simple-label'}
      >
        {title}
      </label>
      <textarea
        id={parent + title}
        name={name}
        className="simple-input description-input"
        onFocus={onFocus}
        onBlur={onBlur}
        onInput={onFocus}
      />
    </div>
  );
}

DescriptionInput.propTypes = {
  parent: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DescriptionInput;
