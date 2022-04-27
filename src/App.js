import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';

function App() {
  // song data coming from Django API throuhg axios call, going to send to display song component
  // best practice to put hook at the top and functions under your hooks
  const [songs, setSongs] = useState([])

  // with the optional empty array in th elast line of this useEffect it will only run the first time the page renders
  // If we remove the optional array it will run once when the page renders and run every time it sees a variable change value on this compnent
  // If we add a cariable name in the optional array it will run with page renders or when that value changes
  useEffect(() => {
  getAllSongs();
},[])

  async function getAllSongs(){ //grabbing all song data
    // await is telling react that this action might take a little longer than a normal function
    // response is catching the data being sent back from the Django API
    // axios.get is our method type, we can use PUT, PATCH, DELETE here instead
    let response = await axios.get('http://127.0.0.1:8000/api/music_library/');
    console.log('ran axios request');
    console.log(response.data);
    setSongs(response.data);
  }

  return (
    <div>
     <MusicTable songs={songs}/>
     
    </div>
  );
}

export default App;
