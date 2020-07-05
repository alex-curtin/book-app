import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GrLocation } from 'react-icons/gr';
import ProfileForm from './ProfileForm.jsx';
import { Button } from '../../layout/Button';
import { setRem, setColor } from '../../layout/styles';

const Header = ({ profile, user }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <HeaderWrapper>
      <h1>Dashboard</h1>
      <p>Welcome {user && user.name}</p>

      {profile !== null ? (
        <>
          <p>
            <GrLocation /> {profile.location}
          </p>

          <p>
            <i className='fas fa-user-circle'></i> {profile.bio}
          </p>
          {!showForm && (
            <Button onClick={toggleForm} className='edit-button'>
              edit profile
            </Button>
          )}
        </>
      ) : (
        <div>
          <Button onClick={toggleForm}>Create profile</Button>
        </div>
      )}
      {showForm && <ProfileForm toggleForm={toggleForm} />}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  background: ${setColor.lightGrey};
  padding: ${setRem(12)} ${setRem(24)};
  &:hover {
    .edit-button {
      display: initial;
    }
  }
  .edit-button {
    display: none;
  }
`;

export default Header;
