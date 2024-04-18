import React from 'react';
import {
  View,
  TextInput,
  GestureResponderEvent,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Button from '../button';
import { BackIcon, COLOR_THEME } from '../../assets';
import { NAVIGATORS_LABEL } from '../../navigators';
import { Link } from '@react-navigation/native';
import HorizontalLine from '../horizontal-line';
import { SizeType } from '../../common';

const Updating: React.FC = () => {
  const [number, onChangeNumber] = React.useState('');

  const onPress = (event: GestureResponderEvent) => {
    // onChangeNumber(event.target.);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className='p-4'>
        <View className='flex-row items-center mb-2'>
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
        <HorizontalLine size={SizeType.medium} />

        <View className='mt-3'>
          <Text className='text-neutral-500 font-bold text-lg'>Name:</Text>
        </View>
        <View className='mt-1'>
          <TextInput
            className='rounded-md border-[1.5px] h-[65px] mb-2 border-mainColor text-base px-3'
            onChangeText={onChangeNumber}
            value={number}
            placeholder='Section'
            selectionColor={COLOR_THEME}
          />
        </View>

        <View className='mt-3'>
          <Text className='text-neutral-500 font-bold text-lg'>Total:</Text>
        </View>
        <View className='mt-1'>
          <TextInput
            className='rounded-md border-[1.5px] h-[65px] mb-2 border-mainColor text-base px-3'
            onChangeText={onChangeNumber}
            value={number}
            placeholder='Section'
            selectionColor={COLOR_THEME}
          />
        </View>

        <View className='mt-3'>
          <Text className='text-neutral-500 font-bold text-lg'>
            Consumption:
          </Text>
        </View>
        <View className='mt-1'>
          <TextInput
            className='rounded-md border-[1.5px] h-[65px] mb-2 border-mainColor text-base px-3'
            onChangeText={onChangeNumber}
            value={number}
            placeholder='Section'
            selectionColor={COLOR_THEME}
          />
        </View>

        <View className='mt-2'>
          <Button
            onPress={onPress}
            title='Save'
            backgroundColor='bg-mainColor'
          />
          <Button
            onPress={() => {}}
            title='Cancel'
            backgroundColor='bg-red-600'
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Updating;
