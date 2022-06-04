import {useState} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {
  
  return(
    <div>
      <ul>
        {
          props.moments.map(moment => (
            <GalleryItem myMoment = {moment} />
          ))
        }
      </ul>
    </div>
  );
}

export default GalleryList; 