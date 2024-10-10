import styled from 'styled-components';

const StyledButton = styled.button`
  // sin desestructurar
  background-color: ${props => props.color};
  padding: ${props => props.padding};
  border: none;

  // con desestructuración (las dos formas son lo mismo)
  background-color: ${({ $color }) => $color};
  padding: ${({ $padding }) => $padding};
  border-radius: ${({ $rounded }) => ($rounded ? '1rem' : 'none')};
  border: none;

  @media (hover: hover) {
    &:hover {
      color: white;
    }
  }

  // Si queremos aplicar el hover solo a un botón:

  @media (hover: hover) {
    ${({ $hover }) =>
      $hover && //si el hover es true, se añade color: aquamarine
      `
        &:hover {
      color: aquamarine;
    }
    `}
  }

  @media screen and (width) {
  }
`;

export { StyledButton };
