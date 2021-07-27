import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';

import Overview from '../screens/Overview';
import SavedNews from '../screens/SavedNews';
import Settings from '../screens/Settings';

const Bar = createBottomTabNavigator();

const ToolBar = () => {
    return (
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
                component={Overview}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../images/home.png')} />
                        </View>
                    )
                }}
            />
            <Bar.Screen
                name="Saved News"
                component={SavedNews}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../images/group.png')} />
                        </View>
                    )
                }}
            />
            <Bar.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../images/settings.png')} />
                        </View>
                    )
                }}
            />
        </Bar.Navigator>
    )
}

export default ToolBar;
