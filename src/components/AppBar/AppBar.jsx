import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/AuthSelectors';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export const AppBarStyled = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box>
      <AppBar
        sx={{ boxShadow: 1, borderRadius: 2, bgcolor: '#2c817b' }}
        position="static"
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
