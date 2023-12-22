export const reducer = (
  state = JSON.parse(localStorage.getItem("todos")),
  action
) => {
  switch (action.type) {
    case "UPDATE":
      state = JSON.parse(localStorage.getItem("todos"));
      return state;
    default:
      return state;
  }
};
