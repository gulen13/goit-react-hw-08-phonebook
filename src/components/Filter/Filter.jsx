import { Label, Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { setFiler } from 'redux/phonebook/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      <h3>Find contacts name</h3>
      <Input
        type="text"
        name="filter"
        onChange={e => dispatch(setFiler(e.target.value))}
      />
    </Label>
  );
};

export default Filter;
