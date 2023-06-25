import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading, selectPhones } from 'redux/selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const App = () => {
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
};

export default App;
