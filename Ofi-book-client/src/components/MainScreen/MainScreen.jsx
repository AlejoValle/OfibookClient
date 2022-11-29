import classes from './MainScreen.module.scss';
import { BsInstagram, BsTwitter, BsWhatsapp, BsFacebook } from 'react-icons/bs';
import  LandImage  from '../../../src/assets/ImageLand.png';
import Button from '../Button/Button';

import { useNavigate } from 'react-router-dom';

const MainScreen = () => {
    const navigate = useNavigate();
    
    return(
        <section className={classes["main"]}>
            <div className={classes["row"]}>
                <div className={classes["LeftSide"]}>
                        
                        <div className={classes["paragraph"]}>
                            <h3>Oportunidades hay muchas</h3>
                            <p>
                                solamente hay que saber donde buscar, Ofi-book te  la
                                oportunidad de trabajar y desempeñarte  en lo que tu haz aprendido.
                                Registrate y haz un cambio en tu vida laboral.
                            </p> 

                        </div>

                        <div className={classes["row py-4"]}>
                            <div className={classes["col"]}>
                                <Button onClick={ () => navigate("/auth/signup")} >Registrarse</Button>
                            </div>
                        </div>

                        <div className={classes["links"]}>
                            <a href="https://www.instagram.com/facebook/" target="_blank" className={classes["link"]}>
                                <BsFacebook/>
                            </a>
                            
                            <a href="#" className={classes["link"]}>
                                < BsTwitter />
                            </a>
                            
                            <a href="https:wa.me/+50370991184" target="_blank" className={classes["link"]}>
                                <BsWhatsapp />
                            </a>
                            
                            <a href="https://www.instagram.com/ofi.book/" target="_blank" className={classes["link"]}>
                                <BsInstagram />
                            </a>

                        </div>
                    </div>

                <div className={classes["col-70"]}>
                    <img src= {LandImage} width="80%" alt=""/>
                </div>
            </div>

        </section>
    );
    
}

export default MainScreen;