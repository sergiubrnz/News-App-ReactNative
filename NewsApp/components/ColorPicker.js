import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { switchColor } from '../store/actions/colors';
import Styles from './styles/ColorPickerStyles';


const ColorPicker = props => {
    const dispatch = useDispatch();
    const combineStyles = StyleSheet.flatten([Styles.color, props.style]);

    return (
        <View style={Styles.general}>
            <TouchableOpacity
                style={[combineStyles, { backgroundColor: props.backgroundColor }]}
                activeOpacity={.85}
                onPress={() => {
                    dispatch(switchColor(props.color))
                }}
            />
        </View>
    )
};

export default ColorPicker;
