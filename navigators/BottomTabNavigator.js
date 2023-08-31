import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Camera from '../pages/Camera';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

export default function BottomTagNavigator() {
  return (
    <Tab.Navigator
        screenOptions={{
        headerShown: false
    }}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Camera" component={Camera} />
    </Tab.Navigator>
  );
}