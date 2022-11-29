import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../Button/Button';
import classes from '../AuthForm.module.scss';

const RegisterForm = ({ onRegister = () => { } }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const errors = {
    "username": !username || username.length < 4 || username.length > 32,
    "email": !email,
    "password": !password || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})/.test(password),
    "re-password": !rePassword || password !== rePassword
  }

  const hasErrors = () => Object.values(errors).some(error => error);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (hasErrors()) {
      toast.warn("Wrong fields!");
      return;
    }

    onRegister(username, email, password);
  }

  return (
    <section className={classes["container"]}>
      <h3> Cuentanos más sobre ti </h3>

      <form onSubmit={onSubmitHandler}>
        <label>
          Escribe un nombre de usuario *
          <input
            className={errors["username"] ? classes["error"] : ""}
            type={"text"}
            placeholder="e.g. supernick33"
            autoComplete="username"
            name="username"
            value={username}
            onChange={({ target }) => { setUsername(target.value) }} />

          <div className={classes["hint"]}>
            Debe de tener entre 4 y 32 caracteres
          </div>
        </label>

        <label>
          Correo electronio *
          <input
            className={errors["email"] ? classes["error"] : ""}
            type={"email"}
            placeholder="e.g. example@example.com"
            autoComplete="email"
            name="email"
            value={email}
            onChange={({ target }) => { setEmail(target.value) }} />
          <div className={classes["hint"]}>
            Deberia de se correo valido
          </div>
        </label>

        <label>
          Escribe tu contraseña *
          <input
            className={errors["password"] ? classes["error"] : ""}
            type={"password"}
            autoComplete="new-password"
            placeholder="Una contraseña segura"
            name="password"
            value={password}
            onChange={({ target }) => { setPassword(target.value) }} />

          <div className={classes["hint"]}>
            Debe tener al menos 1 mayúscula, 1 minúscula, 1 número y entre 8 y 32 caracteres
          </div>
        </label>

        <label>
          Repite la contraseña *
          <input
            className={errors["re-password"] ? classes["error"] : ""}
            type={"password"}
            autoComplete="new-password"
            placeholder="Repite una conraseña segura"
            name="re-password"
            value={rePassword}
            onChange={({ target }) => { setRePassword(target.value) }} />
        </label>

        <Button type="submit" disabled={hasErrors()}>
          Resgistrar
        </Button>
      </form>
    </section>
  )
}

export default RegisterForm;