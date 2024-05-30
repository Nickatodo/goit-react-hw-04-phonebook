import React, { useState } from 'react';
import { nanoid } from 'nanoid';

export default function FormContac({ setContacs }) {
  const [newContact, setNewContact] = useState({
    id: '',
    name: '',
    number: '',
  });

  function handleOnChange(e) {
    setNewContact(oldState => {
      return { ...oldState, [e.target.name]: e.target.value };
    });
  }

  function addContac() {
    let oldContacs = [];
    let alredyContact = [];
    if (JSON.parse(localStorage.getItem('contacts')) !== null) {
      oldContacs = [...JSON.parse(localStorage.getItem('contacts'))];
      alredyContact = oldContacs.filter(contact =>
        contact.name.toLowerCase().includes(newContact.name.toLowerCase())
      );
    }
    if (alredyContact.length === 0) {
      oldContacs.push({
        id: nanoid(),
        name: newContact.name,
        number: newContact.number,
      });
      setContacs(oldContacs);
      localStorage.setItem('contacts', JSON.stringify(oldContacs));
      setNewContact({ id: '', name: '', number: '' });
    } else {
      alert(newContact.name + ' is already in contacts.');
    }
  }

  return (
    <>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={newContact.name}
            onChange={handleOnChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>
        </div>
        <div>
          <label>Number</label>
          <input
            type="tel"
            name="number"
            value={newContact.number}
            onChange={handleOnChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button type="button" onClick={addContac}>
          Add Contact
        </button>
      </form>
    </>
  );
}
