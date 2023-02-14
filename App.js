import {StyleSheet} from 'react-native';
import Cat from './components/examples/Cat.js'
import PlayStackScreen from './components/Play/PlayStackScreen.js'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getFocusedRouteNameFromRoute, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ProfileStackScreen from "./components/Profile/ProfileStackScreen";
import HomeStackScreen from "./components/Home/HomeStackScreen";
import LeaderboardStackScreen from "./components/Leaderboard/LeaderboardStackScreen";
import SettingsStackScreen from "./components/Settings/SettingsStackScreen";


const Tab = createBottomTabNavigator();

export default function App() {
    var profileBadgeCount = 3;
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({navigation, route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name === 'Profile') {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                        } else if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Play') {
                            iconName = focused ? 'play' : 'play-outline';
                        } else if (route.name === 'Leaderboards') {
                            iconName = focused ? 'list' : 'list-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'options' : 'options-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'grey',
                    headerShown: false
                })}
            >

                <Tab.Screen name="Home" component={HomeStackScreen}/>
                <Tab.Screen name="Profile" component={ProfileStackScreen}/>
                <Tab.Screen name="Play" component={PlayStackScreen}/>
                <Tab.Screen name="Leaderboards" component={LeaderboardStackScreen}/>
                <Tab.Screen name="Settings" component={SettingsStackScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    class: {
        property: 'value',
    }
});