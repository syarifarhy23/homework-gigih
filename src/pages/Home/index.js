import {CardSong} from '../../components';
import './index.css';
import data from "../../data/playlists"

const Home = () => {
    return (
        <div className="container">
        {data.map((data) => (
            <data
                key={data.album.id}
                imagesUrl={data.album.images[0].url}
                title={data.name}
                album={data.album.name}
                artist={data.artists[0].name}
                songUrl={data.external_urls.spotify}
            />
        ))}
    </div>
);
};

export default Home;