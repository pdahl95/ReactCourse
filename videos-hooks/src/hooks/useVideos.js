import { useState, useEffect } from 'react';
import youtube from '../api/youtube';



const useVideos = (defaultSerachTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSerachTerm);
    }, [defaultSerachTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        setVideos(response.data.items);
        
    };
    return [videos, search];
};

export default useVideos; 