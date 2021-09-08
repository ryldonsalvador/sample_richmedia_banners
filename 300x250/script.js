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



(lib.bluegradient = function() {
	this.initialize(img.bluegradient);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,250);


(lib.cta_off = function() {
	this.initialize(img.cta_off);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.cta_on = function() {
	this.initialize(img.cta_on);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.endframe = function() {
	this.initialize(img.endframe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.frame1_image = function() {
	this.initialize(img.frame1_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.frame1_lines = function() {
	this.initialize(img.frame1_lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.frame1_text = function() {
	this.initialize(img.frame1_text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.frame2_image = function() {
	this.initialize(img.frame2_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.frame2_lines = function() {
	this.initialize(img.frame2_lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.frame2_text = function() {
	this.initialize(img.frame2_text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.frame3_lines = function() {
	this.initialize(img.frame3_lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.frame3_text = function() {
	this.initialize(img.frame3_text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib._static = function() {
	this.initialize(img._static);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);// helper functions:

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


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bluegradient();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,400,250), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.frame3_text();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,300,250), null);


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
	this.instance = new lib.frame1_text();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,300,250), null);


(lib.cta = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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

	// Layer_24_copy_copy_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_309 = new cjs.Graphics().p("AT1CLIAAh0IBzAAIAAB0g");
	var mask_graphics_310 = new cjs.Graphics().p("AT1CMIAAh2IBzAAIAAB2g");
	var mask_graphics_311 = new cjs.Graphics().p("AT1CSIAAiCIBzAAIAACCg");
	var mask_graphics_312 = new cjs.Graphics().p("AT1CcIAAiVIBzAAIAACVg");
	var mask_graphics_313 = new cjs.Graphics().p("AT1CpIAAiuIBzAAIAACug");
	var mask_graphics_314 = new cjs.Graphics().p("AT1C6IAAjQIBzAAIAADQg");
	var mask_graphics_315 = new cjs.Graphics().p("AT1DPIAAj6IBzAAIAAD6g");
	var mask_graphics_316 = new cjs.Graphics().p("AT1DnIAAkqIBzAAIAAEqg");
	var mask_graphics_317 = new cjs.Graphics().p("AT1EEIAAljIBzAAIAAFjg");
	var mask_graphics_318 = new cjs.Graphics().p("AT1EkIAAmjIBzAAIAAGjg");
	var mask_graphics_319 = new cjs.Graphics().p("AT1FIIAAnqIBzAAIAAHqg");
	var mask_graphics_320 = new cjs.Graphics().p("AT1FwIAAo5IBzAAIAAI5g");
	var mask_graphics_321 = new cjs.Graphics().p("AT1GcIAAqQIBzAAIAAKQg");
	var mask_graphics_322 = new cjs.Graphics().p("AT1HLIAAruIBzAAIAALug");
	var mask_graphics_323 = new cjs.Graphics().p("AT1H+IAAtTIBzAAIAANTg");
	var mask_graphics_324 = new cjs.Graphics().p("AT1I1IAAvAIBzAAIAAPAg");
	var mask_graphics_325 = new cjs.Graphics().p("AT1JwIAAw1IBzAAIAAQ1g");
	var mask_graphics_326 = new cjs.Graphics().p("AT1KvIAAyyIBzAAIAASyg");
	var mask_graphics_327 = new cjs.Graphics().p("AT1LxIAA01IBzAAIAAU1g");
	var mask_graphics_328 = new cjs.Graphics().p("AT1M3IAA3AIBzAAIAAXAg");
	var mask_graphics_329 = new cjs.Graphics().p("AT1NzIAA5TIBzAAIAAZTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(309).to({graphics:mask_graphics_309,x:138.4,y:13.85}).wait(1).to({graphics:mask_graphics_310,x:138.4,y:14.0397}).wait(1).to({graphics:mask_graphics_311,x:138.4,y:14.6087}).wait(1).to({graphics:mask_graphics_312,x:138.4,y:15.5572}).wait(1).to({graphics:mask_graphics_313,x:138.4,y:16.8849}).wait(1).to({graphics:mask_graphics_314,x:138.4,y:18.5921}).wait(1).to({graphics:mask_graphics_315,x:138.4,y:20.6786}).wait(1).to({graphics:mask_graphics_316,x:138.4,y:23.1445}).wait(1).to({graphics:mask_graphics_317,x:138.4,y:25.9898}).wait(1).to({graphics:mask_graphics_318,x:138.4,y:29.2144}).wait(1).to({graphics:mask_graphics_319,x:138.4,y:32.8184}).wait(1).to({graphics:mask_graphics_320,x:138.4,y:36.8018}).wait(1).to({graphics:mask_graphics_321,x:138.4,y:41.1645}).wait(1).to({graphics:mask_graphics_322,x:138.4,y:45.9066}).wait(1).to({graphics:mask_graphics_323,x:138.4,y:51.0281}).wait(1).to({graphics:mask_graphics_324,x:138.4,y:56.5289}).wait(1).to({graphics:mask_graphics_325,x:138.4,y:62.4091}).wait(1).to({graphics:mask_graphics_326,x:138.4,y:68.6687}).wait(1).to({graphics:mask_graphics_327,x:138.4,y:75.3076}).wait(1).to({graphics:mask_graphics_328,x:138.4,y:82.3259}).wait(1).to({graphics:mask_graphics_329,x:138.4,y:88.3151}).wait(1));

	// Layer_23_copy_copy_copy
	this.instance = new lib.frame3_lines();
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(309).to({_off:false},0).wait(21));

	// Layer_24_copy_copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_309 = new cjs.Graphics().p("AAfN7IAAhzIBzAAIAABzg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AAcN7IAAhzIB5AAIAABzg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AATN7IAAhzICMAAIAABzg");
	var mask_1_graphics_312 = new cjs.Graphics().p("AAEN7IAAhzICqAAIAABzg");
	var mask_1_graphics_313 = new cjs.Graphics().p("AgRN7IAAhzIDVAAIAABzg");
	var mask_1_graphics_314 = new cjs.Graphics().p("AgsN7IAAhzIELAAIAABzg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AhON7IAAhzIFPAAIAABzg");
	var mask_1_graphics_316 = new cjs.Graphics().p("Ah1N7IAAhzIGeAAIAABzg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AijN7IAAhzIH7AAIAABzg");
	var mask_1_graphics_318 = new cjs.Graphics().p("AjXN7IAAhzIJjAAIAABzg");
	var mask_1_graphics_319 = new cjs.Graphics().p("AkRN7IAAhzILYAAIAABzg");
	var mask_1_graphics_320 = new cjs.Graphics().p("AlRN7IAAhzINZAAIAABzg");
	var mask_1_graphics_321 = new cjs.Graphics().p("AmXN7IAAhzIPmAAIAABzg");
	var mask_1_graphics_322 = new cjs.Graphics().p("AnkN7IAAhzISAAAIAABzg");
	var mask_1_graphics_323 = new cjs.Graphics().p("Ao2N7IAAhzIUlAAIAABzg");
	var mask_1_graphics_324 = new cjs.Graphics().p("AqPN7IAAhzIXYAAIAABzg");
	var mask_1_graphics_325 = new cjs.Graphics().p("ArtN7IAAhzIaVAAIAABzg");
	var mask_1_graphics_326 = new cjs.Graphics().p("AtSN7IAAhzIdgAAIAABzg");
	var mask_1_graphics_327 = new cjs.Graphics().p("Au9N7IAAhzMAg3AAAIAABzg");
	var mask_1_graphics_328 = new cjs.Graphics().p("AwuN7IAAhzMAkaAAAIAABzg");
	var mask_1_graphics_329 = new cjs.Graphics().p("AywN7IAAhzMAoJAAAIAABzg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(309).to({graphics:mask_1_graphics_309,x:14.625,y:89.125}).wait(1).to({graphics:mask_1_graphics_310,x:14.9336,y:89.125}).wait(1).to({graphics:mask_1_graphics_311,x:15.8594,y:89.125}).wait(1).to({graphics:mask_1_graphics_312,x:17.4023,y:89.125}).wait(1).to({graphics:mask_1_graphics_313,x:19.5625,y:89.125}).wait(1).to({graphics:mask_1_graphics_314,x:22.3398,y:89.125}).wait(1).to({graphics:mask_1_graphics_315,x:25.7343,y:89.125}).wait(1).to({graphics:mask_1_graphics_316,x:29.746,y:89.125}).wait(1).to({graphics:mask_1_graphics_317,x:34.3749,y:89.125}).wait(1).to({graphics:mask_1_graphics_318,x:39.621,y:89.125}).wait(1).to({graphics:mask_1_graphics_319,x:45.4843,y:89.125}).wait(1).to({graphics:mask_1_graphics_320,x:51.9647,y:89.125}).wait(1).to({graphics:mask_1_graphics_321,x:59.0624,y:89.125}).wait(1).to({graphics:mask_1_graphics_322,x:66.7772,y:89.125}).wait(1).to({graphics:mask_1_graphics_323,x:75.1092,y:89.125}).wait(1).to({graphics:mask_1_graphics_324,x:84.0584,y:89.125}).wait(1).to({graphics:mask_1_graphics_325,x:93.6248,y:89.125}).wait(1).to({graphics:mask_1_graphics_326,x:103.8083,y:89.125}).wait(1).to({graphics:mask_1_graphics_327,x:114.6091,y:89.125}).wait(1).to({graphics:mask_1_graphics_328,x:126.027,y:89.125}).wait(1).to({graphics:mask_1_graphics_329,x:136.9446,y:89.125}).wait(1));

	// Layer_23_copy_copy
	this.instance_1 = new lib.frame3_lines();
	this.instance_1.setTransform(0,0,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(309).to({_off:false},0).wait(21));

	// Layer_24_copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_289 = new cjs.Graphics().p("AKEC4IAAh0IBzAAIAAB0g");
	var mask_2_graphics_290 = new cjs.Graphics().p("AKDC4IAAh0IB1AAIAAB0g");
	var mask_2_graphics_291 = new cjs.Graphics().p("AJ+C4IAAh0IB/AAIAAB0g");
	var mask_2_graphics_292 = new cjs.Graphics().p("AJ3C4IAAh0ICNAAIAAB0g");
	var mask_2_graphics_293 = new cjs.Graphics().p("AJtC4IAAh0ICiAAIAAB0g");
	var mask_2_graphics_294 = new cjs.Graphics().p("AJgC4IAAh0IC8AAIAAB0g");
	var mask_2_graphics_295 = new cjs.Graphics().p("AJQC4IAAh0IDcAAIAAB0g");
	var mask_2_graphics_296 = new cjs.Graphics().p("AI9C4IAAh0IECAAIAAB0g");
	var mask_2_graphics_297 = new cjs.Graphics().p("AIoC4IAAh0IEtAAIAAB0g");
	var mask_2_graphics_298 = new cjs.Graphics().p("AIPC4IAAh0IFfAAIAAB0g");
	var mask_2_graphics_299 = new cjs.Graphics().p("AH0C4IAAh0IGWAAIAAB0g");
	var mask_2_graphics_300 = new cjs.Graphics().p("AHVC4IAAh0IHUAAIAAB0g");
	var mask_2_graphics_301 = new cjs.Graphics().p("AG0C4IAAh0IIXAAIAAB0g");
	var mask_2_graphics_302 = new cjs.Graphics().p("AGQC4IAAh0IJfAAIAAB0g");
	var mask_2_graphics_303 = new cjs.Graphics().p("AFpC4IAAh0IKuAAIAAB0g");
	var mask_2_graphics_304 = new cjs.Graphics().p("AE/C4IAAh0IMDAAIAAB0g");
	var mask_2_graphics_305 = new cjs.Graphics().p("AETC4IAAh0INcAAIAAB0g");
	var mask_2_graphics_306 = new cjs.Graphics().p("ADjC4IAAh0IO9AAIAAB0g");
	var mask_2_graphics_307 = new cjs.Graphics().p("ACxC4IAAh0IQiAAIAAB0g");
	var mask_2_graphics_308 = new cjs.Graphics().p("AB7C4IAAh0ISPAAIAAB0g");
	var mask_2_graphics_309 = new cjs.Graphics().p("AA7C4IAAh0IT/AAIAAB0g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(289).to({graphics:mask_2_graphics_289,x:75.9,y:18.35}).wait(1).to({graphics:mask_2_graphics_290,x:76.047,y:18.35}).wait(1).to({graphics:mask_2_graphics_291,x:76.4878,y:18.35}).wait(1).to({graphics:mask_2_graphics_292,x:77.2226,y:18.35}).wait(1).to({graphics:mask_2_graphics_293,x:78.2513,y:18.35}).wait(1).to({graphics:mask_2_graphics_294,x:79.574,y:18.35}).wait(1).to({graphics:mask_2_graphics_295,x:81.1905,y:18.35}).wait(1).to({graphics:mask_2_graphics_296,x:83.101,y:18.35}).wait(1).to({graphics:mask_2_graphics_297,x:85.3054,y:18.35}).wait(1).to({graphics:mask_2_graphics_298,x:87.8037,y:18.35}).wait(1).to({graphics:mask_2_graphics_299,x:90.5959,y:18.35}).wait(1).to({graphics:mask_2_graphics_300,x:93.6821,y:18.35}).wait(1).to({graphics:mask_2_graphics_301,x:97.0621,y:18.35}).wait(1).to({graphics:mask_2_graphics_302,x:100.7361,y:18.35}).wait(1).to({graphics:mask_2_graphics_303,x:104.704,y:18.35}).wait(1).to({graphics:mask_2_graphics_304,x:108.9658,y:18.35}).wait(1).to({graphics:mask_2_graphics_305,x:113.5216,y:18.35}).wait(1).to({graphics:mask_2_graphics_306,x:118.3712,y:18.35}).wait(1).to({graphics:mask_2_graphics_307,x:123.5148,y:18.35}).wait(1).to({graphics:mask_2_graphics_308,x:128.9523,y:18.35}).wait(1).to({graphics:mask_2_graphics_309,x:133.8489,y:18.35}).wait(21));

	// Layer_23_copy
	this.instance_2 = new lib.frame3_lines();
	this.instance_2.setTransform(0,0,0.5,0.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(289).to({_off:false},0).wait(41));

	// Layer_24 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_289 = new cjs.Graphics().p("ABFJmIAAhzIBzAAIAABzg");
	var mask_3_graphics_290 = new cjs.Graphics().p("ABFJmIAAh0IBzAAIAAB0g");
	var mask_3_graphics_291 = new cjs.Graphics().p("ABFJoIAAh4IBzAAIAAB4g");
	var mask_3_graphics_292 = new cjs.Graphics().p("ABFJrIAAh9IBzAAIAAB9g");
	var mask_3_graphics_293 = new cjs.Graphics().p("ABFJvIAAiFIBzAAIAACFg");
	var mask_3_graphics_294 = new cjs.Graphics().p("ABFJ0IAAiQIBzAAIAACQg");
	var mask_3_graphics_295 = new cjs.Graphics().p("ABFJ7IAAidIBzAAIAACdg");
	var mask_3_graphics_296 = new cjs.Graphics().p("ABFKDIAAisIBzAAIAACsg");
	var mask_3_graphics_297 = new cjs.Graphics().p("ABFKLIAAi9IBzAAIAAC9g");
	var mask_3_graphics_298 = new cjs.Graphics().p("ABFKVIAAjRIBzAAIAADRg");
	var mask_3_graphics_299 = new cjs.Graphics().p("ABFKhIAAjoIBzAAIAADog");
	var mask_3_graphics_300 = new cjs.Graphics().p("ABFKtIAAkAIBzAAIAAEAg");
	var mask_3_graphics_301 = new cjs.Graphics().p("ABFK6IAAkaIBzAAIAAEag");
	var mask_3_graphics_302 = new cjs.Graphics().p("ABFLJIAAk3IBzAAIAAE3g");
	var mask_3_graphics_303 = new cjs.Graphics().p("ABFLZIAAlXIBzAAIAAFXg");
	var mask_3_graphics_304 = new cjs.Graphics().p("ABFLqIAAl5IBzAAIAAF5g");
	var mask_3_graphics_305 = new cjs.Graphics().p("ABFL8IAAmcIBzAAIAAGcg");
	var mask_3_graphics_306 = new cjs.Graphics().p("ABFMQIAAnDIBzAAIAAHDg");
	var mask_3_graphics_307 = new cjs.Graphics().p("ABFMkIAAnrIBzAAIAAHrg");
	var mask_3_graphics_308 = new cjs.Graphics().p("ABFM6IAAoXIBzAAIAAIXg");
	var mask_3_graphics_309 = new cjs.Graphics().p("ABFNKIAApDIBzAAIAAJDg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(289).to({graphics:mask_3_graphics_289,x:18.375,y:61.375}).wait(1).to({graphics:mask_3_graphics_290,x:18.375,y:61.4338}).wait(1).to({graphics:mask_3_graphics_291,x:18.375,y:61.61}).wait(1).to({graphics:mask_3_graphics_292,x:18.375,y:61.9038}).wait(1).to({graphics:mask_3_graphics_293,x:18.375,y:62.3151}).wait(1).to({graphics:mask_3_graphics_294,x:18.375,y:62.8439}).wait(1).to({graphics:mask_3_graphics_295,x:18.375,y:63.4903}).wait(1).to({graphics:mask_3_graphics_296,x:18.375,y:64.2541}).wait(1).to({graphics:mask_3_graphics_297,x:18.375,y:65.1355}).wait(1).to({graphics:mask_3_graphics_298,x:18.375,y:66.1344}).wait(1).to({graphics:mask_3_graphics_299,x:18.375,y:67.2508}).wait(1).to({graphics:mask_3_graphics_300,x:18.375,y:68.4847}).wait(1).to({graphics:mask_3_graphics_301,x:18.375,y:69.8361}).wait(1).to({graphics:mask_3_graphics_302,x:18.375,y:71.305}).wait(1).to({graphics:mask_3_graphics_303,x:18.375,y:72.8915}).wait(1).to({graphics:mask_3_graphics_304,x:18.375,y:74.5955}).wait(1).to({graphics:mask_3_graphics_305,x:18.375,y:76.417}).wait(1).to({graphics:mask_3_graphics_306,x:18.375,y:78.356}).wait(1).to({graphics:mask_3_graphics_307,x:18.375,y:80.4125}).wait(1).to({graphics:mask_3_graphics_308,x:18.375,y:82.5865}).wait(1).to({graphics:mask_3_graphics_309,x:18.375,y:84.2477}).wait(21));

	// Layer_23
	this.instance_3 = new lib.frame3_lines();
	this.instance_3.setTransform(0,0,0.5,0.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(289).to({_off:false},0).wait(41));

	// copy
	this.instance_4 = new lib.Symbol6();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(274).to({_off:false},0).to({alpha:1},15,cjs.Ease.quadIn).wait(41));

	// Layer_17 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_224 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_225 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_226 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_227 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_228 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_229 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_230 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_231 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_232 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_233 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_234 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_235 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_236 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_237 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_238 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_239 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_240 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_241 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_242 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_243 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_244 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_245 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_246 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_247 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_248 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_249 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_250 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_251 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_252 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_253 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_254 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_255 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_256 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_257 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_258 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_259 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_260 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_261 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_262 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_263 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_264 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_265 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_266 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_267 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_268 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");
	var mask_4_graphics_269 = new cjs.Graphics().p("A2PX6IAAltIgFASIt4AWMANUgqZINGgVIgQA4MAuPAAAMAAAAu7g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(224).to({graphics:mask_4_graphics_224,x:529.4749,y:147.4249}).wait(1).to({graphics:mask_4_graphics_225,x:521.4757,y:147.4249}).wait(1).to({graphics:mask_4_graphics_226,x:513.6565,y:147.4249}).wait(1).to({graphics:mask_4_graphics_227,x:506.0173,y:147.4249}).wait(1).to({graphics:mask_4_graphics_228,x:498.5573,y:147.4249}).wait(1).to({graphics:mask_4_graphics_229,x:491.2771,y:147.4249}).wait(1).to({graphics:mask_4_graphics_230,x:484.177,y:147.4249}).wait(1).to({graphics:mask_4_graphics_231,x:477.2569,y:147.4249}).wait(1).to({graphics:mask_4_graphics_232,x:470.5159,y:147.4249}).wait(1).to({graphics:mask_4_graphics_233,x:463.9549,y:147.4249}).wait(1).to({graphics:mask_4_graphics_234,x:457.5739,y:147.4249}).wait(1).to({graphics:mask_4_graphics_235,x:451.372,y:147.4249}).wait(1).to({graphics:mask_4_graphics_236,x:445.3506,y:147.4249}).wait(1).to({graphics:mask_4_graphics_237,x:439.5087,y:147.4249}).wait(1).to({graphics:mask_4_graphics_238,x:433.8463,y:147.4249}).wait(1).to({graphics:mask_4_graphics_239,x:428.364,y:147.4249}).wait(1).to({graphics:mask_4_graphics_240,x:423.0612,y:147.4249}).wait(1).to({graphics:mask_4_graphics_241,x:417.9379,y:147.4249}).wait(1).to({graphics:mask_4_graphics_242,x:412.9951,y:147.4249}).wait(1).to({graphics:mask_4_graphics_243,x:408.2315,y:147.4249}).wait(1).to({graphics:mask_4_graphics_244,x:403.6477,y:147.4249}).wait(1).to({graphics:mask_4_graphics_245,x:399.244,y:147.4249}).wait(1).to({graphics:mask_4_graphics_246,x:395.0194,y:147.4249}).wait(1).to({graphics:mask_4_graphics_247,x:390.9753,y:147.4249}).wait(1).to({graphics:mask_4_graphics_248,x:387.1107,y:147.4249}).wait(1).to({graphics:mask_4_graphics_249,x:383.4256,y:147.4249}).wait(1).to({graphics:mask_4_graphics_250,x:379.9201,y:147.4249}).wait(1).to({graphics:mask_4_graphics_251,x:376.5951,y:147.4249}).wait(1).to({graphics:mask_4_graphics_252,x:373.4491,y:147.4249}).wait(1).to({graphics:mask_4_graphics_253,x:370.4837,y:147.4249}).wait(1).to({graphics:mask_4_graphics_254,x:367.6972,y:147.4249}).wait(1).to({graphics:mask_4_graphics_255,x:365.0908,y:147.4249}).wait(1).to({graphics:mask_4_graphics_256,x:362.664,y:147.4249}).wait(1).to({graphics:mask_4_graphics_257,x:360.4171,y:147.4249}).wait(1).to({graphics:mask_4_graphics_258,x:358.3498,y:147.4249}).wait(1).to({graphics:mask_4_graphics_259,x:356.4625,y:147.4249}).wait(1).to({graphics:mask_4_graphics_260,x:354.7552,y:147.4249}).wait(1).to({graphics:mask_4_graphics_261,x:353.227,y:147.4249}).wait(1).to({graphics:mask_4_graphics_262,x:351.8789,y:147.4249}).wait(1).to({graphics:mask_4_graphics_263,x:350.7106,y:147.4249}).wait(1).to({graphics:mask_4_graphics_264,x:349.722,y:147.4249}).wait(1).to({graphics:mask_4_graphics_265,x:348.9129,y:147.4249}).wait(1).to({graphics:mask_4_graphics_266,x:348.2838,y:147.4249}).wait(1).to({graphics:mask_4_graphics_267,x:347.8342,y:147.4249}).wait(1).to({graphics:mask_4_graphics_268,x:347.5651,y:147.4249}).wait(1).to({graphics:mask_4_graphics_269,x:347.4751,y:147.4249}).wait(61));

	// Layer_3
	this.instance_5 = new lib.endframe();
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(224).to({_off:false},0).wait(106));

	// Layer_2
	this.instance_6 = new lib.Symbol9();
	this.instance_6.setTransform(500,125,1,1,0,0,0,200,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(224).to({_off:false},0).to({x:2},45,cjs.Ease.quadOut).wait(61));

	// Layer_13 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_119 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_120 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_121 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_122 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_123 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_124 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_125 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_126 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_127 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_128 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_129 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_130 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_131 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_132 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_133 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_134 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_135 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_136 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_137 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_138 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_139 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_140 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_141 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_142 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_143 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_144 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_145 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_146 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_147 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_148 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_149 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_150 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_151 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_152 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_153 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_154 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_155 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_156 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_157 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_158 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_159 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_160 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_161 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_162 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_163 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");
	var mask_5_graphics_164 = new cjs.Graphics().p("A3bVfMAABgq9MAu2AC0MgABAoJg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(119).to({graphics:mask_5_graphics_119,x:149.9998,y:361.8054}).wait(1).to({graphics:mask_5_graphics_120,x:149.9998,y:361.683}).wait(1).to({graphics:mask_5_graphics_121,x:149.9998,y:361.3153}).wait(1).to({graphics:mask_5_graphics_122,x:149.9998,y:360.7029}).wait(1).to({graphics:mask_5_graphics_123,x:149.9998,y:359.8456}).wait(1).to({graphics:mask_5_graphics_124,x:149.9998,y:358.7431}).wait(1).to({graphics:mask_5_graphics_125,x:149.9998,y:357.3954}).wait(1).to({graphics:mask_5_graphics_126,x:149.9998,y:355.8028}).wait(1).to({graphics:mask_5_graphics_127,x:149.9998,y:353.966}).wait(1).to({graphics:mask_5_graphics_128,x:149.9998,y:351.8833}).wait(1).to({graphics:mask_5_graphics_129,x:149.9998,y:349.5559}).wait(1).to({graphics:mask_5_graphics_130,x:149.9998,y:346.9833}).wait(1).to({graphics:mask_5_graphics_131,x:149.9998,y:344.1658}).wait(1).to({graphics:mask_5_graphics_132,x:149.9998,y:341.1031}).wait(1).to({graphics:mask_5_graphics_133,x:149.9998,y:337.7961}).wait(1).to({graphics:mask_5_graphics_134,x:149.9998,y:334.2438}).wait(1).to({graphics:mask_5_graphics_135,x:149.9998,y:330.4462}).wait(1).to({graphics:mask_5_graphics_136,x:149.9998,y:326.4039}).wait(1).to({graphics:mask_5_graphics_137,x:149.9998,y:322.1163}).wait(1).to({graphics:mask_5_graphics_138,x:149.9998,y:317.5839}).wait(1).to({graphics:mask_5_graphics_139,x:149.9998,y:312.8067}).wait(1).to({graphics:mask_5_graphics_140,x:149.9998,y:307.7842}).wait(1).to({graphics:mask_5_graphics_141,x:149.9998,y:302.517}).wait(1).to({graphics:mask_5_graphics_142,x:149.9998,y:297.0049}).wait(1).to({graphics:mask_5_graphics_143,x:149.9998,y:291.2476}).wait(1).to({graphics:mask_5_graphics_144,x:149.9998,y:285.2451}).wait(1).to({graphics:mask_5_graphics_145,x:149.9998,y:278.9977}).wait(1).to({graphics:mask_5_graphics_146,x:149.9998,y:272.5056}).wait(1).to({graphics:mask_5_graphics_147,x:149.9998,y:265.7682}).wait(1).to({graphics:mask_5_graphics_148,x:149.9998,y:258.786}).wait(1).to({graphics:mask_5_graphics_149,x:149.9998,y:251.5585}).wait(1).to({graphics:mask_5_graphics_150,x:149.9998,y:244.0858}).wait(1).to({graphics:mask_5_graphics_151,x:149.9998,y:236.3692}).wait(1).to({graphics:mask_5_graphics_152,x:149.9998,y:228.4065}).wait(1).to({graphics:mask_5_graphics_153,x:149.9998,y:220.1994}).wait(1).to({graphics:mask_5_graphics_154,x:149.9998,y:211.7475}).wait(1).to({graphics:mask_5_graphics_155,x:149.9998,y:203.0499}).wait(1).to({graphics:mask_5_graphics_156,x:149.9998,y:194.1079}).wait(1).to({graphics:mask_5_graphics_157,x:149.9998,y:184.9207}).wait(1).to({graphics:mask_5_graphics_158,x:149.9998,y:175.4883}).wait(1).to({graphics:mask_5_graphics_159,x:149.9998,y:165.8106}).wait(1).to({graphics:mask_5_graphics_160,x:149.9998,y:155.889}).wait(1).to({graphics:mask_5_graphics_161,x:149.9998,y:145.7217}).wait(1).to({graphics:mask_5_graphics_162,x:149.9998,y:135.3091}).wait(1).to({graphics:mask_5_graphics_163,x:149.9998,y:124.6522}).wait(1).to({graphics:mask_5_graphics_164,x:149.9998,y:114.5011}).wait(166));

	// lines
	this.instance_7 = new lib.frame2_lines();
	this.instance_7.setTransform(0,0,0.5,0.5);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(119).to({_off:false},0).to({_off:true},151).wait(60));

	// copy
	this.instance_8 = new lib.frame2_text();
	this.instance_8.setTransform(0,0,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(119).to({_off:false},0).to({_off:true},151).wait(60));

	// image
	this.instance_9 = new lib.frame2_image();
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(119).to({_off:false},0).to({_off:true},151).wait(60));

	// copy
	this.instance_10 = new lib.Symbol2();
	this.instance_10.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},14,cjs.Ease.quadIn).to({_off:true},166).wait(150));

	// Layer_4 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_14 = new cjs.Graphics().p("AA/ElIAAhzIBzAAIAABzg");
	var mask_6_graphics_15 = new cjs.Graphics().p("AA/EmIAAh1IBzAAIAAB1g");
	var mask_6_graphics_16 = new cjs.Graphics().p("AA/EpIAAh8IBzAAIAAB8g");
	var mask_6_graphics_17 = new cjs.Graphics().p("AA/EvIAAiHIBzAAIAACHg");
	var mask_6_graphics_18 = new cjs.Graphics().p("AA/E4IAAiYIBzAAIAACYg");
	var mask_6_graphics_19 = new cjs.Graphics().p("AA/FCIAAisIBzAAIAACsg");
	var mask_6_graphics_20 = new cjs.Graphics().p("AA/FPIAAjGIBzAAIAADGg");
	var mask_6_graphics_21 = new cjs.Graphics().p("AA/FeIAAjkIBzAAIAADkg");
	var mask_6_graphics_22 = new cjs.Graphics().p("AA/FwIAAkGIBzAAIAAEGg");
	var mask_6_graphics_23 = new cjs.Graphics().p("AA/GEIAAkuIBzAAIAAEug");
	var mask_6_graphics_24 = new cjs.Graphics().p("AA/GaIAAlZIBzAAIAAFZg");
	var mask_6_graphics_25 = new cjs.Graphics().p("AA/GzIAAmKIBzAAIAAGKg");
	var mask_6_graphics_26 = new cjs.Graphics().p("AA/HOIAAm/IBzAAIAAG/g");
	var mask_6_graphics_27 = new cjs.Graphics().p("AA/HrIAAn3IBzAAIAAH3g");
	var mask_6_graphics_28 = new cjs.Graphics().p("AA/ILIAAo1IBzAAIAAI1g");
	var mask_6_graphics_29 = new cjs.Graphics().p("AA/ItIAAp4IBzAAIAAJ4g");
	var mask_6_graphics_30 = new cjs.Graphics().p("AA/JSIAArAIBzAAIAALAg");
	var mask_6_graphics_31 = new cjs.Graphics().p("AA/J5IAAsMIBzAAIAAMMg");
	var mask_6_graphics_32 = new cjs.Graphics().p("AA/KiIAAtdIBzAAIAANdg");
	var mask_6_graphics_33 = new cjs.Graphics().p("AA/LNIAAuxIBzAAIAAOxg");
	var mask_6_graphics_34 = new cjs.Graphics().p("AA/L7IAAwLIBzAAIAAQLg");
	var mask_6_graphics_35 = new cjs.Graphics().p("AA/MrIAAxqIBzAAIAARqg");
	var mask_6_graphics_36 = new cjs.Graphics().p("AA/NIIAAzMIBzAAIAATMg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_6_graphics_14,x:17.775,y:29.275}).wait(1).to({graphics:mask_6_graphics_15,x:17.775,y:29.3926}).wait(1).to({graphics:mask_6_graphics_16,x:17.775,y:29.7453}).wait(1).to({graphics:mask_6_graphics_17,x:17.775,y:30.3332}).wait(1).to({graphics:mask_6_graphics_18,x:17.775,y:31.1562}).wait(1).to({graphics:mask_6_graphics_19,x:17.775,y:32.2143}).wait(1).to({graphics:mask_6_graphics_20,x:17.775,y:33.5076}).wait(1).to({graphics:mask_6_graphics_21,x:17.775,y:35.0361}).wait(1).to({graphics:mask_6_graphics_22,x:17.775,y:36.7997}).wait(1).to({graphics:mask_6_graphics_23,x:17.775,y:38.7984}).wait(1).to({graphics:mask_6_graphics_24,x:17.775,y:41.0323}).wait(1).to({graphics:mask_6_graphics_25,x:17.775,y:43.5013}).wait(1).to({graphics:mask_6_graphics_26,x:17.775,y:46.2055}).wait(1).to({graphics:mask_6_graphics_27,x:17.775,y:49.1449}).wait(1).to({graphics:mask_6_graphics_28,x:17.775,y:52.3193}).wait(1).to({graphics:mask_6_graphics_29,x:17.775,y:55.729}).wait(1).to({graphics:mask_6_graphics_30,x:17.775,y:59.3737}).wait(1).to({graphics:mask_6_graphics_31,x:17.775,y:63.2536}).wait(1).to({graphics:mask_6_graphics_32,x:17.775,y:67.3687}).wait(1).to({graphics:mask_6_graphics_33,x:17.775,y:71.7189}).wait(1).to({graphics:mask_6_graphics_34,x:17.775,y:76.3042}).wait(1).to({graphics:mask_6_graphics_35,x:17.775,y:81.1247}).wait(1).to({graphics:mask_6_graphics_36,x:17.775,y:84.0416}).wait(294));

	// lines
	this.instance_11 = new lib.frame1_lines();
	this.instance_11.setTransform(0,0,0.5,0.5);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).wait(22).to({_off:true},144).wait(150));

	// Layer_6 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_14 = new cjs.Graphics().p("AQiCqIAAhzIB0AAIAABzg");
	var mask_7_graphics_15 = new cjs.Graphics().p("AQiCqIAAhzIB0AAIAABzg");
	var mask_7_graphics_16 = new cjs.Graphics().p("AQhCqIAAhzIB2AAIAABzg");
	var mask_7_graphics_17 = new cjs.Graphics().p("AQfCqIAAhzIB6AAIAABzg");
	var mask_7_graphics_18 = new cjs.Graphics().p("AQdCqIAAhzIB+AAIAABzg");
	var mask_7_graphics_19 = new cjs.Graphics().p("AQaCqIAAhzICFAAIAABzg");
	var mask_7_graphics_20 = new cjs.Graphics().p("AQWCqIAAhzICNAAIAABzg");
	var mask_7_graphics_21 = new cjs.Graphics().p("AQRCqIAAhzICWAAIAABzg");
	var mask_7_graphics_22 = new cjs.Graphics().p("AQMCqIAAhzIChAAIAABzg");
	var mask_7_graphics_23 = new cjs.Graphics().p("AQGCqIAAhzICtAAIAABzg");
	var mask_7_graphics_24 = new cjs.Graphics().p("AP/CqIAAhzIC7AAIAABzg");
	var mask_7_graphics_25 = new cjs.Graphics().p("AP4CqIAAhzIDJAAIAABzg");
	var mask_7_graphics_26 = new cjs.Graphics().p("APwCqIAAhzIDaAAIAABzg");
	var mask_7_graphics_27 = new cjs.Graphics().p("APnCqIAAhzIDsAAIAABzg");
	var mask_7_graphics_28 = new cjs.Graphics().p("APeCqIAAhzID+AAIAABzg");
	var mask_7_graphics_29 = new cjs.Graphics().p("APTCqIAAhzIEUAAIAABzg");
	var mask_7_graphics_30 = new cjs.Graphics().p("APJCqIAAhzIEpAAIAABzg");
	var mask_7_graphics_31 = new cjs.Graphics().p("AO9CqIAAhzIFBAAIAABzg");
	var mask_7_graphics_32 = new cjs.Graphics().p("AOxCqIAAhzIFaAAIAABzg");
	var mask_7_graphics_33 = new cjs.Graphics().p("AOkCqIAAhzIF0AAIAABzg");
	var mask_7_graphics_34 = new cjs.Graphics().p("AOWCqIAAhzIGQAAIAABzg");
	var mask_7_graphics_35 = new cjs.Graphics().p("AOICqIAAhzIGtAAIAABzg");
	var mask_7_graphics_36 = new cjs.Graphics().p("ANwCqIAAhzIHLAAIAABzg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_7_graphics_14,x:117.35,y:17.025}).wait(1).to({graphics:mask_7_graphics_15,x:117.3862,y:17.025}).wait(1).to({graphics:mask_7_graphics_16,x:117.4946,y:17.025}).wait(1).to({graphics:mask_7_graphics_17,x:117.6754,y:17.025}).wait(1).to({graphics:mask_7_graphics_18,x:117.9284,y:17.025}).wait(1).to({graphics:mask_7_graphics_19,x:118.2538,y:17.025}).wait(1).to({graphics:mask_7_graphics_20,x:118.6515,y:17.025}).wait(1).to({graphics:mask_7_graphics_21,x:119.1215,y:17.025}).wait(1).to({graphics:mask_7_graphics_22,x:119.6638,y:17.025}).wait(1).to({graphics:mask_7_graphics_23,x:120.2784,y:17.025}).wait(1).to({graphics:mask_7_graphics_24,x:120.9653,y:17.025}).wait(1).to({graphics:mask_7_graphics_25,x:121.7245,y:17.025}).wait(1).to({graphics:mask_7_graphics_26,x:122.556,y:17.025}).wait(1).to({graphics:mask_7_graphics_27,x:123.4598,y:17.025}).wait(1).to({graphics:mask_7_graphics_28,x:124.4359,y:17.025}).wait(1).to({graphics:mask_7_graphics_29,x:125.4843,y:17.025}).wait(1).to({graphics:mask_7_graphics_30,x:126.605,y:17.025}).wait(1).to({graphics:mask_7_graphics_31,x:127.7981,y:17.025}).wait(1).to({graphics:mask_7_graphics_32,x:129.0634,y:17.025}).wait(1).to({graphics:mask_7_graphics_33,x:130.4011,y:17.025}).wait(1).to({graphics:mask_7_graphics_34,x:131.811,y:17.025}).wait(1).to({graphics:mask_7_graphics_35,x:133.2933,y:17.025}).wait(1).to({graphics:mask_7_graphics_36,x:133.9479,y:17.025}).wait(294));

	// Layer_5
	this.instance_12 = new lib.frame1_lines();
	this.instance_12.setTransform(0,0,0.5,0.5);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).wait(22).to({_off:true},144).wait(150));

	// Layer_10 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_36 = new cjs.Graphics().p("AAdN1IAAhzIBzAAIAABzg");
	var mask_8_graphics_37 = new cjs.Graphics().p("AAbN1IAAhzIB3AAIAABzg");
	var mask_8_graphics_38 = new cjs.Graphics().p("AAUN1IAAhzICFAAIAABzg");
	var mask_8_graphics_39 = new cjs.Graphics().p("AAIN1IAAhzICdAAIAABzg");
	var mask_8_graphics_40 = new cjs.Graphics().p("AgHN1IAAhzIC8AAIAABzg");
	var mask_8_graphics_41 = new cjs.Graphics().p("AgcN1IAAhzIDmAAIAABzg");
	var mask_8_graphics_42 = new cjs.Graphics().p("Ag2N1IAAhzIEaAAIAABzg");
	var mask_8_graphics_43 = new cjs.Graphics().p("AhUN1IAAhzIFWAAIAABzg");
	var mask_8_graphics_44 = new cjs.Graphics().p("Ah3N1IAAhzIGcAAIAABzg");
	var mask_8_graphics_45 = new cjs.Graphics().p("AieN1IAAhzIHrAAIAABzg");
	var mask_8_graphics_46 = new cjs.Graphics().p("AjKN1IAAhzIJDAAIAABzg");
	var mask_8_graphics_47 = new cjs.Graphics().p("Aj7N1IAAhzIKmAAIAABzg");
	var mask_8_graphics_48 = new cjs.Graphics().p("AkxN1IAAhzIMRAAIAABzg");
	var mask_8_graphics_49 = new cjs.Graphics().p("AlrN1IAAhzIOGAAIAABzg");
	var mask_8_graphics_50 = new cjs.Graphics().p("AmqN1IAAhzIQEAAIAABzg");
	var mask_8_graphics_51 = new cjs.Graphics().p("AntN1IAAhzISKAAIAABzg");
	var mask_8_graphics_52 = new cjs.Graphics().p("Ao1N1IAAhzIUbAAIAABzg");
	var mask_8_graphics_53 = new cjs.Graphics().p("AqCN1IAAhzIW1AAIAABzg");
	var mask_8_graphics_54 = new cjs.Graphics().p("ArTN1IAAhzIZXAAIAABzg");
	var mask_8_graphics_55 = new cjs.Graphics().p("AspN1IAAhzIcEAAIAABzg");
	var mask_8_graphics_56 = new cjs.Graphics().p("AuEN1IAAhzIe6AAIAABzg");
	var mask_8_graphics_57 = new cjs.Graphics().p("AvjN1IAAhzMAh5AAAIAABzg");
	var mask_8_graphics_58 = new cjs.Graphics().p("AxHN1IAAhzMAlBAAAIAABzg");
	var mask_8_graphics_59 = new cjs.Graphics().p("Ay7N1IAAhzMAoTAAAIAABzg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_8_graphics_36,x:14.4,y:88.525}).wait(1).to({graphics:mask_8_graphics_37,x:14.6335,y:88.525}).wait(1).to({graphics:mask_8_graphics_38,x:15.3339,y:88.525}).wait(1).to({graphics:mask_8_graphics_39,x:16.5013,y:88.525}).wait(1).to({graphics:mask_8_graphics_40,x:18.1356,y:88.525}).wait(1).to({graphics:mask_8_graphics_41,x:20.2369,y:88.525}).wait(1).to({graphics:mask_8_graphics_42,x:22.8052,y:88.525}).wait(1).to({graphics:mask_8_graphics_43,x:25.8404,y:88.525}).wait(1).to({graphics:mask_8_graphics_44,x:29.3426,y:88.525}).wait(1).to({graphics:mask_8_graphics_45,x:33.3117,y:88.525}).wait(1).to({graphics:mask_8_graphics_46,x:37.7478,y:88.525}).wait(1).to({graphics:mask_8_graphics_47,x:42.6508,y:88.525}).wait(1).to({graphics:mask_8_graphics_48,x:48.0208,y:88.525}).wait(1).to({graphics:mask_8_graphics_49,x:53.8578,y:88.525}).wait(1).to({graphics:mask_8_graphics_50,x:60.1617,y:88.525}).wait(1).to({graphics:mask_8_graphics_51,x:66.9325,y:88.525}).wait(1).to({graphics:mask_8_graphics_52,x:74.1703,y:88.525}).wait(1).to({graphics:mask_8_graphics_53,x:81.8751,y:88.525}).wait(1).to({graphics:mask_8_graphics_54,x:90.0468,y:88.525}).wait(1).to({graphics:mask_8_graphics_55,x:98.6855,y:88.525}).wait(1).to({graphics:mask_8_graphics_56,x:107.7912,y:88.525}).wait(1).to({graphics:mask_8_graphics_57,x:117.3637,y:88.525}).wait(1).to({graphics:mask_8_graphics_58,x:127.4033,y:88.525}).wait(1).to({graphics:mask_8_graphics_59,x:136.7882,y:88.525}).wait(271));

	// Layer_9
	this.instance_13 = new lib.frame1_lines();
	this.instance_13.setTransform(0,0,0.5,0.5);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(36).to({_off:false},0).to({_off:true},144).wait(150));

	// Layer_8 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_36 = new cjs.Graphics().p("ATqCRIAAhzIBzAAIAABzg");
	var mask_9_graphics_37 = new cjs.Graphics().p("ATqCTIAAh2IBzAAIAAB2g");
	var mask_9_graphics_38 = new cjs.Graphics().p("ATqCXIAAh+IBzAAIAAB+g");
	var mask_9_graphics_39 = new cjs.Graphics().p("ATqCeIAAiMIBzAAIAACMg");
	var mask_9_graphics_40 = new cjs.Graphics().p("ATqCoIAAigIBzAAIAACgg");
	var mask_9_graphics_41 = new cjs.Graphics().p("ATqC0IAAi3IBzAAIAAC3g");
	var mask_9_graphics_42 = new cjs.Graphics().p("ATqDEIAAjWIBzAAIAADWg");
	var mask_9_graphics_43 = new cjs.Graphics().p("ATqDWIAAj6IBzAAIAAD6g");
	var mask_9_graphics_44 = new cjs.Graphics().p("ATqDrIAAkjIBzAAIAAEjg");
	var mask_9_graphics_45 = new cjs.Graphics().p("ATqEDIAAlTIBzAAIAAFTg");
	var mask_9_graphics_46 = new cjs.Graphics().p("ATqEdIAAmHIBzAAIAAGHg");
	var mask_9_graphics_47 = new cjs.Graphics().p("ATqE6IAAnBIBzAAIAAHBg");
	var mask_9_graphics_48 = new cjs.Graphics().p("ATqFbIAAoBIBzAAIAAIBg");
	var mask_9_graphics_49 = new cjs.Graphics().p("ATqF+IAApGIBzAAIAAJGg");
	var mask_9_graphics_50 = new cjs.Graphics().p("ATqGjIAAqQIBzAAIAAKQg");
	var mask_9_graphics_51 = new cjs.Graphics().p("ATqHMIAArhIBzAAIAALhg");
	var mask_9_graphics_52 = new cjs.Graphics().p("ATqH3IAAs3IBzAAIAAM3g");
	var mask_9_graphics_53 = new cjs.Graphics().p("ATqIlIAAuSIBzAAIAAOSg");
	var mask_9_graphics_54 = new cjs.Graphics().p("ATqJWIAAvzIBzAAIAAPzg");
	var mask_9_graphics_55 = new cjs.Graphics().p("ATqKKIAAxaIBzAAIAARag");
	var mask_9_graphics_56 = new cjs.Graphics().p("ATqLBIAAzGIBzAAIAATGg");
	var mask_9_graphics_57 = new cjs.Graphics().p("ATqL6IAA03IBzAAIAAU3g");
	var mask_9_graphics_58 = new cjs.Graphics().p("ATqM2IAA2uIBzAAIAAWug");
	var mask_9_graphics_59 = new cjs.Graphics().p("ATqNkIAA4rIBzAAIAAYrg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_9_graphics_36,x:137.35,y:14.525}).wait(1).to({graphics:mask_9_graphics_37,x:137.35,y:14.6649}).wait(1).to({graphics:mask_9_graphics_38,x:137.35,y:15.0844}).wait(1).to({graphics:mask_9_graphics_39,x:137.35,y:15.7837}).wait(1).to({graphics:mask_9_graphics_40,x:137.35,y:16.7627}).wait(1).to({graphics:mask_9_graphics_41,x:137.35,y:18.0215}).wait(1).to({graphics:mask_9_graphics_42,x:137.35,y:19.5599}).wait(1).to({graphics:mask_9_graphics_43,x:137.35,y:21.3781}).wait(1).to({graphics:mask_9_graphics_44,x:137.35,y:23.4759}).wait(1).to({graphics:mask_9_graphics_45,x:137.35,y:25.8535}).wait(1).to({graphics:mask_9_graphics_46,x:137.35,y:28.5108}).wait(1).to({graphics:mask_9_graphics_47,x:137.35,y:31.4478}).wait(1).to({graphics:mask_9_graphics_48,x:137.35,y:34.6646}).wait(1).to({graphics:mask_9_graphics_49,x:137.35,y:38.161}).wait(1).to({graphics:mask_9_graphics_50,x:137.35,y:41.9372}).wait(1).to({graphics:mask_9_graphics_51,x:137.35,y:45.9931}).wait(1).to({graphics:mask_9_graphics_52,x:137.35,y:50.3287}).wait(1).to({graphics:mask_9_graphics_53,x:137.35,y:54.944}).wait(1).to({graphics:mask_9_graphics_54,x:137.35,y:59.8391}).wait(1).to({graphics:mask_9_graphics_55,x:137.35,y:65.0138}).wait(1).to({graphics:mask_9_graphics_56,x:137.35,y:70.4683}).wait(1).to({graphics:mask_9_graphics_57,x:137.35,y:76.2025}).wait(1).to({graphics:mask_9_graphics_58,x:137.35,y:82.2164}).wait(1).to({graphics:mask_9_graphics_59,x:137.35,y:86.7927}).wait(271));

	// Layer_7
	this.instance_14 = new lib.frame1_lines();
	this.instance_14.setTransform(0,0,0.5,0.5);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(36).to({_off:false},0).to({_off:true},144).wait(150));

	// image
	this.instance_15 = new lib.frame1_image();

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},180).wait(150));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198,0,898,250);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
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

	// ctaclick
	this.cta_hotspot = new lib.Symbol15();
	this.cta_hotspot.name = "cta_hotspot";
	this.cta_hotspot.setTransform(241.55,225.25,1,0.9167,0,0,0,44,12);
	new cjs.ButtonHelper(this.cta_hotspot, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta_hotspot).wait(1));

	// bannerclick
	this.bannerClick = new lib.Symbol14();
	this.bannerClick.name = "bannerClick";
	this.bannerClick.setTransform(0,177776.35,1.3889,1.5432,0,0,0,0,115200);
	new cjs.ButtonHelper(this.bannerClick, 0, 1, 2, false, new lib.Symbol14(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bannerClick).wait(1));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// static_idn
	this.instance = new lib._static();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// anim
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,150,125);
// library properties:
lib.properties = {
	id: 'F9C4A03B74154524915936209C48C51D',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"bluegradient.png?1615576152080", id:"bluegradient"},
		{src:"cta_off.png?1615576152080", id:"cta_off"},
		{src:"cta_on.png?1615576152080", id:"cta_on"},
		{src:"endframe.png?1615576152080", id:"endframe"},
		{src:"frame1_image.jpg?1615576152080", id:"frame1_image"},
		{src:"frame1_lines.png?1615576152080", id:"frame1_lines"},
		{src:"frame1_text.png?1615576152080", id:"frame1_text"},
		{src:"frame2_image.jpg?1615576152080", id:"frame2_image"},
		{src:"frame2_lines.png?1615576152080", id:"frame2_lines"},
		{src:"frame2_text.png?1615576152080", id:"frame2_text"},
		{src:"frame3_lines.png?1615576152080", id:"frame3_lines"},
		{src:"frame3_text.png?1615576152080", id:"frame3_text"},
		{src:"_static.png?1615576152080", id:"_static"}
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
an.compositions['F9C4A03B74154524915936209C48C51D'] = {
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