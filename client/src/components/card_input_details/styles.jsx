import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardDetailsTake: {
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50px',
      width: '100%',
      height: '300px',
    },
    cardDetailsHeading: {
      fontSize: '20px',
      paddingBottom: '10px',
      textAlign: 'center',
    },
    middleRowInput: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    cardMonthInput: {
      width: '40%',
    },
    cardYearInput: {
      width: '40%',
    },
    cardNumberInput: {
      width: '100%',
    },
    cardAmount: {
      width: '100%',
    },
    cardCVVInput: {
      width: '15%',
    },
    payButton: {
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
    },
  }));

    export default useStyles;