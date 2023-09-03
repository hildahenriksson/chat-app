import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Camera from '../pages/Camera';
import Profile from '../pages/Profile';
import { Ionicons, Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTagNavigator() {
  return (
    <Tab.Navigator
        screenOptions={{
        headerShown: false
    }}>
      <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Ionicons name="person-circle" size={34} color="black" />
          ),
        }}/>
      <Tab.Screen name="Camera" component={Camera} 
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Entypo name="camera" size={30} color="black" />
          ),
        }}/>
    </Tab.Navigator>
  );
}