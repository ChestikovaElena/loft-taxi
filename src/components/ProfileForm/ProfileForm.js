import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import {getCard, updateCard} from '../../store/actions/card';

import logo from '../../images/icons/logo.png';
import chip from '../../images/icons/chip.png';
import masterCard from '../../images/icons/masterCard.png';

import ProfileWarning from '../ProfileWarning';

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

export class ProfileForm extends React.Component {
  componentDidMount() {
    this.props.getCard&&this.props.getCard(this.props.token);
  };
  
  state = {
    id: this.props.cardData && this.props.cardData.id,
    cardNumber: this.props.cardData && this.props.cardData.cardNumber,
    expiryDate: this.props.cardData && this.props.cardData.expiryDate,
    cardName: this.props.cardData && this.props.cardData.cardName,
    cvc: this.props.cardData && this.props.cardData.cvc,
    errorTextName: '',
    errorTextCard: '',
    errorTextDate: '',
    errorTextCvc: ''
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ 
        id: this.props.cardData.id,
        cardNumber: this.props.cardData.cardNumber,
        expiryDate: this.props.cardData.expiryDate,
        cardName: this.props.cardData.cardName,
        cvc: this.props.cardData.cvc,
      })
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateProfile = event => {
    event.preventDefault();
    this.props.updateCard(
      this.state.cardNumber,
      this.state.expiryDate,
      this.state.cardName,
      this.state.cvc,
      this.props.token
    )
  }

  render() {
    return (
      <>
      {this.props.isLoaddingCard
        ?
        <div className='form__wrapper form__wrapper--profile' data-testid='header'>Loading...</div>
        :
        this.props.isUpdatedCard
        ?
        <ProfileWarning />
        :
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
                    name="cardName"
                    data-testid="nameInput"
                    placeholder="Loft"
                    value = {this.state.cardName}
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
                    name="cardNumber"
                    data-testid="cardInput"
                    placeholder="5545230034324521"
                    value = {this.state.cardNumber}
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
                      name="expiryDate"
                      data-testid="dateInput"
                      placeholder="05/08"
                      value = {this.state.expiryDate}
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
                      value = {this.state.cvc}
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
                    <span className="card__date">{this.state.expiryDate}</span>
                  </div>
                  <div className='card__row'>
                    <span className="card__number">{this.state.cardNumber}</span>
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
                  onClick={this.updateProfile}
                >
                  Сохранить
                </StyledButton>
              </div>
          </form>
        </div>
       
      };
      </>
    );
  }
}

ProfileForm.propTypes = {
  token: PropTypes.string,
  cardData: PropTypes.object,
  isLoaddingCard: PropTypes.bool,
  error: PropTypes.string,
  isUpdatedCard: PropTypes.bool,
  getCard: PropTypes.func,
  updateCard: PropTypes.func,
}

const mapStateToProps = ({ card, auth }) => ({
  token: auth.token,
  cardData: card.data,
  isLoaddingCard: card.isLoaddingCard,
  error: card.error,
  isUpdatedCard: card.isUpdatedCard
})

const mapDispatchToProps = {getCard, updateCard};

export const ProfileFormWithConnect = connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
