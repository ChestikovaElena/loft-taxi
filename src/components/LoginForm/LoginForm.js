import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { authenticate } from '../../store/actions/auth';
import validateEmail from './utils';

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

class LoginForm extends React.Component {
  state = {email: '', password: '', errorTextEmail: ''};

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  authenticate = (event) => {
    event.preventDefault();
    if (!validateEmail(this.state.email)) {
      this.setState({ errorTextEmail: 'Некорректный email' });
    }
    this.props.authenticate(this.state.email, this.state.password);
  };

  render() {
    const { email, password, errorTextEmail } = this.state;

    return (
      <div className='form__wrapper' data-testid="loginForm">
        <h2 className='form__title'>Войти</h2>
        <form className='form__form'>
          <div className='form__row'>
            <CssTextField
              required
              className='form__input'
              id="email"
              label="Email"
              type="email"
              name="email"
              data-testid="emailInput"
              placeholder="mail@mail.ru"
              value = {email}
              error= {errorTextEmail !== ''}
              helperText={errorTextEmail}
              onChange={this.handleChange}
            />
          </div>
          <div className="form__row row__after">
            <CssTextField
              required
              className='form__input'
              id="password"
              label="Пароль"
              type="password"
              name="password"
              data-testid="passwordInput"
              placeholder="*************"
              value = {password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form__row">
            <StyledButton
              type="submit"
              className='button form__button'
              data-testid="submitButton"
              color="primary"
              onClick={this.authenticate}
            >
              Войти
            </StyledButton>
          </div>
        </form>
        <div className='form__reg'>
          <div className='form__reg-text'>Новый пользователь?</div>
          <StyledLink
            onClick={this.props.changeAuthMode}
            className='form__reg-button'
          >
            Регистрация
          </StyledLink>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {authenticate};
const LoginFormWithConnect = connect(null, mapDispatchToProps)(LoginForm);

export { LoginFormWithConnect };