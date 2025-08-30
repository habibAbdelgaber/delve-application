import React from 'react';
import { View, Text } from 'react-native';

interface CardProps {
    title: string;
    children?: React.ReactNode;
}

export const Card = ({title, children}: CardProps) => {
    return (
        <View className='bg-white dark:bg-grey-800 rounded-xl p-4 shadow'>
            <Text className='text-lg font-bold mb-2'>{title}</Text>
            {children}
        </View>
    )
}