export const reducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE":
      state = JSON.parse(localStorage.getItem("todos"));
      return state;
    default:
      return state;
  }
};
