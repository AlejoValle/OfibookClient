import classes from './LandingPage.module.scss';
import { Routes, Route } from 'react-router-dom';

import HeaderLanding from '../../components/HeaderLanding/HeaderLanding';
import MainScreen from '../../components/MainScreen/MainScreen';


const LandingPage = () => {
    return (

    <section className={classes["LandingPage"]}>

        { /* Header Landing */ }
        <HeaderLanding />

        {/* Main screen */}

        <MainScreen />

    </section>

    );
}

export default LandingPage;