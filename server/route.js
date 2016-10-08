/**
 * Created by ahmad on 08/10/2016.
 */
var express = require('express');


var routes = function(Model) {
	var modelRouter = express.Router();

	var modelController = require("./controller")(Model);

	modelRouter.route('/')
		.post(modelController.post)
		.get(modelController.get);

	return modelRouter;
};

module.exports =  routes;
