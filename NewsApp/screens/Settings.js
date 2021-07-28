import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { switchColor } from '../store/actions/colors';
import { Blue, Green, Purple, Orange } from '../Colors';

const Settings = props => {
    const dispatch = useDispatch();

    return (
        <View style={styles.content}>
            <Text style={styles.text}>Theme color:</Text>
            <View style={styles.components}>
                <TouchableOpacity
                    style={[styles.color, { backgroundColor: 'rgba(14,104,195,1)' }]}
                    onPress={() => dispatch(switchColor(Blue))}
                />
                <TouchableOpacity
                    style={[styles.color, { backgroundColor: 'rgba(86,143,86,1)' }]}
                    onPress={() => dispatch(switchColor(Green))}
                />
                <TouchableOpacity
                    style={[styles.color, { backgroundColor: 'rgba(229,103,23,1)' }]}
                    onPress={() => dispatch(switchColor(Orange))}
                />
                <TouchableOpacity
                    style={[styles.color, { backgroundColor: 'rgba(124,82,149,1)' }]}
                    onPress={() => dispatch(switchColor(Purple))}
                />
            </View>
        </View>
    )

};


const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    color: {
        width: 60,
        height: 60,
        marginHorizontal: 15,
        borderRadius: 10
    },
    components: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        margin: 15
    }
});

export default Settings;
