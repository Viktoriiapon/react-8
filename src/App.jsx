// import React, { useState, useEffect } from 'react';
import { Suspense, lazy, useEffect } from "react";
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { Route, Routes } from 'react-router-dom';



import './App.css';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contacts/operations';
import Layout from './components/Layout/Layout';

import RegistrationPage  from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
   <>
      <h1>PhoneBook</h1>
      <div className="container">
    <Layout>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path ="/" element ={<HomePage />} />
        <Route path ="/register" element ={<RegistrationPage />} />
        <Route path ="/login" element ={<LoginPage />} />
        <Route path ="/contacts" element ={<ContactsPage />} />
        {/* <Route path ="*" element ={<NotFound />} /> */}

      </Routes>
      </Suspense>
    </Layout>
    </div>
    </>
  );
}

export default App;







