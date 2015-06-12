var assert = require('chai').assert;
var request = require('request');
var app = require('./app');

describe('layouts (inline)', function() {
  it('should support layout specified as inline comment', function(done) {

    var server = app.listen(3000, function() {
      request('http://localhost:3000/', function(err, res, body) {
        assert.include(body, 'Default');
        assert.include(body, 'Home');
        server.close();
      });
    })

    server.on('close', function() {
      done();
    });

  });

  it('should support layout specified as inline comment with a directory', function(done) {

    var server = app.listen(3000, function() {
      request('http://localhost:3000/directory', function(err, res, body) {
        assert.include(body, 'Page');
        assert.include(body, 'Home');
        server.close();
      });
    })

    server.on('close', function() {
      done();
    });

  });
});
