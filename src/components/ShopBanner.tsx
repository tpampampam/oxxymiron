import { Link } from "react-router-dom";
import Section from "./Section";

import logo from '../images/oxxxyshop.webp';
import bannerImage from '../images/banner.webp';


const ShopBanner = () => {



    return(
        <Section className='shop-banner__section'>
            <div className="container">
                <div className="shop-banner__wrapper">
                    <Link to='/shop' className="shop-banner">
                        <div className="shop-banner__text">
                            <p className="shop-banner__subtitle">
                                ОБНОВЛЕННЫЙ МЕРЧ ОТ ОКСИМИРОНА
                            </p>
                            <p className="shop-banner__title">
                                OXXXYSHOP 2.0
                            </p>
                        </div>
                        <div className="shop-banner__logo">
                            <img src={logo} alt="logo" className="shop-logo"/>
                        </div>
                        <div className="shop-banner__image">
                            <img src={bannerImage} alt="banner" />
                        </div>
                    </Link>
                </div>
            </div>
        </Section>
    )
}
export default ShopBanner;