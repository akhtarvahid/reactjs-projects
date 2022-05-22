import { FETCH_WEATHER_SUCCESS } from '../actions/action-types';

export default function(state = [], action) {
    switch(action.type){
     case FETCH_WEATHER_SUCCESS:
        return [action.payload, ...state];
        
    }
    return state;
}