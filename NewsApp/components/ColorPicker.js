import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { switchColor } from '../store/actions/colors';


const ColorPicker = props => {
    const dispatch = useDispatch();
    const combineStyles = StyleSheet.flatten([styles.color, props.style]);

    return (
        <TouchableOpacity
            style={[combineStyles, { backgroundColor: props.backgroundColor }]}
            onPress={() => {
                dispatch(switchColor(props.color))
            }}
        />
    )
};


const styles = StyleSheet.create({
    color: {
        width: 60,
        height: 60,
        marginHorizontal: 15,
        borderRadius: 10,
    }
});

export default ColorPicker;
