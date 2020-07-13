import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeAlert } from '../../actions/alert';
import styled from 'styled-components';
import { setRem, setColor, setFlex } from './styles';

const Alert = ({ alerts, removeAlert }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <AlertWrapper key={alert.id} className='alert' type={alert.alertType}>
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
  ${setFlex()};
  color: ${(props) =>
    props.type === 'success' ? `${setColor.success}` : `${setColor.danger}`};
  padding: ${setRem(18)};
  text-align: center;
  i {
    margin-left: ${setRem(8)};
    cursor: pointer;
  }
`;

export default connect(mapStateToProps, { removeAlert })(Alert);
