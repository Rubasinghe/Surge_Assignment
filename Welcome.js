import React from 'react';
import "./Welcome.css"
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';


export default function welcome() {
  return (
    <div className='welcome-page'>
      <div className='bg-image'>

      <div class="text-container">
        <span>W</span>
        <span>E</span>
        <span>L</span>
        <span>C</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
      </div>

      <h3 className='quote'>Absolutely Brilliant Ideas</h3>
   
        {/* <img className='image1' src={image}/> */}

        <button className='btn'>
          <Link className='linkTag' to = "/login" style={{textDecoration: 'none'}}>Login <FontAwesomeIcon className='arrow' icon={faCircleArrowRight} /></Link>
          </button>
      
      </div>
        
    </div>
  )
}
