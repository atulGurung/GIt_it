import axios from 'axios';

const API_URL = 'https://api.example.com/wallpapers';

export const fetchWallpapers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching wallpapers:', error);
        throw error;
    }
};

export const fetchWallpaperDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching wallpaper details:', error);
        throw error;
    }
};