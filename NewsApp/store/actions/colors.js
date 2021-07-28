export const SWITCH_COLOR = 'SWITCH_COLOR';

export const switchColor = (color) => {
    return (dispatch) => {
        dispatch({
            type: SWITCH_COLOR,
            color: color,
        });
    };
};