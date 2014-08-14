var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers.js');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {

  if(req.method === 'GET' && req.url.length > 1) {
    archive.isURLArchived(req, res);
  }

  if(req.method === 'GET' && req.url === '/') {
    // var html = fs.readFileSync('./public/index.html');
    // res.writeHead(200, helpers.headers);
    // fs.exists('./public/index.html', function() {
    //   console.log('does not exist');
    //   console.log(path.dirname());
    // });
    // res.end(html);
    console.log('req.url is: ',req.url);
    fs.readFile(archive.paths.siteAssets + '/index.html', "binary", function(err, html) {
      if (err) {
        throw err;
      }

      res.writeHead(200, helpers.headers);
      res.end(html);
    });
    // helpers.serveAssets(res, './public/index.html', fs.readFile);
  }

  if(req.method === 'POST') {
    var chunk = '';
    req.on("data", function(data) {
      chunk += data;
    });
    req.on('end', function() {
      console.log('inside end');
      archive.isUrlInList(chunk, archive.addUrlToList, res);
    });

    // req.on('end', function() {
    //   archive.readListOfUrls(chunk, res,)
    // })
  }
   // fs.readFile('./public/loading.html', function(err, html) {
   //  res.writeHead(200, helpers.headers);
   //  res.end(html);
   // });
   // res.end(archive.paths.list);
};


