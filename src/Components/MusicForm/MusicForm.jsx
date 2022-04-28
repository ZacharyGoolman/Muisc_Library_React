import React, { useState } from 'react';





const MusicForm = (props) => {

    const [artist, SetArtist] = useState ([]);
    const [title, SetTitle] = useState ([]);
    const [album, SetAlbum] = useState ([]);
    const [releaseDate, SetReleaseDate] = useState ([]);
    const [genre, SetGenre] = useState ([]);
    const [media, SetMedia] = useState ([]);

    function handleSubmit(formEvent){
        formEvent.preventDefault()
        let newEntry = {
            artist: artist,
            title: title,
            album: album,
            release_date: releaseDate,
            genre: genre,
            media: media,
        }
        props.addNewMusic(newEntry)
    }




    return ( 
        <form onSubmit={handleSubmit}>
        <div class="form-row">

          <div class="col">
            <input type="text" value={artist} onChange={(event)=>SetArtist(event.target.value)} class="form-control" placeholder="Artist"/>  
          </div>

          <div class="col">
            <input type="text" value={title} onChange={(event)=>SetTitle(event.target.value)} class="form-control" placeholder="Title"/>
          </div>
            
          <div class="col">
            <input type="text" value={album} onChange={(event)=>SetAlbum(event.target.value)} class="form-control" placeholder="Album"/>
          </div>
            
          <div class="col">
            <input type="date" value={releaseDate} onChange={(event)=>SetReleaseDate(event.target.value)} class="form-control" placeholder="Release Date"/>
          </div>
            
          <div class="col">
            <input type="text" value={genre} onChange={(event)=>SetGenre(event.target.value)} class="form-control" placeholder="Genre"/>
          </div>

          <div class="col">
            <input type="text" value={media} onChange={(event)=>SetMedia(event.target.value)} class="form-control" placeholder="Place Image URL"/>
          </div>

          <div>
              <button type='submit' className='btn btn primary' style={{'margin-top': '1em'}}>Add</button>
          </div>

        </div>
      </form>






     );



}
 
export default MusicForm;