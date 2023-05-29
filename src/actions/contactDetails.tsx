import { Dispatch, AnyAction } from "redux";

export const addContact = (dispatch: Dispatch<AnyAction>, data: any) => {
  dispatch({ type: "ADD_CONTACTS", payload: data });
};

export const updateContact = (dispatch: Dispatch<AnyAction>, data: any) => {
  dispatch({ type: "UPDATE_CONTACTS", payload: data });
};
