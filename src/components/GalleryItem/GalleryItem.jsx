import {useState} from 'react';
import './GalleryItem.css';

function GalleryItem(props) {

  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
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
      <button>Likes</button>
    </div>
  );
}

export default GalleryItem; 