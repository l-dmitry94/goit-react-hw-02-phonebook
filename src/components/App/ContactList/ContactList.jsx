const ContactList = ({ contacts }) => {
    return (
        <ul className="phonebook__list">
            {contacts.map(({ id, name, number }) => (
                <li key={id} className="phonebook__list-item">
                    {name}: {number}
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
