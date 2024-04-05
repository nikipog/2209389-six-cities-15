import { Helmet } from 'react-helmet-async';
import { FormEvent, ReactEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useActionCreators } from '../../hooks/store';
import {userActions } from '../../store/slices/user';


type HTMLLoginForm = HTMLFormElement & {
  email: HTMLInputElement;
  password: HTMLInputElement;
};

type ChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

function LoginPage() : JSX.Element {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // достаем асинхронный хук - логин
  const { login } = useActionCreators(userActions);

  // собираем данные с формы с помощью контролируемого компонента
  const handleChange: ChangeHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // в обработичке сабмита вызываем логин и передаем в него стейт
  function handleSubmit(event: FormEvent<HTMLLoginForm>) {
    event.preventDefault();
    login(formData);
  }
  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>6 Cities. Login</title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" type="password" name="password" placeholder="Password" required value={formData.password} onChange={handleChange}/>
            </div>
            <button className="login__submit form__submit button" type="submit" >Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link
              className="locations__item-link"
              to={AppRoute.Main}
            >
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;


