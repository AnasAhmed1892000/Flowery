import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./src/screens/SplashScreen";
import OnBoarding from "./src/screens/OnBoardingScreen";
import SignUp from "./src/screens/SignUpScreen";
import TermsAndContions from "./src/screens/TermsAndContionsScreen";
import SigninScreen from "./src/screens/SigninScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ForgetPasswordScreen from "./src/screens/ForgetPasswordScreen";
import { colors } from "./src/values/colors";
import OTPScreen from "./src/screens/OTPScreen";
import BottomTabNavigator from "./src/components/HomeComponents/BottomTabNavigator";
import FlowersScreen from "./src/screens/FlowersScreen";
import { HeaderIcons, HeaderShare } from "./src/components/HeaderIcons";
import FlowerDetailsScreen from "./src/screens/FlowerDetailsScreen";
export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Splash">
        <stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="TermsAndCondtions"
          component={TermsAndContions}
          options={{ headerShown: true }}
        />
        <stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="ForgetPassword"
          component={ForgetPasswordScreen}
          options={{
            headerShown: true,
            title: "",
            headerTintColor: colors.black,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: colors.offwhite,
            },
          }}
        />
        <stack.Screen
          name="OTP"
          component={OTPScreen}
          options={{
            headerShown: true,
            title: "",
            headerTintColor: colors.black,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: colors.offwhite,
            },
          }}
        />
        <stack.Screen
          name="Flowers"
          component={FlowersScreen}
          options={{
            headerShown: true,
            title: "",
            headerBackTitle: "Flowers",
            headerTintColor: colors.black,
            headerBackTitleVisible: true,
            headerRight: () => <HeaderIcons />,

            headerStyle: {
              backgroundColor: colors.offwhite,
            },
          }}
        />
        <stack.Screen
          name="FlowerDetials"
          component={FlowerDetailsScreen}
          options={{
            headerShown: true,
            title: "",
            headerBackTitle: "",
            headerTintColor: colors.black,
            headerBackTitleVisible: true,
            headerRight: () => <HeaderShare />,

            headerStyle: {
              backgroundColor: colors.offwhite,
            },
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
