import { FC,  useState } from "react";
import { Link } from "react-router-dom";
import { Track as TrackType } from "../redux/reducers/tracksReducer";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Track from "./Track";
import Loader from "./Loader";
import { useTrackItems } from "../hooks/useTrackItems";


const Tracks:FC = () => {

    const {items = [], isLoading} = useTrackItems()

    const [audio] = useState(new Audio())
   
    const [playing, setPlaying] = useState<boolean>(false)
    const [currentTrack, setCurrentTrack] = useState<TrackType | null>(null)

    const handleTrackClick = (track: TrackType) => {
        setPlaying((prev) => {
            const isPlaying = track.sys.id === currentTrack?.sys.id ? !prev : false

            audio.src = track.link.url
            !isPlaying ? audio.pause() : audio.play();

            return isPlaying;
        })

        setCurrentTrack(track)
    }

    if(isLoading) return <Loader/>
    const filtered = items.filter((_, i) => i < 3)

    return(
        <Section className='tracks-section'>
            <div className="container">
                <SectionTitle text='Релизы'/>
                <div className="tracks">
                    {filtered.length > 0 && filtered.map((track) => (
                        <Track 
                            key={track.sys.id} 
                            track={track}
                            playing={playing}
                            currentTrack={currentTrack}
                            handleTrackClick={handleTrackClick}
                        />
                    ))}
                </div>
            </div>
            <Link to='/tracks' className="button-more">
                Все релизы
            </Link>
        </Section>
    )
}

export default Tracks;