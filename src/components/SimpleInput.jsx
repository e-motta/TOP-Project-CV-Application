import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SimpleInput.css';

class SimpleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focused: false, filled: false };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.setState({
      focused: true,
    });
  }

  onBlur(e) {
    this.setState({
      focused: false,
    });

    if (e.target.value !== '') {
      this.setState({
        filled: true,
      });
    } else {
      this.setState({
        filled: false,
      });
    }
  }

  render() {
    const {
      parent,
      name,
      title,
      type,
      id,
    } = this.props;

    const {
      focused,
      filled,
    } = this.state;

    return (
      <div className={type === 'date' ? 'input-component date-input-component' : 'input-component'}>
        <label
          htmlFor={parent + title + id}
          className={focused || filled ? 'simple-label-focused' : 'simple-label'}
        >
          {title}
        </label>
        <input
          id={parent + title + id}
          type={type === 'date' ? 'text' : type}
          name={name}
          className={type === 'date' ? 'simple-input date-input' : 'simple-input'}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onInput={this.onFocus}
          placeholder={type === 'date' && focused ? 'MM/AAAA' : ''}
        />
      </div>
    );
  }
}

SimpleInput.defaultProps = {
  id: '0',
};

SimpleInput.propTypes = {
  parent: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default SimpleInput;
