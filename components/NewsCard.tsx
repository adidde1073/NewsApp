import React from 'react';
import { Linking, Pressable, StyleSheet, Text, Image, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window');

const NewsCard = ({ article }) => {
    return (
        <Pressable style = {styles.cardView} onPress={() => {
            Linking.openURL(article.url)
        }}> 
            <Text style= {styles.title}>{article.title}</Text>
            <Text style= {styles.author}>{article.author}</Text>
            <Image style= {styles.image} source={{uri: article.urlToImage}}/>
            <Text style= {styles.description}>{article.description}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: {
            width: 0.5,
            height: 0.5, 
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,

    },
    title: {
        width: width,
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    }, 
    description: {
        width: width,
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.05,
        color: 'gray',
        fontSize: 18,
    },
    image: {
        width: width,
        height: height / 6,
        marginHorizontal: width * 0.05,
        marginVertical: height * 0.02,
        justifyContent: 'center',
    },
    author: {
        marginBottom: width * 0.045, 
        marginHorizontal: height * 0.025,
        fontSize: 15,
        color: 'gray',
    },
})

export default NewsCard;