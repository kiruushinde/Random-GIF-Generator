/*
    Why do we create our custom hook ??
    -> 
        we have written our Random and Gif components, where the logical part is repeating again and again.. 
        so we don't have any issues with jsx code, but that logical part must no be repeated,
        that is the reason why we create our custom hook.

        hooks are always start with "use"

        so we create our own hooks as useGif etc.

*/

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = '9dYyJeUE5gOUwg1ifGZ7iJJ4guS2fSTD'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
// const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');


    async function fetchData(tag) {
        setLoading(true);

        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSource = data.data.images.downsized_large.url;
        console.log(imageSource);
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData('car');
    }, [])

    return { gif, loading, fetchData };

}

export default useGif