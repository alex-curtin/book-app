import styled from 'styled-components';
import { setRem, setFlex, setColor, setBorder, setShadow } from './styles';

const BookWrapper = styled.article`
  ${setFlex({ y: 'flex-start', x: 'flex-start' })};
  height: ${setRem(195)};
  width: 100%;
  margin-bottom: ${setRem()};
  ${setShadow.light};
  background: ${setColor.mainWhite};
  border-radius: ${setRem(3)};
  position: relative;
  &:hover {
    .delete {
    color: ${setColor.danger};
    }
  }

  .book-details {
    ${setFlex({ x: 'space-between', y: 'flex-start' })};
    flex-direction: column;
    height: ${setRem(195)};
    width: 100%;
    background: ${setColor.mainGrey};
  }
  img {
    height: ${setRem(195)};
  }
  .top {
    background: ${setColor.mainWhite};
    ${setFlex({ x: 'space-between', y: 'flex-start' })};
  }
  .delete {
    color: transparent;
    cursor: pointer;
  }

  .top,
  .bottom {
    padding: ${setRem(10)};
    width: 100%;
  }

  .bottom {
    text-align: right;
    justify-self: flex-end;
    /* background: ${setColor.primaryMuted}; */
  }

  small {
    padding: ${setRem(10)};
  }
`;

export default BookWrapper;
