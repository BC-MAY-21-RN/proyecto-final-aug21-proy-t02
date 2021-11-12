import React from 'react';
import {Login} from './src/containers/Login';
import {SignUp} from './src/containers/SignUp/';
import { SelectLocation } from './src/containers/SelectLocation';
import {Home} from './src/containers/Home';
import {Reactions} from './src/containers/Reactions/';
import { DetailsScreen } from './src/containers/DetailsScreen';
import { AddNewSite } from './src/containers/AddNewSite';
import { WorkShedules } from './src/containers/WorkSchedules';
import { SiteInformation } from './src/containers/SiteInformation';
import { SelectImagesSite } from './src/containers/SelectImagesSite ';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator>
        <Stack.Screen name="Login"  component={Login} options={{header: () => null}} />
        <Stack.Screen name="SignUp"  component={SignUp}  options={{header: () => null}} />
        <Stack.Screen name="SelectLocation"  component={SelectLocation}  options={{header: () => null}} />
        <Stack.Screen name="Home"  component={Home}  options={{header: () => null}} />
        <Stack.Screen name="DetailsScreen"  component={DetailsScreen }  options={{header: () => null}} />
        <Stack.Screen name="Reactions"  component={Reactions}  options={{header: () => null}} />
        <Stack.Screen name="AddNewSite"  component={AddNewSite}  options={{header: () => null}} />
        <Stack.Screen name="WorkShedules"  component={WorkShedules}  options={{header: () => null}} />
        <Stack.Screen name="SiteInformation"  component={SiteInformation}  options={{header: () => null}} />
        <Stack.Screen name="SelectImagesSite"  component={SelectImagesSite}  options={{header: () => null}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
