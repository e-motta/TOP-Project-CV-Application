import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PreviewTitle.css';

class PreviewTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;
    return (
      <span className="preview-title">
        {title}
      </span>
    );
  }
}

PreviewTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PreviewTitle;
