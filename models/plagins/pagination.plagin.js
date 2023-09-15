const mongoose = require('mongoose');

module.exports = function (schema) {
  schema.statics.paginate = async function (page, limit) {
    page = +page;
    limit = +limit;

    const skip = (page - 1) * limit;

    const dataQuery = this.find().skip(skip).limit(limit).exec();

    const data = await  dataQuery;

    

    return  data;
};
}
