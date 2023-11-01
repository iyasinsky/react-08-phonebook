import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/selector';
import { filterValue } from 'redux/filter/slice';
import { Label } from './index.styled';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(filterValue(e.target.value))}
        placeholder="Enter a name to search for"
      />
    </Label>
  );
};
