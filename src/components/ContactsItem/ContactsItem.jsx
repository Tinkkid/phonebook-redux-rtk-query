import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { useDeleteContactsMutation } from 'redux/contactsSlice';
import { Name, Number, BtnDelete } from './ContactsItem.styled';

export const ContactsItem = ({ id, name, number }) => {
  const [deleteContacts, { isLoading }] = useDeleteContactsMutation();

  return (
    <>
      <Name>{name}:</Name> <Number>{number}</Number>
      <BtnDelete
        id={id}
        type="button"
        disabled={isLoading}
        onClick={() => {
          deleteContacts(id);
          Notiflix.Notify.failure('Сontact has been deleted');
        }}
      >
        Delete
      </BtnDelete>
    </>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
