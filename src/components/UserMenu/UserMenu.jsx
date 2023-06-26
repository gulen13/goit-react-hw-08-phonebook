import { Box, Button } from '@mui/material';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/AuthOperations';
import { selectUser } from 'redux/auth/AuthSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = async () => {
    try {
      await dispatch(logOut()).unwrap();
      toast.success(`Good bye ${user.name} !`);
    } catch (error) {
      toast.error('Error Login');
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <p>Welcome, {user.name} </p>
      <Button variant="contained" type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Box>
  );
};
