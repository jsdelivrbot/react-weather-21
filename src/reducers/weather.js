import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    
    switch (action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ]; //add payload data array on current state
    }

    return state;
}