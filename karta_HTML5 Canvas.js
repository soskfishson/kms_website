(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"karta_HTML5 Canvas_atlas_1", frames: [[0,0,1920,1080]]}
];


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



(lib.deathmachine = function() {
	this.initialize(ss["karta_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.vozdych = function(mode,startPosition,loop,reversed) {
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
	this.frame_2 = function() {
		playSound("vozduck");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("EgUIgxRMgBQBu8MAgRgTwMAKghnlg");
	this.shape.setTransform(137.9,395.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EgUIgxRMgBQBu8MAgRgTwMAKghnlg");
	this.shape_1.setTransform(137.9,395.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("EgUIgxRMAphgMZMgKgBnlMggRATwg");
	this.shape_2.setTransform(137.9,395.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275.8,791.4);


(lib.provod_1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_2 = function() {
		playSound("provod");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_22
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AgZJuIAKB8IAwAfIA5hDIAPhqQAGh3AEh2QAGjtgQAAQgQAAgujGIgqjIQgChngLhxQgWjigqgxQgqgxADBiQABAwAKA7QAHAZANBYQARB2gHA4QgHA4AQArQAIAVAJAKIAZB0QAcCKASB4QA4F+hMAmQgQAIgMAGQgsASALgWIAegkg");
	this.shape.setTransform(12.6348,78.6444);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPLqIgKh8IAcgOQBMgmg4l+QgSh4gciKIgZh0QgJgKgIgVQgQgrAHg4QAHg4gRh2QgNhYgHgZQgKg7gBgwQgDhiAqAxQAqAxAWDiQALBxACBnIAqDIQAuDGAQAAQAQAAgGDtQgEB2gGB3IgPBqIg5BDg");
	this.shape_1.setTransform(12.6348,78.6444);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.3,157.3);


(lib.okno_1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_2 = function() {
		playSound("okno");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_18
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("Aub4pIg7A1IAHCeID6ciIBOCDIC5CLIDSCqII0FqIIBE8ICehjIgosIIgUurIhBjsIh9hwg");
	this.shape.setTransform(99.275,158.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AE4TuIo0lqIjSiqIi5iLIhOiDIj68iIgHieIA7g1IZ4PhIB9BwIBBDsIAUOrIAoMIIieBjg");
	this.shape_1.setTransform(99.275,158.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.6,317.6);


(lib.ekran_1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_2 = function() {
		playSound("ekran");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_16
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AtbiBIMdjvIOaHGIsQEbg");
	this.shape.setTransform(86.975,37.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtbiCIMdjuIOaHGIsQEbg");
	this.shape_1.setTransform(86.975,37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174,75.8);


(lib.btn_vazhkasc_1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_2 = function() {
		playSound("btn_vazhkasc");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_12
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AlEAgICjBWQHNiGAHgBQAHgBALgOIjAhVg");
	this.shape.setTransform(33.45,12.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlEAgIHJiVIC/BWQgKANgHABQgHABnNCFg");
	this.shape_1.setTransform(33.45,12.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.9,25.5);


(lib.btn_timer_1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_2 = function() {
		playSound("btn_timer");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("Ak/AXIC4BhIHHiSIi9hdg");
	this.shape.setTransform(33.025,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak/AXIHCiOIC9BdInHCSg");
	this.shape_1.setTransform(33.025,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.1,26);


(lib.btn_temp_1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_2 = function() {
		playSound("btn_temp");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("Ak9ANICxBpIHKiYIiqhTg");
	this.shape.setTransform(32.825,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak9ANIHRiCICqBTInKCYg");
	this.shape_1.setTransform(32.825,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.7,25.6);


(lib.btn_power_1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_2 = function() {
		playSound("btn_power");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("Ak3AdIC7BbIG2iMIihhjInSCRg");
	this.shape.setTransform(32.425,12.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak3AdIgCgEIHSiQIChBjIm2CMg");
	this.shape_1.setTransform(32.425,12.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.9,25.9);


(lib.btn_on_1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_2 = function() {
		playSound("btn_on");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_14
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AjAgHICiBcIDeg/IABgsIiag+IjjAng");
	this.shape.setTransform(20.325,9.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjAgHIAEgmIDjgnICaA+IgBAsIjeA/g");
	this.shape_1.setTransform(20.325,9.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.7,19.1);


(lib.btn_nakirunak_1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_2 = function() {
		playSound("btn_nakirunak");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AlAAgICZBfIHoiiIi3hbg");
	this.shape.setTransform(33.1,13.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlAAgIHKieIC3BbInnChg");
	this.shape_1.setTransform(33.1,13.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.2,27.3);


(lib.block_pitannia_1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_2 = function() {
		playSound("block_pitannia");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_20
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AgKnoIAYiXICUBZIikRdIifBJg");
	this.shape.setTransform(17.2,64.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKnoIAXiXICVBZIikRdIifBJg");
	this.shape_1.setTransform(17.2,64.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,130);


// stage content:
(lib.karta_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// btn_on
	this.instance = new lib.btn_on_1();
	this.instance.setTransform(776.65,84.6,1,1,0,0,0,20.3,9.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_on_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn_vazhkasc
	this.instance_1 = new lib.btn_vazhkasc_1();
	this.instance_1.setTransform(994.7,193.45,1,1,0,0,0,33.5,12.8);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn_vazhkasc_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btn_power
	this.instance_2 = new lib.btn_power_1();
	this.instance_2.setTransform(973.75,184.05,1,1,0,0,0,32.4,13);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.btn_power_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// btn_timer
	this.instance_3 = new lib.btn_timer_1();
	this.instance_3.setTransform(955.05,174.05,1,1,0,0,0,33,13);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.btn_timer_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// btn_nakirunak
	this.instance_4 = new lib.btn_nakirunak_1();
	this.instance_4.setTransform(934.4,164.45,1,1,0,0,0,33.1,13.7);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.btn_nakirunak_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// btn_temp
	this.instance_5 = new lib.btn_temp_1();
	this.instance_5.setTransform(916.8,155.4,1,1,0,0,0,32.8,12.8);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.btn_temp_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// vozdych
	this.instance_6 = new lib.vozdych();
	this.instance_6.setTransform(1123.85,610.35,1,1,0,0,0,137.9,395.7);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.vozdych(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// block_pitannia
	this.instance_7 = new lib.block_pitannia_1();
	this.instance_7.setTransform(1282.65,467.35,1,1,0,0,0,17.2,65);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.block_pitannia_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// okno
	this.instance_8 = new lib.okno_1();
	this.instance_8.setTransform(775.25,357.6,1,1,0,0,0,99.2,158.8);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.okno_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// ekran
	this.instance_9 = new lib.ekran_1();
	this.instance_9.setTransform(818.5,128.4,1,1,0,0,0,87,37.9);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.ekran_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// provod
	this.instance_10 = new lib.provod_1();
	this.instance_10.setTransform(1250.1,786.4,1,1,0,0,0,12.7,78.7);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 2, false, new lib.provod_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Layer_1
	this.instance_11 = new lib.deathmachine();

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AgPAAQgBAAgBAAQgFAAAAAAQAAAAAHAAgAAXAAQgTABgTgB");
	this.shape.setTransform(927.825,144.6332);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960,540);
// library properties:
lib.properties = {
	id: '09C7F407DE4DF7418A94BD18D8338E1A',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/karta_HTML5 Canvas_atlas_1.png", id:"karta_HTML5 Canvas_atlas_1"},
		{src:"sounds/block_pitannia.mp3", id:"block_pitannia"},
		{src:"sounds/btn_nakirunak.mp3", id:"btn_nakirunak"},
		{src:"sounds/btn_on.mp3", id:"btn_on"},
		{src:"sounds/btn_power.mp3", id:"btn_power"},
		{src:"sounds/btn_temp.mp3", id:"btn_temp"},
		{src:"sounds/btn_timer.mp3", id:"btn_timer"},
		{src:"sounds/btn_vazhkasc.mp3", id:"btn_vazhkasc"},
		{src:"sounds/ekran.mp3", id:"ekran"},
		{src:"sounds/okno.mp3", id:"okno"},
		{src:"sounds/provod.mp3", id:"provod"},
		{src:"sounds/vozduck.mp3", id:"vozduck"}
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
an.compositions['09C7F407DE4DF7418A94BD18D8338E1A'] = {
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;