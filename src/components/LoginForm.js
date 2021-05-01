import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    backgroundColor: '#D8D7D5',
    borderRadius: '70px',
    border: 0,
    color: '#737373',
    fontSize: '25px',
    padding: '15px 140px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const validate = (email, value) => {
  switch (email) {
    case "inputName":
      if (value !== "test@test.com") {
        return "Неверный email";
      } else {
        return "";
      }
    case "password":
      if (value !== "123123") {
        return "Неверный пароль";
      } else {
        return "";
      }
    default:
      return "";
  }
};

const LoginForm = ({ navigateTo }) => {
  const handlePage = (page) => {
    navigateTo(page);
  }

    return (
      <div className='form__wrapper'>
        <h2 className='form__title'>Войти</h2>
        <form className='form__form'>
          <div className='form__row'>
          <TextField
            //error={email.error.length > 0 && true}
            required
            className='form__input'
            id="loginEmail"
            label="Email"
            type="email"
            //value={email.value}
          />
          {/* {email.error.length > 0 && (
            <p className="LoginForm__error">{email.error}</p>
          )} */}
          </div>
          <div className="form__row row__after">
            <TextField
              //error={password.error.length > 0 && true}
              required
              className='form__input'
              id="loginPassword"
              label="Пароль"
              type="password"
              //value={password.value}
            />
            {/* {password.error.length > 0 && (
              <p className="LoginForm__error">{password.error}</p>
            )} */}
          </div>
          <div className="form__row">
              <StyledButton
                type="submit"
                className='button form__button'
                color="primary"
                onClick={() => handlePage('map')}
              >
                Войти
              </StyledButton>
            </div>
        </form>
        <div className='form__reg'>
          <div className='form__reg-text'>Новый пользователь?</div>
          <a href='#' onClick={() => handlePage('regPage')} className='form__reg-button'>Регистрация</a>
        </div>
      </div>
    );
  // };
}

export { LoginForm }