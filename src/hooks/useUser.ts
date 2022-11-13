import { UserRegisterCredentials } from "../types";

const useUser = () => {
  const url = process.env.REACT_APP_API_URL!;

  const registerUser = async (userData: UserRegisterCredentials) => {
    fetch(`${url}/users/register`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  return { registerUser };
};

export default useUser;
