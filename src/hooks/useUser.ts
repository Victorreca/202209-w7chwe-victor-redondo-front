import { userLoginActionCreator } from "../redux/features/userLoginSlice/userLoginSlice";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import {
  JwtCustomPayload,
  UserCredentialsData,
  UserRegisterData,
} from "../types";
import decodeToken from "../utils/decodeToken";

const useUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const url = process.env.REACT_APP_API_URL!;

  const registerUser = async (userData: UserCredentialsData) => {
    try {
      const responseData = await fetch(`${url}/users/register`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!responseData.ok) {
        throw new Error("There is an strange error");
      }
      navigate("/home");
    } catch (error: unknown) {
      throw new Error(
        `There was an error with the register: ${(error as Error).message}`
      );
    }
  };

  const userLogin = async (loginData: UserRegisterData) => {
    try {
      const loginResponse = await fetch(`${url}/users/login`, {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "content-type": "application/json",
        },
      });

      if (loginResponse.status === 401) {
        throw new Error("There is a login error");
      }

      const { accessToken } = await loginResponse.json();
      const loggedUser: JwtCustomPayload = decodeToken(accessToken);

      dispatch(
        userLoginActionCreator({
          ...loggedUser,
          username: loginData.username,
          token: accessToken,
        })
      );

      localStorage.setItem("token", accessToken);
    } catch (error: unknown) {
      throw new Error(`It's not possible to login`);
    }
  };
  return { registerUser, userLogin };
};
export default useUser;
