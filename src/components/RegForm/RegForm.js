import React from 'react';
import PropTypes from 'prop-types';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { registrate } from '../../store/actions/registration';

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
    color: '#FDBF5A',
    fontSize: '16px',
    '&:hover': {
      backgroundColor: 'transparent',
    }
  },
  label: {
    textTransform: 'none',
  },
})(Button);

export const RegForm = (registrate, changeAuthMode) => {
  return (
    <div className='form__wrapper'>
      <h2 className='form__title' data-testid="header">Регистрация</h2>
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
          <button
            className='button form__button'
            data-testid="regButton"
            onClick={registrate}
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
      <div className='form__reg'>
        <span className='form__reg-text'>
          Уже зарегистрированы?
        </span>
        <StyledLink 
          onClick={changeAuthMode}
          data-testid="goToLoginForm"
          className='form__reg-button'
        >
          Войти
        </StyledLink>
      </div>
    </div>
  );
}
RegForm.propTypes = {
  registrate: PropTypes.func,
  changeAuthMode: PropTypes.func
}

const mapDispatchToProps = { registrate };

const RegFormWithConnect = connect( null, mapDispatchToProps)(RegForm);
export { RegFormWithConnect };