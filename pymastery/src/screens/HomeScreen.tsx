import { View, Text } from 'react-native';
import { Button } from '../components/Button';

export const HomeScreen = ({navigation}: any) => {
    return (
        <View className='flex-1 items-center justify-content-center bg-grey-100 dark:bg-grey-900'>
            <Text>Welcome to Expo + tailwind </Text>
            <Button title='Go to Profile' onPress={() => navigation.navigate('profile')} />
        </View>
    )
}