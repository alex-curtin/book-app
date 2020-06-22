import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../../actions/auth';
import { setAlert } from '../../../actions/alert';
import { Form } from '../../layout/Form';
import { Button } from '../../layout/Button';

const Register = ({ register, isAuthenticated, setAlert }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    password2: '',
  });

  const { email, name, password, password2 } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <h1>Create An Account</h1>
      <Form className='form' onSubmit={(e) => handleSubmit(e)}>
          <input
            type='text'
            placeholder='Name...'
            name='name'
            value={name}
            onChange={(e) => handleChange(e)}
            required
          />

          <input
            type='email'
            placeholder='Email address...'
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

          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={(e) => handleChange(e)}
            required
          />

        <Button as="input" type='submit' className='btn' value='Register' />
      </Form>
      <p className='m'>
        Already have an account? <Link to='/login'>Log In</Link>
      </p>
    </>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, setAlert })(Register);
