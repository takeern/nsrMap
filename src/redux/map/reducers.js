import { GET_MAP } from './constans';

const initState = {
    barMap: null,
};
  
export default (state = initState, action) => {
    switch(action.type) {
        case(GET_MAP): {
            console.log(action);
            return {
                ...state,
                barMap: action.payload,
            };
        }
        default: return state;
    }
};
