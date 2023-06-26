import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/AuthOperations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { Box, Button } from '@mui/material';
import Input from '@mui/joy/Input';

const validationSchema = object({
  email: string().email().required(),
  password: string().min(6).required(),
}).required();

export const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

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
      })
      .catch(() => toast.error('No such user!'));

    resetField('email');
    resetField('password');
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
          <label>
            Email
            <Input
              required
              type="email"
              variant="outlined"
              color="info"
              sx={{
                mt: 1,
                width: 250,
              }}
              {...register('email')}
            />
            <p>{errors.email?.message}</p>
          </label>

          <label>
            Password
            <Input
              required
              variant="outlined"
              color="info"
              sx={{
                mt: 1,
                width: 250,
              }}
              type="password"
              {...register('password')}
            />
            <p>{errors.password?.message}</p>
          </label>
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: 250,
            }}
            disabled={!isDirty}
          >
            Log In
          </Button>
        </Box>
      </form>
    </Box>
  );
};
