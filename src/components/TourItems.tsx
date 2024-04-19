import Section from "./Section"
import SectionTitle from "./SectionTitle"

import { Link } from "react-router-dom";
import { sortByDate } from "../utils/common";
import TourItem from "./TourItem";
import Loader from "./Loader";
import { useTourItems } from "../hooks/useTourItems";



const TourItems = () => {

    const {items = [], isLoading} = useTourItems()

    // фильтруем если все билеты проданы или у билетов нет ссылки то показывать не надо
    // и также выводим максимум 5 элементов
    // console.log(items)
    const filtred = sortByDate(items
        .filter(({soldOut, ticketLink}) => !soldOut && ticketLink)
        .filter((_,i) => i < 5))
    

    if(isLoading) return <Loader/>
    
    return (
        <Section className='tour'>
            <div className="container">
                <SectionTitle text='Концерт'/>
               <ul className="tour-list">
                {filtred.length > 0 && filtred.map((item, i) => (
                    <TourItem key={i} {...item} i={i}/>
                ))}
               </ul>
               <Link to='/tour' className="button-more">
                    Все концерты
               </Link>
            </div>
        </Section>
    )
}

export default TourItems