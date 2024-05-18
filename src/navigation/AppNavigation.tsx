import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home/HomeScreen'
import WishlistScreen from '../screens/Wishlist/WishlistScreen'
import BookScreen from '../screens/Book/BookScreen'
import ChatScreen from '../screens/Chat/ChatScreen'
import WelcomeScreen from '../screens/Welcome/WelcomeScreen'
import SignupScreen from '../screens/Signup/SignupScreen'
import LogInScreen from '../screens/LogIn/LogInScreen'
import ForgotPasswordScreen from '../screens/LogIn/ForgotPasswordScreen'
import ResetPasswordScreen from '../screens/LogIn/ResetPasswordScreen'
import OtpSignUpNumberScreen from '../screens/Otp/OtpSignUpNumberScreen'
import OtpForgotPasswordScreen from '../screens/Otp/OtpForgotPasswordScreen'
import SuccessPasswordScreen from '../screens/Success/SuccessPasswordScreen'
import SuccessNumberScreen from '../screens/Success/SuccessNumberScreen'
import CurrentLocationScreen from '../screens/CurrentLocation/CurrentLocationScreen'
import ProfileScreen from '../screens/Profile/ProfileScreen'
import ProfileEditScreen from '../screens/ProfileEdit/ProfileEditScreen'
import IdentityVerificationScreen from '../screens/IdentityVerification/IdentityVerificationScreen'
import SelectProofScreen from '../screens/SelectProof/SelectProofScreen'
import EmergencyContactScreen from '../screens/EmergencyContact/EmergencyContactScreen'
import EmergencyContactDetailScreen from '../screens/EmergencyContact/EmergencyContactDetailScreen'
import SelectLanguageScreen from '../screens/EmergencyContact/SelectLanguageScreen'
import MyRentalPropertyScreen from '../screens/MyRentalProperty/MyRentalPropertyScreen'
import ActivePropertyScreen from '../screens/MyRentalProperty/ActivePropertyScreen'
import HistoryPropertyScreen from '../screens/MyRentalProperty/HistoryPropertyScreen'
import ChoosPaymentOptionScreen from '../screens/MyRentalProperty/ChoosPaymentOptionScreen'
import PaymentMathodScreen from '../screens/PaymentMathod/PaymentMathodScreen'
import AddPaymentMathodScreen from '../screens/PaymentMathod/AddPaymentMathodScreen'
import ChangePasswordScreen from '../screens/ChangePassword/ChangePasswordScreen'
import SafetyCenterScreen from '../screens/SafetyCenter/SafetyCenterScreen'
import CallEmergencyServicesScreen from '../screens/SafetyCenter/CallEmergencyServicesScreen'
import SelectCountryScreen from '../screens/SelectCountry/SelectCountryScreen'
import HelpCenterScreen from '../screens/HelpCenter/HelpCenterScreen'
import TermsofServiceScreen from '../screens/TermsofService/TermsofServiceScreen'
import FeedbackScreen from '../screens/Feedback/FeedbackScreen'
import NotificationScreen from '../screens/Notification/NotificationScreen'
import PopularDetailsScreen from '../screens/PopularDetails/PopularDetailsScreen'
import ConfirmPayPropertyScreen from '../screens/PopularDetails/ConfirmPayPropertyScreen'
import PopularDestionationScreen from '../screens/PopularDestionation/PopularDestionationScreen'
import ChatDetailsScreen from '../screens/Chat/ChatDetailsScreen'
import CameraScreen from '../screens/Camera/CameraScreen'
import { isIphoneX } from '../libs/Utils'
import { Colors, Fonts } from '../theme'

import HomeSVG from '../assets/svg/HomeSvg'
import WishlistSVG from '../assets/svg/WishlistSvg'
import BookingSVG from '../assets/svg/BookingSvg'
import MessageSVG from '../assets/svg/MessageSvg'

import { MainTabsParams, StackScreenParams } from './types'

const Tab = createBottomTabNavigator<MainTabsParams>()

const DashboardNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        tabBarIcon: ({ focused, color, size = 20 }) => {
          switch (route.name) {
            case 'Home':
              return <HomeSVG size={size} color={color} />
            case 'Wishlist':
              return <WishlistSVG size={size} color={color} />
            case 'Booking':
              return <BookingSVG size={size} color={color} />
            case 'Message':
              return <MessageSVG size={size} color={color} />
            default:
              return <></>
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.white,
        inactiveTintColor: Colors.darkGray,
        activeBackgroundColor: Colors.pink,
        inactiveBackgroundColor: Colors.transparent,
        labelStyle: {
          color: Colors.white,
          ...Fonts.style.textInputText,
        },
        style: {
          backgroundColor: Colors.white,
          borderTopWidth: 0,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          height: isIphoneX() ? 90 : 72,
          paddingVertical: 3,
          elevation: 40,
          shadowColor: Colors.boxShadowLighterBlack,
          shadowOffset: { height: -10 },
          shadowOpacity: 0.1,
          shadowRadius: 40,
        },
      }}>
      <Tab.Screen
        name="Home"
        initialParams={{
          nextScreen: 'Wishlist',
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Wishlist"
        initialParams={{
          nextScreen: 'Booking',
        }}
        component={WishlistScreen}
      />
      <Tab.Screen
        name="Booking"
        initialParams={{
          nextScreen: 'Message',
        }}
        component={BookScreen}
      />
      <Tab.Screen
        name="Message"
        initialParams={{
          nextScreen: 'Home',
        }}
        component={ChatScreen}
      />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator<StackScreenParams>()

const AppNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen
        name="WelCome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LogInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtpSignUpNumber"
        component={OtpSignUpNumberScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtpForgotPassword"
        component={OtpForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuccessPassword"
        component={SuccessPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuccessNumber"
        component={SuccessNumberScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={DashboardNavigation} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
      <Stack.Screen name="Book" component={BookScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="CurrentLocation" component={CurrentLocationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
      <Stack.Screen
        name="IdentityVerification"
        component={IdentityVerificationScreen}
      />
      <Stack.Screen name="SelectProof" component={SelectProofScreen} />
      <Stack.Screen
        name="EmergencyContact"
        component={EmergencyContactScreen}
      />
      <Stack.Screen
        name="EmergencyContactDetail"
        component={EmergencyContactDetailScreen}
      />
      <Stack.Screen name="SelectLanguage" component={SelectLanguageScreen} />
      <Stack.Screen
        name="MyRentalProperty"
        component={MyRentalPropertyScreen}
      />
      <Stack.Screen name="ActiveProperty" component={ActivePropertyScreen} />
      <Stack.Screen name="HistoryProperty" component={HistoryPropertyScreen} />
      <Stack.Screen
        name="ChoosePaymentOption"
        component={ChoosPaymentOptionScreen}
      />
      <Stack.Screen name="PaymentMathod" component={PaymentMathodScreen} />
      <Stack.Screen
        name="AddPaymentMathod"
        component={AddPaymentMathodScreen}
      />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="SafetyCenter" component={SafetyCenterScreen} />
      <Stack.Screen
        name="CallEmergencyServices"
        component={CallEmergencyServicesScreen}
      />
      <Stack.Screen name="SelectCountry" component={SelectCountryScreen} />
      <Stack.Screen name="HelpCenter" component={HelpCenterScreen} />
      <Stack.Screen name="TermsofService" component={TermsofServiceScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="PopularDetails" component={PopularDetailsScreen} />
      <Stack.Screen
        name="ConfirmPayProperty"
        component={ConfirmPayPropertyScreen}
      />
      <Stack.Screen
        name="PopularDestionation"
        component={PopularDestionationScreen}
      />
      <Stack.Screen name="chatDetails" component={ChatDetailsScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation
