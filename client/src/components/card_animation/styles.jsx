import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    cardAmount: {
      width: '100%',
      marginTop: '30px',
      color: '#fff',
    },
    middleRow: {
      marginTop: '25px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    cardMonth: {
      color: '#fff',
    },
    cardYear: {
      color: '#fff',
    },
    cardTitle: {
      color: '#fff',
    },
    cardContainer: {
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
    },
    cardCVV: {
      color: '#0470dc',
      paddingLeft: '80%',
      paddingTop: '3%',
    },
    cardUpperSection: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    image: {
      paddingLeft: '80%',
      paddingTop: '10%',
    },
    cvvSection: {
      width: '100%',
      height: '40px',
      marginTop: '16%',
      position: 'relative',
      backgroundColor: '#fff',
    },
  
    cardInternalContainerNormal: {
      cursor: ' pointer',
      position: 'relative',
      padding: '20px',
      display: 'flex',
      width: '350px',
      height: '180px',
      borderRadius: '12px',
      backgroundImage: 'linear-gradient(120deg, #13f1fc, #0470dc)',
      transformStyle: 'preserve-3d',
      boxShadow: '0 20px 20px 0 rgba(0, 0, 0, 0.1)',
      transform: 'rotateY(-360deg)',
      animation: '$normal 1s ease-in-out',
    },
  
    cardInternalContainerRightFlip: {
      cursor: ' pointer',
      position: 'relative',
      padding: '20px',
      display: 'flex',
      width: '350px',
      height: '180px',
      borderRadius: '12px',
      backgroundImage: 'linear-gradient(120deg, #13f1fc, #0470dc)',
      transformStyle: 'preserve-3d',
      boxShadow: '0 20px 20px 0 rgba(0, 0, 0, 0.1)',
      transform: 'rotateY(180deg)',
      animation: '$spinner 1s ease-in-out',
    },
  
    frontSide: {
      position: ' absolute',
      width: '87%',
      backfaceVisibility: 'hidden',
    },
  
    backSide: {
      position: ' absolute',
      width: '87%',
      backfaceVisibility: 'hidden',
      transform: 'rotateY(180deg)',
    },
  
    '@keyframes spinner': {
      '0%': {
        transform: 'rotateY(0deg)',
      },
      '100%': {
        transform: 'rotateY(180deg)',
      },
    },
  
    '@keyframes normal': {
      '0%': {
        transform: 'rotateY(-360deg)',
      },
      '100%': {
        transform: 'rotateY(0deg)',
      },
    },
  }));

export default useStyles;
