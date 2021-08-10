import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, FlatList } from "react-native";

import NewsCard from '../components/NewsCard'

import newsAPI from '../api/newsAPI';

const News = ({ navigation }) => {

    const [news, setNews] = useState<any>([]);

    useEffect(() => {
        newsResponse();
    }, [])

    const newsResponse = async() => {
        const response = await newsAPI.get('everything?q=motogp&from=2021-07-09&sortBy=publishedAt&apiKey=e8b4ba7cadff449399a1fb30c849b5e2');
        setNews(response.data);
        console.log(news);
    }

    if(!news) {
        return null;
    }

    return (
        <View>
            <FlatList data = {news.articles}
            keyExtractor = {(item, index) => 'key' + index}
            renderItem = {({item}) => {
                return <NewsCard article = { item}/> 
            }} 
            />
        </View>
    ) 
}

export default News