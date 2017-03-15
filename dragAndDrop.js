	function DragAndDrop(id) {
		this.obj = document.getElementById(id);
		this.intX = 0;
		this.intY = 0;
	}
	
	DragAndDrop.prototype.init = function() {
		var _this = this;
		this.obj.onmousedown = function(ev) {
			var event = ev || window.event;
			_this.mouseDown(event);
		}
		return false;
	};

	DragAndDrop.prototype.mouseDown = function(ev) {
		var _this = this;
		this.intX = event.pageX - this.obj.offsetLeft;
		this.intY = event.pageY - this.obj.offsetTop;
	
		document.onmousemove = function(ev) {
			_this.mouseMove();
		};
	
		document.onmouseup = function() {
			_this.mouseUp();
		}
	}
	
	DragAndDrop.prototype.mouseMove = function() {
		this.mX=event.clientX - this.intX,
		this.mY=event.clientY - this.intY;
		if(this.mX<0) this.mX=0;
		if(this.mY<0) this.mY=0;
		if(this.mX>window.innerWidth-this.obj.offsetWidth) this.mX=window.innerWidth-this.obj.offsetWidth;
		if(this.mY>window.innerHeight-this.obj.offsetHeight) this.mY=window.innerHeight-this.obj.offsetHeight;
		this.obj.style.left = this.mX + "px";
		this.obj.style.top = this.mY + "px";
	}
	
	DragAndDrop.prototype.mouseUp = function() {
		document.onmousemove = null;
		document.onmouseup = null;
	}