import { createDrawerNavigator } from '@react-navigation/drawer';
import Chat from '../pages/Chat';
import Profile from '../pages/Profile';
import BottomTagNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="Profile" component={BottomTagNavigator} />
    </Drawer.Navigator>
  );
}