import { StyledUser } from './user.styles';

const User = ({ name, email }) => {
  return (
    <StyledUser>
      <h2>{name}</h2>
      <p>{email}</p>
    </StyledUser>
  );
};

export default User;
