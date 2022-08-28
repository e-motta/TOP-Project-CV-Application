import React, { useState, useCallback } from 'react';
import uniqid from 'uniqid';
import '../styles/Content.css';

import InputCV from './InputCV';
import PreviewCV from './PreviewCV';

function Content() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [professionalSummary, setProfessionalSummary] = useState('');
  const [professionalExperiences, setProfessionalExperiences] = useState(
    [
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
  );
  const [education, setEducation] = useState(
    [
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
  );

  const handlePersonalDetails = useCallback((e) => {
    e.preventDefault();
    const inputs = new FormData(e.target);

    setFirstName(inputs.get('firstName'));
    setLastName(inputs.get('lastName'));
    setJobTitle(inputs.get('jobTitle'));
    setEmail(inputs.get('email'));
    setPhone(inputs.get('phone'));
    setProfessionalSummary(inputs.get('professionalSummary'));
  }, [
    setFirstName,
    setLastName,
    setJobTitle,
    setEmail,
    setPhone,
    setProfessionalSummary,
  ]);

  const handleProfessionalExperience = useCallback((e) => {
    e.preventDefault();
    const inputs = new FormData(e.target);

    setProfessionalExperiences((prevProfessionalExperiences) => (
      prevProfessionalExperiences.map((item) => {
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
      })
    ));
  }, [setProfessionalExperiences]);

  const handleEducation = useCallback((e) => {
    e.preventDefault();
    const inputs = new FormData(e.target);

    setEducation((prevEducation) => (
      prevEducation.map((item) => {
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
      })
    ));
  }, [setEducation]);

  const handleCurrentCheckProfessionalExperience = useCallback((e) => {
    setProfessionalExperiences(
      (prevProfessionalExperiences) => prevProfessionalExperiences.map((item) => {
        if (item.id === e.target.id) {
          if (!item.current) {
            return {
              ...item,
              current: true,
            };
          }
          return {
            ...item,
            current: false,
          };
        }
        return item;
      }),
    );
  }, [setProfessionalExperiences]);

  const handleCurrentCheckEducation = useCallback((e) => {
    setEducation((prevEducation) => (prevEducation.map((item) => {
      if (item.id === e.target.id) {
        if (!item.current) {
          return {
            ...item,
            current: true,
          };
        }
        return {
          ...item,
          current: false,
        };
      }
      return item;
    })));
  }, [setEducation]);

  const addProfessionalExperience = useCallback(() => {
    setProfessionalExperiences((prevProfessionalExperiences) => (
      [
        ...prevProfessionalExperiences,
        {
          id: uniqid(),
          jobTitle: '',
          employer: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
        },
      ]
    ));
  }, [setProfessionalExperiences]);

  const addEducation = useCallback(() => {
    setEducation((prevEducation) => (
      [
        ...prevEducation,
        {
          id: uniqid(),
          school: '',
          degree: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
        },
      ]
    ));
  }, [setEducation]);

  const deleteProfessionalExperience = useCallback((e) => {
    setProfessionalExperiences((prevProfessionalExperiences) => (
      prevProfessionalExperiences.filter((item) => (
        `${item.id}-delete` !== e.target.id
      ))
    ));
  }, [setProfessionalExperiences]);

  const deleteEducationItem = useCallback((e) => {
    setEducation((prevEducation) => (
      prevEducation.filter((item) => (
        `${item.id}-delete` !== e.target.id
      ))
    ));
  }, [setEducation]);

  const autoFillExample = useCallback(() => {
    setFirstName('John');
    setLastName('Doe');
    setJobTitle('Software Developer');
    setEmail('johndoe@email.com');
    setPhone('311-555-2368');
    setProfessionalSummary('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iusto consequuntur repellat esse magni harum unde voluptatibus quaerat. Nostrum, dolores praesentium numquam blanditiis enim necessitatibus natus nesciunt aliquam magnam iusto inventore ad quisquam ullam impedit assumenda doloremque dolorum odio sunt.');
    setProfessionalExperiences(
      [
        {
          id: uniqid(),
          jobTitle: 'Software Developer',
          employer: 'Tech Company',
          startDate: '01/2021',
          endDate: '08/2022',
          current: false,
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sint ad mollitia minus, fugiat neque.',
        },
      ],
    );
    setEducation(
      [
        {
          id: uniqid(),
          school: 'Harvard',
          degree: 'Computer Science',
          startDate: '01/2016',
          endDate: '01/2021',
          current: false,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur et illum corrupti maxime! Explicabo atque, voluptatibus maiores saepe molestias eveniet.',
        },
      ],
    );
  }, [
    setFirstName,
    setLastName,
    setJobTitle,
    setEmail,
    setPhone,
    setProfessionalSummary,
  ]);

  const clearPreview = useCallback(() => {
    setFirstName('');
    setLastName('');
    setJobTitle('');
    setEmail('');
    setPhone('');
    setProfessionalSummary('');
    setProfessionalExperiences(
      [
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
    );
    setEducation(
      [
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
    );
  }, [
    setFirstName,
    setLastName,
    setJobTitle,
    setEmail,
    setPhone,
    setProfessionalSummary,
  ]);

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
        handlePersonalDetails={handlePersonalDetails}
        handleProfessionalExperience={handleProfessionalExperience}
        handleEducation={handleEducation}
        addProfessionalExperience={addProfessionalExperience}
        addEducation={addEducation}
        deleteProfessionalExperience={deleteProfessionalExperience}
        deleteEducationItem={deleteEducationItem}
        handleCurrentCheckProfessionalExperience={handleCurrentCheckProfessionalExperience}
        handleCurrentCheckEducation={handleCurrentCheckEducation}
        autoFillExample={autoFillExample}
        clearPreview={clearPreview}
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

export default Content;
