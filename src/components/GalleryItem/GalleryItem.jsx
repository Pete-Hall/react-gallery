import {useState} from 'react';
import './GalleryItem.css';
import Axios from 'axios';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import {useDispatch, useSelector} from 'react-redux';


function GalleryItem(props) {

  const [show, setShow] = useState(true);
  const totalClicksReducer = useSelector(store => store.totalClicksReducer);
  const dispatch = useDispatch();

  // const updateReducerClicks = () =>{
  //   console.log('in updateReducerClicks:', props.myMoment.likes);
  //   dispatch({type: 'ADD_CLICK', payload: props.myMoment.likes});
  // }

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
    dispatch({type: 'ADD_CLICK', payload: props.myMoment.likes+1});
    Axios.put(`/gallery/like/${props.myMoment.id}`).then((response)=>{
      console.log(response);
    }).catch((err)=>{
      console.log(err);
      alert('error updaing likes');
    })
  }

  return(
    <div className='listMoment'>
      <Grid item>
        <Card variant='outlined'>
          <CardContent sx={{ justifyContent: 'center', maxWidth: '15vw' }}>
            {
              show ?
              <img onClick={handleClick} src={props.myMoment.path}/>
              :
              <p onClick={handleClick} className='imageDescription'>{props.myMoment.description}</p>
            }
          </CardContent>
          <Divider variant='middle'/>
          <p>Likes: {props.myMoment.likes}</p>
          <CardActions sx={{ justifyContent: 'center' }}>
            <ButtonGroup variant='contained'>
              <Button onClick={handleLikesClick} color='success'>Like</Button>
              <Button onClick={deleteMoment} color="secondary">Delete</Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}

export default GalleryItem; 