import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeAlert } from '../../actions/alert';
import styled from 'styled-components';
import { setRem, setColor } from './styles';

const Alert = ({ alerts, removeAlert }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <AlertWrapper key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}{' '}
      <i onClick={() => removeAlert(alert.id)} className='fas fa-times'></i>
    </AlertWrapper>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
  removeAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

const AlertWrapper = styled.div`
  color: ${setColor.success};
  padding: ${setRem(18)};
  text-align: center;
`;

export default connect(mapStateToProps, { removeAlert })(Alert);
