import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import logo from '../../images/icons/logo.png';
import chip from '../../images/icons/chip.png';
import masterCard from '../../images/icons/masterCard.png';

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

class ProfileForm extends React.Component {
  static propTypes = {
    navigateTo: PropTypes.func,
    logIn: PropTypes.func
  }

  state = {
    name: '', errorTextName: '',
    card: '', errorTextCard: '',
    date: '', errorTextDate: '',
    cvc: '', errorTextCvc: ''};

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // handleChangeEmail = event => {
  //   this.setState({ email: event.target.value });
  // };

  // validateEmail = email => {
  //   const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  //   return re.test(String(email).toLowerCase);
  // }

  goToMap = (event) => {
    event.preventDefault();
    this.props.navigateTo('map');
  }

  // authenticate = (event) => {
  //   event.preventDefault();
  //   if (!this.validateEmail(this.state.email)) {
  //     this.setState({ errorTextEmail: 'Некорректный email' });
  //   }
  //   this.props.logIn(this.state.email, this.state.password);
  // };

  render() {
    const { name, card, date, cvc } = this.state;
    return (
      <div className='form__wrapper form__wrapper--profile'>
        <h2 className='form__title form__title--profile'>Профиль</h2>
        <div className='form__subtitle'>Введите платежные данные</div>
        <form className='form__form'>
          <div className="form__block">
            <div className='form__column'>
              <div className='form__row'>
                <CssTextField
                  required
                  className='form__input'
                  pattern='[A-Za-zА-Яа-яЁё]'
                  id="name"
                  label="Имя владельца"
                  type="text"
                  name="name"
                  data-testid="nameInput"
                  placeholder="Loft"
                  value = {name}
                  error= {this.state.errorTextName !== ''}
                  helperText={this.state.errorTextName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form__row">
                <CssTextField
                  required
                  className='form__input'
                  id="card"
                  label="Номер карты"
                  name="card"
                  data-testid="cardInput"
                  placeholder="*************"
                  value = {card}
                  error= {this.state.errorTextCard !== ''}
                  helperText={this.state.errorTextCard}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form__row form__row--profile">
                <div className="row__input row__input--small">
                  <CssTextField
                    required
                    className='form__input form__input--small'
                    id="date"
                    label="MM/YY"
                    name="date"
                    data-testid="dateInput"
                    placeholder="05/08"
                    value = {date}
                    error= {this.state.errorTextDate !== ''}
                    helperText={this.state.errorTextDate}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="row__input row__input--small">
                  <CssTextField
                    required
                    className='form__input form__input--small'
                    id="cvc"
                    label="CVC"
                    name="cvc"
                    data-testid="cvcInput"
                    placeholder="667"
                    value = {cvc}
                    error= {this.state.errorTextCvc !== ''}
                    helperText={this.state.errorTextCvc}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className='form__column'>
              <div className='card'>
              <div className='card__wrapper'>
                <div className='card__row'>
                  <img src={logo} alt="logo" className="logo-image logo-image--card"/>
                  <span className="card__date">05/08</span>
                </div>
                <div className='card__row'>
                  <span className="card__number">5545230034324521</span>
                </div>
                <div className='card__row'>
                  <img src={chip} alt="chip" className="card__chip"/>
                  <img src={masterCard} alt="masterCard" className="card__masterCard"/>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="form__block form__block--button">
              <StyledButton
                type="submit"
                className='button form__button'
                data-testid="submitButton"
                color="primary"
                onClick={this.goToMap}
              >
                Сохранить
              </StyledButton>
            </div>
        </form>
        </div>
    );
  }
}

export { ProfileForm };