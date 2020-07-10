import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { switchBookList } from '../../../actions/bookList';
import { Button } from '../../layout/Button';

const SwitchList = ({ listName, lists, bookId, switchBookList, history }) => {
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');

  const onSubmit = () => {
    switchBookList(listName, name, bookId);
    history.push('/dashboard');
  };
  console.log(history);
  return (
    <div>
      <h5>move to different list</h5>
      <select
        name='lists'
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={!!newName}
      >
        <option value=''> </option>
        {lists
          .filter((list) => list.name !== listName)
          .map(({ name }) => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
      </select>

      <Button theme='success' onClick={onSubmit} disabled={!name && !newName}>
        Submit
      </Button>
    </div>
  );
};

export default withRouter(connect(null, { switchBookList })(SwitchList));
