import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { getAddresses } from '../../store/actions/addresses';
import { getRoute } from '../../store/actions/route';
import { getCard } from '../../store/actions/card';

const CssInputLabel = withStyles({
  root: {
    color: '#000000',
    fontSize: '18px',
  },

})(InputLabel);

const CssSelect = withStyles({
  root: {
    display: 'flex',
  }
})(Select);

const StyledButton = withStyles({
  root: {
    backgroundColor: '#FDBF5A',
    borderRadius: '70px',
    border: 0,
    color: '#000',
    fontSize: '21px',
    letterSpacing: '.001em',
    padding: '13px 90px',
    '&:hover': {
      backgroundColor: '#FFA842',
    }
  },
  label: {
    textTransform: 'none',
  },
})(Button);

export class OrderComponent extends React.Component {
  state = {
    fromAddress: '',
    toAddress: '',
    fromList: [],
    toList: [],
    bothSelected: false,
    setAddressError: '',
  };

  
  static propTypes = {
    token: PropTypes.string,
    isProfileComplete: PropTypes.bool,
    isLoaddingAddresses: PropTypes.bool,
    errorAddresses: PropTypes.string,
    addresses: PropTypes.array,
    isLoaddingRoute: PropTypes.bool,
    route: PropTypes.array,
    errorRoute: PropTypes.string
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  getRoutes = event => {
    event.preventDefault();
    console.log(this.state.fromAddress);
    console.log(this.state.toAddress);
    if (this.state.fromAddress && this.state.toAddress) {
      this.props.getRoute(
        {fromAddress: this.state.fromAddress,
        toAddress: this.state.toAddress}
      );
    };
  }

  goToOrder = event => {

  }

  componentDidMount() {
    this.props.getCard(this.props.token);
    this.props.getAddresses();
    if (!!this.props.addresses) {
      this.setState({ fromList: this.props.addresses })
      this.setState({ toList: this.props.addresses })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ 
        fromList: this.props.addresses,
        toList: this.props.addresses,
      })
    }
  }

  render() {
    return (
      <>
        {this.props.isProfileComplete ?
          this.props.isLoaddingRoute ?
          <div className='form__wrapper form__wrapper--warning-order'>
            <h2 className='form__title form__title--warning-order'>Заказ размещен</h2>
            <div className='form__subtitle form__subtitle--warning-order'>
              Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
            </div>
            <StyledButton
                type="submit"
                className='button form__button'
                data-testid="submitButton"
                color="primary"
                onClick={this.goToOrder}
              >
                Сделать новый заказ
              </StyledButton>
          </div>
            :
            <form className='form__wrapper form__wrapper--order'>
            <div className='order__block'>
              <div className='order__row'>
                <CssInputLabel id='route-from-label'>Откуда</CssInputLabel>
                <CssSelect
                  className ='form__select'
                  name='fromAddress'
                  value={this.state.fromAddress}
                  onChange={this.handleChange}
                  labelId='route-from-label'
                >{this.state.fromList
                  .filter(address => address !== this.state.toAddress)
                  .map((address, i) => (
                    <MenuItem key={i} value={address}>
                      {address}
                    </MenuItem>
                  ))}
                </CssSelect>
              </div>
              <div className='order__row'>
                <CssInputLabel id='route-to-label'>Куда</CssInputLabel>
                <CssSelect
                  name='toAddress'
                  value={this.state.toAddress}
                  onChange={this.handleChange}
                  labelId='route-to-label'
                >{this.state.toList
                  .filter(address => address !== this.state.fromAddress)
                  .map((address, i) => (
                    <MenuItem key={i} value={address}>
                      {address}
                    </MenuItem>
                  ))}
                </CssSelect>
              </div>
            </div>
            <div className='order__block order__block--padding-big'>
              <StyledButton
                type="submit"
                className='button form__button'
                data-testid="submitButton"
                color="primary"
                onClick={this.getRoutes}
              >
                Заказать
              </StyledButton>
            </div>
          </form>
          :
          <div className='form__wrapper form__wrapper--warning warning--order'>
            <div className='form__subtitle form__subtitle--warning'>
              Введите данные карты.
            </div>
            <Link
              to="/profile" 
              className='button form__button form__button--warning'
              data-testid="submitButton"
            >
              Перейти в профиль
            </Link>
          </div>
        }
      </>
    );
  }
}

const mapStateToProps = ({ auth, card, addresses, route }) => ({
  token: auth.token,
  isProfileComplete: !!card.data.id,
  isLoaddingAddresses: addresses.isLoaddingAddresses,
  errorAddresses: addresses.error,
  addresses: addresses.addresses,
  isLoaddingRoute: route.isLoaddingRoute,
  route: route.route,
  errorRoute: route.error,
});

const mapDispatchToProps = {getCard, getAddresses, getRoute};

export const OrderForm = connect(mapStateToProps, mapDispatchToProps)(OrderComponent);