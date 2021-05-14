import React from 'react';
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';

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

class ProfileWarning extends React.Component {
  goToMap = (event) => {
    event.preventDefault();
    this.props.navigateTo('map');
  }

  render() {
    return (
      <div className='form__wrapper form__wrapper--warning'>
        <h2 className='form__title form__title--warning'>Профиль</h2>
        <div className='form__subtitle form__subtitle--warning'>Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
        <StyledButton
              type="submit"
              className='button form__button'
              data-testid="submitButton"
              color="primary"
              onClick={this.goToMap}
            >
              Перейти на карту
            </StyledButton>
      </div>
    );
  }
}

export { ProfileWarning };