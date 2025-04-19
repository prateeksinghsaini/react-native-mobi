import React from 'react';
import { Tabs } from 'expo-router';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const tabScreens = [
    {
        name: 'index',
        focusedIcon: {
            Component: Ionicons,
            name: 'home',
        },
        unfocusedIcon: {
            Component: Ionicons,
            name: 'home',
        },
    },
    {
        name: 'search',
        focusedIcon: {
            Component: Feather,
            name: 'search',
        },
        unfocusedIcon: {
            Component: Feather,
            name: 'search',
        },
    },
    {
        name: 'saved',
        focusedIcon: {
            Component: AntDesign,
            name: 'star',
        },
        unfocusedIcon: {
            Component: AntDesign,
            name: 'staro',
        },
    },
    {
        name: 'profile',
        focusedIcon: {
            Component: FontAwesome,
            name: 'user-circle',
        },
        unfocusedIcon: {
            Component: FontAwesome,
            name: 'user-circle-o',
        },
    },
];

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: "100%",
                    justifyContent: 'center'
                },
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 40,
                    width: '70%',
                    marginLeft: 55,
                    backgroundColor: 'white',
                    height: 60,
                    borderRadius: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                    elevation: 5,
                }

            }}>
            {tabScreens.map(({ name, focusedIcon, unfocusedIcon }) => (
                <Tabs.Screen
                    key={name}
                    name={name}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            const { Component, name } = focused
                                ? focusedIcon
                                : unfocusedIcon;

                            return (
                                <Component
                                    name={name}
                                    size={24}
                                    color={focused ? 'black' : 'gray'}
                                />
                            );
                        },
                    }}
                />
            ))}
        </Tabs>
    );
};

export default _Layout;
