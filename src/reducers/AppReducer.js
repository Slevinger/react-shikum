const ACTIVE_SCREEN_CHANGED = "screen_changed";
const GETTING_DATA = "getting_data";
const DONE_GETTING_DATA = "done_getting_data";

const INITIAL_STATE = {
  activeScreen: "default",
  getting_data: false,
  data: [],
  selectedUser: ""
};

export default (state = INITIAL_STATE, action) => {
  let obj = {};
  switch (action.type) {
    case ACTIVE_SCREEN_CHANGED:
      obj = { ...state, getting_data: false, activeScreen: action.payload };
      break;
    case GETTING_DATA:
      obj = { ...state, getting_data: true };
      break;
    case DONE_GETTING_DATA:
      obj = { ...state, getting_data: false, data: action.payload };
      break;
    default:
      obj = state;
      break;
  }
  console.log(obj);
  return obj;
};
