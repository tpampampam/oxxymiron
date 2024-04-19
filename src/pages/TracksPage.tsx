import Icon from "../components/Icon";
import Loader from "../components/Loader";
import PageTitle from "../components/PageTitle";
import Section from "../components/Section";
import { useTrackItems } from "../hooks/useTrackItems";
import { getLocalDateString } from "../utils/common";
import { Track as TrackType } from "../redux/reducers/tracksReducer";
import { useEffect, useState } from "react";



const TracksPage = () => {

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

    // ставим трек на паузу когда покаидаем страницу
    useEffect(() => {
        return () => {
            audio.pause();
        }
    },[audio])

    if(isLoading) return <Loader/>

    return(
        <Section className='track-page page'>
            <div className="container">
                <PageTitle text='Все релизы'/>

                <ul className="tracks-list">
                    {items.map((item) => {

                        const iconName = playing && currentTrack?.sys.id === item.sys.id ? 'pause' : 'play'

                        return (
                            <li className="tracks-list__item" key={item.sys.id}>
                                <div className="tracks-list__item-image">
                                    <img src={item.cover.url} alt={item.title} />
                                </div>
    
                                <div className="track-list__item-info">
                                    <p className="tracks-list__item-date">
                                        {getLocalDateString(item.date, {month: 'short'})}
                                    </p>
                                    <h2 className="track-list__item title">
                                        {item.title}
                                    </h2>
                                    <p className="tracks-list__item-description">
                                        {item.description}
                                    </p>
                                </div>
    
                                <button className="tracks-list__item-button" onClick={() => handleTrackClick(item)}>
                                    <span>слушать</span>
                                    <Icon name={iconName}/> 
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Section>
    )
}


export default TracksPage;