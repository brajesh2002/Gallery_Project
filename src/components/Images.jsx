import React, { useEffect, useState } from 'react'
import ImageItem from './imageItem';
import '../style/images.css';
import NotFound from './NotFound';

export default function Images(props) {
    const [imgList, setImgList] = useState([]);
    useEffect(() => {
        setImgList(props.images.photos.photo);
    },[props.images.photos.photo])

    function showComponent(){
        if(imgList.length>0){
            return ( imgList.map((obj) => {
                 let url = `https://farm${obj.farm}.staticflickr.com/${obj.server}/${obj.id}_${obj.secret}_m.jpg`;
                 return <ImageItem  key={obj.id} url={url} title={obj.title} />
             }) )
        }else{
            return <NotFound/>
        }
    }

    return (
        <div className='imagesList'>
             {showComponent()}
        </div>
    )
}
