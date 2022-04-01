export const login = (userInfo) => {
  return {
    type: "LOGIN",
    payload: userInfo,
  };
};
