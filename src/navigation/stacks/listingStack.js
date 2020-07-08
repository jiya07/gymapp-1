import React from "react";

import Stack from './stack';
import RouteNames from "../RouteNames";
import Profile from "../../screens/App/Profile";
import {appTheme} from "../../constants/colors";
import Enroll from "../../screens/App/Enroll";
import fonts from "../../constants/fonts";
import UserListing from "../../screens/App/UserListing";
import openDrawerButton from "../openDrawerButton";
import store from "../../store/configureStore";
import {userTypes} from "../../constants/appConstants";

const listing = (props) => {
  const userData = store.getState().user.userData;
  let {userType} = userData;
  const listingTitle = userType === userTypes.USER ? 'Trainers' : 'Users';

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteNames.UserListing}
        component={UserListing}
        options={{
          title:listingTitle,
          headerTintColor: appTheme.brightContent,
          headerStyle: {
            backgroundColor: appTheme.darkBackground,
          },
          headerTitleStyle:{
            fontFamily: fonts.PoppinsRegular
          },
          headerLeft: openDrawerButton

        }}/>
      <Stack.Screen name={RouteNames.Profile} component={Profile}
                    options={{title: '', headerTintColor: appTheme.brightContent, headerTransparent: true}}/>
      <Stack.Screen name={RouteNames.Enroll} component={Enroll}
                    options={{
                      title: 'Slots',
                      headerTintColor: appTheme.brightContent,
                      headerStyle: {
                        backgroundColor: appTheme.darkBackground,
                      },
                      headerTitleStyle:{
                        fontFamily: fonts.PoppinsRegular
                      },
                    }}/>
    </Stack.Navigator>
  );
}

export default listing;