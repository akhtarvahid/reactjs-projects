var arr = ["Item 1", "Item 2", "Item 3"];
export const getItems = () => dispatch => {
  dispatch({
    type: "GET_ITEMS",
    payload: arr
  });
};

export const addItem = item => dispatch => {
  dispatch({
    type: "ADD_ITEM",
    payload: item
  });
};
export const deleteItem = item => dispatch => {
  dispatch({
    type: "DELETE_ITEM",
    payload: item
  });
};
