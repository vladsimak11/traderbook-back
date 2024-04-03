const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { valueId } = req.params;

  if(!isValidObjectId( valueId )) {
    next(HttpError (400, `${valueId} is not valid id`))
  }

  next();
}

module.exports = isValidId;