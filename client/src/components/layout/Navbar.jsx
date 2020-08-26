import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GiHamburgerMenu } from 'react-icons/gi';
import booksImg from '../../images/books.svg';
import styled from 'styled-components';
import {
  setColor,
  setFlex,
  setRem,
  media,
  setLetterSpacing,
  setFont,
  setShadow,
} from './styles';

import { logout } from '../../actions/auth';

const Navbar = ({ logout, auth: { isAuthenticated } }) => {
  const [navOpen, setNavOpen] = useState(false);

  const authLinks = (
    <>
      <li>
        <NavLink activeClassName='active' to='/dashboard'>
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
        <NavLink activeClassName='active' to='/login'>
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
          <span>BookApp</span>
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
          <NavLink activeClassName='active' to='/books'>
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
  position: fixed;
  z-index: 100;
  ${setShadow.light};
  h1 {
    ${setFlex({ x: 'flex-start' })};
    font-size: ${setRem(26)};
    ${setLetterSpacing(-1)};
    font-weight: bold;
    color: ${setColor.mainBlack};
  }
  img {
    height: ${setRem(28)};
    margin-right: ${setRem(8)};
    background: ${setColor.primaryMuted};
    border-radius: 50%;
  }
  ul {
    ${setFlex()};
    li {
      list-style: none;
      margin-right: ${setRem(18)};
    }
  }
  a {
    ${setFont.display};
    color: ${setColor.mainBlack};
    padding-bottom: ${setRem(4)};
    font-weight: 500;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: ${setColor.mainBlack};
      transition: all 0.5s ease-in-out;
    }
  }
  .active {
    &::after {
      width: 100%;
    }
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
