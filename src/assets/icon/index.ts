import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

interface Icon {
  component: any;
  name: string;
}

const FoodIcon: Icon = {
  component: MaterialCommunityIcons,
  name: 'food-fork-drink',
};
const SettingIcon: Icon = { component: Fontisto, name: 'player-settings' };
const InfoIcon: Icon = { component: AntDesign, name: 'update-later' };
const HomeIcon: Icon = { component: FontAwesome, name: 'home' };
const LoginIcon: Icon = { component: Entypo, name: 'login' };
const BackIcon: Icon = {
  component: Ionicons,
  name: 'arrow-back-circle-outline',
};

export { FoodIcon, SettingIcon, InfoIcon, HomeIcon, LoginIcon, BackIcon, Icon };
