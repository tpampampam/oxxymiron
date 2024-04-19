import { FC } from "react";
import { Venue } from "../redux/reducers/tourReducer";
import Icon from "./Icon";
import { getLocalDateString } from "../utils/common";




const TourItem:FC<Venue & {i?: string | number}> = ({
    date,
    city,
    place,
    soldOut,
    ticketLink,
    videoLink,
    country,
    i
}) => {


    return(
        <li>
            <div className="tour-item">
                <div className="tour-item__info">
                    <div className="tour-item__date">
                        {getLocalDateString(date, {})}
                    </div>
                    <p className="tour-item__place">
                        {place}
                    </p>
                </div>
                <p className="tour-item__city">
                    {city}
                </p>
                {!soldOut ? (
                    <a 
                        href={ticketLink || videoLink} 
                        target="__blank"
                        className="tour-item__button"
                    >
                        {ticketLink ? (
                            <>
                                <span>Билеты</span>
                                <Icon width={10} height={10} name="arrow-right"/>
                            </>
                        ): (
                            <span>Видео</span>
                        )}
                    </a>
                ): (
                    <button className="tour-item__button soldout">
                        SOLD OUT
                    </button>
                )}
            </div>
        </li>
    )
}
export default TourItem;