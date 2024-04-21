import { FC } from "react";
import { Venue } from "../redux/reducers/tourReducer";
import Icon from "./Icon";
import { getLocalDateString } from "../utils/common";
import {motion} from 'framer-motion';



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

    const variants = {
        y: 0,
        opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
      }
    

    return(
        <motion.li
        initial={{y: -500, opacity: 0}}
        animate={{ y: 0 , opacity: 1}}
        transition={{  duration: 2 }}
        >
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
                    <motion.a 
                        href={ticketLink || videoLink} 
                        target="__blank"
                        className="tour-item__button"
                        whileHover={{ scale: 1.1 }}
                    >
                        {ticketLink ? (
                            <>
                                <motion.span 
                                    initial={{ color: '#000' }}
                                    whileHover={{ color: '#fff', scale: 1.2 }}
                                >Билеты</motion.span>
                                <Icon width={10} height={10} name="arrow-right"/>
                            </>
                        ): (
                            <span>Видео</span>
                        )}
                    </motion.a>
                ): (
                    <button className="tour-item__button soldout">
                        SOLD OUT
                    </button>
                )}
            </div>
        </motion.li>
    )
}
export default TourItem;