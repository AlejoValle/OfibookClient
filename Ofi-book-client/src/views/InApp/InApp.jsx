import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FeedView from '../FeedView/FeedView';
import classes from './InApp.module.scss'


const InApp = () => {
    return(

        <section className={classes["InApp"]}>

            <Header />

            <FeedView />

            <Footer />

        </section>

    );
}

export default InApp;