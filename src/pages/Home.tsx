import { FC } from "react";
import MainBanner from "../components/MainBanner";
import TourItems from "../components/TourItems";
import TourBanner from "../components/TourBanner";
import Tracks from "../components/Tracks";
import ShopBanner from "../components/ShopBanner";
import News from "../components/News";


const Home:FC = () => {

    return(
        <main className="main">
            <MainBanner/>
            <TourItems/>
            <TourBanner/>
            <Tracks/>
            <ShopBanner/>
            <News/>
        </main>
    )
}

export default Home;