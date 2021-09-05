import React, { Component } from 'react';
import {FormSection, Forms, Input, Button, Label} from './Form.styled'

class Form extends Component {
    state = {
        contacts: [],
        name: '',
        number: ''
    }

    setForm = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        })
    }

    handelSubmit = (e) => {
        e.preventDefault();
        this.props.getValue(this.state);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        return (
            <FormSection>
            <Forms onSubmit={this.handelSubmit}>
                <Label>
                Name
                    <Input
                        type="text"
                        name="name"
                        value={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        onChange={this.setForm}
                        required
                    />
                </Label>
                <Label>
                Number
                    <Input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        onChange={this.setForm}
                        required
                    />
                </Label>
                <Button type="submit">Add contact</Button>
            </Forms>
    </FormSection >
        )

    }
}

export default Form;
