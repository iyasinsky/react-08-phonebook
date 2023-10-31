import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/selector';

export const selectContacts = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
