let initialState = {
  posts: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...state,
        posts: action.payload
      };
    case "ADD_ITEM":
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case "DELETE_ITEM":
      const res = state.posts.filter(item => item !== action.payload);
      return {
        ...state,
        posts: res
      };
    default:
      return state;
  }
}
