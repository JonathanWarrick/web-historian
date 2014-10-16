// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.
var httpRequest = require('http-request');
var fs = require('fs');
var archive = require('../helpers/archive-helpers.js');

exports.testScrape = function(url) {
  httpRequest.get(url, function (err, res) {
    if (err) {
      console.error(err);
      return;
    }
    fs.writeFile(archive.paths['archivedSites'] + '/' + url, res.buffer.toString(), function(err) {
      if (err) {
        console.error(err);
        return;
      }
    });
    // console.log(res.code, res.headers, res.buffer.toString());
  });
};

// archive.downloadUrls();
