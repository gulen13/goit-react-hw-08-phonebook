import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/AuthOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      <p>Welcome, .... </p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
