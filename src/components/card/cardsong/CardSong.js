import './CardSong.css';
import data from '../../../data/playlists';

// function CardSong() {
//     return(
//         <div className="Card">
//             <img src={data.album.images[0].url} width="300" height="300" className='bohemian-card'></img>
//             <div  className="text-component">
//                 <h3>{data.name}</h3>
//                 <p>{data.album.name}</p>
//                 <p>{data.album.artists[0].name}</p>
//             </div>
//             <div className='button-component'>
//                 <button type='button' value='Select'>Select</button>
//             </div>
//         </div>
//     );
// };

const CardSong = () => {
    const renderTracks = data =>
    data
      .map(track => 
        <div className='grid-item' key={track.id}>
            <div class='boxPlaylist'>
                <img src={track.album.images[1].url} alt={track.name} className='albumImages'/>
                <div className='trackInfoWrapper'>
                    <h2 className='text'>{track.name}</h2>
                    <h3 className='text'>{track.album.name}</h3>
                    <h3 className='text'>{track.artists[0].name}</h3>
                </div>
                <form target='_blank' action={track.external_urls.spotify}><input type='submit' value='Select' className='buttonSelect'/></form>
            </div>
        </div>);

    return (
        <div className='grid-container'>
            {renderTracks(data)}
        </div>
    );
};


export default CardSong;