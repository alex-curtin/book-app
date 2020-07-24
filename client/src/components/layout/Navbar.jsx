import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GiHamburgerMenu } from 'react-icons/gi';
import booksImg from '../../images/books.svg';
import styled from 'styled-components';
import { setColor, setFlex, setRem, media, setLetterSpacing } from './styles';

import { logout } from '../../actions/auth';

const Navbar = ({ logout, auth: { isAuthenticated } }) => {
  const [navOpen, setNavOpen] = useState(false);

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
    <NavWrapper navOpen={navOpen}>
      <Link to='/dashboard'>
        <h1>
          <img src={booksImg} alt='logo' />
          {/* books by mikicon from the Noun Project */}
          <span>Book App</span>
        </h1>
      </Link>
      <GiHamburgerMenu
        onClick={() => setNavOpen(!navOpen)}
        size={setRem(50)}
        color={setColor.mainBlack}
        className='burger'
      />
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
  position: relative;
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
    padding-bottom: ${setRem(2)};
    font-weight: bold;
    ${setLetterSpacing(1)};
  }
  .active {
    border-bottom: 3px solid ${setColor.mainBlack};
  }
  .burger {
    display: none;
  }

  ${media.tablet`
    .burger {
      display: block;
      margin-right: ${setRem(40)};
      cursor: pointer;
    }

    ul {
      display: ${(props) => (props.navOpen ? 'flex' : 'none')};
      z-index: 50;
      background: ${setColor.primary};
      position: absolute;
      flex-direction: column;
      align-items: flex-start;
      right: ${setRem(24)};
      bottom: 0;
      transform: translateY(100%);
    }
    li {
      padding: ${setRem()};
      margin: 0;
      width: 100%;
      &:hover {
        background: ${setColor.primaryMuted};
      }
    }
  `}

  ${media.phone`
    h1 img {
      display: none;
    }
  `}
`;

export default connect(mapStateToProps, { logout })(Navbar);
