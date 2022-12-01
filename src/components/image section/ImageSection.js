import React, { useEffect, useState } from 'react'
import './styles.css'
import PrevIcon from '../../assets/images/icon-previous.svg'
import NextIcon from '../../assets/images/icon-next.svg'



const ImageSection = ({screenWidth,mainImages, thumbnails}) => {
    const [showImage, setShowImage] = useState(mainImages[0])
    const [selectedThumbnail, setSelectedThumbnail] = useState(thumbnails[0].id)    
    const [index,setIndex] = useState(0)
    
    const { innerWidth} = screenWidth
    function changeImagePrev(){
        console.log('hello');
         return new Promise((resolve, reject )=>{
            if(index!==0){
                console.log('here first',index-1);
                setShowImage(mainImages[index-1])

                resolve('updated')
            }
            else{
                reject('first image')
            }
        })
    }
    function changeImageNext(){
        console.log('hello');
         return new Promise((resolve, reject )=>{
            if(index<mainImages.length-1){
                console.log('here first',index+1);
                setShowImage(mainImages[index+1])

                resolve('updated')
            }
            else{
                reject('first image')
            }
        })
    }
    function prev(){
        changeImagePrev()
        .then((msg)=> {
            console.log(msg,'-  after update',index);
        })
        .catch((err)=>{
            console.log(err);
        })
        .finally(()=>{
            if(index>0){
                console.log('here finally');
                setIndex(prev=>prev-1)
            }
        })
    }

    function next(){
        changeImageNext()
        .then((msg)=> {
            console.log(msg,'-  after update',index);
        })
        .catch((err)=>{
            console.log(err);
        })
        .finally(()=>{
            if(index<mainImages.length-1){
                console.log('here finally');
                setIndex(prev=>prev+1)
            }
        })
    }


    return (
        // {
            innerWidth>700?
            <div className='image-div'>
                <img src={showImage} alt='Product Image' className='main-image'  />
                <div className='tumbnail-div'>
                    {
                        thumbnails.map((item,index)=>(
                            <img onClick={()=> {
                                if (mainImages[index]!== showImage && selectedThumbnail!==item.id){
                                    setShowImage(mainImages[index])
                                    setSelectedThumbnail(item.id)
                                }
                            }} key={item.id} src={item.source} alt='Thumbnail Image' className={selectedThumbnail===item.id?'tumbnail-img selected-img':'tumbnail-img'}/>
                        ))
                    }
                </div>
            </div>
             :
             <div className='image-div'>
                <img onClick={()=> prev()} src={PrevIcon} alt='prev' className='prev-icon' />
                <img  onClick={()=> next()} src={NextIcon} alt='next' className='next-icon' />
                <img src={showImage} alt='Product Image' className='main-image-sm'  />
             </div>

        // }
  )
}

export default ImageSection