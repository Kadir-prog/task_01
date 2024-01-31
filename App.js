import React from 'react';
import {
  LogBox,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StackNavigator from './src/navigation/stacknavigation';

const Root = createNativeStackNavigator();

const App = () => {
  
  const scheme = useColorScheme();
  LogBox.ignoreAllLogs();
	LogBox.ignoreLogs(['warning:....']);
	LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  
  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Root.Screen
          name="Root"
          options={{headerShown: false}}
          component={StackNavigator}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App
