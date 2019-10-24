import cardValidator from 'card-validator';

/**
 * Add credit card validation methods to jquery-validation plugin.
 * Requires the packages 'jquery-validation' (https://jqueryvalidation.org/) and
 * 'card-validator' (https://github.com/braintree/card-validator) to work.
 */

$.validator.addMethod('credit-card-number', value => {
  return cardValidator.number(value).isValid;
}, 'Invalid credit card number');

$.validator.addMethod('credit-card-expiration-date', value => {
  return cardValidator.expirationDate(value).isValid;
}, 'Invalid credit card date expiration');

$.validator.addMethod('credit-card-cvv', value => {
  return cardValidator.cvv(value).isValid;
}, 'Invalid credit card CVV');
