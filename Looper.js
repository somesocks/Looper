/*Looper is a wrapper around the setTimeout function with some convenience checks*/

var Looper = {};

Looper.defer = function(method,context,timeout){
	if(!method){return;};
	if(!timeout){timeout = 0;}
	setTimeout(function(){method(context);},timeout);
};

module.exports = Looper;
