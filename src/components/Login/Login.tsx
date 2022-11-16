import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginStyled } from "./LoginStyled";
import useUser from "../../hooks/useUser";
import { UserRegisterData } from "../../types";

const Login = (): JSX.Element => {
  const initialFormData: UserRegisterData = {
    username: "",
    password: "",
  };
  const [error, setError] = useState("");
  const [initialForm, setData] = useState(initialFormData);
  const { userLogin } = useUser();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...initialForm,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserRegisterData = {
      username: initialForm.username,
      password: initialForm.password,
    };
    try {
      await userLogin(formDataToSubmit);
    } catch (error: unknown) {
      setError((error as Error).message);
    }
  };

  return (
    <>
      <h2 className="form__title">Welcome to Lenkiden</h2>
      <h3 className="form__title">Login form:</h3>
      <LoginStyled onSubmit={handleSubmit}>
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
        <div className="register-info">
          If you don't have an account yet.
          <span className="form__link">
            <div>
              <Link to={"/register"}>Click here to register</Link>
            </div>
          </span>
        </div>
        {error && <span>{error}</span>}
      </LoginStyled>
    </>
  );
};

export default Login;
