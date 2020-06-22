import styled from 'styled-components';
import { setRem, setFlex, setColor, setBorder, setShadow } from './styles';

const BookWrapper = styled.article`
  ${setFlex({ y: 'flex-start', x: 'flex-start' })};
  height: 100%;
  width: 100%;
  margin-bottom: ${setRem()};
  background: ${setColor.mainGrey};

  .book-details {
    ${setFlex({ x: 'space-between', y: 'flex-start' })};
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .top,
  .bottom {
    padding: ${setRem(10)};
    width: 100%;
  }

  .bottom {
    text-align: right;
    justify-self: flex-end;
    background: ${setColor.primaryMuted};
  }

  small {
    padding: ${setRem(10)};
  }
`;

export default BookWrapper;
