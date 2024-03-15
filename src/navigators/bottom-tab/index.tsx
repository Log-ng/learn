import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen, LoginScreen } from '../../containers';
import { HomeIcon, LoginIcon } from '../../assets/icon';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <View className='flex-1'>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Main'
          screenOptions={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
          }}
          sceneContainerStyle={{ backgroundColor: 'white' }}
        >
          <Tab.Screen
            name='Main'
            component={MainScreen}
            options={{
              title: 'Main',
              header: () => null,
              tabBarIcon: ({ focused }) => (
                <HomeIcon
                  name='home'
                  size={35}
                  color='#4b8f9f'
                  style={focused ? styles.navActive : styles.nav}
                />
              ),
            }}
          />

          <Tab.Screen
            name='Login'
            component={LoginScreen}
            options={{
              title: 'Login',
              tabBarIcon: ({ focused }) => (
                <LoginIcon
                  className='bg-red-500'
                  name='login'
                  size={35}
                  color='#4b8f9f'
                  style={focused ? styles.navActive : styles.nav}
                />
              ),
            }}
          />

          <Tab.Screen
            name='Test1'
            component={LoginScreen}
            options={{
              title: 'Login',
              tabBarIcon: ({ focused }) => (
                <LoginIcon
                  name='login'
                  size={35}
                  color='#4b8f9f'
                  style={focused ? styles.navActive : styles.nav}
                />
              ),
            }}
          />

          <Tab.Screen
            name='Test2'
            component={LoginScreen}
            options={{
              title: 'Login',
              tabBarIcon: ({ focused }) => (
                <LoginIcon
                  name='login'
                  size={35}
                  color='#4b8f9f'
                  style={focused ? styles.navActive : styles.nav}
                />
              ),
            }}
          />

          {/* <Tab.Screen name='Login' component={LoginScreen} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  navActive: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#4b8f9f',
    borderWidth: 1.5,
  },
  nav: {
    borderRadius: 5,
    backgroundColor: 'white',
    borderTopWidth: 1.5,
  },
});
export default BottomTab;
