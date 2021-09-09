import React, { Component } from "react"
import shortid from "shortid"

import { alert, defaultModules } from "@pnotify/core"
import "@pnotify/core/dist/PNotify.css"
import * as PNotifyMobile from "@pnotify/mobile"
import "@pnotify/mobile/dist/PNotifyMobile.css"

import Form from "./components/Form/Form"
import ContactFilter from "./components/ContactFilter/ContactFilter"
import ContactsList from "./components/Contacts/ContactsList"

import "./App.css"

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  }

  componentDidMount() {
    const localState = JSON.parse(localStorage.getItem("Contacts"))
    if (localState) {
      this.setState({ contacts: localState })
    } else {
      return
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("Contacts", JSON.stringify(this.state.contacts))
    }
  }

  filterleInputChange = (e) => {
    const { value } = e.currentTarget
    this.setState({ filter: value })
  }

  handleSubmit = (data) => {
    const id = shortid.generate()
    const contactObject = { ...data, id }

    if (
      this.state.contacts.find((contact) => contact.name.toLowerCase() === data.name.toLowerCase())
    ) {
      defaultModules.set(PNotifyMobile, {})
      alert({
        text: `${data.name} is olready in contacts`,
      })
    } else {
      this.setState((prevState) =>
        prevState.contacts
          ? {
              contacts: [...prevState.contacts, contactObject],
            }
          : { contacts: [contactObject] }
      )
    }
  }
  deleteContact = (id) => {
    const visiblecontact = this.state.contacts.filter((contacts) => !contacts.id.includes(id))
    this.setState({ contacts: visiblecontact })
  }

  visiblecontact = () => {
    const normalizedFilter = this.state.filter.toLowerCase()
    const visiblecontact = this.state.contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(normalizedFilter)
    )
    return visiblecontact
  }

  render() {
    const { filter } = this.state

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form submit={this.handleSubmit} />
        <h2>Contacts</h2>
        {this.state.contacts.length === 0 ? null : (
          <ContactFilter filterInput={this.filterleInputChange} filterValue={filter} />
        )}
        {this.state.contacts.length === 0 ? (
          <p>No Contacts</p>
        ) : (
          <ContactsList contacts={this.visiblecontact()} deleteContact={this.deleteContact} />
        )}
      </div>
    )
  }
}

export default App
