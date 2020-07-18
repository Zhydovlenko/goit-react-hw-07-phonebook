import React from 'react';
import { connect } from 'react-redux';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Layout from './components/Layout/Layout';
import Toggler from './components/Toggler/Toggler';
import contactsSelectors from './redux/contacts/contactsSelectors';

import 'react-toastify/dist/ReactToastify.css';

const App = ({ contacts }) => {
  return (
    <Layout>
      <Toggler />
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <h2>Contacts</h2>}
      {contacts.length > 2 && <Filter />}
      <ContactList />
    </Layout>
  );
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

export default connect(mapStateToProps)(App);
