import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/AuthOperations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { toast } from 'react-hot-toast';

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

  const notify = () => toast.success('Registered successfuly!');

  const onSubmit = ({ name, email, password }) => {
    dispatch(
      registerUser({
        name: name,
        email: email,
        password: password,
      })
    );
    notify();
    resetField('name');
    resetField('email');
    resetField('password');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <label>
        Username
        <input type="text" {...register('name')} />
        <p>{errors.name?.message}</p>
      </label>
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
      <button type="submit" disabled={!isDirty}>
        Register
      </button>
    </form>
  );
};
