import { registerActionCreator, registerReducer } from "./userRegisterSlice";

describe("Given a registerReducer", () => {
  const user = {
    username: "Paco",
    password: "1234",
    picture: "paco.png",
  };
  describe("When it's invoked with register", () => {
    test("Then it should return the user 'Paco'", () => {
      const action = registerActionCreator(user);

      const initialState = {
        username: "",
        password: "",
        picture: "",
      };

      const expectedState = user;
      const newState = registerReducer(initialState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
