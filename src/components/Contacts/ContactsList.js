import PropTypes from "prop-types"
import Contact from "./Contact"
import shortid from "shortid"
import s from "./ContactsList.module.css"

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => {
        let contactid = shortid.generate()
        return <Contact key={contactid} contact={contact} deleteContact={deleteContact} />
      })}
    </ul>
  )
}
export default ContactsList

ContactsList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
}
