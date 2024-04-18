import React from 'react';
import { View } from 'react-native';
import { SizeType } from '../../common';

interface HorizontalLineProps {
  size?: SizeType;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({ size }) => {
  const optionSize = size ?? 'small';
  switch (optionSize) {
    case SizeType.small: {
      return (
        <View className='flex flex-row items-center'>
          <View className='flex-1 h-[1px] bg-white rounded-right-md' />
          <View className='flex-1 h-[1px] bg-white rounded-right-md' />
        </View>
      );
    }
    case SizeType.medium: {
      return (
        <View className='flex flex-row items-center'>
          <View className='flex-1 h-[3px] bg-white rounded-right-md' />
          <View className='flex-1 h-[3px] bg-white rounded-right-md' />
        </View>
      );
    }
    case SizeType.large: {
      return (
        <View className='flex flex-row items-center'>
          <View className='flex-1 h-[5px] bg-white rounded-right-md' />
          <View className='flex-1 h-[5px] bg-white rounded-right-md' />
        </View>
      );
    }
  }
};

export default HorizontalLine;
