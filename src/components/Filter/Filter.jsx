import { Input } from 'components/PhonebookForm/PhonebookForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from 'redux/phoneBookSlice';
export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(({ filter }) => filter); // получаем значение стейта - filter

  return (
    <label>
      Find Contacts by name
      <br />
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => dispatch(filterAction(target.value))}
      />
    </label>
  );
}
