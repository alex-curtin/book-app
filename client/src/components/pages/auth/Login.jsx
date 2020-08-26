import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';
import { AuthPage } from '../../layout/AuthPage';
import { Button } from '../../layout/Button';
import Container from '../../layout/Container';
import Alert from '../../layout/Alert';
import validateEmail from '../../../utils/validateEmail';

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
    <AuthPage>
      <Container>
        <h2>Login</h2>
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
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

          <Button
            as='input'
            type='submit'
            className='btn'
            value='Login'
            disabled={password.length < 6 || !validateEmail(email)}
          />
        </form>
        <Alert />
        <Link to='/register'>create account</Link>
      </Container>
    </AuthPage>
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
