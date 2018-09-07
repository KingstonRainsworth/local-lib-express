var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var authorSchema = new Schema({
  first_name: {type:String, required: true, max: 100},
  family_name: {tpe: String, required: true, max: 100},
  birthday: {type: Date},
  deathday: {type: Date},
});

authorSchema
  .virtual('name')
  .get(() => {
    return (this.family_name + ',' + this.first_name);
  });

authorSchema
  .virtual('age')
  .get(() => {
    return (this.deathday.getYear() - this.birthday.getYear()).toString();
  });
module.exports = mongoose.model('Authors', authorSchema);

authorSchema
  .virtual('url')
  .get(() => {
    return ('/catalog/author/' + this._id);
  });

module.exports = mongoose.model('Author', authorSchema);
