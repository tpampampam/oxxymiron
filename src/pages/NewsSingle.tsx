import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { useEffect } from "react";
import { getNewsItem, newsSelector } from "../redux/reducers/newsReducer";
import Loader from "../components/Loader";
import { getLocalDateString, jsonToText, renderNode } from "../utils/common";





const NewsSingle = () => {

    const {id} = useParams()

    const {item, isLoading} = useAppSelector(newsSelector)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getNewsItem(id!))
    },[id])

    if(isLoading || !item) return <Loader/>

    return(
        <section className="page news-single">
            <div className="container">
                <div className="news-single__item">
                    <h1 className="news-single__item-title">
                        {item.title}
                    </h1>
                    <p className="news-single__item-date">
                        {getLocalDateString(item.date, {month: 'short'})}
                    </p>
                    <div className="news-single__item-content">
                        {jsonToText(item.description.json)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsSingle;