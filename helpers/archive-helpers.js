var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var helpers = require('../web/http-helpers.js')

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback){
  fs.readFile(exports.paths['list'], function(err, file) {
    var stringfile = file.toString().trim();
    var listarray = stringfile.split(',');
    return callback(listarray);
  });

};

exports.isUrlInList = function(sitename, callback, response){
  fs.readFile(exports.paths['list'], function(err, file) {

    var stringfile = file.toString().trim();
    var listarray = stringfile.split(',');

    if(listarray.indexOf(sitename) !== -1) {
      helpers.sendResponse(response);
    } else {
      callback(sitename, response);
    }

  });
};

exports.addUrlToList = function(sitename, response){
  fs.appendFile(exports.paths['list'], ',' + sitename.slice(4), function(err) {
    if(err) {
      throw err;
    }
    helpers.sendResponse(response, ','+sitename , 302);
  });
};

exports.isURLArchived = function(request, response){
  var userUrl = request.url.slice(1);
  fs.exists(exports.paths['archivedSites'] + '/' + userUrl, function(exists) {
    if(exists) {
      // return page
      helpers.sendResponse(response, request.url.slice(1));
    } else {
      helpers.sendResponse(response, request.url.slice(1), 404);
    }
});

};

exports.downloadUrls = function(){
  // if isURLArchived is false, run this function
};
