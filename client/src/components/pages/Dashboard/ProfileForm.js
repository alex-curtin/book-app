import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form } from '../../layout/Form';
import { Button } from '../../layout/Button';
import { createProfile } from '../../../actions/profile';

const ProfileForm = ({ createProfile, toggleForm, profile }) => {
  const location = profile.profile ? profile.profile.location : '';
  const bio = profile.profile ? profile.profile.bio : '';

  const [formData, setFormData] = useState({
    location: location,
    bio: bio,
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData);
    toggleForm();
  };

  return (
    <Form onSubmit={onSubmit}>
      <input
        type='text'
        name='location'
        value={formData.location}
        placeholder='location...'
        onChange={(e) => onChange(e)}
      />
      <textarea
        name='bio'
        value={formData.bio}
        placeholder='bio...'
        onChange={(e) => onChange(e)}
      />
      <Button>submit</Button>
      <Button onClick={toggleForm}>cancel</Button>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile })(ProfileForm);
