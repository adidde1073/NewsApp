import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, FlatList } from "react-native";

import NewsCard from '../components/NewsCard'

import newsAPI from '../api/pseudoAPI.json';

const News = ({ navigation }) => {

    const [news, setNews] = useState<any>([]);

    useEffect(() => {
        newsResponse();
    }, [])

    const newsResponse = async() => {
        const response = newsAPI;
        setNews(response.articles);
        console.log(response.articles);
    }

    if(!news) {
        return null;
    }

    return (
        <View>
            <FlatList data = {news}
            keyExtractor = {(item, index) => 'key' + index}
            renderItem = {({item}) => {
                return <NewsCard article = { item}/> 
            }} 
            />
        </View>
    ) 
}

export default News
