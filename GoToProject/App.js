import React from 'react';
// import {Login} from './src/containers/Login';
// import {SignUp} from './src/containers/SignUp/';
// import { SelectLocation } from './src/containers/SelectLocation';
// import {Home} from './src/containers/Home';
// import {Reactions} from './src/containers/Reactions/';
// import { DetailsScreen } from './src/containers/DetailsScreen';
// import { AddNewSite } from './src/containers/AddNewSite';
// import { WorkShedules } from './src/containers/WorkSchedules';
// import { SiteInformation } from './src/containers/SiteInformation';
// import { SelectImagesSite } from './src/containers/SelectImagesSite';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigation from './src/navigators';

// const Stack = createNativeStackNavigator();
const App = () => {
  const header = {header: () => null}
  return (
    // <NavigationContainer initialRouteName="Login">
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login} options={header} />
    //     <Stack.Screen name="SignUp" component={SignUp} options={header} />
    //     <Stack.Screen name="SelectLocation" component={SelectLocation} options={header} />
    //     <Stack.Screen name="Home" component={Home} options={header}/>
    //     <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={header} />
    //     <Stack.Screen name="Reactions" component={Reactions} options={header} />
    //     <Stack.Screen name="AddNewSite" component={AddNewSite} options={header} />
    //     <Stack.Screen name="WorkShedules" component={WorkShedules} options={header} />
    //     <Stack.Screen name="SiteInformation" component={SiteInformation} options={header} />
    //     <Stack.Screen name="SelectImagesSite" component={SelectImagesSite} options={header} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Navigation />
  );
};
export default App;
