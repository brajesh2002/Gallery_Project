import React, { useState } from 'react'
import { createContext } from 'react'

export const fetchContext = createContext();

export const FetchImages = (props) => {
    const [images, setImages] = useState({});
    const [loading, setLoading] = useState(true);
    const fetchData = async (query) => {
        const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
        try {
            const response = await fetch(url);
            if (response.ok) {
                const jsonData = await response.json();
                setImages(jsonData);
                setLoading(false);
            } else {
                throw new Error("data is not found");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <fetchContext.Provider value={{ images, loading, fetchData }}>
            {props.children}
        </fetchContext.Provider>
    )
}

export default FetchImages; 