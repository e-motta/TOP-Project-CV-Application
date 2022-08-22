/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PreviewCV.css';

import PreviewHeader from './PreviewHeader';
import PreviewDescription from './PreviewDescription';
import SectionTitle from './SectionTitle';
import PreviewItem from './PreviewItem';

class PreviewCV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      firstName,
      lastName,
      jobTitle,
      email,
      phone,
      professionalSummary,
      professionalExperiences,
      education,
    } = this.props;

    return (
      <div className="preview-cv">
        <PreviewHeader
          firstName={firstName}
          lastName={lastName}
          jobTitle={jobTitle}
          email={email}
          phone={phone}
        />
        <div className="preview-body">
          <PreviewDescription
            text={professionalSummary}
          />
          <div className="spacer" />

          {professionalExperiences.length !== 0
          && (professionalExperiences[0].jobTitle !== ''
              && professionalExperiences[0].employer !== '')
            ? (
              <div>
                <SectionTitle title="Professional Experience" />
                <div className="small-spacer" />
              </div>
            )
            : <div />}

          {professionalExperiences.map((item) => (
            item.jobTitle !== '' && item.employer !== ''
              ? (
                <PreviewItem
                  position={item.jobTitle}
                  place={item.employer}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  description={item.description}
                  key={item.id}
                />
              )
              : <div key={item.id} />
          ))}

          {education.length !== 0
          && (education[0].school !== ''
              || education[0].degree !== '')
            ? (
              <div>
                <SectionTitle title="Education" />
                <div className="small-spacer" />
              </div>
            )
            : <div />}

          {education.map((item) => (
            item.degree !== '' && item.school !== ''
              ? (
                <PreviewItem
                  position={item.degree}
                  place={item.school}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  description={item.description}
                  key={item.id}
                />
              )
              : <div key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

PreviewCV.defaultProps = {
  professionalExperiences: [],
  education: [],
};

PreviewCV.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  professionalSummary: PropTypes.string.isRequired,
  professionalExperiences: PropTypes.array,
  education: PropTypes.array,
};

export default PreviewCV;
