import {StyleSheet} from 'react-native';
import Cat from './components/examples/Cat.js'
import PlayStackScreen from './components/PlayComponent/PlayStackScreen.js'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

export default function App() {
    var profileBadgeCount = 3;
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
                })}
            >

                <Tab.Screen name="Home" children={props => <Cat name={'Home'} {...props} />}/>
                <Tab.Screen name="Profile" options={{tabBarBadge: profileBadgeCount }} children={props => <Cat name={'Profile'} {...props} />}/>
                <Tab.Screen name="Play" children={props => <PlayStackScreen name={'Play'} {...props} />}/>
                <Tab.Screen name="Leaderboards" children={props => <Cat name={'Leaderboard'} {...props} />}/>
                <Tab.Screen name="Settings" children={props => <Cat name={'Leaderboard'} {...props} />}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    class: {
        property: 'value',
    }
});