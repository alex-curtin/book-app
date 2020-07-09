import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from '../../layout/Modal';
import { Button, SmallButton } from '../../layout/Button';

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

      <h6>create new list</h6>
      <input
        type='text'
        name='new-list'
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <div className='buttons'>
        <Button theme='success' onClick={onSubmit} disabled={!name && !newName}>
          Add
        </Button>
        <Button onClick={cancel}>Cancel</Button>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  bookList: state.bookList,
});

export default connect(mapStateToProps)(AddBookModal);
