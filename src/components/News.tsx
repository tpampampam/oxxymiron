import { useCallback,  useRef } from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

import 'swiper/css'
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { SLIDER_BUTTON_TYPES } from "../utils/constants";
import Loader from "./Loader";
import { useNewsItems } from "../hooks/useNewsItems";



const News = () => {

    const {PREV, NEXT} = SLIDER_BUTTON_TYPES

    const {items = [], isLoading} = useNewsItems()  
    const sliderRef = useRef(null)

    const handleButtonClick = useCallback((type: string) => {
        if(!sliderRef.current) return;

        const {swiper} = sliderRef.current;

        type === NEXT ? swiper.slideNext() : swiper.slidePrev()
    },[])

    if(isLoading) return <Loader/>

    return(
        <Section className='news-section'>
            <div className="container">
                <SectionTitle text='Новости'/>
                <Swiper 
                    ref={sliderRef}
                    spaceBetween={24}
                    slidesPerView={4}
                    className='news'
                    navigation
                    modules={[Navigation]}
                >
                    {items.map((item) => (
                        <SwiperSlide key={item.sys.id}>
                            <div>
                                <Link className="news-item" to={`/news/${item.sys.id}`}>
                                    <div className="news-item__img">
                                        <img src={item.cover.url} alt={item.title} />
                                    </div>
                                    <h3 className="news-item__title">{item.title}</h3>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="navigation">
                        <div className="navigation-button navigation-prev" onClick={() => handleButtonClick(PREV)}>
                            <Icon name='slider-arrow' />
                        </div>
                        <div className="navigation-button navigation-next" onClick={() => handleButtonClick(NEXT)}>
                            <Icon name='slider-arrow'/>
                        </div>
                    </div>
                </Swiper>
            </div>
        </Section>
    )
}

export default News;