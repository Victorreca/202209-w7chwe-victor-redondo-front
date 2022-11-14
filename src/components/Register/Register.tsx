import React, { useState } from "react";
import { RegisterStyled } from "./RegisterStyled";
import useUser from "../../hooks/useUser";
import { UserCredentialsData } from "../../types";

const Register = (): JSX.Element => {
  const { registerUser } = useUser();

  const initialFormData = {
    username: "",
    password: "",
  };
  const [initialForm, setInitialForm] = useState(initialFormData);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInitialForm({
      ...initialForm,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserCredentialsData = {
      username: initialForm.username,
      password: initialForm.password,
    };

    registerUser(formDataToSubmit);
  };

  return (
    <>
      <h2 className="form__title">Welcome to Lenkiden</h2>
      <h3 className="form__title">Register form:</h3>
      <RegisterStyled onSubmit={handleSubmit}>
        <div className="form__container">
          <label className="form__label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="form__container">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>

        <button className="button" type="submit">
          Sign up
        </button>
      </RegisterStyled>
    </>
  );
};

export default Register;
