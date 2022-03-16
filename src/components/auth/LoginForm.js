import { useForm } from 'react-hook-form';

import { Form, Button } from '../../atoms';

import { useAuthProvider } from '../../providers/AuthProvider';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuthProvider();

  const onSubmit = (loginData) => {
    console.log('__loginData__', loginData);
    login(loginData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign In</h2>
      <hr />

      <div className="col-7 m-auto">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register('email', {
              required: true,
            })}
          />
          {errors.email && (
            <div id="emailHelp" className="form-text text-danger">
              Email is required
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register('password', {
              required: true,
            })}
          />
          {errors.password && (
            <div id="passwordHelp" className="form-text text-danger">
              Password is required
            </div>
          )}
        </div>

        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </div>
    </Form>
  );
};
