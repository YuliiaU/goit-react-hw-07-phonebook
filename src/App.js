
import Container from './components/Container';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';

import {useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { contactsOperations } from './redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />

      <Contacts />
    </Container>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});
export default connect(null, mapDispatchToProps)(App);
