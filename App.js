import 'react-native-gesture-handler';
import { SafeAreaProvider } from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import {Provider as AuthProvider} from "./src/context/AuthContext";

const MainStack = createStackNavigator();
const TrackStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TrackListFlow() {
    return (
        <TrackStack.Navigator initialRouteName="TrackList">
            <TrackStack.Screen name="TrackList" component={TrackListScreen}/>
            <TrackStack.Screen name="TrackDetail" component={TrackDetailScreen}/>
        </TrackStack.Navigator>
    );
}

function MainFlow() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen name="TrackCreate" component={TrackCreateScreen}/>
            <Tab.Screen name="Account" component={AccountScreen}/>
            <Tab.Screen name="trackListFlow" component={TrackListFlow}/>
        </Tab.Navigator>
    );
}

export default function App() {
    let isSignedIn = false;
    return (
        <AuthProvider>
            <SafeAreaProvider>
                <NavigationContainer>
                    <MainStack.Navigator>
                        {isSignedIn ? (
                            <>
                                <MainStack.Screen options={{
                                    headerShown: false,
                                }} name="mainFlow" component={MainFlow}/>
                            </>
                        ) : (
                            <>
                                <MainStack.Screen options={{
                                    headerShown: false,
                                }} name="Signup" component={SignupScreen}/>
                                <MainStack.Screen name="Signin" component={SigninScreen}/>
                            </>
                        )}
                    </MainStack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </AuthProvider>
    );
}