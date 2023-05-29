export interface GetAllCasesWorld {
  AllCasesWorld: any;
}
const initialState: GetAllCasesWorld = {
  AllCasesWorld: {},
};
export default (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "GET_ALL_CASES":
      console.log("coming here ====>", action.payload);
      return {
        ...state,
        AllCasesWorld: action.payload,
      };
    default:
      return state;
  }
};
