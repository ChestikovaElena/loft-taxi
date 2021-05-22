import React from 'react';
import Select from "react-select";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

class OrderForm extends React.Component {
  state = {
    fromAdress: '',
    toAdress: '',
    fromList: [],
    toList: [],
  };

  handleChange = event => {
    
  }

  componentDidMount() {
    // TODO: получить список адресов
  }

  render() {
    return (
      <>
        <Paper >
          <form onSubmit={this.handleSubmitRoute}>
            <Typography className={title} variant="display1">
              Вызов такси
            </Typography>
            <Select
              name={"from"}
              className={select}
              options={fromList}
              placeholder="Выберите адрес отправления"
              onChange={this.handleChange}
            />
            <Select
              name={"to"}
              className='select'
              options={toList}
              placeholder="Выберите адрес прибытия"
              onChange={this.handleChange}
            />
            <Button
              disabled={!bothSelected}
              type="submit"
              className='button'
              variant="outlined"
              color="primary"
            >
              Вызвать такси
            </Button>
          </form>
        </Paper>
      </>
    );
  }
}

export const OrderForm;
