const MusicTable = (props) => {
    return ( 
        <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Media</th>
            <th>Likes</th>
          </tr>
        </tbody>
      </table>

     );
}
 
export default MusicTable;