import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // For now this is for when running backend on local machine (route setup on index.js), will need to change this when actually hosting server

// Retrieve all layouts, use this for now
export const getAllLayouts = async () => {
    const response = await axios.get(`${API_URL}/layouts`);
    return response.data;
};

// Retrieve layout by ID
export const getLayoutById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

// Create a new layout
export const createLayout = async (layoutData) => {
    const response = await axios.post(API_URL, layoutData);
    return response.data;
};

// Delete a layout by ID
export const deleteLayoutById = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};