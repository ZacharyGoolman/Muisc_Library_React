import React, { useState } from 'react';
import './MusicTable.css'




const MusicTable = (props) => {
const [search, setSearch] = useState('')

let songList = props.songs.filter(function(song){
    if(song.album.toLowerCase().includes(search.toLowerCase()) || song.artist.toLowerCase().includes(search.toLowerCase) || song.title.toLowerCase().includes(search.toLowerCase)
    || song.genre.toLowerCase().includes(search.toLowerCase)) {
        return true;
    };
})

    return ( 
            <table>
                 <thead className='flex-container'>
                    <tr>
                        <input type="text" className='search_bar' placeholder="Search" onChange={(event)=> setSearch(event.target.value)}/>
                       <th>Artist</th>
                       <th>Title</th>
                       <th>Album</th>
                       <th>Release Date</th>
                       <th>Genre</th>
                    </tr>
                </thead>
            {songList.map((song, index) => {
                return (
                <div>
               
                <tbody>
                    <tr>
                         <td>{index + 1}</td>
                        <td><img className="table_image" src={song.media}/></td>
                        <td>{song.artist}</td>
                        <td>{song.title}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td>{song.genre}</td>
                        <button>{song.like}</button>
                    </tr>
                </tbody>
                </div>
                );
            })}
            </table>
    );
}
 
export default MusicTable;