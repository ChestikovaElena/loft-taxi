import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrate } from '../../store/actions/registration';

const schema = yup.object().shape({
  email: yup.string()
    .required("Обязательное поле")
    .matches(
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      "Не верно введен email"),
  name: yup.string(),
  password: yup.string()
    .required("Введите пароль")
    .min(3, "Длина пароля не менее 3 символов")
});

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
    },
    '&:disabled': {
      backgroundColor: '#D8D7D5',
      color: '#737373',
    }
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

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

export const RegForm = ( {registrate, changeAuthMode} ) => {
  const {
    handleSubmit,
    formState: { errors, dirtyFields },
    control
  } = useForm({ mode:"onSubmit", resolver: yupResolver(schema) });

  const submitLogic = (formData) => {
    const nameArray = formData.name.split(" ");
    const name = nameArray[0]||"";
    const surname = nameArray[1]||"";
    registrate(formData.email, formData.password, name, surname);
  };

  const isNotAvailable = !(
    dirtyFields.email &&
    dirtyFields.name &&
    dirtyFields.password
  );

  console.log('---', isNotAvailable);

  return (
    <div className='form__wrapper'>
      <h2 className='form__title' data-testid="header">Регистрация</h2>
      <form className='form__form' onSubmit={handleSubmit(submitLogic)}>
        <div className='form__row'>
        <Controller
            name="email"
            id="email"
            defaultValue=""
            control={ control }
            render={({ field }) => {
              return (
                <CssTextField
                  { ...field }
                  label="Email"
                  placeholder="mail@mail.ru"
                  className="form__input"
                  helperText={errors?.email?.message && (
                    errors.email.message
                  )}
                  fullWidth
                  data-testid="emailInput"
                />
              );
            }}
          />
        </div>
        <div className="form__row">
          <Controller
            name="name"
            id="name"
            defaultValue=""
            control={ control }
            render={({ field }) => {
              return (
                <CssTextField
                  { ...field }
                  label="Как вас зовут?"
                  placeholder="Петр Александрович"
                  className="form__input"
                  helperText={errors?.name?.message && (
                    errors.name.message
                  )}
                  fullWidth
                  data-testid="nameInput"
                />
              );
            }}
          />
        </div>
        <div className="form__row">
          <Controller
            name="password"
            id="password"
            defaultValue=""
            control={ control }
            render={({ field }) => {
              return (
                <CssTextField
                  { ...field }
                  label="Пароль"
                  placeholder="*************"
                  className="form__input"
                  helperText={errors?.password?.message && (
                    errors.password.message
                  )}
                  fullWidth
                  data-testid="passwordInput"
                />
              );
            }}
          />
        </div>
        <div className="form__row">
          <StyledButton
            type="submit"
            className='button form__button'
            data-testid="regButton"
            disabled={isNotAvailable}
          >
            Зарегистрироваться
          </StyledButton>
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
  changeAuthMode: PropTypes.func,
}

const mapDispatchToProps = { registrate };

const RegFormWithConnect = connect( null, mapDispatchToProps)(RegForm);
export { RegFormWithConnect };