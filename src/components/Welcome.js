const Welcome = ({ user, age }) => {
  return (
    <div>
      <h3>Welcome, {user}.</h3>
      <h4>Your age is {age}.</h4>
    </div>
  );
};

export default Welcome;
