import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    password2: ''
  })

  const {
    email,
    name,
    password,
    password2
  } = formData;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert('Passwords do not match')
    } else {
      register({ name, email, password });
    }
  }

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <>
      <h1>Create An Account</h1>
      <form className="form" onSubmit={e => handleSubmit(e)}>

        <div className="mb">
          <input
            type="text"
            placeholder="Name..."
            name="name"
            value={name}
            onChange={e => handleChange(e)}
            required
          />
        </div>

        <div className="mb">
          <input
            type="email"
            placeholder="Email address..."
            name="email"
            value={email}
            onChange={e => handleChange(e)}
            required
          />
        </div>

        <div className="mb">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => handleChange(e)}
            required
          />
        </div>

        <div className="mb">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={e => handleChange(e)}
            required
          />
        </div>

        <input
          type="submit"
          className="btn"
          value="Register"
        />

      </form>
      <p className='m'>
        Already have an accout? {' '}
        <Link to='/login'>Log In</Link>
      </p>
    </>
  )
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register })(Register);
