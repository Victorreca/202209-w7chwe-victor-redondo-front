import styled from "styled-components";

export const RegisterStyled = styled.form`
  text-align: center;
  input {
    border-radius: 10px;
    width: 80%;
    border: none;
  }
  .button {
    margin-top: 25px;
    border-radius: 10px;
    border: none;

    &:hover {
      background: ${(props) => props.theme.colorHoverSubmit};

      text-decoration: none;
    }
  }
  label {
    display: block;
    color: ${(props) => props.theme.mainColorFonts};
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .form__label {
    font-size: 18px;
  }

  @media (min-width: 700px) {
    input {
      width: 30%;
    }
  }
`;
