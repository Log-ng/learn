import React from 'react';
import { View } from 'react-native';
import { DEFAULT_COLOR_LINE, DEFAULT_HEIGHT_LINE } from '../../common';

interface HorizontalLineProp {
  color?: string;
  height?: string;
}

const HorizontalLine: React.FC<HorizontalLineProp> = (props) => {
  const color = props.color ?? DEFAULT_COLOR_LINE;
  const height = props.height ?? DEFAULT_HEIGHT_LINE;

  const left = `flex-1 h-[${height}px] bg-${color} rounded-right-md`;
  const right = `flex-1 h-[${height}px] bg-${color} rounded-left-md`;

  return (
    <>
      <View className='flex flex-row items-center'>
        <View className={left} />
        <View className={right} />
      </View>
    </>
  );
};

export default HorizontalLine;
