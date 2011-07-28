
// single word

suite.bench('stem() word', function(next){
  stem('counting');
  next();
});

// small body of text

var words = fs.readFileSync('lib/natural/index.js', 'utf8').split(/\W+/);
suite.bench('stem() small', function(next){
  for (var i = 0, len = words.length; i < len; ++i) {
    stem(words[i]);
  }
  next();
});

// medium body of text

var words2 = fs.readFileSync('README.md', 'utf8').split(/\W+/);
suite.bench('stem() medium', function(next){
  for (var i = 0, len = words2.length; i < len; ++i) {
    stem(words2[i]);
  }
  next();
});