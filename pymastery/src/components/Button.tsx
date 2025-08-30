import {Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
}

export const Button = ({title, onPress}: ButtonProps) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        className='bg-blue-500 px-4 py-2 bg-lg'
        >
        <Text className='text-white font-semibold'>{title}</Text>
        </TouchableOpacity>
    )
}