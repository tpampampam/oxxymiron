
import { FC } from 'react';
import logo from '../images/logo.webp';
import { Link } from 'react-router-dom';

const Logo:FC = () => (
    <div className="logo">
        <Link to='/'>
            <img src={logo} alt="logo" />
        </Link>
    </div>
)
export default Logo;