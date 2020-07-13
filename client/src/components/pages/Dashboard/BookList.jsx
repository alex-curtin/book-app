import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FaTrashAlt, FaChevronCircleDown } from 'react-icons/fa';
import { setRem, setTransition, setColor } from '../../layout/styles';
import BookListItem from './BookListItem';
import Modal from '../../layout/Modal';
import { Button } from '../../layout/Button';
import { deleteBookList } from '../../../actions/bookList';

const BookList = ({ list, deleteBookList }) => {
  const [showModal, setShowModal] = useState(false);
  const [hideList, setHideList] = useState(false);

  return list.books.length ? (
    <ListWrapper hideList={hideList}>
      <Modal isOpen={showModal}>
        <h4>delete list?</h4>
        <div className='buttons'>
          <Button theme='danger' onClick={() => deleteBookList(list.name)}>
            delete
          </Button>
          <Button theme='neutral' onClick={() => setShowModal(false)}>
            cancel
          </Button>
        </div>
      </Modal>

      <h3>
        {list.name}{' '}
        <FaChevronCircleDown
          size='1rem'
          onClick={() => setHideList(!hideList)}
          className='chevron'
        />{' '}
        <FaTrashAlt
          size='1rem'
          className='delete-list'
          onClick={() => setShowModal(true)}
        />
      </h3>
      {!hideList && (
        <div className='list-container'>
          {list.books.map(({ book, _id }) => (
            <BookListItem
              book={book}
              key={book._id}
              listName={list.name}
              bookId={_id}
            />
          ))}
        </div>
      )}
    </ListWrapper>
  ) : null;
};

const ListWrapper = styled.div`
  margin-bottom: ${setRem()};
  min-height: ${(props) => (props.hideList ? `0px` : `auto`)};
  position: relative;
  padding-bottom: ${setRem()};
  border-bottom: 1px solid ${setColor.lightGrey};
  &:hover {
    .delete-list {
      visibility: visible;
    }
  }
  h3 {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    .delete-list {
      color: ${setColor.danger};
      cursor: pointer;
      visibility: hidden;
      margin-left: ${setRem(8)};
    }
  }

  .chevron {
    cursor: pointer;
    margin-left: ${setRem(8)};
    transform: ${(props) => (props.hideList ? 'rotate(-180deg)' : '')};
    ${setTransition({ time: '0.2s' })};
  }
`;

BookList.propTypes = {
  list: PropTypes.object.isRequired,
  deleteBookList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bookList: state.bookList,
});

export default connect(mapStateToProps, { deleteBookList })(BookList);
