import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
const Feather = require('react-native-vector-icons/Feather').default;

interface Props {
    placeholder: string;
    onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
    return (
        <View className='flex-row rounded-full items-center px-5 py-4 bg-gray-9s00'>
            <Feather name="search" size={16} color="white" />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value=''
                onChangeText={() => { }}
                placeholderTextColor="gray"
                className='flex-1 ml-5 text-secondary text-xl'
            />
        </View>
    )
}

export default SearchBar