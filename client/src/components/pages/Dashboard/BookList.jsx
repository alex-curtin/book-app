import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FaTrashAlt, FaChevronCircleDown } from 'react-icons/fa';
import { setRem, setFlex, setColor } from '../../layout/styles';
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
        <Button theme='danger' onClick={() => deleteBookList(list.name)}>
          delete
        </Button>
        <Button theme='secondary' onClick={() => setShowModal(false)}>
          cancel
        </Button>
      </Modal>

      <h4>
        {list.name}{' '}
        <FaChevronCircleDown
          onClick={() => setHideList(!hideList)}
          className='chevron'
        />{' '}
        <FaTrashAlt
          size='1rem'
          className='delete-list'
          onClick={() => setShowModal(true)}
        />
      </h4>
      {!hideList && (
        <div className='list-container'>
          {list.books.map(({ book }) => (
            <BookListItem book={book} key={book._id} listName={list.name} />
          ))}
        </div>
      )}
    </ListWrapper>
  ) : null;
};

const ListWrapper = styled.div`
  margin-bottom: ${setRem()};
  min-height: ${(props) => (props.hideList ? `0px` : `${setRem(200)}`)};
  position: relative;
  overflow: hidden;
  &:hover {
    .delete-list {
      visibility: visible;
    }
  }
  h4 {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    .delete-list {
      color: ${setColor.dangerDark};
      cursor: pointer;
      visibility: hidden;
      margin-left: ${setRem(8)};
    }
  }

  .chevron {
    cursor: pointer;
    margin-left: ${setRem(8)};
    transform: ${(props) => (props.hideList ? 'scaleY(-1)' : '')};
  }
`;

const mapStateToProps = (state) => ({
  bookList: state.bookList,
});

export default connect(mapStateToProps, { deleteBookList })(BookList);
