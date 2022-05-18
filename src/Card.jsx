import React from 'react'
import geoTag from "/geo-tag.svg";
import './Card.css'

function Card(props) {
  return (
    <div className='card-container'>
      <img src={props.imageUrl} className='card-img' />
      <div className='description-container'>
        <div className='location-container'>
          <img src={geoTag} alt="Geoespatial tag selector."/>
          <p className='card-country'>{props.location}</p>
          <a className='card-link' href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        
        <h1>{props.title}</h1>
        <p className='card-date'>{props.startDate} - {props.endDate}</p>
        <p className='card-description'>{props.description}</p>
      </div>
    </div>
  )
}

export default Card


