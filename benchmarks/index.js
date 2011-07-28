
/**
 * Module dependencies.
 */

var uubench = require('uubench')
  , natural = require('../');

fs = require('fs');
metaphone = natural.Metaphone.process;
soundex = natural.SoundEx.process;
stem = natural.PorterStemmer.stem;

function pad(str, width) {
  return Array(width - str.length + 1).join(' ') + str;
}

suite = new uubench.Suite({
  min: 200,

  start: function(){
    console.log();
  },

  result: function(name, stats){
    var persec = 1000 / stats.elapsed
      , ops = stats.iterations * persec;
    console.log('  \033[90m%s : \033[36m%s \033[90mops/s\033[0m'
      , pad(name, 20)
      , ops | 0);
  },
  
  done: function(){
    console.log();
  }
});

require('./metaphone');
require('./soundex');
require('./porter-stemmer');

suite.run();