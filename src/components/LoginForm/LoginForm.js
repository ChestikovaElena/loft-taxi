import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import { withAuth } from '../AuthContext/AuthContext';

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

class LoginForm extends React.Component {
  static propTypes = {
    navigateTo: PropTypes.func,
    logIn: PropTypes.func
  }

  state = {email: '', password: ''};

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  goToRegistration = (event) => {
    event.preventDefault();
    this.props.navigateTo('regPage');
  }

  authenticate = (event) => {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
    if (this.props.isLoggedIn) {
      this.props.navigateTo('map');
    };
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='form__wrapper'>
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
              placeholder="mail@mail.ru"
              value = {email}
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
              placeholder="*************"
              value = {password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form__row">
            <StyledButton
              type="submit"
              className='button form__button'
              color="primary"
              onClick={this.authenticate}
            >
              Войти
            </StyledButton>
          </div>
        </form>
        <div className='form__reg'>
          <div className='form__reg-text'>Новый пользователь?</div>
          <span onClick={this.goToRegistration} className='form__reg-button'>Регистрация</span>
        </div>
      </div>
    );
  }
}

const LoginFormWithAuth = withAuth(LoginForm);
export { LoginFormWithAuth };