const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Appraisal } = require('../models/appraisal');

// => localhost:7000/appraisals/
router.get('/', (req, res) => {
    Appraisal.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Appraisals :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Appraisal.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Appraisal :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var appraisal = new Appraisal({
    	EmployeeID: req.body.EmployeeID,
        Name: req.body.Name,
        Department: req.body.Department,
        Year_under_Review: req.body.Year_under_Review,
        Date_of_Review: req.body.Date_of_Review,
        Goals: req.body.Goals,
        AOI: req.body.AOI,
        Core_Values: req.body.Core_Values,
        Comments: req.body.Comments,
        Rating: req.body.Rating,
        Reviewed_By: req.body.Reviewed_By,
        Reviewer_Position: req.body.Reviewer_Position,
    });
    appraisal.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Appraisal Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var appraisal = {
        EmployeeID: req.body.EmployeeID,
        Name: req.body.Name,
        Department: req.body.Department,
        Year_under_Review: req.body.Year_under_Review,
        Date_of_Review: req.body.Date_of_Review,
        Goals: req.body.Goals,
        AOI: req.body.AOI,
        Core_Values: req.body.Core_Values,
        Comments: req.body.Comments,
        Rating: req.body.Rating,
        Reviewed_By: req.body.Reviewed_By,
        Reviewer_Position: req.body.Reviewer_Position
    };
    Appraisal.findByIdAndUpdate(req.params.id, { $set: appraisal }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Appraisal Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Appraisal.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Appraisal Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
