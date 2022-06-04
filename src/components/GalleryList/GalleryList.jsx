import {useState} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {
  // template hook
  const [hook, setHook] = useState(null);

  const handleHook = () => {
    setHook(event.target.value);
  }

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