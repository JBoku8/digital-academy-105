import { LoginForm } from '../../components/auth';

export const Login = (props) => {
  return (
    <div className="row p-2">
      <h1>Welcome Back...</h1>
      <div className="col-md-12 my-2 shadow p-3">
        <LoginForm />
      </div>
    </div>
  );
};
