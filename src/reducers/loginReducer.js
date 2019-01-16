export default (
  state = {
    // signinginGoogle: false,
    // signinginFacebook: false,
    signinginLocal: false,
    db_accountDetails: "",
    error: ""
  },
  action
) => {
  switch (action.type) {
    // case "GOOGLE_CREATE_ACCOUNT": {
    //   return {
    //     ...state,
    //     signinginGoogle: true
    //   };
    // }
    // case "GOOGLE_CREATE_ACCOUNT_SUCCESS": {
    //   return {
    //     ...state,
    //     signinginGoogle: false,
    //     db_accountDetails: action.payload.dbUser
    //   };
    // }
    // case "GOOGLE_CREATE_ACCOUNT_ERROR": {
    //   return {
    //     ...state,
    //     signinginGoogle: false,
    //     error: action.payload
    //   };
    // }
    // case "FACEBOOK_CREATE_ACCOUNT": {
    //   return {
    //     ...state,
    //     signinginFacebook: true
    //   };
    // }
    case "LOCAL_CREATE_ACCOUNT": {
      return {
        ...state,
        signinginLocal: true
      };
    }
    case "LOCAL_ACCOUNT_SUCCESS": {
      return {
        ...state,
        signinginLocal: false,
        db_accountDetails: action.payload.dbUser
      };
    }
    case "LOCAL_ACCOUNT_ERROR": {
      return {
        ...state,
        signinginLocal: false,
        error: action.payload
      };
    }
    case "FACEBOOK_CREATE_ACCOUNT_SUCCESS": {
      return {
        ...state,
        signinginFacebook: false,
        db_accountDetails: action.payload.dbUser
      };
    }
    case "FACEBOOK_CREATE_ACCOUNT_ERROR": {
      return {
        ...state,
        signinginFacebook: false,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
};
