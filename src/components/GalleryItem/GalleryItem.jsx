import {useState} from 'react';
import './GalleryItem.css';
import Axios from 'axios';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function GalleryItem(props) {

  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  }

  const deleteMoment = () => {
    console.log('in deleteMoment:', props.myMoment.id);
    Axios.delete(`/gallery/delete/${props.myMoment.id}`).then((response)=>{
      console.log(response);
    }).catch((err)=>{
      console.log(err);
      alert('error deleting moment');
    })
  }

  const handleLikesClick = () => {
    Axios.put(`/gallery/like/${props.myMoment.id}`).then((response)=>{
      console.log(response);
    }).catch((err)=>{
      console.log(err);
      alert('error updaing likes');
    })
  }

  return(
    <div className='listMoment'>
      {/* <p>Props: {JSON.stringify(props)}</p> */}
      {
        show ?
        <img onClick={handleClick} src={props.myMoment.path}/>
        :
        <p onClick={handleClick}>{props.myMoment.description}</p>
      }
      <br/>
      <p>Likes: {props.myMoment.likes}</p>
      <ButtonGroup variant='contained'>
        <Button onClick={handleLikesClick} color='success'>Like</Button>
        <Button onClick={deleteMoment} color="secondary">Delete</Button>
      </ButtonGroup>
    </div>
  );
}

export default GalleryItem; 