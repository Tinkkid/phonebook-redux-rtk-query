import React from 'react';
import { ContactForm } from 'components/ContactForm /ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { MainSection, ContactsTitle, Title } from './App.styled';
import { Loader } from 'components/Loader/Loader';
import { useFetchContactsQuery } from 'redux/contactsSlice';

export const App = () => {
  const { data, isFetching, isLoading, isError } = useFetchContactsQuery();

  return (
    <MainSection>
      <Title>Phonebook</Title>
      {data && <ContactForm />}
      <ContactsTitle>Contacts</ContactsTitle>
      {(isFetching || isLoading) && <Loader />}
      {data && data.length > 1 && <Filter />}
      {data && data.length > 0 && <ContactList />}
      {data && data.length === 0 && !isFetching && !isError && (
        <ContactsTitle>No contacts. Please add contact.</ContactsTitle>
      )}
    </MainSection>
  );
};
