import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setRem, setColor, media } from '../../layout/styles';
import { getCurrentUserBookLists } from '../../../actions/bookList';
import Recommended from './Recommended';
import SwitchList from './SwitchList';
import Container from '../../layout/Container';

const SingleBook = ({ match, bookList }) => {
  const { book_id, list_name } = match.params;
  const { currentUserLists } = bookList;

  const list = currentUserLists.find((list) => list.name === list_name);

  const bookItem = list.books.find((book) => book._id === book_id);

  const {
    authors,
    description,
    imgUrl,
    title,
    subtitle,
    publisher,
    publishedDate,
    googleId,
  } = bookItem.book;

  return (
    <BookPageWrapper>
      <Container>
        <Link to='/dashboard'>back to lists</Link>
        <h2>
          {title}
          {subtitle && <span>: {subtitle}</span>}
        </h2>
        <h3>by {authors.join(', ')}</h3>

        <div className='content'>
          <div>
            <img src={imgUrl} />
            <p>
              on your <span className='list-name'>{list.name}</span> list
            </p>
          </div>

          <div className='info'>
            <p className='publisher'>
              <span>{publisher}</span> {publishedDate}
            </p>
            <p>{description}</p>
            <SwitchList
              listName={list.name}
              lists={currentUserLists}
              bookId={book_id}
            />
          </div>
        </div>
        <Recommended author={authors[0]} googleId={googleId} />
      </Container>
    </BookPageWrapper>
  );
};

const BookPageWrapper = styled.section`
  h2 {
    margin-top: ${setRem(32)};
  }
  .content {
    display: flex;
    img {
      max-height: ${setRem(200)};
      display: block;
    }
  }
  .list-name {
    font-weight: bold;
    color: ${setColor.darkGrey};
  }

  .info {
    max-width: ${setRem(450)};
    margin-left: ${setRem()};
  }
  a {
    color: ${setColor.secondaryDark};
  }
  .publisher {
    color: ${setColor.darkGrey};
    span {
      font-weight: bold;
    }
  }

  ${media.phone`
    .content {
      flex-direction: column;
      .info {
        margin-left: 0;
        margin-top: ${setRem(8)};
      }
    }
  `}
`;

SingleBook.propTypes = {
  match: PropTypes.object.isRequired,
  bookList: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  bookList: state.bookList,
  book: state.book,
});

export default connect(mapStateToProps, { getCurrentUserBookLists })(
  SingleBook
);
