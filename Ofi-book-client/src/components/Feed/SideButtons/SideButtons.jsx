import Button from "../../Button/Button";
import { MdReorder } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { FiBriefcase } from "react-icons/fi";
import classes from './SideButtons.module.scss';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from "../../../contexts/UserContext";
import { BsHouseDoor } from 'react-icons/bs'


const SideButtons = () => {
    const { logout, user } = useUserContext();
    const navigate = useNavigate();

    return(
        
        <section className = {classes["SideButtons"]}>
            {
                !user ?
                <>
                <div>
                    <ul>
                        <li> <button onClick={() => navigate("/")}> <BsHouseDoor/> Landing </button> </li>
                        <li> <button onClick={() => navigate("/posts")}> <MdReorder/> Oportunidades </button> </li>
                        <li> <button> <FiBriefcase /> Profesiones </button> </li>
                    </ul>
                </div>
                </>:
                <>
                    <ul>
                        <li> <button onClick={() => navigate("/")}> <BsHouseDoor/> Landing </button> </li>
                        <li> <button onClick={() => navigate("/posts")}> <MdReorder/> Oportunidades </button> </li>
                        <li> <button> <FiBriefcase /> Profesiones </button> </li>
                        <li> <button onClick={() => { logout() }} > Cerrar Sesión</button> </li>
                    </ul>
                </>

            }
        </section>
        
    );
}

export default SideButtons;