import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Bar } from 'react-native-progress';
import { FoodIcon, SettingIcon } from '../../assets/icon';
import AboutBoard from './AboutBoard';

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
    <View className='bg-[#c5c5c5] rounded-lg'>
      <View className='bg-[#4b8f9f] p-2 rounded-lg'>
        <View className='flex flex-row items-center'>
          <View className='mx-1 basis-1/2 mt-1'>
            <FoodIcon
              style={{ color: 'white' }}
              name='food-fork-drink'
              size={35}
            />
          </View>
          <View className='basis-1/2 pr-[5px]'>
            <Text className='text-right w-full'>
              <SettingIcon name='player-settings' size={15} color='white' />
            </Text>
          </View>
        </View>

        <View className='flex flex-row items-center space-x-2 mx-2 mt-1'>
          <View className='basis-1/2'>
            <Text className='text-white font-medium text-lg'>Food</Text>
          </View>
          <View className='basis-1/2'>
            <Text className='text-right w-full text-white text-lg'>
              2.100.000
            </Text>
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

      <View className='p-4'>
        <AboutBoard />
      </View>
    </View>
  );
};

export default Board;
