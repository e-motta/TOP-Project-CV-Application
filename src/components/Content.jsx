import React from 'react';
import uniqid from 'uniqid';
import '../styles/Content.css';

import InputCV from './InputCV';
import PreviewCV from './PreviewCV';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      phone: '',
      professionalSummary: '',
      professionalExperiences: [
        {
          id: uniqid(),
          jobTitle: '',
          employer: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
        },
      ],
      education: [
        {
          id: uniqid(),
          school: '',
          degree: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
        },
      ],
    };

    this.handlePersonalDetails = this.handlePersonalDetails.bind(this);
    this.handleProfessionalExperience = this.handleProfessionalExperience.bind(this);
    this.handleEducation = this.handleEducation.bind(this);
    this.deleteProfessionalExperience = this.deleteProfessionalExperience.bind(this);
    this.deleteEducationItem = this.deleteEducationItem.bind(this);
    // eslint-disable-next-line max-len
    this.handleCurrentCheckProfessionalExperience = this.handleCurrentCheckProfessionalExperience.bind(this);
    this.handleCurrentCheckEducation = this.handleCurrentCheckEducation.bind(this);
  }

  handlePersonalDetails(e) {
    e.preventDefault();
    const inputs = new FormData(e.target);
    this.setState({
      firstName: inputs.get('firstName'),
      lastName: inputs.get('lastName'),
      jobTitle: inputs.get('jobTitle'),
      email: inputs.get('email'),
      phone: inputs.get('phone'),
      professionalSummary: inputs.get('professionalSummary'),
    });
  }

  handleProfessionalExperience(e) {
    e.preventDefault();
    const inputs = new FormData(e.target);
    let { professionalExperiences } = this.state;
    professionalExperiences = professionalExperiences.map((item) => {
      if (item.id === e.target.id) {
        const updatedItem = {
          id: item.id,
          jobTitle: inputs.get('jobTitle'),
          employer: inputs.get('employer'),
          startDate: inputs.get('startDate'),
          endDate: inputs.get('current') === null ? inputs.get('endDate') : 'Present',
          current: inputs.get('current'),
          description: inputs.get('description'),
        };
        return updatedItem;
      }
      return item;
    });
    this.setState({ professionalExperiences });
  }

  handleEducation(e) {
    e.preventDefault();
    const inputs = new FormData(e.target);
    let { education } = this.state;
    education = education.map((item) => {
      if (item.id === e.target.id) {
        const updatedItem = {
          id: item.id,
          school: inputs.get('school'),
          degree: inputs.get('degree'),
          startDate: inputs.get('startDate'),
          endDate: inputs.get('current') === null ? inputs.get('endDate') : 'Present',
          current: inputs.get('current'),
          description: inputs.get('description'),
        };
        return updatedItem;
      }
      return item;
    });
    this.setState({ education });
  }

  handleCurrentCheckProfessionalExperience(e) {
    this.setState((state) => ({
      professionalExperiences: state.professionalExperiences.map((item) => {
        if (item.id === e.target.id) {
          if (!item.current) {
            return {
              ...item,
              current: true,
              endDate: 'Present',
            };
          }
          return {
            ...item,
            current: false,
            endDate: '',
          };
        }
        return item;
      }),
    }));
  }

  handleCurrentCheckEducation(e) {
    this.setState((state) => ({
      education: state.education.map((item) => {
        if (item.id === e.target.id) {
          if (!item.current) {
            return {
              ...item,
              current: true,
              endDate: 'Present',
            };
          }
          return {
            ...item,
            current: false,
            endDate: '',
          };
        }
        return item;
      }),
    }));
  }

  deleteProfessionalExperience(e) {
    let { professionalExperiences } = this.state;
    professionalExperiences = professionalExperiences.filter((item) => (
      `${item.id}-delete` !== e.target.id
    ));
    this.setState({ professionalExperiences });
  }

  deleteEducationItem(e) {
    let { education } = this.state;
    education = education.filter((item) => (
      `${item.id}-delete` !== e.target.id
    ));
    this.setState({ education });
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
    } = this.state;
    return (
      <div className="content">
        <InputCV
          firstName={firstName}
          lastName={lastName}
          jobTitle={jobTitle}
          email={email}
          phone={phone}
          professionalSummary={professionalSummary}
          professionalExperiences={professionalExperiences}
          education={education}
          handlePersonalDetails={this.handlePersonalDetails}
          handleProfessionalExperience={this.handleProfessionalExperience}
          handleEducation={this.handleEducation}
          deleteProfessionalExperience={this.deleteProfessionalExperience}
          deleteEducationItem={this.deleteEducationItem}
          handleCurrentCheckProfessionalExperience={this.handleCurrentCheckProfessionalExperience}
          handleCurrentCheckEducation={this.handleCurrentCheckEducation}
        />
        <PreviewCV
          firstName={firstName}
          lastName={lastName}
          jobTitle={jobTitle}
          email={email}
          phone={phone}
          professionalSummary={professionalSummary}
          professionalExperiences={professionalExperiences}
          education={education}
        />
      </div>
    );
  }
}

export default Content;
