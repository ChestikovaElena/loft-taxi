import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    backgroundColor: '#FDBF5A',
    borderRadius: '70px',
    border: 0,
    color: '#000',
    fontSize: '25px',
    padding: '15px 140px',
    '&:hover': {
      backgroundColor: '#FFA842',
    }
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#000000',
      fontWeight: '700',
      fontSize: '16px',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#E4E4E4',
      borderBottomWidth: '1px',
    },
  }
})(TextField);

const LoginForm = ({ navigateTo }) => {
  const handlePage = (page) => {
    navigateTo(page);
  }

    return (
      <div className='form__wrapper'>
        <h2 className='form__title'>Войти</h2>
        <form className='form__form'>
          <div className='form__row'>
          <CssTextField
            required
            className='form__input'
            id="loginEmail"
            label="Email"
            type="email"
            placeholder="mail@mail.ru"
          />
          </div>
          <div className="form__row row__after">
          <CssTextField
            required
            className='form__input'
            id="loginPassword"
            label="Пароль"
            type="password"
            placeholder="*************"
          />
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
}

export { LoginForm }