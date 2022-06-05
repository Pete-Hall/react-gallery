import {useState} from 'react';
import Axios from 'axios';

function GalleryForm(props) {

  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const addToGallery = () => {
    console.log('in addToGallery');
    const newItem = {
      path: imageURL,
      description: description
    };
    Axios.post('/gallery', newItem).then((response)=>{
      console.log(response);
    }).catch((err)=>{
      console.log(err);
      alert('error adding to the gallery');
    })
  }

  const changeDescription = () => {
    setDescription(event.target.value);
  }

  const changeImageURL = () => {
    setImageURL(event.target.value);
  }

  return(
    <div>
      <h2>GalleryForm</h2>
      <input onChange={changeDescription} type="text" placeholder="Description"></input>
      <input onChange={changeImageURL} type="text" placeholder="Image URL"></input>
      <button onClick={addToGallery}>Add to Gallery</button>
    </div>
  );
}

export default GalleryForm; 