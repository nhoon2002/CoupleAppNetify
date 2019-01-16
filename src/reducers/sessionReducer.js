export default (
  state = {
    loggedin: false,
    db_currentUser: "",
    users: []
  },
  action
) => {
  switch (action.type) {
    case "SESSION_EXISTS": {
      return {
        ...state,
        loggedin: true,
        db_currentUser: action.payload
      };
    }
    case "SESSION_NULL": {
      return {
        ...state,
        loggedin: false,
        db_currentUser: "",
        users: []
      };
    }
    case "FETCH_USERS_COMPLETED": {
      return {
        ...state,
        users: action.payload
      };
    }
    default:
      return state;
  }
};
