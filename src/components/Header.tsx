import { FC } from "react";
import Logo from "./Logo";
import { MENU } from "../utils/constants";
import Socials from "./Socials";

import { NavLink } from "react-router-dom";

const Header: FC = () => {

    return(
        <section className="header">
            <div className="container">
                <header>
                    <Logo/>
                    <nav className="menu">
                        {MENU.map(({link,name}) => (
                            <div 
                                key={link}
                                className="menu-item"
                            >
                                <NavLink 
                                    to={`/${link}`}
                                    className={({isActive}) => (isActive ? 'active' : '')}
                                >
                                    {name}
                                </NavLink>
                            </div>
                        ))}
                    </nav>
                    <Socials/>
                </header>
            </div>
        </section>
    )
}

export default Header;