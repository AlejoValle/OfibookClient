import classes from './SinglePost.module.scss'
import { MdFavoriteBorder, MdBookmarkBorder, MdElectricalServices, MdOutlineComputer } from 'react-icons/md';
import { GiComputing } from 'react-icons/gi'
import Button from '../../Button/Button';
import {AiOutlineCheckCircle } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';

const SinglePost = ({ title = "", description = " ", image = "", user = "" }) => {
    return(
        <article className={classes ["post"]}>
            <h4>
                { title }
            </h4>
            {/* <h5>
                { user }
            </h5> */}
            <p>
                { description }
            </p>
            <p>
                Preferencias:
            </p> 

            <div className='Preferences'>
                <li><div><MdElectricalServices /> Electricista </div></li>
                <li><div><MdOutlineComputer/> Ténico Analista </div></li>
                <li><div><GiComputing/> Hacker </div></li>
            </div>


            <figure>
                <img src= { image } alt="Post Image" />
            </figure>

            <div className = {classes ["actions"]}>
                <button>
                    <AiOutlineCheckCircle /> Aplicar
                </button>

                <button>
                    < BsWhatsapp /> WhatsApp
                </button>
            </div>
        </article>
    );
}

export default SinglePost;