import { GET_POSTS } from '../actions/types';
const initialState = {
    seller: [],
}

export default function(state= initialState, action){
    switch(action.type){
          case GET_POSTS:
          return {
             ...state,
             seller: action.payload,
          };
          default: return state;
   }
};