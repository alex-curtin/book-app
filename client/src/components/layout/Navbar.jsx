import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BsBook } from 'react-icons/bs';
import styled from 'styled-components';
import { setColor, setFlex, setRem, setLetterSpacing } from './styles';

import { logout } from '../../actions/auth';

const Navbar = ({ logout, auth: { isAuthenticated } }) => {
  const authLinks = (
    <>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out'></i>
          Logout
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <Link to='/login'>Log In</Link>
      </li>
    </>
  );

  return (
    <NavWrapper className='navbar bg-dark'>
      <Link to='/dashboard' className='flex align-center'>
        {/* <i className='fas fa-book-open fa-2x mr-1'></i>  */}
        <h1>
          <BsBook />
          Book App
        </h1>
      </Link>
      <ul className='nav-links'>
        <li>
          <Link to='/books'>Find Books</Link>
        </li>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </NavWrapper>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const NavWrapper = styled.nav`
  background: ${setColor.primary};
  ${setFlex({ x: 'space-between' })};
  padding: ${setRem(12)} ${setRem(24)};
  h1 {
    ${setFlex()};
  }
  svg {
    margin-right: ${setRem(12)};
  }
  ul {
    ${setFlex()};
    li {
      list-style: none;
      margin-right: ${setRem(18)};
    }
  }
`;

export default connect(mapStateToProps, { logout })(Navbar);
