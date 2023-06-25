import ContactListItem from 'components/ContactListItem/ContactListItem';
import { ContactListStyle } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectPhones } from 'redux/selector';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const phones = useSelector(selectPhones);
  const filter = useSelector(selectFilter);
  const filteredPhones = phones.filter(phone =>
    phone.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactListStyle>
      {filteredPhones.map(({ id, name, phone }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            contactName={name}
            contactNumber={phone}
            onClick={() => dispatch(deleteContact(id))}
          />
        );
      })}
    </ContactListStyle>
  );
};

export default ContactList;
