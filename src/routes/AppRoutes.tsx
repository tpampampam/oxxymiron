import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import TourPage from "../pages/TourPage"
import TracksPage from "../pages/TracksPage"
import NewsPage from "../pages/NewsPage"
import NewsSingle from "../pages/NewsSingle"



const AppRoutes = () => (
    <Routes>
        <Route index element={<Home/>}/>
        <Route  path="/tour" element={<TourPage/>}/>
        <Route  path="/tracks" element={<TracksPage/>}/>
        <Route  path="/news" element={<NewsPage/>}/>
        <Route  path="/news/:id" element={<NewsSingle/>}/>
    </Routes>
)


export default AppRoutes