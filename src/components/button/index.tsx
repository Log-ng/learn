import React from 'react';
import { Pressable, Text } from 'react-native';

interface ButtonProps {
  onPress: (param: any) => void;
  title: string;
  backgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, backgroundColor }) => {
  return (
    <Pressable
      onPress={onPress}
      className={`items-center justify-center px-[32px] py-[12px] rounded ${backgroundColor}`}
    >
      <Text className='text-lg font-bold text-white '>{title}</Text>
    </Pressable>
  );
};

export default Button;
