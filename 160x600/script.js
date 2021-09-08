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



(lib.copyv1 = function() {
	this.initialize(img.copyv1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.cta_offv1 = function() {
	this.initialize(img.cta_offv1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.cta_onv1 = function() {
	this.initialize(img.cta_onv1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.disclaimer = function() {
	this.initialize(img.disclaimer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.f3_guide = function() {
	this.initialize(img.f3_guide);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.static_v1 = function() {
	this.initialize(img.static_v1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.wheelpngcopy = function() {
	this.initialize(img.wheelpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,72);// helper functions:

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


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.copyv1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,160,600), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.f3_guide();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,160,600), null);


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
	this.instance = new lib.wheelpngcopy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,71,72), null);


(lib.cta_on = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.cta_onv1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_on, new cjs.Rectangle(0,0,160,600), null);


(lib.cta_off = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.cta_offv1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_off, new cjs.Rectangle(0,0,160,600), null);


(lib.close_x = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#660033").s().p("Aj6BVIAAipIH1AAIAACpg");
	this.shape.setTransform(25.125,8.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.3,17);


(lib.close_big = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#660033").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

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

	// closex
	this.close_x = new lib.close_x();
	this.close_x.name = "close_x";
	this.close_x.setTransform(134.85,11,1,1.2941,0,0,0,25.1,8.5);
	new cjs.ButtonHelper(this.close_x, 0, 1, 2, false, new lib.close_x(), 3);

	this.timeline.addTween(cjs.Tween.get(this.close_x).wait(1));

	// Layer_2
	this.close_big = new lib.close_big();
	this.close_big.name = "close_big";
	this.close_big.setTransform(80,300,0.5333,2.4,0,0,0,150,125);
	new cjs.ButtonHelper(this.close_big, 0, 1, 2, false, new lib.close_big(), 3);

	this.timeline.addTween(cjs.Tween.get(this.close_big).wait(1));

	// Layer_1
	this.instance = new lib.disclaimer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,160,600), null);


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

	this.actionFrames = [0,59];
	// timeline functions:
	this.frame_0 = function() {
		root = this;
		stage.enableMouseOver();
		
		this.bannerClick.addEventListener("click", clickFunction);
		function clickFunction(e){
			if (e.nativeEvent.button == 0) {
				window.open(clickTag, "_blank");
			}
		}
		
		this.info_hotspot.addEventListener("click", infoClickFunction);
		function infoClickFunction(e){
			if (e.nativeEvent.button == 0) {
				root.disclaimer.alpha = 100;
			}
		}
		this.disclaimer.close_big.addEventListener("click", closeDisclaimerBGFunction);
		function closeDisclaimerBGFunction(e){
			if (e.nativeEvent.button == 0) {
				window.open(clickTag, "_blank");
			}
		}
		this.disclaimer.close_x.addEventListener("click", closeXDisclaimerFunction);
		function closeXDisclaimerFunction(e){
			if (e.nativeEvent.button == 0) {
				root.disclaimer.alpha = 0;
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
			root.cta_off.alpha = 0;
			root.cta_on.alpha = 100;
			}
			
		this.cta_hotspot.addEventListener("mouseout", outFunction);
		function outFunction(){
			root.cta_off.alpha = 100;
			root.cta_on.alpha = 0;
			}
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// disclaimer
	this.disclaimer = new lib.Symbol1();
	this.disclaimer.name = "disclaimer";
	this.disclaimer.setTransform(80,300,1,1,0,0,0,80,300);
	this.disclaimer.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.disclaimer).wait(60));

	// info_click
	this.info_hotspot = new lib.Symbol15();
	this.info_hotspot.name = "info_hotspot";
	this.info_hotspot.setTransform(82.5,582.3,0.8411,0.9162,0,0,0,46,13.2);
	new cjs.ButtonHelper(this.info_hotspot, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.timeline.addTween(cjs.Tween.get(this.info_hotspot).wait(60));

	// cta_click
	this.cta_hotspot = new lib.Symbol15();
	this.cta_hotspot.name = "cta_hotspot";
	this.cta_hotspot.setTransform(81.5,553.4,1.2044,1.0833,0,0,0,44.4,12.2);
	new cjs.ButtonHelper(this.cta_hotspot, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta_hotspot).wait(60));

	// bgclick
	this.bannerClick = new lib.Symbol14();
	this.bannerClick.name = "bannerClick";
	this.bannerClick.setTransform(0,426665.05,0.7407,3.7037,0,0,0,0,115200);
	new cjs.ButtonHelper(this.bannerClick, 0, 1, 2, false, new lib.Symbol14(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bannerClick).wait(60));

	// copy_v1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({alpha:1},15,cjs.Ease.quadInOut).wait(1));

	// Layer_17
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(42.5,134.5,1,1,0,0,0,35.5,36);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({rotation:360,x:115.5},27,cjs.Ease.quadInOut).wait(3).to({alpha:0},7,cjs.Ease.quadOut).wait(16));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_7 = new cjs.Graphics().p("AuEOAIAAs+IcJAAIAAM+g");
	var mask_graphics_8 = new cjs.Graphics().p("AuEOAIAAs+IcJAAIAAM+g");
	var mask_graphics_9 = new cjs.Graphics().p("AuEOAIAAs+IcJAAIAAM+g");
	var mask_graphics_10 = new cjs.Graphics().p("AuEOAIAAs+IcJAAIAAM+g");
	var mask_graphics_11 = new cjs.Graphics().p("AuEOAIAAs+IcJAAIAAM+g");
	var mask_graphics_12 = new cjs.Graphics().p("AuEOAIAAs+IcJAAIAAM+g");
	var mask_graphics_13 = new cjs.Graphics().p("AuEOAIAAs/IcJAAIAAM/g");
	var mask_graphics_14 = new cjs.Graphics().p("AuEN/IAAs+IcJAAIAAM+g");
	var mask_graphics_15 = new cjs.Graphics().p("AuEN/IAAs+IcJAAIAAM+g");
	var mask_graphics_16 = new cjs.Graphics().p("AuEN/IAAs+IcJAAIAAM+g");
	var mask_graphics_17 = new cjs.Graphics().p("AuEN/IAAs+IcJAAIAAM+g");
	var mask_graphics_18 = new cjs.Graphics().p("AuEN/IAAs/IcJAAIAAM/g");
	var mask_graphics_19 = new cjs.Graphics().p("AuEN+IAAs+IcJAAIAAM+g");
	var mask_graphics_20 = new cjs.Graphics().p("AuEN+IAAs+IcJAAIAAM+g");
	var mask_graphics_21 = new cjs.Graphics().p("AuEN+IAAs/IcJAAIAAM/g");
	var mask_graphics_22 = new cjs.Graphics().p("AuEN9IAAs+IcJAAIAAM+g");
	var mask_graphics_23 = new cjs.Graphics().p("AuEN9IAAs+IcJAAIAAM+g");
	var mask_graphics_24 = new cjs.Graphics().p("AuEN9IAAs+IcJAAIAAM+g");
	var mask_graphics_25 = new cjs.Graphics().p("AuEN8IAAs+IcJAAIAAM+g");
	var mask_graphics_26 = new cjs.Graphics().p("AuEN8IAAs+IcJAAIAAM+g");
	var mask_graphics_27 = new cjs.Graphics().p("AuEN8IAAs+IcJAAIAAM+g");
	var mask_graphics_28 = new cjs.Graphics().p("AuEN8IAAs+IcJAAIAAM+g");
	var mask_graphics_29 = new cjs.Graphics().p("AuEN8IAAs+IcJAAIAAM+g");
	var mask_graphics_30 = new cjs.Graphics().p("AuEN8IAAs/IcJAAIAAM/g");
	var mask_graphics_31 = new cjs.Graphics().p("AuEN8IAAs/IcJAAIAAM/g");
	var mask_graphics_32 = new cjs.Graphics().p("AuEN8IAAs/IcJAAIAAM/g");
	var mask_graphics_33 = new cjs.Graphics().p("AuEN7IAAs+IcJAAIAAM+g");
	var mask_graphics_34 = new cjs.Graphics().p("AuEOAIAAs+IcJAAIAAM+g");
	var mask_graphics_37 = new cjs.Graphics().p("AuEOAIAAs+IcJAAIAAM+g");
	var mask_graphics_38 = new cjs.Graphics().p("AuEOAIAAs+IcJAAIAAM+g");
	var mask_graphics_39 = new cjs.Graphics().p("AuEOAIAAs+IcJAAIAAM+g");
	var mask_graphics_40 = new cjs.Graphics().p("AuEOAIAAs+IcJAAIAAM+g");
	var mask_graphics_41 = new cjs.Graphics().p("AuEOAIAAs+IcJAAIAAM+g");
	var mask_graphics_42 = new cjs.Graphics().p("AuEOAIAAs+IcJAAIAAM+g");
	var mask_graphics_43 = new cjs.Graphics().p("AuEOAIAAs+IcJAAIAAM+g");
	var mask_graphics_44 = new cjs.Graphics().p("AuEOAIAAs+IcJAAIAAM+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_graphics_7,x:-46.2092,y:89.6039}).wait(1).to({graphics:mask_graphics_8,x:-46.0045,y:89.6026}).wait(1).to({graphics:mask_graphics_9,x:-45.3905,y:89.5988}).wait(1).to({graphics:mask_graphics_10,x:-44.3672,y:89.5925}).wait(1).to({graphics:mask_graphics_11,x:-42.9346,y:89.5837}).wait(1).to({graphics:mask_graphics_12,x:-41.0926,y:89.5724}).wait(1).to({graphics:mask_graphics_13,x:-38.8414,y:89.5586}).wait(1).to({graphics:mask_graphics_14,x:-36.1807,y:89.5422}).wait(1).to({graphics:mask_graphics_15,x:-33.1108,y:89.5233}).wait(1).to({graphics:mask_graphics_16,x:-29.6315,y:89.5019}).wait(1).to({graphics:mask_graphics_17,x:-25.743,y:89.478}).wait(1).to({graphics:mask_graphics_18,x:-21.445,y:89.4516}).wait(1).to({graphics:mask_graphics_19,x:-16.7378,y:89.4227}).wait(1).to({graphics:mask_graphics_20,x:-11.6213,y:89.3912}).wait(1).to({graphics:mask_graphics_21,x:-6.1977,y:89.3579}).wait(1).to({graphics:mask_graphics_22,x:-1.0811,y:89.3264}).wait(1).to({graphics:mask_graphics_23,x:3.6261,y:89.2975}).wait(1).to({graphics:mask_graphics_24,x:7.924,y:89.2711}).wait(1).to({graphics:mask_graphics_25,x:11.8126,y:89.2472}).wait(1).to({graphics:mask_graphics_26,x:15.2918,y:89.2258}).wait(1).to({graphics:mask_graphics_27,x:18.3618,y:89.2069}).wait(1).to({graphics:mask_graphics_28,x:21.0224,y:89.1905}).wait(1).to({graphics:mask_graphics_29,x:23.2737,y:89.1767}).wait(1).to({graphics:mask_graphics_30,x:25.1156,y:89.1654}).wait(1).to({graphics:mask_graphics_31,x:26.5483,y:89.1566}).wait(1).to({graphics:mask_graphics_32,x:27.5716,y:89.1503}).wait(1).to({graphics:mask_graphics_33,x:28.1856,y:89.1465}).wait(1).to({graphics:mask_graphics_34,x:28.897,y:89.6099}).wait(3).to({graphics:mask_graphics_37,x:28.897,y:89.6099}).wait(1).to({graphics:mask_graphics_38,x:28.897,y:89.6099}).wait(1).to({graphics:mask_graphics_39,x:28.897,y:89.6099}).wait(1).to({graphics:mask_graphics_40,x:28.897,y:89.6099}).wait(1).to({graphics:mask_graphics_41,x:28.897,y:89.6099}).wait(1).to({graphics:mask_graphics_42,x:28.897,y:89.6099}).wait(1).to({graphics:mask_graphics_43,x:28.897,y:89.6099}).wait(1).to({graphics:mask_graphics_44,x:28.897,y:89.6099}).wait(16));

	// f3
	this.instance_2 = new lib.f3_guide();
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({_off:true},37).wait(16));

	// Layer_7
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({_off:false},0).wait(23));

	// cta_on
	this.cta_on = new lib.cta_on();
	this.cta_on.name = "cta_on";
	this.cta_on.setTransform(80,300,1,1,0,0,0,80,300);
	this.cta_on.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cta_on).wait(60));

	// cta_off
	this.cta_off = new lib.cta_off();
	this.cta_off.name = "cta_off";
	this.cta_off.setTransform(80,300,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.cta_off).wait(60));

	// static_v1
	this.instance_4 = new lib.static_v1();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(79.9,300,80.1,301);
// library properties:
lib.properties = {
	id: '9857BB7EA0C746E6A4B6AAB799346B9E',
	width: 160,
	height: 600,
	fps: 30,
	color: "#F1F2F2",
	opacity: 1.00,
	manifest: [
		{src:"images/copyv1.png?1614346561239", id:"copyv1"},
		{src:"images/cta_offv1.png?1614346561239", id:"cta_offv1"},
		{src:"images/cta_onv1.png?1614346561239", id:"cta_onv1"},
		{src:"images/disclaimer.png?1614346561239", id:"disclaimer"},
		{src:"images/f3_guide.png?1614346561239", id:"f3_guide"},
		{src:"images/static_v1.png?1614346561239", id:"static_v1"},
		{src:"images/wheelpngcopy.png?1614346561239", id:"wheelpngcopy"}
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
an.compositions['9857BB7EA0C746E6A4B6AAB799346B9E'] = {
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