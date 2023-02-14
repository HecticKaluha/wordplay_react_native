import {StyleSheet} from 'react-native';
import PlayStack from './components/Play/PlayStack.js'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ProfileStack from "./components/Profile/ProfileStack";
import HomeStack from "./components/Home/HomeStack";
import LeaderboardStack from "./components/Leaderboard/LeaderboardStack";
import SettingsStack from "./components/Settings/SettingsStack";

const Tab = createBottomTabNavigator();

export default function App() {
    let profileBadgeCount = 3;
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
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

                <Tab.Screen name="Home" component={HomeStack}/>
                <Tab.Screen name="Profile" component={ProfileStack}/>
                <Tab.Screen name="Play" component={PlayStack}/>
                <Tab.Screen name="Leaderboards" component={LeaderboardStack}/>
                <Tab.Screen name="Settings" component={SettingsStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    class: {
        property: 'value',
    }
});