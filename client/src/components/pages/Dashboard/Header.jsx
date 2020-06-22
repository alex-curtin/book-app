import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setRem, setColor } from '../../layout/styles';

const Header = ({ profile, user }) => {
  return (
    <HeaderWrapper>
      <h1>Dashboard</h1>
      <p>Welcome {user && user.name}</p>

      {profile !== null ? (
        <>
          <p>
            <i className='fas fa-home'></i> {profile.location}
          </p>

          <p>
            <i className='fas fa-user-circle'></i> {profile.bio}
          </p>
        </>
      ) : (
        <div>
          <p>You have not set up your profile.</p>
          <Link to='#!'>Create profile</Link>
        </div>
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  background: ${setColor.mainGrey};
  padding: ${setRem(12)} ${setRem(24)};
`;

export default Header;
