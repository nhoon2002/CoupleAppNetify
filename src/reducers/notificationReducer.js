export default (
  state = {
    show: false,
    msg: "",
    type: ""
  },
  action
) => {
  switch (action.type) {
    case "SWITCH_NOTIFICATION_ON":
      return {
        ...state,
        show: action.payload.show,
        msg: action.payload.msg,
        type: action.payload.type
      };
    case "SWITCH_NOTIFICATION_OFF":
      return {
        ...state,
        show: action.payload.show,
        msg: action.payload.msg
      };
    default:
      return state;
  }
};
