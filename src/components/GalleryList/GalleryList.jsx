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
      <h2>GalleryList</h2>
      {/* <p><button onClick={handleHook}>Click</button> Clicks: {hook}</p> */}
      {/* <p>Props: {JSON.stringify(props)}</p> */}
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