import React, { Component } from "react"
import s from "./Form.module.css"

class Form extends Component {
  state = {
    name: "",
    number: "",
  }

  submit = (e) => {
    e.preventDefault()
    this.reset()
    this.props.submit(this.state)
  }

  reset = () => {
    this.setState({ name: "", number: "" })
  }

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form onSubmit={this.submit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            className={s.input}
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            className={s.input}
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className={s.button}>
          Add Contact
        </button>
      </form>
    )
  }
}
export default Form
