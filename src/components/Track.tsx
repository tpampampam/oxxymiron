import { FC } from "react";
import { Track as TrackType} from "../redux/reducers/tracksReducer";
import Icon from "./Icon";
import { getLocalDateString } from "../utils/common";


type PropsTrack = {
    track: TrackType
    playing: boolean
    currentTrack: TrackType | null
    handleTrackClick: (value: TrackType) => void
}

const Track: FC<PropsTrack> = ({track, playing, currentTrack ,handleTrackClick}) => {
    
    const {cover, title, date, sys} = track

    return(
        <div className="track-item">
            <div className="track" onClick={() => handleTrackClick(track)}>
                <div className="track-image">
                    <img src={cover.url} alt={title} />
                    {!!playing && currentTrack?.sys.id === sys.id && <Icon name='pause' width={10} height={10}/>}
                </div>
                <p className="track-date">
                    {getLocalDateString(date, {month: 'short'})}
                </p>
                <h3 className="track-title">
                    {title}
                </h3>
            </div>
        </div>
    )
}

export default Track;