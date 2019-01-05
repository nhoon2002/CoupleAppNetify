export default (
  state = {
    status: false,
    type: ""
  },
  action
) => {
  switch (action.type) {
    case "SWITCH_MODAL_ON":
      return {
        ...state,
        status: action.payload.status,
        type: action.payload.type
      };
    case "SWITCH_MODAL_OFF":
      return {
        ...state,
        status: action.payload.status,
        type: action.payload.type
      };
    default:
      return state;
  }
};
