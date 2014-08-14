var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  callback(asset, function(err, html) {
    res.writeHead(200, headers);
    res.end(html);
  });
};

exports.sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, exports.headers);
  response.end(data);
}

// parseUri.options = {
//   strictMode: false,
//   key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
//   q:   {
//     name:   "queryKey",
//     parser: /(?:^|&)([^&=]*)=?([^&]*)/g
//   },
//   parser: {
//     strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
//     loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
//   }
// };

// // As you progress, keep thinking about what helper functions you can put here!
// exports.parseUri = function(str) {
//   var o   = parseUri.options,
//     m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
//     uri = {},
//     i   = 14;

//   while (i--) uri[o.key[i]] = m[i] || "";

//   uri[o.q.name] = {};
//   uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
//     if ($1) uri[o.q.name][$1] = $2;
//   });

//   return uri;
// };

