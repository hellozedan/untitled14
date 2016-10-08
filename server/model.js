/**
 * Created by ahmad on 08/10/2016.
 */

/**
 * Created by Joe on 06/06/2015.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var modelModel = new Schema({
	/*"code": {
	 type: String,
	 description: "code of the author"
	 },*/
	"data": {
		type: Schema.Types.Mixed,
		description: "name of the author"
	}

});

//this will expose the the "bookModel" we defined above under the name "Book" to other JS files to use it under node.js
module.exports = mongoose.model('Model', modelModel);