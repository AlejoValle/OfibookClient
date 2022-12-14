import { Routes, Route, Navigate } from 'react-router-dom';

import classes from './AuthView.module.scss';

import LoginForm from '../../components/AuthForms/LoginForm/LoginForm';
import RegisterForm from '../../components/AuthForms/RegisterForm/RegisterForm';
import { useUserContext } from '../../contexts/UserContext';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { BsArrowLeftSquareFill } from 'react-icons/bs';

const AuthView = () => {
  const navigate = useNavigate();
  const { login, register, user } = useUserContext();

  const onLoginHandler = async (identifier, password) => {
    
    await login(identifier, password);
  }

  const onRegisterHandler = async (username, email, password) => {
    await register(username, email, password);
  }

  useEffect(() => {
    if (user) {
      navigate("/posts");
    }
  }, [user])


  return (
    <section>
      <div className={classes["container"]}>
        <p onClick={ () => navigate("/")}>
          <BsArrowLeftSquareFill />
        </p>

        <div className={classes["card"]}>
              <Routes>
                <Route path='signin' element={<LoginForm onLogin={onLoginHandler} />} />
                <Route path='signup' element={<RegisterForm onRegister={onRegisterHandler} />} />
                <Route path='*' element={<Navigate to="/not-found" />} />
              </Routes>
          </div>
        </div>
    </section>
  )
}

export default AuthView;