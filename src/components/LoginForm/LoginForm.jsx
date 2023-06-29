import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/AuthOperations';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ email, password }) => {
    dispatch(
      logIn({
        email: email,
        password: password,
      })
    )
      .unwrap()
      .then(response => {
        toast.success(`Wellcome, ${response.user.name}!`);
        reset();
      })
      .catch(() => toast.error('No such user!'));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 12,
        ml: 'auto',
        mr: 'auto',
        border: 1,
        borderRadius: 2,
        p: 2,
        maxWidth: 300,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            width: 300,
          }}
        >
          <TextField
            variant="outlined"
            required
            fullWidth
            size="small"
            label="Email"
            focused
            {...register('email')}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            size="small"
            label="Password"
            focused
            {...register('password')}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: 250,
            }}
          >
            Log In
          </Button>
        </Box>
      </form>
    </Box>
  );
};
