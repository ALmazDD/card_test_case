import { initialState } from './initial-state';
import { CARD_NUMBER_ACTION, CVV_ACTION, ROTATE_ACTION, MONTH_ACTION, YEAR_ACTION } from './actions';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ROTATE_ACTION:
      const flipNewState = {
        ...state,
        rotate: !state.rotate,
      };
      return flipNewState;

    case CARD_NUMBER_ACTION:
      const newState = {
        ...state,
        cardNumber: handleCardNumber(action.payload.cardNumber),
      };

      return newState;

    case MONTH_ACTION:
      const newMonthState = {
        ...state,
        month: action.payload.newMonth,
      };

      return newMonthState;

    case YEAR_ACTION:
      const newYearState = {
        ...state,
        year: action.payload.newYear,
      };

      return newYearState;

    case CVV_ACTION:
      const newCVVState = {
        ...state,
        cvvNumber: action.payload.newCVV,
      };

      return newCVVState;
    default:
      return state;
  }
}

function handleCardNumber(num) {
  return num
    .replace(/\s/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();
}
