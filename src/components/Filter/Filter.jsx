import { useDispatch, useSelector } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import {
  FilterInput,
  FilterLabel,
  InputContainer,
  IconUser,
  TitleLable,
} from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <FilterLabel>
      <TitleLable>Find contacts by name</TitleLable>
      <InputContainer>
        <IconUser>
          <FiSearch />
        </IconUser>
        <FilterInput
          type="text"
          value={filter}
          onChange={getFilteredContacts}
        />
      </InputContainer>
    </FilterLabel>
  );
};
