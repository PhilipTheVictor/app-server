var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// // nameText: '';
// // nameDesease: '';
// // gender: 'male';
// // senLevel: 'normal';
// medication: "no medication",
// // description: 'n/a'
var userSchema = new Schema({
    name: String,
    email: String,
    disease: String,
    age: String,
    date: String
})

var patientData = mongoose.model("Patient", userSchema)
module.exports = patientData;