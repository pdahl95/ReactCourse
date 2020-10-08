import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID OaYheIqsLnubmJ_-h1gZV-ugKb3voGRKs5SrezOrVGo' 
    }
});