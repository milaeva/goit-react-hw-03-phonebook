import PropTypes from "prop-types"
import s from "./ContactsList.module.css"

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={s.item}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        type="button"
        className={s.button}
        id={contact.id}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  )
}
export default Contact

Contact.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func,
}
