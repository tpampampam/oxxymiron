import { useCallback, useEffect, useState } from "react";
import Loader from "../components/Loader";
import PageTitle from "../components/PageTitle";
import { useTourItems } from "../hooks/useTourItems";
import { Venue } from "../redux/reducers/tourReducer";
import TourItem from "../components/TourItem";



const TourPage = () => {

    const {items = [], isLoading} = useTourItems()

    const tabs = [...new Set(items.map((item) => item.country))]
    
    const [activetab, setActiveTab] = useState<string>()
    const [filtred, setFiltred] = useState<Venue[] | []>([])

    const toggleTab = useCallback((tab: string) => {
        setActiveTab(tab)
        setFiltred(items.filter((item) => item.country === tab))
    }, [items])

    useEffect(() => {
        if(tabs.length > 0 && !activetab) setActiveTab(tabs[0])
    },[tabs, activetab])

    if(isLoading) return <Loader/>
    return(
        <section className="tour-page page">
            <div className="container">
                <PageTitle text="Все концерты"/>
                {
                    <>
                        <ul className="tour-tabs">
                            {tabs.map((tab) => (
                                <li 
                                    className={`tour-tab ${activetab === tab ? 'active' : ''}`} 
                                    key={tab}
                                    onClick={() => toggleTab(tab)}
                                >
                                    {tab}
                                </li>
                            ))}
                        </ul>
                        <ul className="tour-items">
                            {filtred.map((item,i) => (
                                <TourItem key={item.sys.id} i={i} {...item}/>
                            ))}
                        </ul>
                    </>
                }
            </div>
        </section>
    )
}
export default TourPage;