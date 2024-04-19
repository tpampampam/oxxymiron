import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import PageTitle from "../components/PageTitle";
import { useNewsItems } from "../hooks/useNewsItems";
import { getLocalDateString } from "../utils/common";
import Icon from "../components/Icon";



const NewsPage = () => {

    const { items = [], isLoading } = useNewsItems()

    if(isLoading) return <Loader/>

    return(
        <section className="news-page page">
            <div className="container">
                <PageTitle text='Все новости'/>
                <div className="news-list">
                    {items.map((item) => {
                        const {title, date, cover: {url}, sys: {id}} = item
                        return(
                            <div className="news-list__item" key={id}>
                                <div 
                                    className="news-list__item-img" 
                                    style={{backgroundImage: `url(${url})`}}    
                                />
                                <div className="news-list__item-info">
                                    <p className="news-list__item-date">
                                        {getLocalDateString(date, {month: 'short'})}
                                    </p>
                                    <h2 className="news-list__item-title">
                                        {title}
                                    </h2>
                                    <Link to={`/news/${id}`} className="news-list__item-button">
                                        <span>читать</span>
                                        <Icon name='arrow-right'/>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default NewsPage;