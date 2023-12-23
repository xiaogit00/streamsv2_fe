import * as Yup from 'yup';

export const TradeSchema = Yup.object().shape({
    date: Yup.date()
      .required('*Required')
      .typeError('*Please enter a valid date.'),
    qty: Yup.number()
      .required('*Required')
      .typeError('*Amount must be a number.'),
    price: Yup.number()
      .required('*Required')
      .typeError('*Price must be a number.'),
    exchange_fees: Yup.number()
      .typeError('*Fees must be a number.'),
  });