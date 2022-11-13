import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterStyled } from "./RegisterStyled";

const Register = (): JSX.Element => {
  const initialFormData = {
    username: "",
    password: "",
  };
  const [initialForm, setInitialForm] = useState(initialFormData);

  const navigate = useNavigate();

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInitialForm({
      ...initialForm,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    navigate("/users");
  };

  return (
    <>
      <h2 className="form__title">Welcome to Lenkiden</h2>
      <RegisterStyled onSubmit={handleSubmit}>
        <div className="form__container">
          <label className="form__label" htmlFor="user">
            Username
          </label>
          <input
            type="text"
            name="user"
            id="user"
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
            name="password"
            id="password"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>

        <button className="button" type="button">
          Sign up
        </button>
      </RegisterStyled>
    </>
  );
};

export default Register;
