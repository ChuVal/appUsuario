import cuid from "cuid";
const INITIAL_STATE = {
  appId: cuid()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
