import styled from 'styled-components';
import { setRem, setFlex, setColor, media, setShadow } from './styles';

const BookWrapper = styled.article`
  ${setFlex({ y: 'flex-start', x: 'flex-start' })};
  height: ${setRem(195)};
  width: 100%;
  margin-bottom: ${setRem()};
  ${setShadow.large};
  background: ${setColor.mainWhite};
  border-radius: ${setRem(3)};
  overflow: hidden;
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
    /* background: ${setColor.primaryMuted}; */
  }
  img {
    height: ${setRem(195)};
  }
  .top {
    background: ${setColor.lightGrey};
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
  }

  small {
    padding: ${setRem(10)};
  }

  a {
    color: ${setColor.secondaryDark};
  }

  ${media.tablet`
    small {
      padding: 0 ${setRem(36)};
    }
  `}

  ${media.phone`
    max-width: ${setRem(280)};
    height: ${setRem(150)};

    img, .book-details {
    height: ${setRem(150)};
    }

    small {
      display: none;
    }
  `}
`;

export default BookWrapper;
