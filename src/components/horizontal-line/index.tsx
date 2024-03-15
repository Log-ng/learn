import React from 'react';
import { View, Text } from 'react-native';
import { DEFAULT_COLOR_LINE, DEFAULT_HEIGHT_LINE } from '../../common';

interface HorizontalLineProp {
  color?: string;
  height?: string;
}

const HorizontalLine: React.FC<HorizontalLineProp> = (props) => {
  const color = props.color ?? DEFAULT_COLOR_LINE;
  const height = props.height ?? DEFAULT_HEIGHT_LINE;

  return (
    <>
      <View className='flex flex-row items-center'>
        <View
          className={`flex-1 h-[${height}px] bg-${color} rounded-right-md`}
        />
        <View
          className={`flex-1 h-[${height}px] bg-${color} rounded-left-md`}
        />
      </View>
    </>
  );
};

export default HorizontalLine;
