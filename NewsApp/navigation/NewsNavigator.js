import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Overview from '../screens/Overview';
import NewsDetails from '../screens/NewsDetails';
import SavedNews from '../screens/SavedNews';
import Settings from '../screens/Settings';

const Stack = createStackNavigator();

const OverviewStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="News Overview"
                component={Overview}
            />
            <Stack.Screen
                name="Article Details"
                component={NewsDetails}
            />
        </Stack.Navigator>
    )
}

export { OverviewStack };

const FavNewsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: true }} 
                name="Saved Articles"
                component={SavedNews}
            />
            <Stack.Screen
                name="Article Details"
                component={NewsDetails}
            />
        </Stack.Navigator>
    )
}

export { FavNewsStack };

const SettingsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: true, headerTitleAlign: 'center' }}
                name="Settings"
                component={Settings}
            />
        </Stack.Navigator>
    )
}

export { SettingsStack };

