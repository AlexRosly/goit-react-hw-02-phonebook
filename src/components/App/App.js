import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Section } from "./App.styled";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    const searchName = this.state.contacts
      .map((cont) => cont.name)
      .includes(contact.name);

    const messege = `${contact.name} is already in contacts`;

    if (searchName) {
      alert(messege);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = (contactsName) =>
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.name !== contactsName
      ),
    }));

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const normalizeFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const visibleContact = this.getVisibleContact();
    return (
      <Section>
        <h1>Phonebook</h1>
        <Form getValue={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContact} onDelete={this.deleteContact} />
      </Section>
    );
  }
}

export default App;
