import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/AuthOperations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { toast } from 'react-hot-toast';
import { Box, Button } from '@mui/material';
import Input from '@mui/joy/Input';

const validationSchema = object({
  name: string().min(4).required(),
  email: string().email().required(),
  password: string().min(6).required(),
}).required();

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = ({ name, email, password }) => {
    dispatch(
      registerUser({
        name: name,
        email: email,
        password: password,
      })
    )
      .unwrap()
      .then(response => {
        toast.success(`Registered successfuly, ${response.user.name}!`);
      })
      .catch(() => toast.error('Something went wrong...'));
    resetField('name');
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
            Username
            <Input
              required
              type="text"
              variant="outlined"
              color="info"
              sx={{
                mt: 1,
                width: 250,
              }}
              {...register('name')}
            />
            <p>{errors.name?.message}</p>
          </label>
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
              type="password"
              variant="outlined"
              color="info"
              sx={{
                mt: 1,
                width: 250,
              }}
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
            Register
          </Button>
        </Box>
      </form>
    </Box>
  );
};
