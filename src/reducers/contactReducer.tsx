export interface AllContactData {
  AllContacts: any;
}
const initialState: AllContactData = {
  AllContacts: [],
};
export default (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "ADD_CONTACTS":
      console.log("coming here ====>", action.payload, state.AllContacts);
      let data = state.AllContacts;
      data.push(action.payload)
      return {
        ...state,
        AllContacts: data,
      };
    case "UPDATE_CONTACTS":
      console.log("coming here ====>", action.payload);
      return {
        ...state,
        AllContacts: action.payload,
      };
    default:
      return state;
  }
};
