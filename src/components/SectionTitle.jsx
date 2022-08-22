import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SectionTitle.css';

class SectionTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;
    return (
      <h2 className="section-title">
        {title}
      </h2>
    );
  }
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
