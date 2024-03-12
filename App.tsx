import { View } from 'react-native';
import MainScreen from './src/containers/main';
import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <MainScreen />
    </View>
  );
}
