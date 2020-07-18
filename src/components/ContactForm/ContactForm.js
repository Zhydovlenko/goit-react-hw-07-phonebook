import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import contactsOperations from '../../redux/contacts/contactsOperations';

import styles from './ContactForm.module.css';
import 'react-toastify/dist/ReactToastify.css';

class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;
    if (contacts.some(contact => contact.name === name)) {
      toast.configure();
      toast.error(name + ` is alredy in contacts`);
    } else {
      this.props.onAddContact(name, number);
    }

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <div>
          <label className={styles.formLabel}>
            Name
            <input
              className={styles.formInput}
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
            />
          </label>
        </div>
        <div>
          <label className={styles.formLabel}>
            Number
            <input
              className={styles.formInput}
              type="tel"
              value={number}
              onChange={this.handleChange}
              name="number"
            />
          </label>
        </div>
        <button type="submit" disabled={!name.length || !number.length}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
