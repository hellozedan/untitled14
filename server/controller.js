/**
 * Created by ahmad on 08/10/2016.
 */
/**
 * Created by josephk on 6/10/2015.
 */
var mongoose = require('mongoose');
var moment = require('moment');
var httpAdapter = 'https';
var Model = require('./model.js');

var modelController = function (Model) {

	var post = function (req, res) {

		var model = new Model(req.body);
		model.save(function (e) {
			if (e) {
				console.log('error: ' + e);
				res.status(400).send(err);
			} else {
				console.log('no error');
				res.status(201).send(model);
			}
		});


	}


	var get = function (req, res) {
		var query = {};

		Model.find(query).sort({'_id': 'descending'}).exec(query, function (err, models) {
			if (err) {
				console.log(err);
				res.status(500).send(err);
			} else {
				res.status(200).send(models);
			}
		});

	}


	var deleteIt = function (req, res) {

		var idForDelete = req.headers['author_id'];
		var deleteAuthor;

		deleteAuthor = {_id: idForDelete};


		Author.remove(deleteAuthor, function (e) {
			if (e) {
				console.log('error: ' + e);
				res.status(500).send(err);
			} else {
				console.log('no error');
				res.status(201).send("deleted");
			}
		})
	};

	return {
		post: post,
		get: get,
		deleteIt: deleteIt
	};

};


module.exports = modelController;
