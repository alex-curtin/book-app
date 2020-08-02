import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import { setColor, setRem, setFlex } from './styles';

const Loading = () => {
  return (
    <LoadingWrapper>
      <ReactLoading type='bars' color={setColor.primary} />
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  margin: ${setRem()};
  width: 100%;
  ${setFlex()};
`;

export default Loading;
