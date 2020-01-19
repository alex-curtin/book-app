import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ logout, auth: { isAuthenticated } }) => {
  const authLinks = (
    <>
      <li>
        <a onClick={logout} href='#!'>
          <i className="fas fa-sign-out"></i>
          Logout
        </a>
      </li>
    </>
  )

  const guestLinks = (
    <>
      <li ><Link to="/login">Log In</Link></li>
    </>
  )

  return (
    <nav className="navbar bg-dark">
      <h1 >
        <Link to="/" className="flex align-center">
          <i className="fas fa-book-open fa-2x mr-1"></i>
          {' '}Book App
        </Link>
      </h1>
      <ul className="nav-links">
        <li>
          <input type="text" placeholder="Search..." />
          <i className="fas fa-search"></i>
        </li>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);
