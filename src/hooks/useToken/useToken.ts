import { useCallback } from "react";
import { userLoginActionCreator } from "../../../src/redux/features/userLoginSlice/userLoginSlice";
import { useAppDispatch } from "../../redux/hooks";
import decodeToken from "../../utils/decodeToken";

const useToken = () => {
  const dispatch = useAppDispatch();

  const checkToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = decodeToken(token);
      dispatch(userLoginActionCreator({ ...user, token }));
    }
  }, [dispatch]);

  const removeToken = () => {
    localStorage.removeItem("token");
  };
  return { getToken: checkToken, removeToken };
};

export default useToken;
