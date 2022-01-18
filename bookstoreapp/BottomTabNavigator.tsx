import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import DashboardView from './DashboardView';
function BottomTabNavigator(props) {
   const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{activeTintColor: "blue",inactiveTintColor: "gray"}}>
                <Tab.Screen name="Home" component={DashboardView} options=
                {{tabBarIcon: ({color}) => (<Icon name="home" color={color} tvParallaxProperties={undefined} />)}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomTabNavigator;