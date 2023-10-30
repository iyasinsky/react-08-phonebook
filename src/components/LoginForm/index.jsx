// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
import { Form } from './index.styled';

export const LoginForm = () => {
  // const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log('email:', form.elements.email.value);
    console.log('password:', form.elements.password.value);
    // dispatch(
    //   logIn({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </Form>
  );
};
