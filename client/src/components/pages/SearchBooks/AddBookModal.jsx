import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../../layout/Modal';
import { Button } from '../../layout/Button';

const AddBookModal = ({ bookList, handleSubmit, toggleModal, isOpen }) => {
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');

  const { currentUserLists } = bookList;

  const onSubmit = () => {
    newName ? handleSubmit(newName) : handleSubmit(name);
    cancel();
  };

  const cancel = () => {
    setNewName('');
    toggleModal();
  };

  return (
    <Modal isOpen={isOpen}>
      {currentUserLists.length > 0 && (
        <>
          <h6>choose a list</h6>
          <select
            name='lists'
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!!newName}
          >
            <option value=''> </option>
            {currentUserLists.map(({ name }) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </select>
        </>
      )}

      <input
        type='text'
        name='new-list'
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder='new list'
      />

      <div className='buttons'>
        <Button theme='success' onClick={onSubmit} disabled={!name && !newName}>
          Add
        </Button>
        <Button onClick={cancel} theme='neutral'>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

AddBookModal.propTypes = {
  bookList: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  bookList: state.bookList,
});

export default connect(mapStateToProps)(AddBookModal);
