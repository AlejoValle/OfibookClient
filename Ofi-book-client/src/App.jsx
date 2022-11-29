import classes from './App.module.scss';

import { Routes, Route, Navigate } from 'react-router-dom';

import AuthView from './views/AuthView/AuthView';
import LandingPage from './views/LandingPage/LandingPage';
import InApp from './views/InApp/InApp';
import AbuotUs from './views/AboutUs/AboutUs';


function App() {
  
  return (

  
    <section className={ classes["App"]}>
      
      <Routes>
        {/* Landing Page */}
        <Route index element ={<LandingPage />} />

        {/* Inicio de sesión */}
        <Route path='auth/*' element={<AuthView/>}/>
        
        {/* ABOUT US */}
        <Route path='/aboutus' element ={<AbuotUs />}/>

        {/* InApp */}
        <Route path='/posts' element={<InApp />} />


      </Routes>

      {/* Inicio de sesión */}

      {/* InApp*/}

      {/* HEADER  */}
      {/* <Routes>
        <Route path='/posts' element={<Header />}/>
      </Routes> */}
      

      {/* MAIN  > Los hijos son reemplazables */}
      {/* <main>
        <Routes>
          <Route path='/posts' element={<FeedView/>} />
          <Route path='auth/*' element={<AuthView />}/>
          <Route element = { <NotFoundView /> }/>
        </Routes>

      </main> */}

      {/* FOOTER  */}
      {/* <Routes>
        <Route path= '/posts' element={<Footer />}/>
      </Routes> */}

      
      
    </section>
  )
}

export default App;