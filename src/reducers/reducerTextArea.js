export const reducerTextArea = (state = "", action) => {
  switch (action.type) {
    case "CHANGE":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
