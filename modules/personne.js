const mongoose = require('mongoose')
const personneSchema = new mongoose.Schema({
  
    name:{type:String,require:[true]},
    age:{Number},
    favoriteFoods: [String]
  })
  module.exports = mongoose.model('Personne', personneSchema)