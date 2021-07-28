import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Overview from '../screens/Overview';
import NewsDetails from '../screens/NewsDetails';
import SavedNews from '../screens/SavedNews';

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
            options={{ headerShown: false }}А
                name="Saved News"
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

