import { Container, Box, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import '../../css/common.css';
import styles from './styles';

function CardAnimate() {
  const classes = styles();

  const cardInformation = useSelector((state) => {
    return state;
  });

  return (
    <Container className={classes.cardContainer}>
      <div
        className={
          cardInformation.rotate
            ? `${classes.cardInternalContainerRightFlip}`
            : `${classes.cardInternalContainerNormal}`
        }
      >
        <Box className={classes.frontSide}>
          <Box className={classes.cardUpperSection}>
            <Typography className={classes.cardTitle}>
              <b>{cardInformation.cardNumber || 'Card Number'}</b>
            </Typography>
            {cardInformation.cardType && <img src={cardInformation.cardType} alt="visa" width="30px" />}
          </Box>
          <div className={classes.middleRow}>
            <Typography className={classes.cardMonth}>
              <b>{cardInformation.month || 'Month'}</b>
            </Typography>
            <Typography className={classes.cardYear}>
              <b>{cardInformation.year || 'Year'} </b>
            </Typography>
          </div>
        </Box>
        <div className={classes.backSide}>
          <Box className={classes.cvvSection}>
            <Typography className={classes.cardCVV}>
              <b>{cardInformation.cvvNumber || 'CVV'}</b>
            </Typography>
          </Box>
          <Box className={classes.image}>
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" width="40px" />
          </Box>
        </div>
      </div>
    </Container>
  );
}

export default CardAnimate;
