import {useState} from 'react';
import './GalleryItem.css';
import Axios from 'axios';

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
      <button onClick={handleLikesClick}>Like</button>
      <br/>
      <br/>
      <button onClick={deleteMoment}>Delete</button>
    </div>
  );
}

export default GalleryItem; 