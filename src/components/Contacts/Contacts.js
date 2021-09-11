import React from 'react';
import PropTypes from 'prop-types';
import style from './Contacts.module.css';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux';

const Contacts = ({ contacts, onDeleteContacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={style.item}>
        <p>{name}</p>
        <span>{number}</span>
        <button
          type="button"
          onClick={() => onDeleteContacts(id)}
          className={style.button}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
  onDeleteContacts: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContacts: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
