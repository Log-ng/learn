import React from 'react';
import { View, TextInput, GestureResponderEvent, Text } from 'react-native';
import Button from '../button';
import { BackIcon, COLOR_THEME } from '../../assets';
import { NAVIGATORS_LABEL } from '../../navigators';
import { Link } from '@react-navigation/native';

const Updating: React.FC = () => {
  const [number, onChangeNumber] = React.useState('');

  const onPress = (event: GestureResponderEvent) => {
    // onChangeNumber(event.target.);
  };
  return (
    <View className='p-4'>
      <View className='flex-row items-center mb-5'>
        <View className='items-center'>
          <Link
            to={{
              // @ts-ignore
              screen: NAVIGATORS_LABEL.main,
            }}
          >
            <BackIcon.component
              name={BackIcon.name}
              size={30}
              color={COLOR_THEME}
            />
          </Link>
        </View>
        <View className='flex-1 items-start'>
          <Text className='text-breadcrumb'>{NAVIGATORS_LABEL.main}</Text>
        </View>
      </View>

      <TextInput
        className='rounded-md border-[1.5px] h-[65px] mb-4 border-mainColor text-base px-3'
        onChangeText={onChangeNumber}
        value={number}
        placeholder='Section'
        selectionColor={COLOR_THEME}
      />

      <Button onPress={onPress} title='Save' backgroundColor='bg-mainColor' />
      <View className='mt-2'>
        <Button
          onPress={() => {}}
          title='Cancel'
          backgroundColor='bg-red-600'
        />
      </View>
    </View>
  );
};

export default Updating;
