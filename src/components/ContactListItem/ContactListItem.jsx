import PropTypes from 'prop-types';
import { ContactItem, BtnDel } from './ContactListItem.styled';

const ContactListItem = ({ contactName, contactNumber, onClick }) => {
  return (
    <ContactItem>
      {contactName}: {contactNumber}
      <BtnDel type="button" onClick={onClick}>
        Delete
      </BtnDel>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactListItem;
