import { Visiable_Filter } from "../../contants"
import { SET_FILTER } from "../actionsTypes";


const initialState = Visiable_Filter.ALL;
const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
            }
    }
    
}
export default visibilityFilter;