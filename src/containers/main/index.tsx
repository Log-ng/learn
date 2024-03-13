import { View } from 'react-native';
import { Board } from '../../components';

const MainScreen = () => {
  return (
    <>
      <View className='p-4'>
        <Board info='Long' title='long_title' />
      </View>
    </>
  );
};

export default MainScreen;
