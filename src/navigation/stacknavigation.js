import React from 'react';
import {View, Text, LogBox} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Product from '../screens/Product';
import Product_detail from '../screens/product_detail';

const Stack = createStackNavigator();

export default function StackNavigator() {
  LogBox.ignoreAllLogs();
  LogBox.ignoreLogs(['warning:....']);
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  return (
    <Stack.Navigator
      // initialRouteName="Club_Complete_profile"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#fff',
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        presentation: 'transparentModal',
        transitionConfig: () => ({
          containerStyleLight: {},
          containerStyleDark: {},
        }),
      }}>
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          headerShown: true,
          headerTitle: 'Products',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen
        name="Details"
        component={Product_detail}
        options={{
          headerShown: true,
          headerTitle: 'Details',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
    </Stack.Navigator>
  );
}
