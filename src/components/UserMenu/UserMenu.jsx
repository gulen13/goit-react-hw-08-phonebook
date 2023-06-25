import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/AuthOperations';
import { selectUser } from 'redux/auth/AuthSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      <p>Welcome, {user.name} </p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
