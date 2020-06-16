const mongoose = require('mongoose');

var Appraisal = mongoose.model('Appraisal', {
	EmployeeID: { type: Number, required:true },
    Name: { type: String, required:true },
    Department: { type: String, required:true },
    Year_under_Review: { type: String, required:true },
    Date_of_Review: { type: Date, required:true },
    Goals :{type: String, required:true},
    AOI :{type: String, required:true},
    Core_Values :{type: String, required:true},
    Comments :{type: String, required:true},
    Rating: { type: Number, required:true },
    Reviewed_By : {type: String, required:true},
    Reviewer_Position : {type: String, required:true}
});

module.exports = { Appraisal };