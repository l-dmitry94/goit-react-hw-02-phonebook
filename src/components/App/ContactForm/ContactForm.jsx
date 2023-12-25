import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, FormButton, FormInput, FormLabel } from './ContactForm.styled';

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
            number: '',
        });
    };

    render() {
        const { name, number } = this.state;
        const nameId = nanoid();
        const numberId = nanoid();

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormLabel htmlFor={nameId}>
                    Name:
                    <FormInput
                        type="text"
                        name="name"
                        id={nameId}
                        value={name}
                        onChange={this.handleChange}
                        required
                    />
                </FormLabel>
                <FormLabel htmlFor={numberId}>
                    Number:
                    <FormInput
                        type="tel"
                        name="number"
                        id={numberId}
                        value={number}
                        onChange={this.handleChange}
                        required
                    />
                </FormLabel>

                <FormButton type="submit">
                    Add contact
                </FormButton>
            </Form>
        );
    }
}

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    nameId: PropTypes.string,
    numberId: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func,
};

export default ContactForm;
