import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import ScanScreen from './Scan';
import OutputScreen from './outputScreen';
import WheelScreen from './WheelScreen';


import ScanForm from './ScanForm';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppStack() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Scan" component={ScanScreen} />
      <Drawer.Screen name="Output" component={OutputScreen} options={{ drawerLabel: () => null, title: null, drawerIcon: () => null }} />
      <Drawer.Screen name="ScanForm" component={ScanForm} options={{ drawerLabel: () => null, title: null, drawerIcon: () => null }} />
      {/* <Drawer.Screen name="WheelScreen" component={WheelScreen} options={{ drawerLabel: () => null, title: null, drawerIcon: () => null,headerShown:false }} /> */}

    </Drawer.Navigator>
  );
}

export default function MainComponent() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Splash"headerShown='false'>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="AppStack" component={AppStack} />
        <Stack.Screen name="WheelScreen" component={WheelScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}