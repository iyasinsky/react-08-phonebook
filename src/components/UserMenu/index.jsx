// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper } from './index.styled';

export const UserMenu = () => {
  // const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <p>Welcome, {user.name}</p>
      <button type="button">
        {/* <button type="button" onClick={() => dispatch(logOut())}> */}
        Logout
      </button>
    </Wrapper>
  );
};
