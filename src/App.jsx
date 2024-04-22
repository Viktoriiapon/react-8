import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList /> 
    </div>
  );
}

export default App;







