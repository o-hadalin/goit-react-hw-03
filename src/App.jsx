import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import initialContacts from './data/contacts.json';

const App = () => {
  const [contacts /*, setContacts*/] = useState(initialContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
