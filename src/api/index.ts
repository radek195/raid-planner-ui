import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const getEvent = async (uuid: string) => {
    return await axios.get(`/api/v1/events/${uuid}`);
};