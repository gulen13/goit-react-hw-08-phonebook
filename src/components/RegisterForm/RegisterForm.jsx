import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/AuthOperations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { toast } from 'react-hot-toast';
import { Box, Button, TextField } from '@mui/material';

const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegExp = /^(?=(?:.*[a-zA-Z]){4})(?=(?:.*\d){4})[a-zA-Z\d]+$/;

const validationSchema = object({
  name: string()
    .min(4, 'Name must be at least 4 symbols.')
    .required('Name is required.'),
  email: string()
    .matches(emailRegExp, 'Email must be a valid email.')
    .required('Email is required.'),
  password: string()
    .matches(
      passwordRegExp,
      'Password must be at least 8 characters long and including min 4 letters and min 4 numbers.'
    )
    .required('Password is required.'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
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
        reset();
      })
      .catch(() => toast.error('Something went wrong...'));
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
            label="Name"
            error={!isValid && Boolean(errors.name)}
            helperText={!isValid && errors.name?.message}
            focused
            {...register('name')}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            size="small"
            label="Email"
            error={!isValid && Boolean(errors.email)}
            helperText={!isValid && errors.email?.message}
            focused
            {...register('email')}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            size="small"
            label="Password"
            error={!isValid && Boolean(errors.password)}
            helperText={!isValid && errors.password?.message}
            focused
            {...register('password')}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: 250,
            }}
            disabled={!isDirty || !isValid}
          >
            Register
          </Button>
        </Box>
      </form>
    </Box>
  );
};
