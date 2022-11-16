import jwtDecode from "jwt-decode";
import { JwtCustomPayload } from "../types";

const decode = (token: string) => {
  const payloadToken: JwtCustomPayload = jwtDecode(token);
  return {
    token,
    id: payloadToken.id,
    username: payloadToken.username,
  };
};

export default decode;
