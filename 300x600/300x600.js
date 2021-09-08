(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.cta_off = function() {
	this.initialize(img.cta_off);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.cta_on = function() {
	this.initialize(img.cta_on);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.frame1_copy = function() {
	this.initialize(img.frame1_copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.frame1_image = function() {
	this.initialize(img.frame1_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,542);


(lib.frame1_lines = function() {
	this.initialize(img.frame1_lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.frame2_copy = function() {
	this.initialize(img.frame2_copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.frame2_image = function() {
	this.initialize(img.frame2_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,543);


(lib.frame2_lines = function() {
	this.initialize(img.frame2_lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.frame3_blue_bar = function() {
	this.initialize(img.frame3_blue_bar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,433);


(lib.frame3_copy = function() {
	this.initialize(img.frame3_copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.frame3_image = function() {
	this.initialize(img.frame3_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.frame3_lines = function() {
	this.initialize(img.frame3_lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib._static = function() {
	this.initialize(img._static);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Am3B4IAAjvINvAAIAADvg");
	this.shape.setTransform(44,12);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,24);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aw3MqIAA5TMAhvAAAIAAZTg");
	this.shape.setTransform(108,81);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216,162);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {off:0,on:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.instance = new lib.cta_on();
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.cta_off();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frame3_copy();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frame3_blue_bar();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1_copy
	this.instance_1 = new lib.frame3_blue_bar();
	this.instance_1.setTransform(0,-99,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,-99,300,315.5), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frame1_copy();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_329 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(329).call(this.frame_329).wait(1));

	// Layer_21 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_309 = new cjs.Graphics().p("EAArAoHIAAhfIBfAAIAABfg");
	var mask_graphics_310 = new cjs.Graphics().p("EAAoAoHIAAhfIBlAAIAABfg");
	var mask_graphics_311 = new cjs.Graphics().p("EAAeAoHIAAhfIB5AAIAABfg");
	var mask_graphics_312 = new cjs.Graphics().p("EAAPAoHIAAhfICXAAIAABfg");
	var mask_graphics_313 = new cjs.Graphics().p("EgAGAoHIAAhfIDDAAIAABfg");
	var mask_graphics_314 = new cjs.Graphics().p("EgAiAoHIAAhfID8AAIAABfg");
	var mask_graphics_315 = new cjs.Graphics().p("EgBFAoHIAAhfIFCAAIAABfg");
	var mask_graphics_316 = new cjs.Graphics().p("EgBtAoHIAAhfIGTAAIAABfg");
	var mask_graphics_317 = new cjs.Graphics().p("EgCcAoHIAAhfIHyAAIAABfg");
	var mask_graphics_318 = new cjs.Graphics().p("EgDRAoHIAAhfIJdAAIAABfg");
	var mask_graphics_319 = new cjs.Graphics().p("EgEMAoHIAAhfILVAAIAABfg");
	var mask_graphics_320 = new cjs.Graphics().p("EgFOAoHIAAhfINaAAIAABfg");
	var mask_graphics_321 = new cjs.Graphics().p("EgGVAoHIAAhfIPrAAIAABfg");
	var mask_graphics_322 = new cjs.Graphics().p("EgHjAoHIAAhfISIAAIAABfg");
	var mask_graphics_323 = new cjs.Graphics().p("EgI4AoHIAAhfIU0AAIAABfg");
	var mask_graphics_324 = new cjs.Graphics().p("EgKSAoHIAAhfIXqAAIAABfg");
	var mask_graphics_325 = new cjs.Graphics().p("EgLzAoHIAAhfIauAAIAABfg");
	var mask_graphics_326 = new cjs.Graphics().p("EgNaAoHIAAhfId+AAIAABfg");
	var mask_graphics_327 = new cjs.Graphics().p("EgPHAoHIAAhfMAhbAAAIAABfg");
	var mask_graphics_328 = new cjs.Graphics().p("EgQ6AoHIAAhfMAlEAAAIAABfg");
	var mask_graphics_329 = new cjs.Graphics().p("EgTJAoHIAAhfMAo7AAAIAABfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(309).to({graphics:mask_graphics_309,x:13.775,y:256.675}).wait(1).to({graphics:mask_graphics_310,x:14.0943,y:256.675}).wait(1).to({graphics:mask_graphics_311,x:15.0521,y:256.675}).wait(1).to({graphics:mask_graphics_312,x:16.6485,y:256.675}).wait(1).to({graphics:mask_graphics_313,x:18.8835,y:256.675}).wait(1).to({graphics:mask_graphics_314,x:21.757,y:256.675}).wait(1).to({graphics:mask_graphics_315,x:25.2691,y:256.675}).wait(1).to({graphics:mask_graphics_316,x:29.4198,y:256.675}).wait(1).to({graphics:mask_graphics_317,x:34.209,y:256.675}).wait(1).to({graphics:mask_graphics_318,x:39.6367,y:256.675}).wait(1).to({graphics:mask_graphics_319,x:45.7031,y:256.675}).wait(1).to({graphics:mask_graphics_320,x:52.408,y:256.675}).wait(1).to({graphics:mask_graphics_321,x:59.7514,y:256.675}).wait(1).to({graphics:mask_graphics_322,x:67.7335,y:256.675}).wait(1).to({graphics:mask_graphics_323,x:76.354,y:256.675}).wait(1).to({graphics:mask_graphics_324,x:85.6132,y:256.675}).wait(1).to({graphics:mask_graphics_325,x:95.5109,y:256.675}).wait(1).to({graphics:mask_graphics_326,x:106.0472,y:256.675}).wait(1).to({graphics:mask_graphics_327,x:117.222,y:256.675}).wait(1).to({graphics:mask_graphics_328,x:129.0354,y:256.675}).wait(1).to({graphics:mask_graphics_329,x:139.419,y:256.675}).wait(1));

	// Layer_20
	this.instance = new lib.frame3_lines();
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(309).to({_off:false},0).wait(21));

	// Layer_19 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_309 = new cjs.Graphics().p("AUBCRIAAheIBfAAIAABeg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AUBCYIAAhrIBfAAIAABrg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AUBCqIAAiPIBfAAIAACPg");
	var mask_1_graphics_312 = new cjs.Graphics().p("AUBDIIAAjKIBfAAIAADKg");
	var mask_1_graphics_313 = new cjs.Graphics().p("AUBDyIAAkeIBfAAIAAEeg");
	var mask_1_graphics_314 = new cjs.Graphics().p("AUBEpIAAmKIBfAAIAAGKg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AUBFrIAAoOIBfAAIAAIOg");
	var mask_1_graphics_316 = new cjs.Graphics().p("AUBG6IAAqqIBfAAIAAKqg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AUBIVIAAtfIBfAAIAANfg");
	var mask_1_graphics_318 = new cjs.Graphics().p("AUBJ8IAAwrIBfAAIAAQrg");
	var mask_1_graphics_319 = new cjs.Graphics().p("AUBLvIAA0PIBfAAIAAUPg");
	var mask_1_graphics_320 = new cjs.Graphics().p("AUBNuIAA4MIBfAAIAAYMg");
	var mask_1_graphics_321 = new cjs.Graphics().p("AUBP5IAA8gIBfAAIAAcgg");
	var mask_1_graphics_322 = new cjs.Graphics().p("AUBSQMAAAghMIBfAAMAAAAhMg");
	var mask_1_graphics_323 = new cjs.Graphics().p("AUBU0MAAAgmQIBfAAMAAAAmQg");
	var mask_1_graphics_324 = new cjs.Graphics().p("AUBXjMAAAgrsIBfAAMAAAArsg");
	var mask_1_graphics_325 = new cjs.Graphics().p("AUBafMAAAgxhIBfAAMAAAAxhg");
	var mask_1_graphics_326 = new cjs.Graphics().p("AUBdnMAAAg3uIBfAAMAAAA3ug");
	var mask_1_graphics_327 = new cjs.Graphics().p("EAUBAg7MAAAg+SIBfAAMAAAA+Sg");
	var mask_1_graphics_328 = new cjs.Graphics().p("EAUBAkbMAAAhFPIBfAAMAAABFPg");
	var mask_1_graphics_329 = new cjs.Graphics().p("EAUBAntMAAAhMjIBfAAMAAABMjg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(309).to({graphics:mask_1_graphics_309,x:137.6,y:14.55}).wait(1).to({graphics:mask_1_graphics_310,x:137.6,y:15.1553}).wait(1).to({graphics:mask_1_graphics_311,x:137.6,y:16.9712}).wait(1).to({graphics:mask_1_graphics_312,x:137.6,y:19.9977}).wait(1).to({graphics:mask_1_graphics_313,x:137.6,y:24.2348}).wait(1).to({graphics:mask_1_graphics_314,x:137.6,y:29.6825}).wait(1).to({graphics:mask_1_graphics_315,x:137.6,y:36.3409}).wait(1).to({graphics:mask_1_graphics_316,x:137.6,y:44.2098}).wait(1).to({graphics:mask_1_graphics_317,x:137.6,y:53.2893}).wait(1).to({graphics:mask_1_graphics_318,x:137.6,y:63.5794}).wait(1).to({graphics:mask_1_graphics_319,x:137.6,y:75.0802}).wait(1).to({graphics:mask_1_graphics_320,x:137.6,y:87.7915}).wait(1).to({graphics:mask_1_graphics_321,x:137.6,y:101.7134}).wait(1).to({graphics:mask_1_graphics_322,x:137.6,y:116.846}).wait(1).to({graphics:mask_1_graphics_323,x:137.6,y:133.1891}).wait(1).to({graphics:mask_1_graphics_324,x:137.6,y:150.7428}).wait(1).to({graphics:mask_1_graphics_325,x:137.6,y:169.5072}).wait(1).to({graphics:mask_1_graphics_326,x:137.6,y:189.4821}).wait(1).to({graphics:mask_1_graphics_327,x:137.6,y:210.6677}).wait(1).to({graphics:mask_1_graphics_328,x:137.6,y:233.0639}).wait(1).to({graphics:mask_1_graphics_329,x:137.6,y:254.0917}).wait(1));

	// Layer_14
	this.instance_1 = new lib.frame3_lines();
	this.instance_1.setTransform(0,0,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(309).to({_off:false},0).wait(21));

	// Layer_13 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_289 = new cjs.Graphics().p("ABKIcIAAhfIBfAAIAABfg");
	var mask_2_graphics_290 = new cjs.Graphics().p("ABKIhIAAhpIBfAAIAABpg");
	var mask_2_graphics_291 = new cjs.Graphics().p("ABKIxIAAiIIBfAAIAACIg");
	var mask_2_graphics_292 = new cjs.Graphics().p("ABKJKIAAi6IBfAAIAAC6g");
	var mask_2_graphics_293 = new cjs.Graphics().p("ABKJuIAAkAIBfAAIAAEAg");
	var mask_2_graphics_294 = new cjs.Graphics().p("ABKKbIAAlaIBfAAIAAFag");
	var mask_2_graphics_295 = new cjs.Graphics().p("ABKLTIAAnJIBfAAIAAHJg");
	var mask_2_graphics_296 = new cjs.Graphics().p("ABKMWIAApMIBfAAIAAJMg");
	var mask_2_graphics_297 = new cjs.Graphics().p("ABKNiIAArjIBfAAIAALjg");
	var mask_2_graphics_298 = new cjs.Graphics().p("ABKO4IAAuOIBfAAIAAOOg");
	var mask_2_graphics_299 = new cjs.Graphics().p("ABKQZIAAxMIBfAAIAARMg");
	var mask_2_graphics_300 = new cjs.Graphics().p("ABKSEIAA0gIBfAAIAAUgg");
	var mask_2_graphics_301 = new cjs.Graphics().p("ABKT5IAA4HIBfAAIAAYHg");
	var mask_2_graphics_302 = new cjs.Graphics().p("ABKV4IAA8CIBfAAIAAcCg");
	var mask_2_graphics_303 = new cjs.Graphics().p("ABKYCMAAAggTIBfAAMAAAAgTg");
	var mask_2_graphics_304 = new cjs.Graphics().p("ABKaVMAAAgk2IBfAAMAAAAk2g");
	var mask_2_graphics_305 = new cjs.Graphics().p("ABKczMAAAgpuIBfAAMAAAApug");
	var mask_2_graphics_306 = new cjs.Graphics().p("ABKfbMAAAgu6IBfAAMAAAAu6g");
	var mask_2_graphics_307 = new cjs.Graphics().p("EABKAiNMAAAg0aIBfAAMAAAA0ag");
	var mask_2_graphics_308 = new cjs.Graphics().p("EABKAlJMAAAg6OIBfAAMAAAA6Og");
	var mask_2_graphics_309 = new cjs.Graphics().p("EABKAnvMAAAhAXIBfAAMAAABAXg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(289).to({graphics:mask_2_graphics_289,x:16.875,y:54.025}).wait(1).to({graphics:mask_2_graphics_290,x:16.875,y:54.5339}).wait(1).to({graphics:mask_2_graphics_291,x:16.875,y:56.0604}).wait(1).to({graphics:mask_2_graphics_292,x:16.875,y:58.6047}).wait(1).to({graphics:mask_2_graphics_293,x:16.875,y:62.1667}).wait(1).to({graphics:mask_2_graphics_294,x:16.875,y:66.7464}).wait(1).to({graphics:mask_2_graphics_295,x:16.875,y:72.3438}).wait(1).to({graphics:mask_2_graphics_296,x:16.875,y:78.9589}).wait(1).to({graphics:mask_2_graphics_297,x:16.875,y:86.5918}).wait(1).to({graphics:mask_2_graphics_298,x:16.875,y:95.2423}).wait(1).to({graphics:mask_2_graphics_299,x:16.875,y:104.9106}).wait(1).to({graphics:mask_2_graphics_300,x:16.875,y:115.5965}).wait(1).to({graphics:mask_2_graphics_301,x:16.875,y:127.3002}).wait(1).to({graphics:mask_2_graphics_302,x:16.875,y:140.0216}).wait(1).to({graphics:mask_2_graphics_303,x:16.875,y:153.7607}).wait(1).to({graphics:mask_2_graphics_304,x:16.875,y:168.5175}).wait(1).to({graphics:mask_2_graphics_305,x:16.875,y:184.292}).wait(1).to({graphics:mask_2_graphics_306,x:16.875,y:201.0842}).wait(1).to({graphics:mask_2_graphics_307,x:16.875,y:218.8942}).wait(1).to({graphics:mask_2_graphics_308,x:16.875,y:237.7218}).wait(1).to({graphics:mask_2_graphics_309,x:16.875,y:254.3147}).wait(21));

	// Layer_12
	this.instance_2 = new lib.frame3_lines();
	this.instance_2.setTransform(0,0,0.5,0.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(289).to({_off:false},0).wait(41));

	// Layer_3 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_289 = new cjs.Graphics().p("ALpCtIAAhfIBgAAIAABfg");
	var mask_3_graphics_290 = new cjs.Graphics().p("ALoCtIAAhfIBiAAIAABfg");
	var mask_3_graphics_291 = new cjs.Graphics().p("ALkCtIAAhfIBqAAIAABfg");
	var mask_3_graphics_292 = new cjs.Graphics().p("ALeCtIAAhfIB2AAIAABfg");
	var mask_3_graphics_293 = new cjs.Graphics().p("ALVCtIAAhfICJAAIAABfg");
	var mask_3_graphics_294 = new cjs.Graphics().p("ALKCtIAAhfICfAAIAABfg");
	var mask_3_graphics_295 = new cjs.Graphics().p("AK8CtIAAhfIC8AAIAABfg");
	var mask_3_graphics_296 = new cjs.Graphics().p("AKrCtIAAhfIDeAAIAABfg");
	var mask_3_graphics_297 = new cjs.Graphics().p("AKYCtIAAhfIEFAAIAABfg");
	var mask_3_graphics_298 = new cjs.Graphics().p("AKDCtIAAhfIEwAAIAABfg");
	var mask_3_graphics_299 = new cjs.Graphics().p("AJrCtIAAhfIFhAAIAABfg");
	var mask_3_graphics_300 = new cjs.Graphics().p("AJQCtIAAhfIGYAAIAABfg");
	var mask_3_graphics_301 = new cjs.Graphics().p("AIzCtIAAhfIHTAAIAABfg");
	var mask_3_graphics_302 = new cjs.Graphics().p("AITCtIAAhfIIUAAIAABfg");
	var mask_3_graphics_303 = new cjs.Graphics().p("AHxCtIAAhfIJaAAIAABfg");
	var mask_3_graphics_304 = new cjs.Graphics().p("AHMCtIAAhfIKlAAIAABfg");
	var mask_3_graphics_305 = new cjs.Graphics().p("AGlCtIAAhfIL1AAIAABfg");
	var mask_3_graphics_306 = new cjs.Graphics().p("AF7CtIAAhfINKAAIAABfg");
	var mask_3_graphics_307 = new cjs.Graphics().p("AFOCtIAAhfIOmAAIAABfg");
	var mask_3_graphics_308 = new cjs.Graphics().p("AEfCtIAAhfIQFAAIAABfg");
	var mask_3_graphics_309 = new cjs.Graphics().p("ADZCsIAAhfIRqAAIAABfg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(289).to({graphics:mask_3_graphics_289,x:84.05,y:17.275}).wait(1).to({graphics:mask_3_graphics_290,x:84.1818,y:17.2749}).wait(1).to({graphics:mask_3_graphics_291,x:84.5773,y:17.2748}).wait(1).to({graphics:mask_3_graphics_292,x:85.2364,y:17.2744}).wait(1).to({graphics:mask_3_graphics_293,x:86.1592,y:17.274}).wait(1).to({graphics:mask_3_graphics_294,x:87.3456,y:17.2734}).wait(1).to({graphics:mask_3_graphics_295,x:88.7956,y:17.2727}).wait(1).to({graphics:mask_3_graphics_296,x:90.5093,y:17.2719}).wait(1).to({graphics:mask_3_graphics_297,x:92.4867,y:17.271}).wait(1).to({graphics:mask_3_graphics_298,x:94.7277,y:17.2699}).wait(1).to({graphics:mask_3_graphics_299,x:97.2323,y:17.2688}).wait(1).to({graphics:mask_3_graphics_300,x:100.0006,y:17.2674}).wait(1).to({graphics:mask_3_graphics_301,x:103.0325,y:17.266}).wait(1).to({graphics:mask_3_graphics_302,x:106.3281,y:17.2644}).wait(1).to({graphics:mask_3_graphics_303,x:109.8873,y:17.2628}).wait(1).to({graphics:mask_3_graphics_304,x:113.7101,y:17.2609}).wait(1).to({graphics:mask_3_graphics_305,x:117.7967,y:17.259}).wait(1).to({graphics:mask_3_graphics_306,x:122.1468,y:17.2569}).wait(1).to({graphics:mask_3_graphics_307,x:126.7606,y:17.2548}).wait(1).to({graphics:mask_3_graphics_308,x:131.6381,y:17.2524}).wait(1).to({graphics:mask_3_graphics_309,x:134.6977,y:17.2}).wait(21));

	// Layer_2
	this.instance_3 = new lib.frame3_lines();
	this.instance_3.setTransform(0,0,0.5,0.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(289).to({_off:false},0).wait(41));

	// copy
	this.instance_4 = new lib.Symbol8();
	this.instance_4.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(274).to({_off:false},0).to({alpha:1},15,cjs.Ease.quadIn).wait(41));

	// Layer_16 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_224 = new cjs.Graphics().p("EgX5AzvIAQwvMAvjANNIgQPzg");
	var mask_4_graphics_225 = new cjs.Graphics().p("EgZZAxIIARx0MAyiAODIgQQzg");
	var mask_4_graphics_226 = new cjs.Graphics().p("Ega4AukIASy2MA1fAO3IgSRxg");
	var mask_4_graphics_227 = new cjs.Graphics().p("EgcUAsDIATz1MA4WAPpIgTSvg");
	var mask_4_graphics_228 = new cjs.Graphics().p("EgduApnIAU01MA7JAQbIgUTqg");
	var mask_4_graphics_229 = new cjs.Graphics().p("EgfGAnOIAV1yMA94ARMIgVUkg");
	var mask_4_graphics_230 = new cjs.Graphics().p("EggbAk5IAW2uMBAhAR7IgVVdg");
	var mask_4_graphics_231 = new cjs.Graphics().p("EghvAioIAX3oMBDIASpIgWWTg");
	var mask_4_graphics_232 = new cjs.Graphics().p("EgjAAgbIAY4iMBFpATWIgXXKg");
	var mask_4_graphics_233 = new cjs.Graphics().p("EgkPAeRIAY5ZMBIHAUCIgYX+g");
	var mask_4_graphics_234 = new cjs.Graphics().p("EglcAcMIAZ6PMBKgAUsIgYYxg");
	var mask_4_graphics_235 = new cjs.Graphics().p("EgmnAaKIAa7DMBM1AVVIgZZig");
	var mask_4_graphics_236 = new cjs.Graphics().p("EgnvAYLIAa71MBPFAV9IgZaSg");
	var mask_4_graphics_237 = new cjs.Graphics().p("Ego2AWRIAc8nMBRRAWkIgbbBg");
	var mask_4_graphics_238 = new cjs.Graphics().p("Egp6AUaIAc9WMBTZAXJIgbbug");
	var mask_4_graphics_239 = new cjs.Graphics().p("Egq8ASnIAd+EMBVcAXtIgccag");
	var mask_4_graphics_240 = new cjs.Graphics().p("Egr8AQ4IAd+xMBXcAYQIgcdEg");
	var mask_4_graphics_241 = new cjs.Graphics().p("Egs6APMIAe/cMBZXAYzIgddtg");
	var mask_4_graphics_242 = new cjs.Graphics().p("Egt1ANlMAAeggHMBbNAZUIgdeVg");
	var mask_4_graphics_243 = new cjs.Graphics().p("EguvAMBMAAfggvMBdAAZ0Igee6g");
	var mask_4_graphics_244 = new cjs.Graphics().p("EgvmAKhMAAgghVMBetAaSIgffeg");
	var mask_4_graphics_245 = new cjs.Graphics().p("EgwbAJEMAAggh6MBgXAavMgAfAgCg");
	var mask_4_graphics_246 = new cjs.Graphics().p("EgxOAHsMAAhgieMBh8AbLMgAgAgkg");
	var mask_4_graphics_247 = new cjs.Graphics().p("Egx/AGXMAAigjAMBjdAbnMgAhAhDg");
	var mask_4_graphics_248 = new cjs.Graphics().p("EgytAFGMAAhgjhMBk6AcBMgAgAhig");
	var mask_4_graphics_249 = new cjs.Graphics().p("EgzaAE0MAAigkAMBmTAcaMgAhAh/g");
	var mask_4_graphics_250 = new cjs.Graphics().p("Eg0EAE4MAAjgkeMBnmAcyMgAiAibg");
	var mask_4_graphics_251 = new cjs.Graphics().p("Eg0sAE8MAAjgk6MBo2AdHMgAiAi2g");
	var mask_4_graphics_252 = new cjs.Graphics().p("Eg1SAE/MAAjglUMBqCAdcMgAiAjPg");
	var mask_4_graphics_253 = new cjs.Graphics().p("Eg12AFDMAAkgluMBrJAdwMgAjAjng");
	var mask_4_graphics_254 = new cjs.Graphics().p("Eg2YAFGMAAlgmFMBsMAeDMgAkAj8g");
	var mask_4_graphics_255 = new cjs.Graphics().p("Eg23AFJMAAlgmbMBtKAeUMgAkAkRg");
	var mask_4_graphics_256 = new cjs.Graphics().p("Eg3UAFMMAAlgmwMBuEAekMgAkAklg");
	var mask_4_graphics_257 = new cjs.Graphics().p("Eg3vAFOMAAlgnCMBu6AezMgAkAk2g");
	var mask_4_graphics_258 = new cjs.Graphics().p("Eg4IAFQMAAlgnTMBvsAfAMgAkAlHg");
	var mask_4_graphics_259 = new cjs.Graphics().p("Eg4fAFTMAAmgnkMBwZAfNMgAlAlWg");
	var mask_4_graphics_260 = new cjs.Graphics().p("Eg40AFVMAAmgnzMBxDAfZMgAlAlkg");
	var mask_4_graphics_261 = new cjs.Graphics().p("Eg5GAFWMAAmgn/MBxnAfjMgAlAlwg");
	var mask_4_graphics_262 = new cjs.Graphics().p("Eg5WAFYMAAmgoLMByHAfsMgAlAl7g");
	var mask_4_graphics_263 = new cjs.Graphics().p("Eg5kAFZMAAmgoUMByjAfzMgAlAmEg");
	var mask_4_graphics_264 = new cjs.Graphics().p("Eg5wAFaMAAmgodMBy7Af7MgAlAmMg");
	var mask_4_graphics_265 = new cjs.Graphics().p("Eg56AFbMAAngojMBzOAf/MgAmAmSg");
	var mask_4_graphics_266 = new cjs.Graphics().p("Eg6CAFcMAAngopMBzeAgEMgAmAmXg");
	var mask_4_graphics_267 = new cjs.Graphics().p("Eg6HAFcMAAngosMBzoAgHMgAmAmag");
	var mask_4_graphics_268 = new cjs.Graphics().p("Eg6KAFdMAAngovMBzuAgIMgAlAmdg");
	var mask_4_graphics_269 = new cjs.Graphics().p("Eg6LAFdMAAngowMBzwAgJMgAlAmeg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(224).to({graphics:mask_4_graphics_224,x:149.55,y:409.625}).wait(1).to({graphics:mask_4_graphics_225,x:150.8589,y:397.8022}).wait(1).to({graphics:mask_4_graphics_226,x:152.1385,y:386.2451}).wait(1).to({graphics:mask_4_graphics_227,x:153.3886,y:374.9537}).wait(1).to({graphics:mask_4_graphics_228,x:154.6093,y:363.928}).wait(1).to({graphics:mask_4_graphics_229,x:155.8005,y:353.1679}).wait(1).to({graphics:mask_4_graphics_230,x:156.9624,y:342.6735}).wait(1).to({graphics:mask_4_graphics_231,x:158.0948,y:332.4448}).wait(1).to({graphics:mask_4_graphics_232,x:159.1979,y:322.4818}).wait(1).to({graphics:mask_4_graphics_233,x:160.2715,y:312.7845}).wait(1).to({graphics:mask_4_graphics_234,x:161.3157,y:303.3528}).wait(1).to({graphics:mask_4_graphics_235,x:162.3305,y:294.1868}).wait(1).to({graphics:mask_4_graphics_236,x:163.3159,y:285.2865}).wait(1).to({graphics:mask_4_graphics_237,x:164.2718,y:276.6519}).wait(1).to({graphics:mask_4_graphics_238,x:165.1984,y:268.283}).wait(1).to({graphics:mask_4_graphics_239,x:166.0955,y:260.1797}).wait(1).to({graphics:mask_4_graphics_240,x:166.9632,y:252.3421}).wait(1).to({graphics:mask_4_graphics_241,x:167.8016,y:244.7702}).wait(1).to({graphics:mask_4_graphics_242,x:168.6104,y:237.464}).wait(1).to({graphics:mask_4_graphics_243,x:169.3899,y:230.4235}).wait(1).to({graphics:mask_4_graphics_244,x:170.14,y:223.6486}).wait(1).to({graphics:mask_4_graphics_245,x:170.8606,y:217.1395}).wait(1).to({graphics:mask_4_graphics_246,x:171.5519,y:210.896}).wait(1).to({graphics:mask_4_graphics_247,x:172.2137,y:204.9182}).wait(1).to({graphics:mask_4_graphics_248,x:172.8461,y:199.206}).wait(1).to({graphics:mask_4_graphics_249,x:173.4491,y:187.8239}).wait(1).to({graphics:mask_4_graphics_250,x:174.0227,y:174.8975}).wait(1).to({graphics:mask_4_graphics_251,x:174.5668,y:162.634}).wait(1).to({graphics:mask_4_graphics_252,x:175.0816,y:151.0333}).wait(1).to({graphics:mask_4_graphics_253,x:175.5669,y:140.0956}).wait(1).to({graphics:mask_4_graphics_254,x:176.0228,y:129.8207}).wait(1).to({graphics:mask_4_graphics_255,x:176.4494,y:120.2088}).wait(1).to({graphics:mask_4_graphics_256,x:176.8464,y:111.2597}).wait(1).to({graphics:mask_4_graphics_257,x:177.2141,y:102.9735}).wait(1).to({graphics:mask_4_graphics_258,x:177.5524,y:95.3503}).wait(1).to({graphics:mask_4_graphics_259,x:177.8612,y:88.3899}).wait(1).to({graphics:mask_4_graphics_260,x:178.1407,y:82.0924}).wait(1).to({graphics:mask_4_graphics_261,x:178.3907,y:76.4578}).wait(1).to({graphics:mask_4_graphics_262,x:178.6113,y:71.4861}).wait(1).to({graphics:mask_4_graphics_263,x:178.8025,y:67.1773}).wait(1).to({graphics:mask_4_graphics_264,x:178.9643,y:63.5314}).wait(1).to({graphics:mask_4_graphics_265,x:179.0966,y:60.5484}).wait(1).to({graphics:mask_4_graphics_266,x:179.1996,y:58.2282}).wait(1).to({graphics:mask_4_graphics_267,x:179.2731,y:56.571}).wait(1).to({graphics:mask_4_graphics_268,x:179.3172,y:55.5767}).wait(1).to({graphics:mask_4_graphics_269,x:181.8879,y:55.0017}).wait(61));

	// Layer_15
	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(150,710.2,1,1,0,0,0,150,108.2);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(224).to({_off:false},0).to({y:108.2},45,cjs.Ease.quadOut).wait(61));

	// Layer_18 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_224 = new cjs.Graphics().p("EgYwBodMAAAhdwIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdwg");
	var mask_5_graphics_225 = new cjs.Graphics().p("EgYwBl7MAAAhdwIABAAIAPwNMAvjANMIgDDBIBxAAMAAABdwg");
	var mask_5_graphics_226 = new cjs.Graphics().p("EgYwBjdMAAAhdwIABAAIAPwOMAvjANMIgDDCIBxAAMAAABdwg");
	var mask_5_graphics_227 = new cjs.Graphics().p("EgYwBhCMAAAhdwIABAAIAPwOMAvjANMIgDDCIBxAAMAAABdwg");
	var mask_5_graphics_228 = new cjs.Graphics().p("EgYwBerMAAAhdwIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdwg");
	var mask_5_graphics_229 = new cjs.Graphics().p("EgYwBcXMAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_230 = new cjs.Graphics().p("EgYwBaIMAAAhdvIABAAIAPwPMAvjANNIgDDCIBxAAMAAABdvg");
	var mask_5_graphics_231 = new cjs.Graphics().p("EgYwBX8MAAAhdvIABAAIAPwPMAvjANNIgDDCIBxAAMAAABdvg");
	var mask_5_graphics_232 = new cjs.Graphics().p("EgYwBVzMAAAhdvIABAAIAPwPMAvjANNIgDDCIBxAAMAAABdvg");
	var mask_5_graphics_233 = new cjs.Graphics().p("EgYwBTuMAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_234 = new cjs.Graphics().p("EgYwBRtMAAAhdvIABAAIAPwPMAvjANNIgDDCIBxAAMAAABdvg");
	var mask_5_graphics_235 = new cjs.Graphics().p("EgYwBPvMAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_236 = new cjs.Graphics().p("EgYwBN1MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_237 = new cjs.Graphics().p("EgYwBL/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_238 = new cjs.Graphics().p("EgYwBKMMAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_239 = new cjs.Graphics().p("EgYwBIdMAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_240 = new cjs.Graphics().p("EgYwBGyMAAAhdvIABAAIAPwPMAvjANNIgDDCIBxAAMAAABdvg");
	var mask_5_graphics_241 = new cjs.Graphics().p("EgYwBFKMAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_242 = new cjs.Graphics().p("EgYwBDmMAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_243 = new cjs.Graphics().p("EgYwBCGMAAAhdvIABAAIAPwPMAvjANNIgDDCIBxAAMAAABdvg");
	var mask_5_graphics_244 = new cjs.Graphics().p("EgYwBApMAAAhdvIABAAIAPwPMAvjANNIgDDCIBxAAMAAABdvg");
	var mask_5_graphics_245 = new cjs.Graphics().p("EgYwA/QMAAAhdvIABAAIAPwPMAvjANNIgDDCIBxAAMAAABdvg");
	var mask_5_graphics_246 = new cjs.Graphics().p("EgYwA96MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_247 = new cjs.Graphics().p("EgYwA8oMAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_248 = new cjs.Graphics().p("EgYwA7aMAAAhdvIABAAIAPwPMAvjANNIgDDCIBxAAMAAABdvg");
	var mask_5_graphics_249 = new cjs.Graphics().p("EgYwA6PMAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_250 = new cjs.Graphics().p("EgYwA5IMAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_251 = new cjs.Graphics().p("EgYwA4FMAAAhdvIABAAIAPwPMAvjANNIgDDCIBxAAMAAABdvg");
	var mask_5_graphics_252 = new cjs.Graphics().p("EgYwA3FMAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_253 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_254 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_255 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_256 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_257 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_258 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_259 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_260 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_261 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_262 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_263 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_264 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_265 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_266 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_267 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_268 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");
	var mask_5_graphics_269 = new cjs.Graphics().p("EgYwA2/MAAAhdvIABAAIAPwOMAvjANNIgDDBIBxAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(224).to({graphics:mask_5_graphics_224,x:155.025,y:668.5}).wait(1).to({graphics:mask_5_graphics_225,x:155.025,y:652.3009}).wait(1).to({graphics:mask_5_graphics_226,x:155.025,y:636.4658}).wait(1).to({graphics:mask_5_graphics_227,x:155.025,y:620.9948}).wait(1).to({graphics:mask_5_graphics_228,x:155.025,y:605.8878}).wait(1).to({graphics:mask_5_graphics_229,x:155.025,y:591.1448}).wait(1).to({graphics:mask_5_graphics_230,x:155.025,y:576.7658}).wait(1).to({graphics:mask_5_graphics_231,x:155.025,y:562.7508}).wait(1).to({graphics:mask_5_graphics_232,x:155.025,y:549.0999}).wait(1).to({graphics:mask_5_graphics_233,x:155.025,y:535.813}).wait(1).to({graphics:mask_5_graphics_234,x:155.025,y:522.8901}).wait(1).to({graphics:mask_5_graphics_235,x:155.025,y:510.3313}).wait(1).to({graphics:mask_5_graphics_236,x:155.025,y:498.1364}).wait(1).to({graphics:mask_5_graphics_237,x:155.025,y:486.3056}).wait(1).to({graphics:mask_5_graphics_238,x:155.025,y:474.8389}).wait(1).to({graphics:mask_5_graphics_239,x:155.025,y:463.7361}).wait(1).to({graphics:mask_5_graphics_240,x:155.025,y:452.9974}).wait(1).to({graphics:mask_5_graphics_241,x:155.025,y:442.6227}).wait(1).to({graphics:mask_5_graphics_242,x:155.025,y:432.612}).wait(1).to({graphics:mask_5_graphics_243,x:155.025,y:422.9653}).wait(1).to({graphics:mask_5_graphics_244,x:155.025,y:413.6827}).wait(1).to({graphics:mask_5_graphics_245,x:155.025,y:404.7641}).wait(1).to({graphics:mask_5_graphics_246,x:155.025,y:396.2095}).wait(1).to({graphics:mask_5_graphics_247,x:155.025,y:388.019}).wait(1).to({graphics:mask_5_graphics_248,x:155.025,y:380.1924}).wait(1).to({graphics:mask_5_graphics_249,x:155.025,y:372.7299}).wait(1).to({graphics:mask_5_graphics_250,x:155.025,y:365.6315}).wait(1).to({graphics:mask_5_graphics_251,x:155.025,y:358.897}).wait(1).to({graphics:mask_5_graphics_252,x:155.025,y:352.5266}).wait(1).to({graphics:mask_5_graphics_253,x:155.025,y:341.1153}).wait(1).to({graphics:mask_5_graphics_254,x:155.025,y:329.8306}).wait(1).to({graphics:mask_5_graphics_255,x:155.025,y:319.2738}).wait(1).to({graphics:mask_5_graphics_256,x:155.025,y:309.4452}).wait(1).to({graphics:mask_5_graphics_257,x:155.025,y:300.3446}).wait(1).to({graphics:mask_5_graphics_258,x:155.025,y:291.972}).wait(1).to({graphics:mask_5_graphics_259,x:155.025,y:284.3275}).wait(1).to({graphics:mask_5_graphics_260,x:155.025,y:277.411}).wait(1).to({graphics:mask_5_graphics_261,x:155.025,y:271.2226}).wait(1).to({graphics:mask_5_graphics_262,x:155.025,y:265.7622}).wait(1).to({graphics:mask_5_graphics_263,x:155.025,y:261.0299}).wait(1).to({graphics:mask_5_graphics_264,x:155.025,y:257.0256}).wait(1).to({graphics:mask_5_graphics_265,x:155.025,y:253.7494}).wait(1).to({graphics:mask_5_graphics_266,x:155.025,y:251.2012}).wait(1).to({graphics:mask_5_graphics_267,x:155.025,y:249.3811}).wait(1).to({graphics:mask_5_graphics_268,x:155.025,y:248.289}).wait(1).to({graphics:mask_5_graphics_269,x:155.025,y:247.925}).wait(61));

	// Layer_17
	this.instance_6 = new lib.frame3_image();
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(224).to({_off:false},0).wait(106));

	// Layer_11 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_119 = new cjs.Graphics().p("EgXbBeZIAAywIAAAAIAAsSIAAAAIAA0oIAAAAIAAudIAAAAIAA8lMAu3AB3IAAOdIAAAAIAAUoIAAAAIAAMSIAAAAIAASwIAAAAIAAaug");
	var mask_6_graphics_120 = new cjs.Graphics().p("EgXbBcdIAAy2IAAAAIAAsVIAAAAIAA0vIAAAAIAAuiIAAAAIAA8uMAu3AB4IAAOhIAAAAIAAUuIAAAAIAAMWIAAAAIAAS2IAAAAIAAa3g");
	var mask_6_graphics_121 = new cjs.Graphics().p("EgXbBakIAAy7IAAAAIAAsaIAAAAIAA01IAAAAIAAumIAAAAIAA84MAu3AB5IAAOlIAAAAIAAU1IAAAAIAAMaIAAAAIAAS8IAAAAIAAa/g");
	var mask_6_graphics_122 = new cjs.Graphics().p("EgXbBYuIAAzBIAAAAIAAseIAAAAIAA07IAAAAIAAurIAAAAIAA9AMAu3AB6IAAOpIAAAAIAAU8IAAAAIAAMdIAAAAIAATCIAAAAIAAbHg");
	var mask_6_graphics_123 = new cjs.Graphics().p("EgXbBW7IAAzHIAAAAIAAsiIAAAAIAA1BIAAAAIAAuvIAAAAIAA9JMAu3AB7IAAOtIAAAAIAAVCIAAAAIAAMhIAAAAIAATHIAAAAIAAbQg");
	var mask_6_graphics_124 = new cjs.Graphics().p("EgXbBVKIAAzNIAAAAIAAskIAAAAIAA1IIAAAAIAAuzIAAAAIAA9RMAu3AB7IAAOyIAAAAIAAVHIAAAAIAAMlIAAAAIAATNIAAAAIAAbXg");
	var mask_6_graphics_125 = new cjs.Graphics().p("EgXbBTcIAAzSIAAAAIAAsoIAAAAIAA1NIAAAAIAAu3IAAAAIAA9aMAu3AB8IAAO2IAAAAIAAVNIAAAAIAAMoIAAAAIAATSIAAAAIAAbfg");
	var mask_6_graphics_126 = new cjs.Graphics().p("EgXbBRxIAAzXIAAAAIAAssIAAAAIAA1TIAAAAIAAu7IAAAAIAA9hMAu3AB8IAAO6IAAAAIAAVTIAAAAIAAMsIAAAAIAATXIAAAAIAAbmg");
	var mask_6_graphics_127 = new cjs.Graphics().p("EgXbBQJIAAzcIAAAAIAAsvIAAAAIAA1ZIAAAAIAAu/IAAAAIAA9pMAu3AB9IAAO/IAAAAIAAVXIAAAAIAAMvIAAAAIAATcIAAAAIAAbug");
	var mask_6_graphics_128 = new cjs.Graphics().p("EgXbBOjIAAzhIAAAAIAAsyIAAAAIAA1eIAAAAIAAvDIAAAAIAA9wMAu3AB9IAAPDIAAAAIAAVdIAAAAIAAMyIAAAAIAAThIAAAAIAAb0g");
	var mask_6_graphics_129 = new cjs.Graphics().p("EgXbBNAIAAzlIAAAAIAAs2IAAAAIAA1jIAAAAIAAvGIAAAAIAA94MAu3AB9IAAPHIAAAAIAAViIAAAAIAAM1IAAAAIAATmIAAAAIAAb7g");
	var mask_6_graphics_130 = new cjs.Graphics().p("EgXbBLgIAAzqIAAAAIAAs4IAAAAIAA1pIAAAAIAAvKIAAAAIAA9+MAu3AB9IAAPKIAAAAIAAVoIAAAAIAAM4IAAAAIAATrIAAAAIAAcBg");
	var mask_6_graphics_131 = new cjs.Graphics().p("EgXbBKDIAAzvIAAAAIAAs7IAAAAIAA1tIAAAAIAAvOIAAAAIAA+FMAu3AB+IAAPNIAAAAIAAVtIAAAAIAAM7IAAAAIAATvIAAAAIAAcIg");
	var mask_6_graphics_132 = new cjs.Graphics().p("EgXbBIpIAAz0IAAAAIAAs+IAAAAIAA1yIAAAAIAAvRIAAAAIAA+MMAu3AB/IAAPRIAAAAIAAVxIAAAAIAAM+IAAAAIAATzIAAAAIAAcPg");
	var mask_6_graphics_133 = new cjs.Graphics().p("EgXbBHRIAAz3IAAAAIAAtBIAAAAIAA13IAAAAIAAvUIAAAAIAA+TMAu3AB/IAAPUIAAAAIAAV2IAAAAIAANBIAAAAIAAT4IAAAAIAAcUg");
	var mask_6_graphics_134 = new cjs.Graphics().p("EgXbBF8IAAz7IAAAAIAAtEIAAAAIAA17IAAAAIAAvXIAAAAIAA+aMAu3ACAIAAPXIAAAAIAAV7IAAAAIAANDIAAAAIAAT8IAAAAIAAcag");
	var mask_6_graphics_135 = new cjs.Graphics().p("EgXbBEqIAAz/IAAAAIAAtHIAAAAIAA1/IAAAAIAAvaIAAAAIAA+gMAu3ACAIAAPbIAAAAIAAV+IAAAAIAANGIAAAAIAAUAIAAAAIAAcgg");
	var mask_6_graphics_136 = new cjs.Graphics().p("EgXbBDbIAA0EIAAAAIAAtIIAAAAIAA2EIAAAAIAAvcIAAAAIAA+mMAu3ACAIAAPdIAAAAIAAWDIAAAAIAANJIAAAAIAAUDIAAAAIAAcmg");
	var mask_6_graphics_137 = new cjs.Graphics().p("EgXbBCOIAA0HIAAAAIAAtLIAAAAIAA2IIAAAAIAAvfIAAAAIAA+sMAu3ACBIAAPgIAAAAIAAWHIAAAAIAANLIAAAAIAAUIIAAAAIAAcqg");
	var mask_6_graphics_138 = new cjs.Graphics().p("EgXbBBFIAA0LIAAAAIAAtOIAAAAIAA2LIAAAAIAAviIAAAAIAA+xMAu3ACBIAAPjIAAAAIAAWLIAAAAIAANNIAAAAIAAULIAAAAIAAcwg");
	var mask_6_graphics_139 = new cjs.Graphics().p("EgXbA/+IAA0OIAAAAIAAtQIAAAAIAA2QIAAAAIAAvkIAAAAIAA+3MAu3ACCIAAPlIAAAAIAAWPIAAAAIAANQIAAAAIAAUOIAAAAIAAc1g");
	var mask_6_graphics_140 = new cjs.Graphics().p("EgXbA+6IAA0SIAAAAIAAtSIAAAAIAA2TIAAAAIAAvnIAAAAIAA+7MAu3ACBIAAPpIAAAAIAAWSIAAAAIAANSIAAAAIAAURIAAAAIAAc6g");
	var mask_6_graphics_141 = new cjs.Graphics().p("EgXbA94IAA0UIAAAAIAAtUIAAAAIAA2XIAAAAIAAvqIAAAAIAA/AMAu3ACCIAAPrIAAAAIAAWXIAAAAIAANTIAAAAIAAUUIAAAAIAAc+g");
	var mask_6_graphics_142 = new cjs.Graphics().p("EgXbA86IAA0YIAAAAIAAtWIAAAAIAA2aIAAAAIAAvsIAAAAIAA/FMAu3ACDIAAPtIAAAAIAAWaIAAAAIAANVIAAAAIAAUXIAAAAIAAdDg");
	var mask_6_graphics_143 = new cjs.Graphics().p("EgXbA7+IAA0bIAAAAIAAtYIAAAAIAA2dIAAAAIAAvuIAAAAIAA/JMAu3ACDIAAPvIAAAAIAAWdIAAAAIAANXIAAAAIAAUaIAAAAIAAdHg");
	var mask_6_graphics_144 = new cjs.Graphics().p("EgXbA7FIAA0eIAAAAIAAtZIAAAAIAA2gIAAAAIAAvxIAAAAIAA/NMAu3ACDIAAPxIAAAAIAAWgIAAAAIAANZIAAAAIAAUdIAAAAIAAdLg");
	var mask_6_graphics_145 = new cjs.Graphics().p("EgXbA6OIAA0fIAAAAIAAtcIAAAAIAA2jIAAAAIAAvyIAAAAIAA/SMAu3ACEIAAPzIAAAAIAAWjIAAAAIAANaIAAAAIAAUgIAAAAIAAdOg");
	var mask_6_graphics_146 = new cjs.Graphics().p("EgXbA5bIAA0iIAAAAIAAtdIAAAAIAA2mIAAAAIAAv0IAAAAIAA/WMAu3ACEIAAP1IAAAAIAAWmIAAAAIAANcIAAAAIAAUiIAAAAIAAdSg");
	var mask_6_graphics_147 = new cjs.Graphics().p("EgXbA4qIAA0lIAAAAIAAteIAAAAIAA2nIAAAAIAAv3IAAAAIAA/ZMAu3ACEIAAP3IAAAAIAAWoIAAAAIAANeIAAAAIAAUkIAAAAIAAdVg");
	var mask_6_graphics_148 = new cjs.Graphics().p("EgXbA38IAA0nIAAAAIAAtgIAAAAIAA2pIAAAAIAAv5IAAAAIAA/cMAu3ACEIAAP4IAAAAIAAWrIAAAAIAANfIAAAAIAAUnIAAAAIAAdYg");
	var mask_6_graphics_149 = new cjs.Graphics().p("EgXbA3RIAA0pIAAAAIAAthIAAAAIAA2sIAAAAIAAv7IAAAAIAA/fMAu3ACEIAAP7IAAAAIAAWtIAAAAIAANgIAAAAIAAUpIAAAAIAAdbg");
	var mask_6_graphics_150 = new cjs.Graphics().p("EgXbA2pIAA0rIAAAAIAAtjIAAAAIAA2uIAAAAIAAv8IAAAAIAA/iMAu3ACEIAAP8IAAAAIAAWvIAAAAIAANiIAAAAIAAUrIAAAAIAAdeg");
	var mask_6_graphics_151 = new cjs.Graphics().p("EgXbA2DIAA0tIAAAAIAAtjIAAAAIAA2xIAAAAIAAv9IAAAAIAA/lMAu3ACFIAAP9IAAAAIAAWxIAAAAIAANjIAAAAIAAUtIAAAAIAAdgg");
	var mask_6_graphics_152 = new cjs.Graphics().p("EgXbA1hIAA0vIAAAAIAAtlIAAAAIAA2yIAAAAIAAv/IAAAAIAA/nMAu3ACFIAAP+IAAAAIAAWzIAAAAIAANkIAAAAIAAUvIAAAAIAAdjg");
	var mask_6_graphics_153 = new cjs.Graphics().p("EgXbA1BIAA0xIAAAAIAAtlIAAAAIAA20IAAAAIAAwAIAAAAIAA/qMAu3ACFIAAQAIAAAAIAAW1IAAAAIAANkIAAAAIAAUxIAAAAIAAdlg");
	var mask_6_graphics_154 = new cjs.Graphics().p("EgXbA0jIAA0xIAAAAIAAtnIAAAAIAA21IAAAAIAAwBIAAAAIAA/sMAu3ACFIAAQAIAAAAIAAW3IAAAAIAANmIAAAAIAAUxIAAAAIAAdng");
	var mask_6_graphics_155 = new cjs.Graphics().p("EgXbA0hIAA0zIAAAAIAAtnIAAAAIAA23IAAAAIAAwCIAAAAIAA/uMAu3ACFIAAQCIAAAAIAAW4IAAAAIAANmIAAAAIAAUzIAAAAIAAdpg");
	var mask_6_graphics_156 = new cjs.Graphics().p("EgXbA0kIAA00IAAAAIAAtoIAAAAIAA25IAAAAIAAwCIAAAAIAA/wMAu3ACFIAAQDIAAAAIAAW5IAAAAIAANnIAAAAIAAU0IAAAAIAAdrg");
	var mask_6_graphics_157 = new cjs.Graphics().p("EgXbA0mIAA00IAAAAIAAtqIAAAAIAA25IAAAAIAAwDIAAAAIAA/xMAu3ACFIAAQDIAAAAIAAW7IAAAAIAANoIAAAAIAAU1IAAAAIAAdrg");
	var mask_6_graphics_158 = new cjs.Graphics().p("EgXbA0pIAA02IAAAAIAAtqIAAAAIAA26IAAAAIAAwEIAAAAIAA/zMAu3ACGIAAQEIAAAAIAAW7IAAAAIAANpIAAAAIAAU1IAAAAIAAdug");
	var mask_6_graphics_159 = new cjs.Graphics().p("EgXbA0rIAA03IAAAAIAAtqIAAAAIAA27IAAAAIAAwFIAAAAIAA/0MAu3ACGIAAQFIAAAAIAAW8IAAAAIAANpIAAAAIAAU2IAAAAIAAdvg");
	var mask_6_graphics_160 = new cjs.Graphics().p("EgXbA0sIAA03IAAAAIAAtrIAAAAIAA27IAAAAIAAwFIAAAAIAA/1MAu3ACFIAAQGIAAAAIAAW8IAAAAIAANqIAAAAIAAU3IAAAAIAAdvg");
	var mask_6_graphics_161 = new cjs.Graphics().p("EgXbA0tIAA03IAAAAIAAtrIAAAAIAA28IAAAAIAAwGIAAAAIAA/1MAu3ACFIAAQGIAAAAIAAW9IAAAAIAANqIAAAAIAAU3IAAAAIAAdwg");
	var mask_6_graphics_162 = new cjs.Graphics().p("EgXbA0uIAA04IAAAAIAAtrIAAAAIAA28IAAAAIAAwGIAAAAIAA/2MAu3ACFIAAQGIAAAAIAAW+IAAAAIAANqIAAAAIAAU4IAAAAIAAdwg");
	var mask_6_graphics_163 = new cjs.Graphics().p("EgXbA0vIAA05IAAAAIAAtrIAAAAIAA28IAAAAIAAwGIAAAAIAA/3MAu3ACGIAAQGIAAAAIAAW+IAAAAIAANqIAAAAIAAU4IAAAAIAAdxg");
	var mask_6_graphics_164 = new cjs.Graphics().p("EgXbA0vIAA04IAAAAIAAtsIAAAAIAA28IAAAAIAAwHIAAAAIAA/2MAu3ACGIAAQGIAAAAIAAW+IAAAAIAANqIAAAAIAAU4IAAAAIAAdxg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(119).to({graphics:mask_6_graphics_119,x:150.025,y:604.125}).wait(1).to({graphics:mask_6_graphics_120,x:150.025,y:591.7442}).wait(1).to({graphics:mask_6_graphics_121,x:150.025,y:579.6415}).wait(1).to({graphics:mask_6_graphics_122,x:150.025,y:567.8171}).wait(1).to({graphics:mask_6_graphics_123,x:150.025,y:556.271}).wait(1).to({graphics:mask_6_graphics_124,x:150.025,y:545.003}).wait(1).to({graphics:mask_6_graphics_125,x:150.025,y:534.0133}).wait(1).to({graphics:mask_6_graphics_126,x:150.025,y:523.3017}).wait(1).to({graphics:mask_6_graphics_127,x:150.025,y:512.8684}).wait(1).to({graphics:mask_6_graphics_128,x:150.025,y:502.7134}).wait(1).to({graphics:mask_6_graphics_129,x:150.025,y:492.8365}).wait(1).to({graphics:mask_6_graphics_130,x:150.025,y:483.2379}).wait(1).to({graphics:mask_6_graphics_131,x:150.025,y:473.9175}).wait(1).to({graphics:mask_6_graphics_132,x:150.025,y:464.8753}).wait(1).to({graphics:mask_6_graphics_133,x:150.025,y:456.1113}).wait(1).to({graphics:mask_6_graphics_134,x:150.025,y:447.6256}).wait(1).to({graphics:mask_6_graphics_135,x:150.025,y:439.418}).wait(1).to({graphics:mask_6_graphics_136,x:150.025,y:431.4887}).wait(1).to({graphics:mask_6_graphics_137,x:150.025,y:423.8377}).wait(1).to({graphics:mask_6_graphics_138,x:150.025,y:416.4648}).wait(1).to({graphics:mask_6_graphics_139,x:150.025,y:409.3702}).wait(1).to({graphics:mask_6_graphics_140,x:150.025,y:402.5537}).wait(1).to({graphics:mask_6_graphics_141,x:150.025,y:396.0155}).wait(1).to({graphics:mask_6_graphics_142,x:150.025,y:389.7556}).wait(1).to({graphics:mask_6_graphics_143,x:150.025,y:383.7738}).wait(1).to({graphics:mask_6_graphics_144,x:150.025,y:378.0703}).wait(1).to({graphics:mask_6_graphics_145,x:150.025,y:372.645}).wait(1).to({graphics:mask_6_graphics_146,x:150.025,y:367.4979}).wait(1).to({graphics:mask_6_graphics_147,x:150.025,y:362.629}).wait(1).to({graphics:mask_6_graphics_148,x:150.025,y:358.0383}).wait(1).to({graphics:mask_6_graphics_149,x:150.025,y:353.7259}).wait(1).to({graphics:mask_6_graphics_150,x:150.025,y:349.6917}).wait(1).to({graphics:mask_6_graphics_151,x:150.025,y:345.9357}).wait(1).to({graphics:mask_6_graphics_152,x:150.025,y:342.458}).wait(1).to({graphics:mask_6_graphics_153,x:150.025,y:339.2584}).wait(1).to({graphics:mask_6_graphics_154,x:150.025,y:336.3371}).wait(1).to({graphics:mask_6_graphics_155,x:150.025,y:331.2825}).wait(1).to({graphics:mask_6_graphics_156,x:150.025,y:326.2639}).wait(1).to({graphics:mask_6_graphics_157,x:150.025,y:321.8358}).wait(1).to({graphics:mask_6_graphics_158,x:150.025,y:317.998}).wait(1).to({graphics:mask_6_graphics_159,x:150.025,y:314.7507}).wait(1).to({graphics:mask_6_graphics_160,x:150.025,y:312.0937}).wait(1).to({graphics:mask_6_graphics_161,x:150.025,y:310.0273}).wait(1).to({graphics:mask_6_graphics_162,x:150.025,y:308.5512}).wait(1).to({graphics:mask_6_graphics_163,x:150.025,y:307.6656}).wait(1).to({graphics:mask_6_graphics_164,x:150.025,y:307.4817}).wait(166));

	// lines
	this.instance_7 = new lib.frame2_lines();
	this.instance_7.setTransform(0,0,0.5,0.5);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(119).to({_off:false},0).to({_off:true},151).wait(60));

	// copy
	this.instance_8 = new lib.frame2_copy();
	this.instance_8.setTransform(0,0,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(119).to({_off:false},0).to({_off:true},151).wait(60));

	// image
	this.instance_9 = new lib.frame2_image();
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(119).to({_off:false},0).to({_off:true},151).wait(60));

	// copy
	this.instance_10 = new lib.Symbol2();
	this.instance_10.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},14,cjs.Ease.quadIn).to({_off:true},151).wait(165));

	// Layer_10 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_36 = new cjs.Graphics().p("EgAFAohIAAiPICOAAIAACPg");
	var mask_7_graphics_37 = new cjs.Graphics().p("EgA7AohIAAiPID7AAIAACPg");
	var mask_7_graphics_38 = new cjs.Graphics().p("EgBxAohIAAiPIFnAAIAACPg");
	var mask_7_graphics_39 = new cjs.Graphics().p("EgCnAohIAAiPIHUAAIAACPg");
	var mask_7_graphics_40 = new cjs.Graphics().p("EgDdAohIAAiPIJAAAIAACPg");
	var mask_7_graphics_41 = new cjs.Graphics().p("EgETAohIAAiPIKtAAIAACPg");
	var mask_7_graphics_42 = new cjs.Graphics().p("EgFJAohIAAiPIMZAAIAACPg");
	var mask_7_graphics_43 = new cjs.Graphics().p("EgF/AohIAAiPIOGAAIAACPg");
	var mask_7_graphics_44 = new cjs.Graphics().p("EgG1AohIAAiPIPyAAIAACPg");
	var mask_7_graphics_45 = new cjs.Graphics().p("EgHrAohIAAiPIRfAAIAACPg");
	var mask_7_graphics_46 = new cjs.Graphics().p("EgIhAohIAAiPITLAAIAACPg");
	var mask_7_graphics_47 = new cjs.Graphics().p("EgJXAohIAAiPIU4AAIAACPg");
	var mask_7_graphics_48 = new cjs.Graphics().p("EgKOAohIAAiPIWlAAIAACPg");
	var mask_7_graphics_49 = new cjs.Graphics().p("EgLEAohIAAiPIYSAAIAACPg");
	var mask_7_graphics_50 = new cjs.Graphics().p("EgL6AohIAAiPIZ+AAIAACPg");
	var mask_7_graphics_51 = new cjs.Graphics().p("EgMwAohIAAiPIbrAAIAACPg");
	var mask_7_graphics_52 = new cjs.Graphics().p("EgNmAohIAAiPIdXAAIAACPg");
	var mask_7_graphics_53 = new cjs.Graphics().p("EgOcAohIAAiPIfEAAIAACPg");
	var mask_7_graphics_54 = new cjs.Graphics().p("EgPSAohIAAiPMAgwAAAIAACPg");
	var mask_7_graphics_55 = new cjs.Graphics().p("EgQIAohIAAiPMAidAAAIAACPg");
	var mask_7_graphics_56 = new cjs.Graphics().p("EgQ+AohIAAiPMAkJAAAIAACPg");
	var mask_7_graphics_57 = new cjs.Graphics().p("EgR0AohIAAiPMAl2AAAIAACPg");
	var mask_7_graphics_58 = new cjs.Graphics().p("EgSqAohIAAiPMAniAAAIAACPg");
	var mask_7_graphics_59 = new cjs.Graphics().p("EgTzAohIAAiPMApPAAAIAACPg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_7_graphics_36,x:13.725,y:259.35}).wait(1).to({graphics:mask_7_graphics_37,x:19.1748,y:259.35}).wait(1).to({graphics:mask_7_graphics_38,x:24.6245,y:259.35}).wait(1).to({graphics:mask_7_graphics_39,x:30.0743,y:259.35}).wait(1).to({graphics:mask_7_graphics_40,x:35.524,y:259.35}).wait(1).to({graphics:mask_7_graphics_41,x:40.9738,y:259.35}).wait(1).to({graphics:mask_7_graphics_42,x:46.4236,y:259.35}).wait(1).to({graphics:mask_7_graphics_43,x:51.8733,y:259.35}).wait(1).to({graphics:mask_7_graphics_44,x:57.3231,y:259.35}).wait(1).to({graphics:mask_7_graphics_45,x:62.7728,y:259.35}).wait(1).to({graphics:mask_7_graphics_46,x:68.2226,y:259.35}).wait(1).to({graphics:mask_7_graphics_47,x:73.6723,y:259.35}).wait(1).to({graphics:mask_7_graphics_48,x:79.1221,y:259.35}).wait(1).to({graphics:mask_7_graphics_49,x:84.5719,y:259.35}).wait(1).to({graphics:mask_7_graphics_50,x:90.0216,y:259.35}).wait(1).to({graphics:mask_7_graphics_51,x:95.4714,y:259.35}).wait(1).to({graphics:mask_7_graphics_52,x:100.9211,y:259.35}).wait(1).to({graphics:mask_7_graphics_53,x:106.3709,y:259.35}).wait(1).to({graphics:mask_7_graphics_54,x:111.8207,y:259.35}).wait(1).to({graphics:mask_7_graphics_55,x:117.2704,y:259.35}).wait(1).to({graphics:mask_7_graphics_56,x:122.7202,y:259.35}).wait(1).to({graphics:mask_7_graphics_57,x:128.1699,y:259.35}).wait(1).to({graphics:mask_7_graphics_58,x:133.6197,y:259.35}).wait(1).to({graphics:mask_7_graphics_59,x:137.2233,y:259.35}).wait(271));

	// Layer_9
	this.instance_11 = new lib.frame1_lines();
	this.instance_11.setTransform(0,0,0.5,0.5);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(36).to({_off:false},0).to({_off:true},129).wait(165));

	// Layer_8 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_36 = new cjs.Graphics().p("ATcCRIAAiPICPAAIAACPg");
	var mask_8_graphics_37 = new cjs.Graphics().p("ATcCWIAAiXICPAAIAACXg");
	var mask_8_graphics_38 = new cjs.Graphics().p("ATcCjIAAiyICPAAIAACyg");
	var mask_8_graphics_39 = new cjs.Graphics().p("ATcC6IAAjfICPAAIAADfg");
	var mask_8_graphics_40 = new cjs.Graphics().p("ATcDbIAAkgICPAAIAAEgg");
	var mask_8_graphics_41 = new cjs.Graphics().p("ATcEEIAAlxICPAAIAAFxg");
	var mask_8_graphics_42 = new cjs.Graphics().p("ATcE3IAAnWICPAAIAAHWg");
	var mask_8_graphics_43 = new cjs.Graphics().p("ATcFzIAApMICPAAIAAJMg");
	var mask_8_graphics_44 = new cjs.Graphics().p("ATcG4IAArVICPAAIAALVg");
	var mask_8_graphics_45 = new cjs.Graphics().p("ATcIGIAAtvICPAAIAANvg");
	var mask_8_graphics_46 = new cjs.Graphics().p("ATcJeIAAwdICPAAIAAQdg");
	var mask_8_graphics_47 = new cjs.Graphics().p("ATcK/IAAzcICPAAIAATcg");
	var mask_8_graphics_48 = new cjs.Graphics().p("ATcMpIAA2uICPAAIAAWug");
	var mask_8_graphics_49 = new cjs.Graphics().p("ATcOcIAA6RICPAAIAAaRg");
	var mask_8_graphics_50 = new cjs.Graphics().p("ATcQYIAA+GICPAAIAAeGg");
	var mask_8_graphics_51 = new cjs.Graphics().p("ATcSeMAAAgiPICPAAMAAAAiPg");
	var mask_8_graphics_52 = new cjs.Graphics().p("ATcUtMAAAgmpICPAAMAAAAmpg");
	var mask_8_graphics_53 = new cjs.Graphics().p("ATcXFMAAAgrWICPAAMAAAArWg");
	var mask_8_graphics_54 = new cjs.Graphics().p("ATcZmMAAAgwUICPAAMAAAAwUg");
	var mask_8_graphics_55 = new cjs.Graphics().p("ATccRMAAAg1lICPAAMAAAA1lg");
	var mask_8_graphics_56 = new cjs.Graphics().p("ATcfFMAAAg7JICPAAMAAAA7Jg");
	var mask_8_graphics_57 = new cjs.Graphics().p("EATcAiCMAAAhA+ICPAAMAAABA+g");
	var mask_8_graphics_58 = new cjs.Graphics().p("EATcAlIMAAAhHFICPAAMAAABHFg");
	var mask_8_graphics_59 = new cjs.Graphics().p("EATcAnsMAAAhNfICPAAMAAABNfg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_8_graphics_36,x:138.75,y:14.5}).wait(1).to({graphics:mask_8_graphics_37,x:138.75,y:14.9609}).wait(1).to({graphics:mask_8_graphics_38,x:138.75,y:16.3438}).wait(1).to({graphics:mask_8_graphics_39,x:138.75,y:18.6485}).wait(1).to({graphics:mask_8_graphics_40,x:138.75,y:21.8751}).wait(1).to({graphics:mask_8_graphics_41,x:138.75,y:26.0237}).wait(1).to({graphics:mask_8_graphics_42,x:138.75,y:31.0941}).wait(1).to({graphics:mask_8_graphics_43,x:138.75,y:37.0864}).wait(1).to({graphics:mask_8_graphics_44,x:138.75,y:44.0006}).wait(1).to({graphics:mask_8_graphics_45,x:138.75,y:51.8366}).wait(1).to({graphics:mask_8_graphics_46,x:138.75,y:60.5946}).wait(1).to({graphics:mask_8_graphics_47,x:138.75,y:70.2745}).wait(1).to({graphics:mask_8_graphics_48,x:138.75,y:80.8763}).wait(1).to({graphics:mask_8_graphics_49,x:138.75,y:92.3999}).wait(1).to({graphics:mask_8_graphics_50,x:138.75,y:104.8455}).wait(1).to({graphics:mask_8_graphics_51,x:138.75,y:118.2129}).wait(1).to({graphics:mask_8_graphics_52,x:138.75,y:132.5022}).wait(1).to({graphics:mask_8_graphics_53,x:138.75,y:147.7135}).wait(1).to({graphics:mask_8_graphics_54,x:138.75,y:163.8466}).wait(1).to({graphics:mask_8_graphics_55,x:138.75,y:180.9016}).wait(1).to({graphics:mask_8_graphics_56,x:138.75,y:198.8785}).wait(1).to({graphics:mask_8_graphics_57,x:138.75,y:217.7773}).wait(1).to({graphics:mask_8_graphics_58,x:138.75,y:237.598}).wait(1).to({graphics:mask_8_graphics_59,x:138.75,y:254.0048}).wait(271));

	// Layer_7
	this.instance_12 = new lib.frame1_lines();
	this.instance_12.setTransform(0,0,0.5,0.5);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(36).to({_off:false},0).to({_off:true},129).wait(165));

	// Layer_6 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_14 = new cjs.Graphics().p("AQFC5IAAiPICPAAIAACPg");
	var mask_9_graphics_15 = new cjs.Graphics().p("AQFC5IAAiPICQAAIAACPg");
	var mask_9_graphics_16 = new cjs.Graphics().p("AQEC5IAAiPICSAAIAACPg");
	var mask_9_graphics_17 = new cjs.Graphics().p("AQCC5IAAiPICWAAIAACPg");
	var mask_9_graphics_18 = new cjs.Graphics().p("AP/C5IAAiPICbAAIAACPg");
	var mask_9_graphics_19 = new cjs.Graphics().p("AP8C5IAAiPICiAAIAACPg");
	var mask_9_graphics_20 = new cjs.Graphics().p("AP4C5IAAiPICqAAIAACPg");
	var mask_9_graphics_21 = new cjs.Graphics().p("APzC5IAAiPIC0AAIAACPg");
	var mask_9_graphics_22 = new cjs.Graphics().p("APuC5IAAiPIC+AAIAACPg");
	var mask_9_graphics_23 = new cjs.Graphics().p("APoC5IAAiPIDKAAIAACPg");
	var mask_9_graphics_24 = new cjs.Graphics().p("APhC5IAAiPIDZAAIAACPg");
	var mask_9_graphics_25 = new cjs.Graphics().p("APZC5IAAiPIDoAAIAACPg");
	var mask_9_graphics_26 = new cjs.Graphics().p("APRC5IAAiPID5AAIAACPg");
	var mask_9_graphics_27 = new cjs.Graphics().p("APIC5IAAiPIELAAIAACPg");
	var mask_9_graphics_28 = new cjs.Graphics().p("AO+C5IAAiPIEfAAIAACPg");
	var mask_9_graphics_29 = new cjs.Graphics().p("AOzC5IAAiPIE1AAIAACPg");
	var mask_9_graphics_30 = new cjs.Graphics().p("AOoC5IAAiPIFMAAIAACPg");
	var mask_9_graphics_31 = new cjs.Graphics().p("AOcC5IAAiPIFkAAIAACPg");
	var mask_9_graphics_32 = new cjs.Graphics().p("AOPC5IAAiPIF+AAIAACPg");
	var mask_9_graphics_33 = new cjs.Graphics().p("AOCC5IAAiPIGZAAIAACPg");
	var mask_9_graphics_34 = new cjs.Graphics().p("ANzC5IAAiPIG2AAIAACPg");
	var mask_9_graphics_35 = new cjs.Graphics().p("ANkC5IAAiPIHVAAIAACPg");
	var mask_9_graphics_36 = new cjs.Graphics().p("ANQC5IAAiPIHzAAIAACPg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_9_graphics_14,x:117.225,y:18.55}).wait(1).to({graphics:mask_9_graphics_15,x:117.2623,y:18.55}).wait(1).to({graphics:mask_9_graphics_16,x:117.3741,y:18.55}).wait(1).to({graphics:mask_9_graphics_17,x:117.5606,y:18.55}).wait(1).to({graphics:mask_9_graphics_18,x:117.8216,y:18.55}).wait(1).to({graphics:mask_9_graphics_19,x:118.1572,y:18.55}).wait(1).to({graphics:mask_9_graphics_20,x:118.5673,y:18.55}).wait(1).to({graphics:mask_9_graphics_21,x:119.052,y:18.55}).wait(1).to({graphics:mask_9_graphics_22,x:119.6113,y:18.55}).wait(1).to({graphics:mask_9_graphics_23,x:120.2452,y:18.55}).wait(1).to({graphics:mask_9_graphics_24,x:120.9536,y:18.55}).wait(1).to({graphics:mask_9_graphics_25,x:121.7366,y:18.55}).wait(1).to({graphics:mask_9_graphics_26,x:122.5942,y:18.55}).wait(1).to({graphics:mask_9_graphics_27,x:123.5264,y:18.55}).wait(1).to({graphics:mask_9_graphics_28,x:124.5331,y:18.55}).wait(1).to({graphics:mask_9_graphics_29,x:125.6144,y:18.55}).wait(1).to({graphics:mask_9_graphics_30,x:126.7702,y:18.55}).wait(1).to({graphics:mask_9_graphics_31,x:128.0007,y:18.55}).wait(1).to({graphics:mask_9_graphics_32,x:129.3057,y:18.55}).wait(1).to({graphics:mask_9_graphics_33,x:130.6853,y:18.55}).wait(1).to({graphics:mask_9_graphics_34,x:132.1394,y:18.55}).wait(1).to({graphics:mask_9_graphics_35,x:133.6682,y:18.55}).wait(1).to({graphics:mask_9_graphics_36,x:134.7471,y:18.55}).wait(294));

	// Layer_5
	this.instance_13 = new lib.frame1_lines();
	this.instance_13.setTransform(0,0,0.5,0.5);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},0).to({_off:true},151).wait(165));

	// Layer_4 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_14 = new cjs.Graphics().p("AAjIrIAAiPICPAAIAACPg");
	var mask_10_graphics_15 = new cjs.Graphics().p("AAjIvIAAiXICPAAIAACXg");
	var mask_10_graphics_16 = new cjs.Graphics().p("AAjI8IAAiwICPAAIAACwg");
	var mask_10_graphics_17 = new cjs.Graphics().p("AAjJRIAAjaICPAAIAADag");
	var mask_10_graphics_18 = new cjs.Graphics().p("AAjJuIAAkTICPAAIAAETg");
	var mask_10_graphics_19 = new cjs.Graphics().p("AAjKUIAAleICPAAIAAFeg");
	var mask_10_graphics_20 = new cjs.Graphics().p("AAjLCIAAm5ICPAAIAAG5g");
	var mask_10_graphics_21 = new cjs.Graphics().p("AAjL5IAAolICPAAIAAIlg");
	var mask_10_graphics_22 = new cjs.Graphics().p("AAjM4IAAqhICPAAIAAKhg");
	var mask_10_graphics_23 = new cjs.Graphics().p("AAjN/IAAstICPAAIAAMtg");
	var mask_10_graphics_24 = new cjs.Graphics().p("AAjPPIAAvLICPAAIAAPLg");
	var mask_10_graphics_25 = new cjs.Graphics().p("AAjQnIAAx4ICPAAIAAR4g");
	var mask_10_graphics_26 = new cjs.Graphics().p("AAjSIIAA03ICPAAIAAU3g");
	var mask_10_graphics_27 = new cjs.Graphics().p("AAjTxIAA4GICPAAIAAYGg");
	var mask_10_graphics_28 = new cjs.Graphics().p("AAjViIAA7lICPAAIAAblg");
	var mask_10_graphics_29 = new cjs.Graphics().p("AAjXcIAA/VICPAAIAAfVg");
	var mask_10_graphics_30 = new cjs.Graphics().p("AAjZeMAAAgjWICPAAMAAAAjWg");
	var mask_10_graphics_31 = new cjs.Graphics().p("AAjbpMAAAgnnICPAAMAAAAnng");
	var mask_10_graphics_32 = new cjs.Graphics().p("AAjd8MAAAgsJICPAAMAAAAsJg");
	var mask_10_graphics_33 = new cjs.Graphics().p("EAAjAgXMAAAgw7ICPAAMAAAAw7g");
	var mask_10_graphics_34 = new cjs.Graphics().p("EAAjAi7MAAAg1+ICPAAMAAAA1+g");
	var mask_10_graphics_35 = new cjs.Graphics().p("EAAjAlnMAAAg7RICPAAMAAAA7Rg");
	var mask_10_graphics_36 = new cjs.Graphics().p("EAAjAnwMAAAhA1ICPAAMAAABA1g");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_10_graphics_14,x:17.825,y:55.5}).wait(1).to({graphics:mask_10_graphics_15,x:17.825,y:55.9199}).wait(1).to({graphics:mask_10_graphics_16,x:17.825,y:57.1797}).wait(1).to({graphics:mask_10_graphics_17,x:17.825,y:59.2792}).wait(1).to({graphics:mask_10_graphics_18,x:17.825,y:62.2186}).wait(1).to({graphics:mask_10_graphics_19,x:17.825,y:65.9979}).wait(1).to({graphics:mask_10_graphics_20,x:17.825,y:70.6169}).wait(1).to({graphics:mask_10_graphics_21,x:17.825,y:76.0758}).wait(1).to({graphics:mask_10_graphics_22,x:17.825,y:82.3745}).wait(1).to({graphics:mask_10_graphics_23,x:17.825,y:89.5131}).wait(1).to({graphics:mask_10_graphics_24,x:17.825,y:97.4914}).wait(1).to({graphics:mask_10_graphics_25,x:17.825,y:106.3096}).wait(1).to({graphics:mask_10_graphics_26,x:17.825,y:115.9677}).wait(1).to({graphics:mask_10_graphics_27,x:17.825,y:126.4655}).wait(1).to({graphics:mask_10_graphics_28,x:17.825,y:137.8032}).wait(1).to({graphics:mask_10_graphics_29,x:17.825,y:149.9807}).wait(1).to({graphics:mask_10_graphics_30,x:17.825,y:162.9981}).wait(1).to({graphics:mask_10_graphics_31,x:17.825,y:176.8552}).wait(1).to({graphics:mask_10_graphics_32,x:17.825,y:191.5522}).wait(1).to({graphics:mask_10_graphics_33,x:17.825,y:207.0891}).wait(1).to({graphics:mask_10_graphics_34,x:17.825,y:223.4657}).wait(1).to({graphics:mask_10_graphics_35,x:17.825,y:240.6822}).wait(1).to({graphics:mask_10_graphics_36,x:17.825,y:254.3852}).wait(294));

	// line
	this.instance_14 = new lib.frame1_lines();
	this.instance_14.setTransform(0,0,0.5,0.5);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(14).to({_off:false},0).to({_off:true},151).wait(165));

	// bg
	this.instance_15 = new lib.frame1_image();

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},165).wait(165));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-99,300,917.5);


// stage content:
(lib._300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		root = this;
		stage.enableMouseOver();
		
		this.bannerClick.addEventListener("click", clickFunction);
		function clickFunction(e){
			if (e.nativeEvent.button == 0) {
				window.open(clickTag, "_blank");
			}
		}
		
		this.cta_hotspot.addEventListener("click", ctaClickFunction);
		function ctaClickFunction(e){
			if (e.nativeEvent.button == 0) {
				window.open(clickTag1, "_blank");
			}
		}
			
		this.cta_hotspot.addEventListener("mouseover", hoverFunction);
		function hoverFunction(){
			root.cta.gotoAndPlay("over");
			}
			
		this.cta_hotspot.addEventListener("mouseout", outFunction);
		function outFunction(){
			root.cta.gotoAndPlay("out");
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ctaClick
	this.cta_hotspot = new lib.Symbol15();
	this.cta_hotspot.name = "cta_hotspot";
	this.cta_hotspot.setTransform(241.55,571.05,1,1.2497,0,0,0,44,12.5);
	new cjs.ButtonHelper(this.cta_hotspot, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta_hotspot).wait(1));

	// bannerClick
	this.bannerClick = new lib.Symbol14();
	this.bannerClick.name = "bannerClick";
	this.bannerClick.setTransform(0,426665.05,1.3889,3.7037,0,0,0,0,115200);
	new cjs.ButtonHelper(this.bannerClick, 0, 1, 2, false, new lib.Symbol14(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bannerClick).wait(1));

	// cta
	this.cta = new lib.Symbol10();
	this.cta.name = "cta";
	this.cta.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// static_idn
	this.instance = new lib._static();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// anim
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(150,271,1,1,0,0,0,150,271);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,150,300);
// library properties:
lib.properties = {
	id: 'B9F19712331F41498D3B648A67EE170E',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"cta_off.png?1615980463391", id:"cta_off"},
		{src:"cta_on.png?1615980463391", id:"cta_on"},
		{src:"frame1_copy.png?1615980463391", id:"frame1_copy"},
		{src:"frame1_image.jpg?1615980463391", id:"frame1_image"},
		{src:"frame1_lines.png?1615980463391", id:"frame1_lines"},
		{src:"frame2_copy.png?1615980463391", id:"frame2_copy"},
		{src:"frame2_image.jpg?1615980463391", id:"frame2_image"},
		{src:"frame2_lines.png?1615980463391", id:"frame2_lines"},
		{src:"frame3_blue_bar.png?1615980463391", id:"frame3_blue_bar"},
		{src:"frame3_copy.png?1615980463391", id:"frame3_copy"},
		{src:"frame3_image.png?1615980463391", id:"frame3_image"},
		{src:"frame3_lines.png?1615980463391", id:"frame3_lines"},
		{src:"_static.png?1615980463391", id:"_static"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B9F19712331F41498D3B648A67EE170E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;