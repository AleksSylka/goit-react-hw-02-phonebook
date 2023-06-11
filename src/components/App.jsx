import React, { Component } from "react";
/* import { nanoid } from 'nanoid'; */
import Form from "./FormComp/Form";
import Filter from "./Filter/Filter";
import ConractList from "./ContactList/ContactList";
import css from './app.module.css'

class App extends Component {

  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: ''
  }

  formData = data => {
    if (this.state.contacts.find(({name}) => name === data.name)) {return window.alert(`${data.name} is already in contacts`)}
    this.state.contacts.push(data)
    this.setState(this.state.contacts)
  }

  filterInput = data => {
    this.setState({filter: data})
  }

  deletContact = name => {
    let i = this.state.contacts.findIndex(contact => contact.name === name);
    this.setState(this.state.contacts.splice(i, 1));
  }

  render() {
    return (
      <>
        <h1 className={css['text']}>Phonebook</h1>
        
        <Form onSubmit={this.formData} />
        
        <h2 className={css['text']}>Contacts</h2>
        
        <Filter onChange={this.filterInput} />
        
        {this.state.contacts.length > 0 && (<ConractList arr={this.state.contacts.filter(({ name }) => (name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase())))}
          onDeletContact={this.deletContact} />)}
        
      </>
    )
  }
}

export default App;