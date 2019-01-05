export default (
  state = {
    error: false,
    processed: false,
    data: []
  },
  action
) => {
  switch (action.type) {
    case "FETCH_MISSIONS_COMPLETED":
      return {
        ...state,
        processed: true,
        data: action.payload
      };
    default:
      return state;
  }
};
