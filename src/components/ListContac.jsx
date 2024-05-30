import React from 'react';

export default function ListContac({ contacts, filter, setContacs }) {
  let filtradoForView = [];
  if (contacts != null) {
    filtradoForView = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  function handleDelete(evt) {
    let oldContacts = [...JSON.parse(localStorage.getItem('contacts'))];
    const updateContacts = oldContacts.filter(
      contact => contact.id !== evt.target.id
    );
    setContacs(updateContacts);
    localStorage.setItem('contacts', JSON.stringify(updateContacts));
  }

  return (
    <>
      <ul>
        {filtradoForView.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" id={contact.id} onClick={handleDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
