import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from '../../containers';
import { HomeIcon, LoginIcon } from '../../assets/icon';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NAVIGATORS_LABEL } from '..';
import MainStack from './MainStack';

const Tab = createBottomTabNavigator();

const BottomTab: React.FC = () => {
  return (
    <View className='flex-1'>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={NAVIGATORS_LABEL.mainStack}
          screenOptions={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
          }}
          sceneContainerStyle={{ backgroundColor: 'white' }}
        >
          <Tab.Screen
            name={NAVIGATORS_LABEL.mainStack}
            component={MainStack}
            options={{
              title:
                typeof NAVIGATORS_LABEL.main == 'string'
                  ? NAVIGATORS_LABEL.main
                  : '',
              header: () => null,
              tabBarIcon: ({ focused }) => (
                <HomeIcon.component
                  name={HomeIcon.name}
                  size={30}
                  color='#4b8f9f'
                  style={focused ? styles.navActive : styles.nav}
                />
              ),
              tabBarLabel: ({ focused, color }) => (
                <Text
                  style={{ color: focused ? '#4b8f9f' : color, fontSize: 10 }}
                >
                  {NAVIGATORS_LABEL.main}
                </Text>
              ),
            }}
          />

          <Tab.Screen
            name={NAVIGATORS_LABEL.login}
            component={LoginScreen}
            options={{
              title:
                typeof NAVIGATORS_LABEL.login == 'string'
                  ? NAVIGATORS_LABEL.login
                  : '',
              tabBarIcon: ({ focused }) => (
                <LoginIcon.component
                  className='bg-red-500'
                  name={LoginIcon.name}
                  size={30}
                  color='#4b8f9f'
                  style={focused ? styles.navActive : styles.nav}
                />
              ),
              tabBarLabel: ({ focused, color }) => (
                <Text
                  style={{ color: focused ? '#4b8f9f' : color, fontSize: 10 }}
                >
                  {NAVIGATORS_LABEL.login}
                </Text>
              ),
            }}
          />
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
    borderStyle: 'solid',
    borderColor: 'white',
  },
});
export default BottomTab;
