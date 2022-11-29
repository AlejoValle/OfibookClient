import classes from './HeaderLanding.module.scss';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext'; 
import { BsHouseDoor } from 'react-icons/bs'

const HeaderLanding = () => {
    const navigate = useNavigate();
    const { logout, user } = useUserContext();


    return(
        <header className={classes["HeaderLanding"]}>

            <div className={classes["Title"]}>
                <h1> Ofi-Book </h1>
            </div>

            <div className={classes["Bottons"]}>
                {
                    !user ?
                    <>
                    <ul>
                        <li><button onClick={ () => navigate("/posts")}> Oportunidades </button></li>
                        <li><button onClick={ () => navigate("/posts")}> Profesionales </button></li>
                        <li><button onClick={ () => navigate("/aboutus")}> Sobre Nostros </button></li>
                        <li><button onClick={ () => navigate("/auth/signin")} > Iniciar Sesión </button></li>
                        <li><button className='Register' onClick={ () => navigate("/auth/signup")} > Registrarse </button></li>
                    </ul>
                    </>:
                    <ul>    
                        <li><button onClick={ () => navigate("/posts")}> Oportunidades </button></li>
                        <li><button onClick={ () => navigate("/posts")}> Profesionales </button></li>
                        <li><button onClick={ () => navigate("/aboutus")}> Sobre Nostros </button></li>
                        <li><button onClick={ () => navigate("/auth/signin")} > Iniciar Sesión </button></li>
                        <li><button className='Register' onClick={ () => navigate("/auth/signup")} > Registrarse </button></li>
                    </ul>
                }    
            </div>

 
        </header>
    );
}

export default HeaderLanding;