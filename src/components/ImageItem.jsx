import React from 'react'
import '../style/imageItem.css'

export default function imageItem({key,url,title}) {
  return (
    <div className='image'>
        <img key={key} src={url} alt={title} id='photo' height='170px' width='220px' className='imgdiv'/>
    </div>
  )
}
