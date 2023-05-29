export const simpleAction =
  () => (dispatch: (arg0: { type: string }) => void) => {
    dispatch({
      type: "SIMPLE_ACTION",
    });
  };
