import React from 'react';
import { View, Text } from 'react-native';
import { Blue, Green, Purple, Orange } from '../utils/Colors';
import ColorPicker from '../components/ColorPicker';
import { useSelector } from 'react-redux';
import Styles from './styles/SettingsScreen';

const Settings = props => {
    const theme = useSelector((state) => state.colorReducer.color);

    return (
        <View style={Styles.content}>
            <Text style={Styles.text}>Theme color:</Text>
            <View style={Styles.components}>
                <ColorPicker
                    color={Blue}
                    backgroundColor='rgba(14,104,195,1)'
                    style={[theme.mode === 'blue' ? Styles.selected : {}]}
                />
                <ColorPicker
                    color={Green}
                    backgroundColor='rgba(86,143,86,1)'
                    style={[theme.mode === 'green' ? Styles.selected : {}]}
                />
                <ColorPicker
                    color={Orange}
                    backgroundColor='rgba(229,103,23,1)'
                    style={[theme.mode === 'orange' ? Styles.selected : {}]}
                />
                <ColorPicker
                    color={Purple}
                    backgroundColor='rgba(124,82,149,1)'
                    style={[theme.mode === 'purple' ? Styles.selected : {}]}
                />
            </View>
        </View>
    )
};

export default Settings;
