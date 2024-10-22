import React, { useContext, useEffect, useState } from 'react'
import Images from './Images.jsx';
import Loader from './Loader.jsx';
import {fetchContext} from '../contextApi/FetchImages.jsx';

export default function ImageContainer(props) {
    const { images, loading, fetchData } = useContext(fetchContext);
    const [title,setTitle]=useState('');
    useEffect(() => {
        fetchData(props.searchQuery);
        if(props.searchQuery==='mountain') setTitle('Mountain Images');
        if(props.searchQuery==='beach') setTitle('Beaches Images');
        if(props.searchQuery==='bird') setTitle('Bird Images');
        if(props.searchQuery==='food') setTitle('Food Images');
    }, [props.searchQuery])
    return (
           <div style={{display:'flex',flexDirection:'column',gap:'2vh'}}>
              <span style={{display:'flex', justifyContent:'center', color:'#051c33',fontSize:'xx-large',
              fontFamily:'sans-serif',fontWeight:'bold'
              }}>{title}</span>
               <div className='imagesContainer' style={{ display: 'flex', justifyContent: 'center'}}>
                   {(loading) ? <Loader /> : <Images images={images} />}
                </div>
            </div>
    )
}
 