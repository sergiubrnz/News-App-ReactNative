import { Blue } from "../../utils/Colors";
import { SWITCH_COLOR } from "../actions/colors";

const initialState = {
    color: Blue
}

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_COLOR:
            return { color: action.color };
        default:
            return state;
    }
};

export default colorReducer;
