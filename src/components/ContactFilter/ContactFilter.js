import PropTypes from "prop-types"

const ContactFilter = ({ filterInput, filterValue }) => {
  return (
    <label>
      <input type="text" name="filter" value={filterValue} onChange={filterInput}></input>
    </label>
  )
}
export default ContactFilter

ContactFilter.propTypes = {
  filterInput: PropTypes.func,
  filterValue: PropTypes.string,
}
