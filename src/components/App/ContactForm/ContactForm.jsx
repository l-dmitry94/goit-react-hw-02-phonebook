import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
        const { name } = event.currentTarget;

        this.setState({
            [name]: event.currentTarget.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: ''
        });
    };

    render() {
        const { name, number } = this.state;
        const nameId = nanoid();
        const numberId = nanoid();

        return (
            <form className="phonebook__form" onSubmit={this.handleSubmit}>
                <label htmlFor={nameId}>
                    Name
                    <input
                        className="phonebook__form-input"
                        type="text"
                        name="name"
                        id={nameId}
                        value={name}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <label htmlFor={numberId}>
                    Number
                    <input
                        className="phonebook__form-input"
                        type="tel"
                        name="number"
                        id={numberId}
                        value={number}
                        onChange={this.handleChange}
                        required
                    />
                </label>

                <button className="phonebook__form-submit" type="submit">
                    Add contact
                </button>
            </form>
        );
    }
}

export default ContactForm;
