/* global describe */
/* global it */
'use strict';

var should = require('should');
// var url = 'http://ghostbar.co/feed.xml';
var url = 'http://smartraveller.gov.au/advice/index.rss';

describe('Parsing a file (net)', function() {
    it('should parse a RSS from an URL', function(done) {
        this.timeout(40000);

        var parser = require('../index');

        parser(url, function(err, response) {
            should.not.exist(err);

            should.exist(response);

            should.exist(response.meta);
            should.exist(response.articles);

            done(err);
        });
    });
});
