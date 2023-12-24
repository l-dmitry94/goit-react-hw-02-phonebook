import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    formSubmitHandler = data => {
        const contact = {
            id: nanoid(),
            ...data,
        };

        this.setState(({ contacts }) => ({
            contacts: [contact, ...contacts],
        }));
    };

    handleChange = event => {
        this.setState({
            filter: event.currentTarget.value,
        });
    };

    getVisibleContacts = () => {
      const { contacts, filter } = this.state;
      const normilizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normilizedFilter)
    )
    }

    render() {
        const { filter } = this.state;

        const visibleContacts = this.getVisibleContacts();
        return (
            <section className="phonebook">
                <h1 className="phonebook__title">Phonebook</h1>
                <ContactForm onSubmit={this.formSubmitHandler} />

                <h2 className="phonebook__list-title">Contacts</h2>
                <Filter value={filter} onChange={this.handleChange} />
                <ContactList contacts={visibleContacts} />
            </section>
        );
    }
}

export default App;
