import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.contacts;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export default {
  getLoading,
  getContacts,
  getFilter,
  getVisibleContacts,
};
