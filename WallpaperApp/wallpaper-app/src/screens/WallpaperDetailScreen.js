import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const WallpaperDetailScreen = ({ route }) => {
    const { wallpaper } = route.params;

    const handleDownload = () => {
        // Logic to download the wallpaper
    };

    const handleSetWallpaper = () => {
        // Logic to set the wallpaper
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: wallpaper.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{wallpaper.title}</Text>
            <Button title="Download" onPress={handleDownload} />
            <Button title="Set as Wallpaper" onPress={handleSetWallpaper} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default WallpaperDetailScreen;