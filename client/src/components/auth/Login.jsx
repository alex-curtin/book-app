import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  }

  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={e => handleSubmit(e)}>

        <div>
          <input
            type="email"
            placeholder="Email address"
            name="email"
            value={email}
            onChange={e => handleChange(e)}
            required
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => handleChange(e)}
            required
          />
        </div>

        <input
          type="submit"
          className="btn"
          value="Login"
        />

      </form>
    </>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);
