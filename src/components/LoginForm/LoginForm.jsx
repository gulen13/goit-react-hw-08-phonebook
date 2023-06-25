import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/AuthOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
      toast.success('Welcome User!');
    } catch (error) {
      toast.error('Error Login');
    }

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
