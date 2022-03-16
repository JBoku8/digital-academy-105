import { RegisterForm } from '../../components/auth';

export const Register = (props) => {
  return (
    <div className="row p-2">
      <h1>Register Page</h1>
      <div className="col-md-12 my-2 shadow p-3">
        <RegisterForm />
      </div>
    </div>
  );
};
