import {
  Container,
  Typography,
  ListItem,
  List,
  Divider,
  TextField,
  Button,
  Grid,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import React, { useCallback } from 'react';
import '../../css/common.css';
import styles from './styles';

import {
  CARD_NUMBER_ACTION,
  ROTATE_ACTION,
  MONTH_ACTION,
  YEAR_ACTION,
  CARD_AMOUNT_ACTION,
  CVV_ACTION,
} from '../../redux/actions';

function CardInputDetailsSection() {
  const classes = styles();
  const dispatch = useDispatch();
  const currentValue = useSelector((state) => state);

  const handleFlip = useCallback(
    (shouldRotate) => {
      if (shouldRotate && !currentValue.rotate) dispatch({ type: ROTATE_ACTION });
      else if (!shouldRotate && currentValue.rotate) dispatch({ type: ROTATE_ACTION });
    },
    [currentValue.rotate, dispatch],
  );

  const addCardNumber = useCallback(
    (e) => {
      if (e.target.value) {
        dispatch({ type: CARD_NUMBER_ACTION, payload: e.target.value });
      }
    }, []
  );

  function addMonth(e) {
    if (e.target.value) {
      dispatch({ type: MONTH_ACTION, payload: e.target.value });
    }
  }

  function addYear(e) {
    if (e.target.value) {
      dispatch({ type: YEAR_ACTION, payload: e.target.value });
    }
  }

  function addCardAmount(e) {
    if (e.target.value) {
      dispatch({ type: CARD_AMOUNT_ACTION, payload: e.target.value });
    }
  }

  function addCVV(e) {
    if (e.target.value) {
      dispatch({ type: CVV_ACTION, payload: e.target.value });
    }
  }

  const validationCardSchema = Yup.object().shape({
    cardNumberInputC: Yup.string()
      .typeError('Amount must be a number')
      .matches(/^4[0-9]{12}(?:[0-9]{3})?$/, 'Is not in correct format')
      .required('Card Number is required'),

    cardMonthInputC: Yup.string()
      .typeError('Amount must be a number')
      .required('Month is required')
      .matches(/^([1-9]|1[0-2])$/, 'Is not in correct format'),

    cardYearInputC: Yup.number().typeError('Amount must be a number').required('Year is required'),

    cardCVVC: Yup.string()
      .typeError('Amount must be a number')
      .required('CVV is required')
      .matches(/^[0-9]+$/, 'Is not in correct format'),

    cardAmountC: Yup.string()
      .typeError('Amount must be a number')
      .required('Confirm Password is required')
      .matches(/^[0-9]+$/, 'Is not in correct format'),

    acceptTerms: Yup.bool().typeError('Amount must be a number').oneOf([true], 'Accept Terms is required'),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationCardSchema),
  });

  const onSubmit = (data) => {
    fetch('http://localhost:3001/createCard', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8', 
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) =>{
       console.log(data);
      })
  };

  return (
    <form>
      <Container className={classes.cardDetailsTake}>
        <List>
          <Typography className={classes.cardDetailsHeading}>
            <b>Card Details</b>
          </Typography>
          <Divider />
          <ListItem>
            <TextField
              required
              id="cardNumberInput"
              label="Card Number"
              name="Card Number"
              variant="standard"
              type="text"
              inputProps={{
                pattern: '[0-9]*',
                maxLength: 16,
              }}
              onClick={() => handleFlip(false)}
              onChange={addCardNumber}
              className={classes.cardNumberInput}

              {...register('cardNumberInputC')}
              error={errors.cardNumberInputC ? true : false}
            />
          </ListItem>
          <ListItem>
            <Typography variant="inherit" color="textSecondary">
              {errors.cardNumberInputC?.message}
            </Typography>
          </ListItem>

          <ListItem className={classes.middleRowInput}>
            <TextField
              required
              label="Expiry Month"
              variant="standard"
              type="text"
              onClick={() => handleFlip(false)}
              onChange={addMonth}
              inputProps={{
                pattern: '[0-9]*',
                maxLength: 2,
              }}
              className={classes.cardMonthInput}
              {...register('cardMonthInputC')}
              error={errors.cardMonthInputC ? true : false}
            ></TextField>

            <TextField
              required
              label="Expiry Year"
              variant="standard"
              type="text"
              onChange={addYear}
              onClick={() => handleFlip(false)}
              inputProps={{
                pattern: '[0-9]*',
                maxLength: 4,
              }}
              className={classes.cardYearInput}
              {...register('cardYearInputC')}
              error={errors.cardYearInputC ? true : false}
            ></TextField>
          </ListItem>
          <ListItem>
            <Typography variant="inherit" color="textSecondary">
              {errors.cardMonthInputC?.message}
            </Typography>
          </ListItem>

          <ListItem>
            <TextField
              required
              label="CVV"
              type="text"
              variant="standard"
              onChange={addCVV}
              inputProps={{
                maxLength: 3,
              }}
              onClick={() => handleFlip(true)}
              className={classes.cardCVVInput}
              {...register('cardCVVC')}
              error={errors.cardCVVC ? true : false}
            ></TextField>
          </ListItem>

          <ListItem>
            <Typography variant="inherit" color="textSecondary">
              {errors.cardCVVC?.message}
            </Typography>
          </ListItem>

          <ListItem>
            <TextField
              required
              label="Payment Amount"
              type="text"
              variant="standard"
              onChange={addCardAmount}
              onClick={() => handleFlip(false)}
              className={classes.cardAmount}
              {...register('cardAmountC')}
              error={errors.cardAmountC ? true : false}
            ></TextField>
          </ListItem>
          <ListItem>
            <Typography variant="inherit" color="textSecondary">
              {errors.cardAmountC?.message}
            </Typography>
          </ListItem>

          <ListItem>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Controller
                    control={control}
                    name="acceptTerms"
                    defaultValue="false"
                    inputRef={register()}
                    render={({ field: { onChange } }) => (
                      <Checkbox color="primary" onChange={(e) => onChange(e.target.checked)} />
                    )}
                  />
                }
                label={
                  <Typography color={errors.acceptTerms ? 'error' : 'inherit'}>
                    I have read and agree to the Terms *
                  </Typography>
                }
              />
              <br />
              <Typography variant="inherit" color="textSecondary">
                {errors.acceptTerms ? '(' + errors.acceptTerms.message + ')' : ''}
              </Typography>
            </Grid>
          </ListItem>
          <ListItem className={classes.payButton}>
            <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>
              Pay
            </Button>
          </ListItem>
          
        </List>
      </Container>
    </form>
  );
}

export default CardInputDetailsSection;
