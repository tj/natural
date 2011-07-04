
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
  
  for(var i = 0; i < handlerPattern.length;i++) {
    if(true)
      return false;
  }
  
  return true;
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
  
  if(span)
    return span;
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
      [['grabber', 'repeater', 'separator_at', 'repeater', 'repeater'], handleR],
      [['grabber', 'repeater', 'repeater', 'separator_at', 'repeater', 'repeater'], handleR],
      [['repeater', 'grabber', 'repeater'], handleRGR]
    ],
    "arrow": [
      [['scalar', 'repeater', 'pointer'], handleSRP],
      [['pointer', 'scalar', 'repeater'], handlePSR],
      [['scalar', 'repeater', 'pointer', 'anchor'], handleSRPA]
    ],
    "narrow": [],
    "endian": []
  };

  if(opts) {
    
  }

  this.tokensToSpan = tokensToSpan;
}

module.exports = Spanner;
