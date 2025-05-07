import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WallpaperCard = ({ wallpaper, title, onSelect }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onSelect}>
            <Image source={{ uri: wallpaper }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default WallpaperCard;