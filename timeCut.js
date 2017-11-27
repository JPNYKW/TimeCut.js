// Classes
var d=document;
var c=console;
var w=window;

// Math
var abs=(m=Math).abs;
var atan2=m.atan2;
var round=m.round;
var floor=m.floor;
var ceil=m.ceil;
var sqrt=m.sqrt;
var asin=m.asin;
var acos=m.acos;
var atan=m.atan;
var pow=m.pow;
var sin=m.sin;
var cos=m.cos;
var tan=m.tan;

// Sum
var direction=(x,y,x1,y1)=>{return atan2(x-x1,y-y1)};
var distance=(x,y,x1,y1)=>{return sqrt(pow(x-x1,2)+pow(y-y1,2))};

// Date
var now=()=>{return new Date()};
Date.prototype.ms=function(){return this.getTime()}
Date.prototype.sec=function(){return this.getSeconds()}
Date.prototype.min=function(){return this.getMinutes()}
Date.prototype.hours=function(){return this.getHours()}

// Array
Array.prototype.last=function(){return this[this.length-1]}
Array.prototype.average=function(){sum=0;this.map(e=>sum+=e);return sum/this.length}

