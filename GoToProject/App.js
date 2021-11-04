import React from 'react';
import {Home} from './src/containers/home';
import {Login} from './src/containers/Login';
import { Menu } from './src/components/menu';
import { SignUp } from './src/containers/SignUp';
import { WorkShedules } from './src/containers/WorkSchedules';
const App = () => {
  return (
    <SignUp />
    <WorkShedules></WorkShedules>
  );
};
export default App;
