import React from 'react';
import PropTypes from 'prop-types';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { authenticate } from '../../store/actions/auth';

const schema = yup.object().shape({
  email: yup.string()
    .required("Обязательное поле")
    .matches(
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      "Не верно введен email"),
  password: yup.string()
    .required("Введите пароль")
    .min(3, "Длина пароля не менее 3 символов")
});

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

export const LoginForm = ( authenticate, changeAuthMode ) => {
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm({ mode:"onSubmit", resolver: yupResolver(schema) });

  const submitLogic = (formData) => {
    authenticate(formData.email, formData.password);
  };

  return (
    <div className='form__wrapper' data-testid="loginForm">
      <h2 className='form__title'>Войти</h2>
      <form className='form__form' 
        onSubmit={handleSubmit(submitLogic)}>
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
        <div className="form__row row__after">
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
            data-testid="submitButton"
            color="primary"
          >
            Войти
          </StyledButton>
        </div>
      </form>
      <div className='form__reg'>
        <div className='form__reg-text'>Новый пользователь?</div>
        <StyledLink
          onClick={changeAuthMode}
          data-testid="goToRegForm"
          className='form__reg-button'
        >
          Регистрация
        </StyledLink>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  authenticate: PropTypes.func,
  changeAuthMode: PropTypes.func
}

const mapDispatchToProps = { authenticate };

const LoginFormWithConnect = connect(null, mapDispatchToProps)(LoginForm);

export { LoginFormWithConnect };