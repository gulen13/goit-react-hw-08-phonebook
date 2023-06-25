import ContactListItem from 'components/ContactListItem/ContactListItem';
import { ContactListStyle } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectPhones } from 'redux/phonebook/selector';
import { deleteContact } from 'redux/phonebook/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const phones = useSelector(selectPhones);
  const filter = useSelector(selectFilter);
  const filteredPhones = phones.filter(phone =>
    phone.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactListStyle>
      {filteredPhones.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            contactName={name}
            contactNumber={number}
            onClick={() => dispatch(deleteContact(id))}
          />
        );
      })}
    </ContactListStyle>
  );
};

export default ContactList;
