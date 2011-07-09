
/*
Copyright (c) 2011, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

var Repeater = require('./tags/repeaters/repeater'),
  Grabber = require('./tags/grabber'),
  Pointer = require('./tags/pointer'),
  Scalar = require('./tags/scalar'),
  SeparatorAt = require('./tags/separators/separator_at'),
  SeparatorComma = require('./tags/separators/separator_comma'),
  SeparatorSlashOrDash = require('./tags/separators/separator_slash_or_dash'),
  SeparatorIn = require('./tags/separators/separator_in'),
  SeparatorOn = require('./tags/separators/separator_on');

function handleRmnSdOn(tokens) {
    
}

function handleRdnRmnSdTTZSy(tokens) {
    
}

function handleSRP(tokens) {
    
}

function handlePSR(tokens) {
    
}

function handleSRPA(tokens) {
    
}

function handleR(tokens) {
    
}

function handleRGR(tokens) {
    
}

function match(tokens, handlerPattern) {
  var tokenIndex = 0;
  
  for(var i = 0; i < handlerPattern.length; i++) {
  }
  
  return false;  
}

function attemptHandlers(tokens, handlers, action) {
  for(var i = 0; i < handlers.length; i++) {
    if(match(tokens, handlers[i][0])) {
        return action(tokens);
    }
  }
  
  return null;
}

function tokensToSpan(tokens) {
  span = attemptHandlers(tokens, this.handlerDefs.time.concat(this.handlerDefs.endian), function() {    
    });

  span = attemptHandlers(tokens, this.handlerDefs.anchor, function() {    
    });

  span = attemptHandlers(tokens, this.handlerDefs.arrow, function() {    
    });

  span = attemptHandlers(tokens, this.handlerDefs.narrow, function() {    
    });
  
  return null;
}

var Spanner = function (opts) {
  this.handlerDefs = {
    "time": [
      [['repeater_time', 'repeater_day_portion'],  null]
    ],
    "date": [
      [['repeater_day_name', 'repeater_month_name', 'scalar_day', 'repeater_time',
        'separator_slash_or_dash', 'time_zone', 'scalar_year'], handleRdnRmnSdTTZSy]
    ],
    "anchor": [ // tonight at 7pm - from chronic
      [[Grabber, Repeater, 'separator_at', Repeater, Repeater], handleR],
      [[Grabber, Repeater, Repeater, 'separator_at', Repeater, Repeater], handleR],
      [[Repeater, Grabber, Repeater], handleRGR]
    ],
    "arrow": [
      [[Scalar, Repeater, Pointer], handleSRP],
      [[Pointer, Scalar, Repeater], handlePSR],
      [[Scalar, Repeater, Pointer, 'anchor'], handleSRPA]
    ],
    "narrow": [],
    "endian": []
  };

  if(opts) {
    
  }

  this.tokensToSpan = tokensToSpan;
}

module.exports = Spanner;
