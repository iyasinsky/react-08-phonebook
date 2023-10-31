import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const useContacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return useSelector(selectContacts);
};
