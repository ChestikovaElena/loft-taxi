import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { getAddresses } from '../../store/actions/addresses';
import { getRoute, resetRoute } from '../../store/actions/route';
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
    },
    '&:disabled': {
      backgroundColor: '#D8D7D5',
      color: '#737373',
    }
  },
  label: {
    textTransform: 'none',
  },
})(Button);

export class OrderForm extends React.Component {
  state = {
    fromAddress: '',
    toAddress: '',
    fromList: [],
    toList: [],
    setAddressError: '',
    isLoadedRoute: this.props.route && this.props.route.length!== 0,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  getRoutes = event => {
    event.preventDefault();
    if (this.state.fromAddress && this.state.toAddress) {
      this.props.getRoute(
        {fromAddress: this.state.fromAddress,
        toAddress: this.state.toAddress}
      );
    };
  }

  goToNewOrder = event => {
    this.props.resetRoute();
    this.setState({
      fromAddress: '',
      toAddress: '',
    });
  }

  componentDidMount() {
    this.props.getCard && this.props.getCard(this.props.token);
    this.props.getAddresses && this.props.getAddresses();
    this.setState({isLoadedRoute: this.props.route && this.props.route.length!== 0});
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
        isLoadedRoute: this.props.route && this.props.route.length!== 0
      })
    };
  }

  render() {
    return (
      <>
        {this.props.isProfileComplete ?
          this.state.isLoadedRoute ?
            <div className='form__wrapper form__wrapper--warning-order'>
            <h2 className='form__title form__title--warning-order' data-testid="header">?????????? ????????????????</h2>
            <div className='form__subtitle form__subtitle--warning-order'>
              ???????? ?????????? ?????? ???????? ?? ??????. ???????????????? ???????????????????????????? ?????????? 10 ??????????.
            </div>
            <StyledButton
              type="submit"
              className='button form__button'
              data-testid="submitButton"
              color="primary"
              onClick={this.goToNewOrder}
            >
              ?????????????? ?????????? ??????????
            </StyledButton>
          </div>
            :
            this.props.isLoaddingRoute ?
              <div className='form__wrapper' data-testid="header">?????????????? ??????????????????????</div>
              :
              <form className='form__wrapper form__wrapper--order'>
                <div className='order__block'>
                  <div className='order__row'>
                    <CssInputLabel id='route-from-label' data-testid='fromAddress'>????????????</CssInputLabel>
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
                    <CssInputLabel id='route-to-label'>????????</CssInputLabel>
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
                  disabled={!(this.state.fromAddress && this.state.toAddress)}
                  onClick={this.getRoutes}
                >
                  ????????????????
                </StyledButton>
              </div>
              </form>
          :
          <div className='form__wrapper form__wrapper--warning warning--order'>
            <div className='form__subtitle form__subtitle--warning' data-testid="header">
              ?????????????? ???????????? ??????????.
            </div>
            <Link
              to="/profile" 
              className='button form__button form__button--warning'
              data-testid="submitButton"
            >
              ?????????????? ?? ??????????????
            </Link>
          </div>
        }
      </>
    );
  }
}

OrderForm.propTypes = {
  token: PropTypes.string,
  isProfileComplete: PropTypes.bool,
  isLoaddingAddresses: PropTypes.bool,
  errorAddresses: PropTypes.string,
  addresses: PropTypes.array,
  isLoaddingRoute: PropTypes.bool,
  route: PropTypes.array,
  errorRoute: PropTypes.string,
  getCard: PropTypes.func,
  getAddresses: PropTypes.func,
  getRoute: PropTypes.func,
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

const mapDispatchToProps = {getCard, getAddresses, getRoute, resetRoute};

export const OrderFormWithConnect = connect(mapStateToProps, mapDispatchToProps)(OrderForm);