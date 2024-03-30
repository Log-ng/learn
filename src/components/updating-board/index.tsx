import React from 'react';
import {
  Text,
  View,
  TextInput,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import { BackIcon } from '../../assets/icon';
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
              color='#4b8f9f'
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
        placeholder='Field'
        selectionColor='#4b8f9f'
      />
      <Pressable
        onPress={onPress}
        className='items-center justify-center px-[32px] py-[12px] rounded bg-mainColor'
      >
        <Text className='text-lg font-bold text-white '>Save</Text>
      </Pressable>
    </View>
  );
};

export default Updating;
