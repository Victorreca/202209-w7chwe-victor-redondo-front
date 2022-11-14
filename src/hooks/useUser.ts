import { UserCredentials } from "../types";

const useUser = () => {
  const url = process.env.REACT_APP_API_URL!;

  const registerUser = async (userData: UserCredentials) => {
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
    } catch (error: unknown) {
      throw new Error(
        `There was an error with the register: ${(error as Error).message}`
      );
    }
  };
  return { registerUser };
};

export default useUser;
