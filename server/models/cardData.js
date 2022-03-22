const mongoose = require('mongoose');

const cardDataSchema = new mongoose.Schema({
  cardAmountC: {
    type: String,
    required: false,
  },
  cardCVVC: {
    type: String,
    required: false,
  },
  cardMonthInputC: {
    type: String,
    required: false,
  },
  cardNumberInputC: {
    type: String,
    required: false,
  },
  cardYearInputC: {
    type: Number,
    required: false,
  },
  cardNameInputC: {
    type: String,
    required: false,
  },
  acceptTerms: {
    type: Boolean,
    required: false,
  },
});

const CardDataModel = mongoose.model('creditCard', cardDataSchema);

module.exports = CardDataModel;
