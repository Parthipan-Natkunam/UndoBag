(function(){
	'use strict';
	var stack=[];
	var stackLimit;
	var topIndex = 0;
	var currentIndex = 0;
	var isDevEnv = false;
	function config(opts){
		stackLimit = opts && opts.length ? opts.length : 10;
		isDevEnv = opts && opts.isDev;
	}
	function performPush(item){
		if(stack.length < stackLimit){
			stack.push(item);
			topIndex = currentIndex = stack.length -1;
		}
		else{
			stack.shift();
			stack.push(item);
		}
	}
	function performLogging(){
		var logObj={
			stack: stack,
			limit: stackLimit,
			currentLength: stack.length,
			top: topIndex,
			currentPointer: currentIndex
		};
		console.log(logObj);
	}
	var UndoBag = function(opts){
		opts && config(opts);
	};
	UndoBag.prototype.recordChange= function(item){
		performPush(item);
	};
	UndoBag.prototype.flushStack = function(){
		stack.length = topIndex = currentIndex =  0;
	}
	UndoBag.prototype.canUndo = function(){
		return currentIndex > 0;
	}
	UndoBag.prototype.canRedo = function(){
		return currentIndex < stack.length;
	}
	UndoBag.prototype.undo = function(){
		if(this.canUndo()) return stack[--currentIndex];
	}
	UndoBag.prototype.redo = function(){
		if(this.canRedo()) return stack[++currentIndex];
	}
	UndoBag.prototype.seek = function(position){
		if(!isNaN(position)) return stack[position-1];
	}
	UndoBag.prototype.log= function(){
		isDevEnv && performLogging();
	}
	if(typeof module !== 'undefined') module.exports = UndoBag;
	if(typeof window !== 'undefined') window.UndoBag = UndoBag;
})();