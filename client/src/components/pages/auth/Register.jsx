import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../../actions/auth';
import { setAlert } from '../../../actions/alert';
import { AuthPage } from '../../layout/AuthPage';
import { Button } from '../../layout/Button';
import Alert from '../../layout/Alert';
import Container from '../../layout/Container';
import validateEmail from '../../../utils/validateEmail';

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

  const disableSubmit =
    !validateEmail(email) || password.length < 6 || password2.length < 6;

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Container>
      <AuthPage>
        <h2>Create An Account</h2>
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
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

          <Button
            as='input'
            type='submit'
            className='btn'
            value='Sign Up'
            disabled={disableSubmit}
          />
        </form>
        <Alert />
        <p>
          Already have an account? <Link to='/login'>Log In</Link>
        </p>
      </AuthPage>
    </Container>
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
