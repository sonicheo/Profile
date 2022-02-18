import React, { useEffect, useState } from 'react'
import style from '../../styles/projects/inPicture.module.css'

const InPicture = () => {

    const [loaded, setLoaded] = useState(false)


    function getShare(e){
        e.preventDefault();
        
        const videoElement = document.getElementById('video');

        // Async function that asks what to share
        async function media() {
            try{
                const mediaStream = await navigator.mediaDevices.getDisplayMedia();
                videoElement.srcObject = mediaStream;
                videoElement.onloadeddata = () =>{
                    videoElement.play();
                }
                setLoaded(true);
            } 
            catch(error){
                console.log('Error in InPicture: ', error);
            }
        }
        
        // Calls function
        media();
    }





    function startPicture(e){
        // Disables button
        e.preventDefault();
        
        if(loaded){
            try{
                const videoElement = document.getElementById('video');
                videoElement.requestPictureInPicture();
            }
            catch(error){
                console.log('Error in InPicture: ', error);
            }
        }
    }
    



  return (
    <div className={style.container} >
        {/* Video */}
        <video id="video" controls height="360px" width="640px" hidden></video>
        {/* Button */}
        <div className={style.buttonContainer}>
            <button id='button' onClick={getShare}> Share </button>
        </div>
        <div className={style.buttonContainer}>
            <button id='button' onClick={startPicture}> Start </button>
        </div>
    </div>
  )
}

export default InPicture