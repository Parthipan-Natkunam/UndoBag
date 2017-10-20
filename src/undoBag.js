var UndoBag = {};
(function(){
	var context;
	var stack=[];
	var stackLimit = 10;
	var topIndex = 0;
	var bottomIndex = 0;
	var currentIndex = 0;
	var isUndoable = canUndo;
	var isRedoable = canRedo;
	function canUndo(){
		return currentIndex !== bottomIndex;
	}
	function canRedo(){
		return currentIndex !== topIndex;
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
	function performUndo(){
		if(isUndoable()){
			currentIndex -=1;
			return stack[currentIndex];
		}
	}
	function performRedo(){
		if(isRedoable()){
			currentIndex +=1;
			return stack[currentIndex];
		}
	}
	function performClear(){
		stack.length = topIndex = currentIndex =  0;
	}
	function performLogging(){
		console.log('UndoBag Stack Logs');
		console.log('------------------');
		console.log(stack);
		console.log('topIndex: '+ topIndex);
		console.log('currentIndex: '+ currentIndex);
		console.log('bottomIndex: '+ bottomIndex);
		console.log('stackLimit: '+ stackLimit);
		console.log('current stack length: '+ stack.length);
		console.log('------------------');
	}
	this.init = function(stackSize){
		if(context){return context;}
		if(stackSize){stackLimit = stackSize;}
		context = this;
	}
	this.push = function(item){
		performPush(item);
	}
	this.undo = function(){
		performUndo();
	}
	this.redo= function(){
		performRedo();
	}
	this.isUndoPossible = function(){
		isUndoable();
	}
	this.isRedoPossible = function(){
		isRedoable();
	}
	this.reset = function(){
		performClear();
	}
	this.log= function(){
		performLogging();
	}
	this.seek = function(position){
		if(!isNaN(position)){
			return stack[position-1];
		}
	}
}).call(UndoBag);