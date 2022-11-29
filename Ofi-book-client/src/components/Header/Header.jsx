import classes from './Header.module.scss';
import logo from '../../assets/logo-.png';
import Button from '../Button/Button';
import { FiSettings } from 'react-icons/fi';
import { MdNotificationsNone } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';


const Header = () => {
    return(
        <header className={classes["Header"]} >
            <div className = {classes["Title"]}>
                <figure>
                    <img src = { logo } />
                </figure>

                <h1> Ofi-Book </h1>
            </div>

            <div className={classes["Bottons"]}>
                <ul>
                    <li> <p><AiOutlineUser /></p> </li>
                    <li> <p><MdNotificationsNone /></p> </li>
                    <li> <p><FiSettings /></p> </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;