import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DescriptionInput.css';

class DescriptionInput extends React.Component {
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
    const { parent, name, title } = this.props;
    const { focused, filled } = this.state;
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
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onInput={this.onFocus}
        />
      </div>
    );
  }
}

DescriptionInput.propTypes = {
  parent: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DescriptionInput;
