import { useState } from 'react';
import FormContac from './FormContac';
import FilterContac from './FilterContac';
import ListContac from './ListContac';

export const App = () => {
  const [contacts, setContacs] = useState(
    JSON.parse(localStorage.getItem('contacts'))
  );
  const [filter, setFilter] = useState('');

  return (
    <>
      <h1>Phonebook</h1>
      <FormContac setContacs={setContacs} />
      <h2>Contacts</h2>

      <FilterContac setInputValue={setFilter} />
      <ListContac contacts={contacts} filter={filter} setContacs={setContacs} />
    </>
  );
};
