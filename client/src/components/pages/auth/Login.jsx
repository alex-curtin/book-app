import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';
import { Form } from '../../layout/Form';
import { Button } from '../../layout/Button';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <h1>Sign In</h1>
      <Form className='form' onSubmit={(e) => handleSubmit(e)}>
        <input
          type='email'
          placeholder='Email address'
          name='email'
          value={email}
          onChange={(e) => handleChange(e)}
          required
        />

        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={(e) => handleChange(e)}
          required
        />

        <Button as="input" type='submit' className='btn' value='Login' />
      </Form>
      <p className='m'>
        <Link to='/register'>...or Create an Account</Link>
      </p>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
