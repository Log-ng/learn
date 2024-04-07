import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../../containers';
import { NAVIGATORS_LABEL } from '..';
import { Updating } from '../../components';

const Stack = createNativeStackNavigator();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATORS_LABEL.main}>
      <Stack.Screen
        name={NAVIGATORS_LABEL.main}
        component={MainScreen}
        options={{
          title:
            typeof NAVIGATORS_LABEL.main == 'string'
              ? NAVIGATORS_LABEL.main
              : '',
          header: () => null,
        }}
      />
      <Stack.Screen
        name={NAVIGATORS_LABEL.update}
        component={Updating}
        options={{
          title:
            typeof NAVIGATORS_LABEL.update == 'string'
              ? NAVIGATORS_LABEL.update
              : '',
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
