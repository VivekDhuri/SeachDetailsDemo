import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import CommentsSreen from '../Screens/CommentsScreen';
// import UserScreen from '../Screens/UserScreen';

import MainScreen from '../SevenEleven/Components/MainScreen';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Person List" component={MainScreen} />
        {/* <RootStack.Screen name="Users" component={UserScreen} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
