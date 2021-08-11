import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { OverviewStack, FavNewsStack, SettingsStack } from './NewsNavigator';
import { Colors } from '../utils/Colors';
const Bar = createBottomTabNavigator();

const ToolBar = () => {
    const theme = useSelector((state) => state.colorReducer.color);

    return (
        <NavigationContainer>
            <Bar.Navigator
                tabBarOptions={{
                    showLabel: false,
                    style: {
                        backgroundColor: 'white',
                        borderRadius: 7,
                        height: '10%'
                    }
                }}
            >
                <Bar.Screen
                    name="Home"
                    component={OverviewStack}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={[styles.imageview, { backgroundColor: focused ? theme.COLOR : Colors.backgroundColor }]} >
                                <Image
                                    source={require('../images/home.png')}
                                    resizeMode='contain'
                                    style={[styles.image, { tintColor: focused ? theme.SECONDARY_COLOR : '#000000' }]}
                                />
                            </View>
                        )
                    }}
                />
                <Bar.Screen
                    name="Saved News"
                    component={FavNewsStack}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={[styles.imageview, { backgroundColor: focused ? theme.COLOR : Colors.backgroundColor }]} >
                                <Image
                                    source={require('../images/group.png')}
                                    resizeMode='contain'
                                    style={[styles.image, { tintColor: focused ? theme.SECONDARY_COLOR : '#000000' }]}
                                />
                            </View>
                        )
                    }}
                />
                <Bar.Screen
                    name="Settings"
                    component={SettingsStack}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={[styles.imageview, { backgroundColor: focused ? theme.COLOR : Colors.backgroundColor }]} >
                                <Image
                                    source={require('../images/settings.png')}
                                    resizeMode='contain'
                                    style={[styles.image, { tintColor: focused ? theme.SECONDARY_COLOR : '#000000' }]}
                                />
                            </View>
                        )
                    }}
                />
            </Bar.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    imageview: {
        borderRadius: 17.5,
        width: 35,
        height: 35,
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default ToolBar;
