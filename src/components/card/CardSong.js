import './CardSong.css';
import data from '../../data/playlists/index.js'

function CardSong() {
    return(
        <div className="Card">
            <img src={data.album.images[0].url} width="300" height="300" className='bohemian-card'></img>
            <div  className="text-component">
                <h3>{data.name}</h3>
                <p>{data.album.name}</p>
                <p>{data.album.artists[0].name}</p>
            </div>
            <div className='button-component'>
                <button type='button' value='Select'>Select</button>
            </div>
        </div>
    );
};

export default CardSong;