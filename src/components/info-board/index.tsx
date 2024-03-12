import React from 'react';
import { Text, View } from 'react-native';

interface BoardProps {
  title: string;
  info: string;
}

const Board: React.FC<BoardProps> = (props: BoardProps) => {
  const { title, info } = props;
  return (
    <>
      <View className='flex flex-row items-center space-x-2'>
        <View className='basis-1/2'>
          <Text className=' bg-red-600'>Food</Text>
        </View>
        <View className='basis-1/2'>
          <Text className=' bg-yellow-500'>2.100.00</Text>
        </View>
      </View>
    </>
  );
};

export default Board;
