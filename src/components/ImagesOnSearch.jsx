import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageContainer from './ImageContainer';

export default function ImagesOnSearch() {
    const { query } = useParams();
    return (
        <div>
             <ImageContainer searchQuery={query}/>
        </div>
    )
}
