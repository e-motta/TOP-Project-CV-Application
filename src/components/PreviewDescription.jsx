import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PreviewDescription.css';

class PreviewDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text } = this.props;
    return (
      <div className="preview-description">
        <p>{text}</p>
      </div>
    );
  }
}

PreviewDescription.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PreviewDescription;
