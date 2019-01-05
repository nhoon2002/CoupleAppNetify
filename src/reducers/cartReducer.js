export default (
  state = {
    error: false,
    processed: false,
    data: []
  },
  action
) => {
  switch (action.type) {
    case "FETCH_CART_COMPLETED":
      return {
        ...state,
        processed: true,
        data: action.payload
      };
    case "ADDED_TO_CART":
      return {
        ...state,
        processed: true
      };
    case "REMOVED_FROM_CART":
      return {
        ...state,
        processed: true
      };
    default:
      return state;
  }
};
