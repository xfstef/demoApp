import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/Login';
import CalendarScreen from '../screens/Calendar';

const defaultNavOptions = {
    headerStyle: {
      backgroundColor: 'grey'
    },
    headerTitleStyle: {
      fontFamily: 'playfair'
    },
    headerBackTitleStyle: {
      fontFamily: 'playfair'
    },
    headerTintColor: 'white'
};

const MainNavigator = createStackNavigator({
        Login: LoginScreen,
        Calendar: CalendarScreen
    },
    {
      defaultNavigationOptions: defaultNavOptions
    }
);

export default createAppContainer(MainNavigator);
