import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import booksImg from '../../images/books.svg';
import styled from 'styled-components';
import { setColor, setFlex, setRem, setLetterSpacing } from './styles';

import { logout } from '../../actions/auth';

const Navbar = ({ logout, auth: { isAuthenticated } }) => {
  const authLinks = (
    <>
      <li>
        <NavLink activeClass='active' to='/dashboard'>
          Your Books
        </NavLink>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          Logout
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <NavLink activeClass='active' to='/login'>
          Log In
        </NavLink>
      </li>
    </>
  );

  return (
    <NavWrapper>
      <Link to='/dashboard'>
        <h1>
          <img src={booksImg} alt='' />
          Book App
        </h1>
      </Link>
      <ul>
        <li>
          <NavLink activeClass='active' to='/books'>
            Find Books
          </NavLink>
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
  width: 100vw;
  h1 {
    ${setFlex({ x: 'flex-start' })};
  }
  svg {
    margin-right: ${setRem(12)};
    color: ${setColor.primaryDark};
  }
  img {
    height: ${setRem(50)};
    margin-right: ${setRem(8)};
  }
  ul {
    ${setFlex()};
    li {
      list-style: none;
      margin-right: ${setRem(18)};
    }
  }
  a {
    padding-bottom: ${setRem(4)};
  }
  .active {
    border-bottom: 4px solid ${setColor.primaryMuted};
  }
`;

export default connect(mapStateToProps, { logout })(Navbar);
