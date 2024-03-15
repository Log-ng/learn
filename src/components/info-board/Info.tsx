import React from 'react';
import { View, Text } from 'react-native';

interface InfoProp {
  firstField: string;
  secondFiled: string;
  isBold?: boolean;
}

const Info: React.FC<InfoProp> = ({ firstField, secondFiled, isBold }) => {
  const classNameText =
    'text-[#716D7D] text-[16px] ' + (isBold ? 'font-bold text-[18px]' : '');
  return (
    <View className='flex-row'>
      <View className='flex-1 items-start justify-center'>
        <Text className={classNameText}>{firstField}</Text>
      </View>
      <View className='flex-1 items-start justify-center'>
        <Text className={classNameText + ' pl-3'}>{secondFiled}</Text>
      </View>
    </View>
  );
};

export default Info;
