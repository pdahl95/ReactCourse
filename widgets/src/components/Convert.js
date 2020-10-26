import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState('');
    const [deboundedText, setDeboundedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDeboundedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }

    }, [text]);

    useEffect(() => {
         const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: deboundedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                },
            }
        );
        
         setTranslated(data.data.translations[0].translatedText);
        };

        doTranslation();

    }, [language, deboundedText]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default Convert;