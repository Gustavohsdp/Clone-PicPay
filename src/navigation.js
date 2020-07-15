import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons} from '@expo/vector-icons'

import PayButton from './Components/PayButton'

import HomeScreen from './screens/Home'
import WalletScreen from './screens/Wallet'
import payScreen from './screens/pay'

const Tab = createBottomTabNavigator();

const icons = {

    Home: {
        lib: AntDesign,
        name: 'home',
    },

    Wallet: {
        lib: AntDesign,
        name: 'creditcard',
    },

    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline',
    },

    Settings: {
        lib: AntDesign,
        name: 'setting'
    },
};

export default function Navigation () {
    return(
        <Tab.Navigator
            screenOptions= {({route, navigation}) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    if (route.name === 'pay') {
                        return (
                        <PayButton
                            onPress={() => navigation.navigate('pay')}
                            focused= {focused}
                        />

                        )
                    }
                    const {lib: Icon, name} = icons[route.name];
                    return <Icon name={name} size={size} color= {color}/>
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255, 255, 255, 0.2',
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#92929C',
            }}
        >
            <Tab.Screen name= "Home"
            component={HomeScreen}
            options = {{
                title: 'início'
            }}
            />
            <Tab.Screen name= "Wallet"
            component={WalletScreen}
            options = {{
                title: 'Carteira'
            }}
            />
            <Tab.Screen
            name= "pay"
            component={payScreen}
            options = {{
                title: ''
            }}
            />
            <Tab.Screen
            name= "Notifications"
            component={payScreen}
            options = {{
                title: 'Notificações'
            }}
            />
            <Tab.Screen
            name= "Settings"
            component={payScreen}
            options = {{
                title: 'Ajustes'
            }}
            />
        </Tab.Navigator>
    );
}
