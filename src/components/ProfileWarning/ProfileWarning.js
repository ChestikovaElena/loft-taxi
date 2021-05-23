import React from 'react';
import { Link } from 'react-router-dom';

class ProfileWarning extends React.Component {
  render() {
    return (
      <div className='form__wrapper form__wrapper--warning'>
        <h2 className='form__title form__title--warning'>Профиль</h2>
        <div className='form__subtitle form__subtitle--warning'>Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
        <Link
          to="/map" 
          className='button form__button form__button--warning'
          data-testid="submitButton"
        >
          Перейти на карту
        </Link>
      </div>
    );
  }
}

export { ProfileWarning };