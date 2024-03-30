import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Bar } from 'react-native-progress';
import { FoodIcon, SettingIcon } from '../../assets/icon';
import AboutBoard from './AboutBoard';
import HorizontalLine from '../horizontal-line';
// import { NAVIGATORS, NAVIGATORS_LABEL } from '../../navigators';
import { useRouter } from 'expo-router';
import { Link } from '@react-navigation/native';

interface BoardProps {
  title: string;
  info: string;
}

const Board: React.FC<BoardProps> = ({ title, info }) => {
  const router = useRouter();

  const [progress, setProgress] = useState(0.4);

  return (
    <View className='bg-[#C4C4C4] rounded-lg'>
      <View className='bg-[#4b8f9f] p-2 rounded-lg'>
        <View className='flex flex-row items-center'>
          <View className='mx-1 basis-1/2 mt-1'>
            <FoodIcon.component
              style={{ color: 'white' }}
              name={FoodIcon.name}
              size={35}
            />
          </View>
          <View className='basis-1/2 pr-[10px]'>
            <Text
              className='text-right w-full'
              // onPress={() => router.replace(`src/containers/main`)}
            >
              <Link
                to={{
                  screen: 'Update',
                  // params: { id: 'jane' },
                  // screen: 'Main'
                }}
              >
                <SettingIcon.component
                  name={SettingIcon.name}
                  size={15}
                  color='white'
                />
              </Link>
            </Text>
          </View>
        </View>

        <View className='flex flex-row items-center space-x-2 mx-2 mt-1'>
          <View className='basis-1/2'>
            <Text className='text-white font-medium text-lg'>Food</Text>
          </View>
          <View className='basis-1/2 pr-[6px]'>
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

        <View className='p-6 pb-4'>
          <HorizontalLine />
        </View>

        <View className='px-2 pb-2'>
          <Text className='text-center text-white from-stone-100 text-base'>
            Next period: 5.000.000 - 01/03/2024
          </Text>
        </View>
      </View>

      <View className='p-4'>
        <AboutBoard />
      </View>
    </View>
  );
};

export default Board;
