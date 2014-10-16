var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
// require more modules/folders here!

// var actionMap = {
// 	'POST': archive.addUrlToList
	// 'GET'
// }
// if a new URL comes in, use archive.addURLToList();


exports.handleRequest = function (req, res) {
	if (req.method === 'POST') {
		var message = '';
		req.on('data', function(data) {
			message += data;
		});
		console.log(message);
		req.on('end', function() {
			archive.isUrlInList(message);
		});
	}
  // res.end(archive.paths.list);
};



callback(listarray, sitename, callback, response);

archive.readListOfUrls(isUrlInList)

archive.isUrlInList(sitename, callback, response)


// exports.addUrlToList = function(request, response){
// 	if (isUrlInList) {
// 		return false;
// 	} else {
// 		httpHelpers.collectUrl(request, function(url) {
// 			fs.appendFile('list', url, function(err) {
// 				if (err) throw err;
// 			});
// 		});
// 	}
// };

// exports.collectUrl = function(request, callback) {
// 	var url = '';
// 	request.on('data', function(chunk) {
// 		url += chunk;
// 	});
// 	request.on('end', function() {
// 		callback(JSON.parse(url));
// 	});
// };