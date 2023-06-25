import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/AuthOperations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { Button } from '@mui/material';

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

  const notify = () => toast.success('Welcome User!');

  const onSubmit = ({ email, password }) => {
    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
    notify();
    resetField('email');
    resetField('password');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <label>
        Email
        <input type="email" {...register('email')} />
        <p>{errors.email?.message}</p>
      </label>
      <label>
        Password
        <input type="password" {...register('password')} />
        <p>{errors.password?.message}</p>
      </label>
      <Button variant="contained" type="submit" disabled={!isDirty}>
        Log In
      </Button>
    </form>
  );
};
