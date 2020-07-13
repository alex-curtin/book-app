import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setFlex, setRem } from '../../layout/styles';
import { switchBookList } from '../../../actions/bookList';
import { Button } from '../../layout/Button';

const SwitchList = ({ listName, lists, bookId, switchBookList, history }) => {
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');

  const onSubmit = () => {
    const newListName = newName ? newName : name;
    switchBookList(listName, newListName, bookId);
    history.push('/dashboard');
  };

  return (
    <Wrapper>
      <h6>move to different list</h6>
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

      <input
        type='text'
        name='new-list'
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder='new list'
      />

      <Button theme='success' onClick={onSubmit} disabled={!name && !newName}>
        Submit
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${setFlex({ y: 'flex-start' })};
  flex-direction: column;
  margin: ${setRem()} 0;
  h6,
  select,
  input {
    margin-bottom: ${setRem(8)};
    min-width: ${setRem(150)};
  }
`;

export default withRouter(connect(null, { switchBookList })(SwitchList));
