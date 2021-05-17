import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

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

const StyledLink = withStyles({
  root: {
    backgroundColor: 'transparent',
    border: 0,
    color: '#828282',
    fontSize: '16px',
    '&:hover': {
      backgroundColor: 'transparent',
    }
  },
  label: {
    textTransform: 'none',
  },
})(Button);

const RegForm = (props) => {
  return (
    <div className='form__wrapper'>
      <h2 className='form__title'>Регистрация</h2>
      <form className='form__form'>
        <div className='form__row'>
        <CssTextField
          required
          className='form__input'
          id="loginEmail"
          label="Email"
          type="email"
          data-testid="emailInput"
          placeholder="mail@mail.ru"
        />
        </div>
        <div className="form__row">
          <CssTextField
            required
            className='form__input'
            id="loginName"
            label="Как вас зовут?"
            type="text"
            data-testid="nameInput"
            placeholder="Петр Александрович"
          />
        </div>
        <div className="form__row">
          <CssTextField
            required
            className='form__input'
            id="loginPassword"
            label="Придумайте пароль"
            type="password"
            data-testid="passwordInput"
            placeholder="*************"
          />
        </div>
        <div className="form__row">
          <Link to="/" className='button form__button'>Зарегистрироваться</Link>
        </div>
      </form>
      <div className='form__reg'>
        <StyledLink
          onClick={props.changeAuthMode}
          className='form__reg-text'
        >
          Уже зарегистрированы?
        </StyledLink>
        <Link to="/" className='form__reg-button'>Войти</Link>
      </div>
    </div>
  );
}

export { RegForm }