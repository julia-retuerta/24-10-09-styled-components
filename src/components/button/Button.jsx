import { StyledButton } from './button.styles';

const Button = ({ children, color, padding, rounded, hover }) => {
  return (
    <StyledButton $color={color} $padding={padding} $rounded={rounded} $hover={hover}>
      {children}
    </StyledButton>
  );
};

export default Button;
