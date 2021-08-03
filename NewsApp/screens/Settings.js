import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Blue, Green, Purple, Orange } from '../Colors';
import ColorPicker from '../components/ColorPicker';
import { useSelector } from 'react-redux';

const Settings = props => {
    const theme = useSelector((state) => state.colorReducer.color);

    return (
        <View style={styles.content}>
            <Text style={styles.text}>Theme color:</Text>
            <View style={styles.components}>
                <ColorPicker
                    color={Blue}
                    backgroundColor='rgba(14,104,195,1)'
                    style={[theme.mode === 'blue' ? styles.selected : {}]}
                />
                <ColorPicker
                    color={Green}
                    backgroundColor='rgba(86,143,86,1)'
                    style={[theme.mode === 'green' ? styles.selected : {}]}
                />
                <ColorPicker
                    color={Orange}
                    backgroundColor='rgba(229,103,23,1)'
                    style={[theme.mode === 'orange' ? styles.selected : {}]}
                />
                <ColorPicker
                    color={Purple}
                    backgroundColor='rgba(124,82,149,1)'
                    style={[theme.mode === 'purple' ? styles.selected : {}]}
                />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    components: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        margin: 15
    },
    selected: {
        borderWidth: 2.5,
        borderColor: 'black'
    }
});

export default Settings;
