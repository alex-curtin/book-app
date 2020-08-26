import styled from 'styled-components';
import { setRem } from './styles';

const Container = styled.main`
  min-height: 100vh;
  width: 85vw;
  max-width: ${setRem(1200)};
  margin: 0 auto;
  padding-top: ${setRem(80)};
`;

export default Container;
