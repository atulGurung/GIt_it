import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import WallpaperCard from '../components/WallpaperCard';
import { fetchWallpapers } from '../utils/api';

const HomeScreen = ({ navigation }) => {
    const [wallpapers, setWallpapers] = useState([]);

    useEffect(() => {
        const loadWallpapers = async () => {
            const data = await fetchWallpapers();
            setWallpapers(data);
        };

        loadWallpapers();
    }, []);

    const renderWallpaperCard = ({ item }) => (
        <WallpaperCard
            wallpaper={item}
            onSelect={() => navigation.navigate('WallpaperDetail', { wallpaper: item })}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={wallpapers}
                renderItem={renderWallpaperCard}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
});

export default HomeScreen;