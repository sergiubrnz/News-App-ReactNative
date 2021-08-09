import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { switchColor } from '../store/actions/colors';


const ColorPicker = props => {
    const dispatch = useDispatch();
    const combineStyles = StyleSheet.flatten([styles.color, props.style]);

    return (
        <View style={styles.general}>
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


const styles = StyleSheet.create({
    color: {
        width: 60,
        height: 60,
        marginHorizontal: 15,
        borderRadius: 10
    },
    general: {
        flex: 1
    }
});

export default ColorPicker;
