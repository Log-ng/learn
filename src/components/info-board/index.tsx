import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Bar } from 'react-native-progress';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface BoardProps {
  title: string;
  info: string;
}

const Board: React.FC<BoardProps> = (props: BoardProps) => {
  const { title, info } = props;

  const [progress, setProgress] = useState(0.4);

  const handlePress = () => {
    setProgress((prevProgress) => prevProgress + 0.1);
  };

  return (
    <View className='bg-[#4b8f9f] p-2 rounded-lg'>
      <View className='mx-1 mt-3'>
        <MaterialCommunityIcons
          style={{ color: 'white' }}
          name='food-fork-drink'
          size={40}
        />
      </View>

      <View className='flex flex-row items-center space-x-2 mx-2 mt-1'>
        <View className='basis-1/2'>
          <Text className='text-white'>Food</Text>
        </View>
        <View className='basis-1/2'>
          <Text className='text-right w-full text-white'>2.100.00</Text>
        </View>
      </View>
      <View className='mx-2 items-center flex flex-row mt-4'>
        <View className='justify-star w-5/6'>
          <Bar progress={progress} width={280} color='white' />
        </View>
        <View className='w-1/6'>
          <Text className='text-right text-white'>{progress * 100}%</Text>
        </View>
      </View>
    </View>
  );
};

export default Board;
