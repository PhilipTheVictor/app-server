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
    desease: String,
    gender: String,
    senLevel: String,
    medication: String,
    description: String
})

var patientData = mongoose.model("Patient", userSchema)
module.exports = patientData;