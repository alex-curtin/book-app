import React from 'react';
import styled from 'styled-components';
import { setColor, setRem, setFlex } from './styles';
import Container from './Container';

const Loading = () => {
  return (
    <Container>
      <LoadingWrapper>
        <div className='loader'></div>
      </LoadingWrapper>
    </Container>
  );
};

const LoadingWrapper = styled.div`
  margin: ${setRem(150)} 0;
  width: 100%;
  ${setFlex()};
  .loader {
    width: ${setRem(100)};
    height: ${setRem(100)};
    border-radius: 50%;
    border: 18px solid ${setColor.mainGrey};
    border-top-color: ${setColor.primary};
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
