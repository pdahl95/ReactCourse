import axios from 'axios';

const KEY = 'AIzaSyCTgey-XdPKRWenL0n8MtV0gkZdfxX627c';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

