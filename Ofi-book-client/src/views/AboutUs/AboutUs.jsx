import classes from './AboutUs.module.scss';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const AbuotUs = () => {
    const navigate = useNavigate();
    
    return  (
        <section className={classes["AboutUs"]}>

            <div className={classes["App"]}>
                <div>
                    <figure>
                        <img src={logo} onClick={() => navigate("/")} />
                    </figure>
                </div>

                <div className={classes["Title"]}>
                    <h1> Ofi-Book </h1>
                </div>

                <div className={classes["description"]}>
                    <h1> Te damos la bienvenida a Ofi-Book, somos una empresa joven y buscamos lo mejor para nuestros clientes</h1>
                    <p> Ofrecemos a los salvadoreños, que no tuvieron una segunda oportunidad la segunda y tercera oportunidad para salir adelante y hacer de El Salvador un pais mas desarrollado </p>
                </div>

                <div className={classes["mision"]}>
                    <h1> Misión </h1>
                    <p> Conectar a profesionales de todo el mundo para ayudarles a ser más productivos y a alcanzar todas sus metas laborales</p>
                </div> 

                <div className={classes["vision"]}>
                <h1> Visión </h1>
                    <p> Crear oportunidades económicas para cada miembro del mercado laboral global gracias al desarrollo continuo del primer gráfico económico de nuestro hermoso El Salvador  </p>
                </div>

                <div className={classes["us"]}>
                <h1> ¿Quiénes somos? </h1>
                    <p> Ofi-Book nació en el año 2022 en las mesitas de las terrazas de la UCA, y se lanzó oficialmente el 29 de noviembre de 2022.

                        Actualmente, Ofi-Book cuenta con un modelo de negocio diversificado e ingresos provenientes de suscripciones de usuarios, publicidad y soluciones para selección de personal. La empresa está dirigida por "Los Triple A".
                    </p>
                </div>
            </div>

            <footer>
                <p> Ofi-Book© By Ofi-Book 2022®  </p>
            </footer>
        </section>
    );
}

export default AbuotUs;