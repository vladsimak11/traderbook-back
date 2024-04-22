const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'missing required name field'
  }),
  quantity: Joi.string().required().messages({
    'any.required': 'missing required quantity field'
  }),
  commission: Joi.string().required().messages({
    'any.required': 'missing required commission field'
  }),
  entry: Joi.string().required().messages({
    'any.required': 'missing required entry field'
  }),
  sum: Joi.string().required().messages({
    'any.required': 'missing required sum field'
  }),
  type: Joi.string().required().messages({
    'any.required': 'missing required type field'
  }),
});


module.exports = {
    addSchema,
}