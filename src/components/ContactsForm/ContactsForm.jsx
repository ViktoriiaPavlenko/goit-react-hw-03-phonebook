import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactsForm.module.css';
import PropTypes from 'prop-types';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  nameId = nanoid();
  telId = nanoid();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({[name]: value,});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor={this.nameId}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            id={this.nameId}
          />
        </label>

        <label className={styles.label} htmlFor={this.telId}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            id={this.telId}
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactsForm;