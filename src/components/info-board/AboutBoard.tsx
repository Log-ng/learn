import { Text, View } from 'react-native';
import Info from './Info';

const AboutBoard = () => {
  return (
    <View className='rounded-b-lg'>
      <View className='flex'>
        <Info firstField='Opening + Inflows:' secondFiled='Outflows:' />
        <Info firstField='5.000.000' secondFiled='2.900.00' isBold />
        <View className='pt-5'>
          <Info firstField='Time:' secondFiled='Recommendation:' />
          <Info firstField='14 days left' secondFiled='150.000/day' isBold />
        </View>
      </View>
    </View>
  );
};

export default AboutBoard;
