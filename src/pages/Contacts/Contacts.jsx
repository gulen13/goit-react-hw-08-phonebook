import { Container } from 'pages/Contacts/Contacts.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/phonebook/operations';
import { getError, getIsLoading, selectPhones } from 'redux/phonebook/selector';

export default function Contacts() {
  const dispatch = useDispatch();
  const phones = useSelector(selectPhones);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && (
        <>
          <h1>Loading...</h1>
        </>
      )}
      {error && <p>Sorry. {error}</p>}
      {!isLoading && !error && phones.length < 1 && (
        <p>Sorry, there is no contacts yet</p>
      )}
      <ContactList />
    </Container>
  );
}
