import { View, SafeAreaView } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import BottomTab from './src/navigators/bottom-tab';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

const App = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <BottomTab />
    </SafeAreaView>
  );
};

export default App;
