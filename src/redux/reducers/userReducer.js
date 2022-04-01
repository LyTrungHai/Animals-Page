const initState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
};

const useReducer = (state = initState, action) => {
  if (action.type === "LOGIN") {
    state.user = action.payload;
    console.log(state.user);
    localStorage.setItem("user", JSON.stringify(state.user));
  }
  return state;
};

export default useReducer;
