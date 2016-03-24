parserss [![Build Status](https://secure.travis-ci.org/canerdogan/parserss.png)](http://travis-ci.org/canerdogan/parserss) [![Code Climate](https://codeclimate.com/github/canerdogan/parserss/badges/gpa.svg)](https://codeclimate.com/github/canerdogan/parserss)
========

Small RSS parser for mere convenience, using `feedparser` and `request`.
Based on [ghostbar/parserss](https://github.com/ghostbar/parserss)

It should work for Atom as well.

Returns a very convinient JSON with the `meta` field with all the data from the feed and an array on the field `articles` with all the articles.

Usage
-----

    var rss = require('parserss');

    rss('http://domain.tld/file.xml', 10, function (err, res) {
      console.log(err);
      console.log(res);
    });

API
---

+ `rss`
  - `url` -- URL of the feed
  - `max_number` - max number of articles, defaults to 10. 0 would mean as much as possible.
  - `callback` - First parameter is `Error`, second is the resultant JSON file.

Tests
-----

Just run `npm test`.

Author
------
© 2016, Can Erdogan <canerdogan.net>

License
-------
The files are licensed under the MIT terms.
