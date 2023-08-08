import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {FaMobileAlt,FaTelegramPlane,FaInstagram} from 'react-icons/fa'
import './Contac.css'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat:29.755287,
  lng:52.399169
};
export default function Contac() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA15cp2LQHEHcKikUrEWt6ojTN3wqsMULY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <>
    <div className='contac'>
      <div className="container">
        <h1 className='contac-title'>ارتباط با ما</h1>
         <div className="contac__subtitle">
          <div className="contac__subtitle-address contac__item">
            <AiOutlineHome className='contac__icon'/>
            شیراز- شهرک گلستان -بلوار علامه امینی- خیابان 34
          </div>
          <div className="contac__subtitle-phone contac__item">
           <FaMobileAlt className='contac__icon'/>
            09036721792
           </div>
          <div className="contac__subtitle-telegram contac__item">
           <FaTelegramPlane className='contac__icon'/>
            <a href="#" className="contac__link">@falyan</a>
           </div>
          <div className="contac__subtitle-instagram contac__item">
           <FaInstagram className='contac__icon'/>
           <a href="#" className="contac__link">askary.maryam2013</a>
           </div>
         </div>
         
      </div>
      
    </div>

    {isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
   
      </GoogleMap>
  ) : <></>}
  </>
  )
};
