import {useState} from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
      alert('added moment to gallery');
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
      <TextField onChange={changeDescription} type="text" label="Description" variant='standard' multiline/>
      <TextField onChange={changeImageURL} type="text" label="Image URL" variant='standard' multiline/>
      <Button onClick={addToGallery} variant='contained' size='large'>Add to Gallery</Button>
    </div>
  );
}

export default GalleryForm; 