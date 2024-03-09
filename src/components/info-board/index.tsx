import { Text } from 'react-native';

interface boaraProps {
  title: string;
  info: string;
}

const Board = (props: boaraProps) => {
  const { title, info } = props;
  return <Text className=''>{title}</Text>;
};

export default Board;
