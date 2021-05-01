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
    padding: '15px 60px',
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
  },
})(TextField);

const RegForm = ({ navigateTo }) => {
  const handlePage = (page) => {
    navigateTo(page);
  }

    return (
      <div className='form__wrapper'>
        <h2 className='form__title'>Регистрация</h2>
        <form className='form__form'>
          <div className='form__row'>
          <CssTextField
            //error={email.error.length > 0 && true}
            required
            className='form__input'
            id="loginEmail"
            label="Email"
            type="email"
            placeholder="mail@mail.ru"
            //value={email.value}
          />
          {/* {email.error.length > 0 && (
            <p className="LoginForm__error">{email.error}</p>
          )} */}
          </div>
          <div className="form__row">
            <CssTextField
              //error={password.error.length > 0 && true}
              required
              className='form__input'
              id="loginName"
              label="Как вас зовут?"
              type="text"
              placeholder="Петр Александрович"
              //value={password.value}
            />
            {/* {password.error.length > 0 && (
              <p className="LoginForm__error">{password.error}</p>
            )} */}
          </div>
          <div className="form__row">
            <CssTextField
              //error={password.error.length > 0 && true}
              required
              className='form__input'
              id="loginPassword"
              label="Придумайте пароль"
              type="password"
              placeholder="*************"
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
                Зарегистрироваться
              </StyledButton>
            </div>
        </form>
        <div className='form__reg'>
          <div className='form__reg-text'>Уже зарегистрированы?</div>
          <a href='#' onClick={() => handlePage('loginPage')} className='form__reg-button'>Войти</a>
        </div>
      </div>
    );
  // };
}

export { RegForm }