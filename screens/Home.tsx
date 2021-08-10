
import React from 'react';
import { Button, View } from "react-native"; 

import News from './News';

const Home = ({ navigation }) => {
    return (
        <View>
            <Button 
            onPress={() => navigation.navigate('News')}
            title='Get the latest MotoGP News'/>
        </View>
    )
}

export default Home 