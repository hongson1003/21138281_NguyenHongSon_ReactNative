import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { NativeWindStyleSheet } from 'nativewind';
import DetailSamsung from '../../components/week5/detail';
import SamsungScreen from '../../components/week5/samsung';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={SamsungScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Detail"
          component={DetailSamsung}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
