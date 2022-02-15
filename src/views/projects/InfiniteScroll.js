import React, { useEffect, useState } from 'react';
import style from '../../styles/projects/infiteScroll.module.css'
import loading from '../../static/Triangles-1s-200px.svg'
import axios from 'axios';

const InfiniteScroll = () => {

  // Api constants
  const [count, setCount] = useState(30);
  const [apiKey, setApiKey] = useState('VoFb_rx4ONstpR9A7RFe3EduugiNEq-O1D-Bhg6D7ws')
  const [apiURL, setApiURL] = useState(`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`)
  const [pictureData, setPictureData] = useState()


  const [loaded, setLoaded] = useState(false);

  //To activate useEffect when scrolled
  const [scrolled, setScrolled] = useState(0);

  const [ready, setReady] = useState(1);


  //Comes out when an element is rendered
  //Goes up
  function readyChecker(){
    setReady(ready + 1);
  }


  //Only activates if user scrolls close to the bottom and the render and ready count are the same
  //Resets the count
  window.addEventListener('scroll', ()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready === count){

      setScrolled(scrolled + 1);
      setReady(1)

    }
  })




  // Get photos from Unsplash API
  useEffect(() => {
    axios.get(apiURL)
    .then(response => {
      // If there is no data add it
      if(!pictureData){
        setPictureData(response.data)
      }
      //If there is data, fuse old and new data
      else{
        setPictureData(pictureData.concat(response.data))
      }
    })
  }, [scrolled]);


  // To call when pictureData is populated
  //Only necessary for first call, figuring out how to remove this without breaking the api calls
  useEffect(()=>{
    if(pictureData){
        setLoaded(true);
    }
  },[pictureData])


  return (
    <div className={style.container}>
      <div>
        {/* Title */}
        <h1>UNSPLASH API-INFINITE SCROLL</h1>

        {/* Loader */}
        <div className={style.loader} hidden>
          <img src={loading} alt="loading" />
        </div>

        {/* Image Container */}
        <div className={style.imageContainer}>
          {
            // If it's loaded, go through data
            loaded ? pictureData.map((items, id) =>{
              return(
                <a key={id} href={items.links.html} >
                  <img onLoad={readyChecker} key={id} src={items.urls.regular} title={items.description} alt={items.description}></img>
                </a>
              )
            })
            : ""  
          }
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
