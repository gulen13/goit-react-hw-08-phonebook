import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/AuthOperations';
// import { useAuth } from 'hooks';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const { user } = useAuth();

  return (
    <div>
      <p>Welcome, .... </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
