import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { List, Item } from '../ContactList/ContactList.styled';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const { data: contacts } = useFetchContactsQuery();

  const getFiltredContacts = () => {
    const normalizeFilter = filter.trim().toLowerCase();
    return contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(normalizeFilter)
    );
  };
  const filtredContacts = getFiltredContacts();

  return (
    <List>
      {contacts &&
        filtredContacts.map(({ name, number, id }) => {
          return (
            <Item key={id}>
              <ContactsItem id={id} name={name} number={number} />
            </Item>
          );
        })}
    </List>
  );
};
