import { View, ScrollView } from 'react-native';
import { Board } from '../../components';

const MainScreen = () => {
  return (
    <ScrollView alwaysBounceVertical>
      <View className='p-4'>
        <Board info='Long' title='long_title' />
      </View>
      <View className='p-4'>
        <Board info='Long' title='long_title' />
      </View>
      <View className='p-4'>
        <Board info='Long' title='long_title' />
      </View>
    </ScrollView>
  );
};

export default MainScreen;
