import { colors } from './colors';
import {
  AddNewSite,
  DetailsScreen,
  Home,
  Reactions,
  Login,
  SelectImagesSite,
  SelectLocation,
  SignUp,
  SiteInformation,
  WorkShedules,
} from '../../containers';

const options = {
  title: '',
  headerTintColor: colors.white,
  headerHideShadow: true,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
export const stackList = [
  {
    component:AddNewSite,
    name:"AddNewSite",
    options: {...options, headerShown: false},
  },
  {
    component: Login,
    name: 'Login',
    options: {...options, headerShown: false},
  },
  {
    component:SignUp,
    name:"SignUp",
    options: {...options, headerShown: false},
  },
  {
    component:SelectLocation,
    name:"SelectLocation",
    options: {...options, headerShown: false},
  },
  {
    component:Home,
    name:"Home",
    options: {...options, headerShown: false},
  },
  {
    component:DetailsScreen,
    name:"DetailsScreen",
    options: {...options, headerShown: false},
  },
  {
    component:Reactions,
    name:"Reactions",
    options: {...options, headerShown: false},
  },
  // {
  //   component:AddNewSite,
  //   name:"AddNewSite",
  //   options: {...options, headerShown: false},
  // },
  {
    component:WorkShedules,
    name:"WorkShedules",
    options: {...options, headerShown: false},
  },
  {
    component:SiteInformation,
    name:"SiteInformation",
    options: {...options, headerShown: false},
  },
  {
    component:SelectImagesSite,
    name:"SelectImagesSite",
    options: {...options, headerShown: false},
  },
];
