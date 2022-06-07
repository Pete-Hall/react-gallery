import {useState} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import Grid from '@mui/material/Grid';

function GalleryList(props) {
  
  return(
    <div>
      <Grid container sx={{
        alignContent:'flex-start',
        gap: "2vw"
        }}>
      {
        props.moments.map(moment => (
          <GalleryItem myMoment = {moment} />
        ))
      }
      </Grid>
    </div>
  );
}

export default GalleryList; 