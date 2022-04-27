import React, { useState } from 'react';
import './MusicTable.css'




const MusicTable = (props) => {
    return ( 
            <table>
                 <thead>
                    <tr>
                       <th>Artist</th>
                       <th>Title</th>
                       <th>Album</th>
                       <th>Release Date</th>
                       <th>Genre</th>
                    </tr>
                </thead>
            {props.songs.map((song, index) => {
                return (
                <div>
               
                <tbody>
                    <tr>
                         <td>{index + 1}</td>
                        <td>{song.artist}</td>
                        <td>{song.title}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td>{song.genre}</td>
                        <td><img className="table_image" src={song.media}/></td>
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