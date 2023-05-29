import { Dispatch, AnyAction } from "redux";

export const getAllCases = (dispatch: Dispatch<AnyAction>, data: any) => {
  dispatch({ type: "GET_ALL_CASES", payload: data });
};
