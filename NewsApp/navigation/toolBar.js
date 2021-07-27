import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

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
                        <View style={[styles.imageview,{backgroundColor: focused?'#29b6f6':'white'}]} >
                            <Image
                                source={require('../images/home.png')}
                                resizeMode='contain'
                                style={styles.image}
                            />
                        </View>
                    )
                }}
            />
            <Bar.Screen
                name="Saved News"
                component={SavedNews}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.imageview,{backgroundColor: focused?'#29b6f6':'white'}]} >
                            <Image
                                source={require('../images/group.png')}
                                resizeMode='contain'
                                style={styles.image}
                            />
                        </View>
                    )
                }}
            />
            <Bar.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.imageview,{backgroundColor: focused?'#29b6f6':'white'}]} >
                            <Image
                                source={require('../images/settings.png')}
                                resizeMode='contain'
                                style={styles.image}
                            />
                        </View>
                    )
                }}
            />
        </Bar.Navigator>
    )
}

const styles = StyleSheet.create({
    imageview: {
        borderRadius: 17.5,
        width: 35,
        height: 35
    },
    image: {
        width: '100%',
        height: '100%',
        tintColor:'black'
    }
});

export default ToolBar;
