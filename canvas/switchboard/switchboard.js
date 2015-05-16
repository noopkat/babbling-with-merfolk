(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,434,991);


(lib.nametag = function() {
	this.initialize();

	// firmata
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABTAXQgIgIAAgPQAAgOAIgIQAHgHAMAAQANAAAGAHQAJAIAAAOQAAAPgJAIQgGAHgNAAQgMAAgHgHgABbgOQgEAGAAAIQAAAKAEAEQAEAGAHAAQAHAAAFgGQAEgEAAgKQAAgIgEgGQgFgEgHAAQgHAAgEAEgAAcAcIAAg3IAMAAIAAAtIAdAAIAAAKgAgSAcIAAg3IAMAAIAAAtIAbAAIAAAKgAhHAcIAAg3IAqAAIAAAKIgeAAIAAAMIAcAAIAAAIIgcAAIAAAPIAgAAIAAAKgAheAcIAAgZIgXAAIAAAZIgMAAIAAg3IAMAAIAAAWIAXAAIAAgWIAMAAIAAA3g");
	this.shape.setTransform(-590.4,-241.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjVA3QAAgDAEgFIAFgGIAHgGIAIgDIAQgSIgVADIgEgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIAAgFQABgDADgBQAEgDAOgCIAWgEIAJgQIAFgJIABgHQAAgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgNABIgXAFQgNAEgLAFIAIAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAIgRAFQgGACgDgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQgBgEALgSQAEgEAGgCIALgEQAlgIATgBQAOABAAAHQABAEgDAGIgHAOIgMAXIAJABIgGAHIgDAFIgMACIgYAZQgWAWgGgBQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBgAB1AmQgDgDABgEQgBgEAEgJQgFAGgLAHQgMAJgDAAQgEAAgCgCQgBgCAAgEQAAgEAFgLIgBAAIgMAKQgMAKgDAAQgDgBgEgFIgEgFIgBgEQgVARgHAAQgDAAgDgDQgCgCAAgEQAAgGALgQIgBAAIgTAUQgJAJgFAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDADgGIAJgPIABgCIgBgBQgBAAgEAEIgWAYQgDAFgDAAQAAAAgBgBQAAAAgBAAQgBAAAAgBQgBAAAAAAIgCgFQgDgFAAgFIAAgBQgSASgHAAQgFAAgCgDQgDgDAAgEQAAgJANgPIgPADQgCAFgGAFIgBABIAAACIgMAMIgIAGQgFABgEAAQgDABgCgCIgEgEQgDgFAAgGQAAgGADgGQADgGAEgEIAJgHQAEgDADAAQAGABAAADQAAADgCADIgGAFQgGAGgGAFQAAAEABACQACADAFAAQAFAAAIgGIAAgBQAEgFAFgGQgDAAAAgFQAAgCABgDIAGgGQAHgGADAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIgBAEIAQgDQAGAAABABQADAEAAADQAAADgBABIgFADQgLALAAAFIACADIACABQAGAAANgLIABgCIAGgKIAHgGQAFgDADAAQAGABAAACIgCAFIgEACIgHAJIgEAHQAAAAAAABQAAAAAAAAQAAAAABAAQAAABAAAAIACgDIAUgQIAMgKQAEgEAEAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAABIgCAFIgJAPIAAAAIAdgWQAFgEACAAIACACIABACQADAEAAACQAAACgFADIgKAMQgCADABACQgBABAAAAQAAAAABABQAAAAAAAAQAAABAAAAIACABQAEgBAOgJQABgDAEgDQADgEAKgGQAIgEAJgEQAJgDAHAAQAGAAADAHQAAABgFACQAEACAAACQAAACgGAIQgGAHAAAEQAAABAAAAQABABAAAAQAAABABAAQABAAABAAQAEAAAJgGIgBAAIAMgLQAGgGAEgEIgOAAIAHgKIAEgEIAGgCIAJgBIAGgJIADgCQADgBADgBQAEAAAAADQAAACgFAHIAIABQgEAMgDACQgDADgDAAQgEABgFgBQgOARAAAHIACAFIADABQADgBAFgDIAMgIIAAgCQACgDADgDQAEgEAKgGQAIgEAJgEQAJgDAGAAQAHAAADAHQAAABgGACQAFACAAACQAAACgHAIQgFAHgBAEQABADAEAAQAFAAAOgLIABAFQgEAGgLAHQgNAJgDAAQgDAAgCgCQgBgCgBgEQAAgEAGgLIgBAAIgNAKQgLAKgEAAQgDgBgEgFIgEgFIAAgDQgUARgKAAQgEAAgDgCgAC1AFQgIADgDAEQgEADgCADIgBAFQABABAAABQAAAAAAABQABAAAAAAQABAAAAAAQAIAAAbgaIAAAAIgUAFgABIAFQgHADgEAEQgDADgCADIgBAFQAAABAAABQABAAAAABQAAAAABAAQAAAAAAAAQAIAAAbgaIAAAAIgUAFgAB2ARIAAABIAAgBgAhrgPQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgFAEgDQAEgEAEAAQAFAAAAAFQAAAEgEAFQgDADgFAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_1.setTransform(-587.7,-224.3);

	// namelabel
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5.3,1,1).p("Aj1hJIHrAAIAACTInrAAg");
	this.shape_2.setTransform(-588.9,-224.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aj1BKIAAiTIHqAAIAACTg");
	this.shape_3.setTransform(-588.9,-224.7);

	// nametag
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF2E2E").ss(5.3,1,1).p("AkKiYIIVAAIAAExIoVAAg");
	this.shape_4.setTransform(-588.9,-229.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF2E2E").s().p("AkKCZIAAkxIIVAAIAAExgAj1CGIHqAAIAAi8InqAAg");
	this.shape_5.setTransform(-588.9,-229.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-618.2,-247,58.8,35.9);


(lib.eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyelid
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC33").s().p("AjmAnQgOgSAAglQAAggAMgJQALgJAhABIBQADQA9AAA9gKQCGgHA0APQAtANAAAmQABAcgKAOQgMASghAKQhBASjxAAQhWAAgdgkg");
	this.shape.setTransform(32.8,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC33").s().p("AjnBZQgPgTAAgnQAAgfANgIQALgIAgAAIAJABIgBgYQAAglAggTQAygdCIAAQBVAABFBLQAZAbAOAWQAOALABAUQADAJAAAIQAAAOgMAWQgQAhgcAAQgUAAgPgEQhQAMjAAAQhWAAgdgkg");
	this.shape_1.setTransform(32.9,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33CC33").s().p("AjSBtQgSgJgLgSQgLgUAAgYQAAgOAEgLIAAgJQAAgeAVgPQADgMAWgLQACgLAIgCQADgLALgIQAGgZAqgLQA2gTBvgEQBlgCA/A3QAgAWAKAcQAJASgCASQgBAJgEAHQAEAPgIAXQgLAbgWAMQgRARgSALQhOAziwAAQhWAAgrgvgAAghIQhcAAgkAUQgVAMgCAXQAegCBXgMQBXgMAdgCQgmgbgqAAIgCAAg");
	this.shape_2.setTransform(32,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CC33").s().p("AjfBaQgdg3AAg4QAAggAegVQgEgPAKgXQACgVAKgGQAHgKAVgDQAOgMAygFQA6gJBWgHQB2gFA5AjQAnASAFAhQAEAYgFAQQgEAJgIAIQAHARgEAZQgFATgQAXQgPAigVAbQhLBZigAAQh5AAgzhhg");
	this.shape_3.setTransform(31.7,30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33CC33").s().p("AjeBbQgkhJAAhCQAAgfAmgcQgLgTAAgiQAAgfANgKQAKgIAhABIBQADQA9AAA+gLQCGgHA0APQAtAOAAAlQAAAegJAPQgGAJgNAHQALAUAAAZQgBAQgIAjQgNAwgYAqQhJCBiQAAQiLAAg+iAgAALAeQgUADgCACIAsgIIgWADg");
	this.shape_4.setTransform(31.4,36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},24).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},79).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},3).wait(20));

	// shine
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAjA5QgEgDAAgHQAAgHAEgEQAEgEAHAAQAGAAAEAEQAFAEAAAHQAAAHgFADQgEAFgGAAQgHAAgEgFgAguASQgOgOAAgRQAAgUAOgPQAOgNAUAAQASAAANANQAOAPAAAUQAAARgOAOQgNAOgSAAQgUAAgOgOg");
	this.shape_5.setTransform(24.4,36.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(145));

	// pupil
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhwBhQgugvAAg/QAAhCAugwQAKgJAKgHIC4AAQAKAHAJAJQAwAwAABCQAAA/gwAvQguAvhBAAQhAAAgwgvg");
	this.shape_6.setTransform(29.5,41);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(145));

	// white
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DBDB6C").s().p("AidBJQhDhCAAhbQAAgcAHgaIG0AAQAFAaAAAcQAABbhCBCQhCBChcAAQhbAAhChCg");
	this.shape_7.setTransform(31,41);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(145));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33CC33").s().p("AjeDfQhchcAAiDQAAgbAFgaQAPhgBIhJQBchcCCAAQCDAABcBcQBIBJAPBgQAFAaAAAbQAACDhcBcQhcBciDAAQiCAAhchcg");
	this.shape_8.setTransform(31.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,63);


(lib.desk = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322A1F").s().p("EglRAErIAApVMBKjAAAIAAJVg");
	this.shape.setTransform(232.1,53.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F4232").s().p("EglRAA3IAAhtMBKjAAAIAABtg");
	this.shape_1.setTransform(232.1,3.6);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#322A1F").s().p("EglRAErIAApVMBKjAAAIAAJVg");
	this.shape_2.setTransform(232.1,33.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.6,-1.9,477.4,85.2);


(lib.code = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,434,991);


(lib.croc = function() {
	this.initialize();

	// nametag
	this.instance = new lib.nametag("synched",0);
	this.instance.setTransform(-318,-11,0.883,0.883,0,0,0,-589,-229.2);

	// glasses
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6.4,1,1).p("Ag5hYQgCAFgCAFQgOBpifBVQifBVhwhHQgLgGgJgJQhRhMgjh3Qgjh6AehbQAfhbBPgBQBPgBB7AqQBHAYA+AfQAtAWApAZQBDAqADA8QAAAEAAAFABVhnQACgCACgCQAfgmAyAAQAGAAAHAAQBMADBwAmQB7AqBhA8QBgA6gkBdQglBeiwBfQhaAwhBADQg+ADhSgyQhRgygXh4QgWh4Arhb");
	this.shape.setTransform(-353.6,-176.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(145,236,224,0.251)").s().p("AEbGKQBBgDBagwQCwhfAlheQAKgZAAgXQAAg+hGgrQhhg6h7gqQhwgmhMgDQBMADBwAmQB7AqBhA6QBGArAAA+QAAAXgKAZQglBeiwBfQhaAwhBADQgxgDghgfQhShNgih4QgihwAZhVIALgBIAAAEQAAAHACAGQAFALANAAQAGAAAEgDQAQgFATg+QAAgQgJgDQgIgEgMAJIgBABIgBgDIgQgFQAegnAwgDIAHAAQBOgBB7AqQB7AqBhA6QBgA8gkBdQglBeiwBfQhhA0hEAAIgKgBgAn5CDQgLgGgJgJQhRhMgjh3QgThAAAg5QAAgxAOgrQAfhbBPgBIAEAAIAAAAIABAAQBJABBuAkIAEABIABAAIADABIAGACQBHAYA+AfQg+gfhHgYIgGgCIgDgBIgBAAIgEgBQhugkhJgBIgBAAIAAAAIgEAAQhPABgfBbQgOArAAAxQAAA5ATBAQAjB3BRBMQAJAJALAGQgWgIgSgRQhRhMgjh3Qgjh6AehbQAfhbBPgBQBPgBB7AqQBSAcBHAlQAjASAfATQBJAugDBBQgHABgFAFQgEgSgQgCQgWgCAAAVIADAWQAFAVAPAAQALAAAFgHIADAGQgmBbisBbQhhA0hEAAQgdAAgYgKg");
	this.shape_1.setTransform(-353.6,-176.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAjA0IgIgBIhtglIgDgBIgMgSIgEgGIADgFQABgFAAgNIgBgMQAGgEAHgBQAGgCAIABIAGABIAAAKIAAgKQAeAFBoAgIAQAFIAQAEIABAEQgPAIgHAPQgNAGAAAYIgLABIgHAAIgOgBgAhSAOIAFgLIgFALgABBgJIAEgFIgEAFgAhBgzIAAAAg");
	this.shape_2.setTransform(-351.6,-185.7);

	// eyebags
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#26A426").s().p("ApoMqQA7hEALgQQAJgNARg1QAahRgKgvQgWhsiiguIgHgJQABgDAEgEQAFgDAEAAQCsAyAZBzQALA1gcBYQgUBAgJANQgKAOhEA+IgIgIgAtpDVQgDgBgPgdQgQgegFgNQgDgJgpgZQgrgagFgKIAEgLQBJASAeAwQARAbAVA5IgEAEQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgGgBgANmhbQgDgBAAgQQAAgMARgdIAIgPIA3haQAUgjAPgiQAKAHAMADQgbA+hDBmIglA4QgBABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIAAAAgAK3oPQhAgVg2gmQg2gngFgeQARgDA1AsQA+AyAVAHQAIADAeAFQAbAFAEAAIAHAEQACACgCAIQgEALgNAAQgKAAgZgIgABKrGQgrgOgvgqQgpglACgEQACgIACgBIAAgBQAGABAmAhQAmAjA0ARQA2ARAhgBQASgBAHgDQAMAEgEACIABAIQgKAMgPADIgKABQgdAAhCgVg");
	this.shape_3.setTransform(-400.7,-91.8);

	// eyes
	this.instance_1 = new lib.eye();
	this.instance_1.setTransform(-326.7,-176.9,0.907,0.907,10,0,0,31.6,31.6);

	this.instance_2 = new lib.eye();
	this.instance_2.setTransform(-381.5,-193,0.907,0.907,33.5,0,0,31.5,31.6);

	// glasses arms
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggAPIg1g4QAEgFAAgFIAGgGIAbgbQARAIAZAVQAdAcAeAjQAcAjAFAPIgNAQQgJALgIABQgYgBhAhGg");
	this.shape_4.setTransform(-410.5,-207.6);

	// noseholes
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#26A426").s().p("ACmDmIgKgDIgDgBQgYgIgMgNQgSgPgBgSQgCgLAFgOIAFgKIAOgpQAHgPAKgEIAHgCQAdgUA5AXQARARgBAUQAGAOAFAbQgGASgXAbQgbAegYAAQgGAAgFgBgAjQg+QgMgEgEgDIgGgJIAOgDQgmgRgBgYQgBgJAFgMIAHgQQALghAFgJQANgeASABIBHAWIAGAHQAGAAAFADQAQAIgEARQAGAFABAIQACAHgKAgQgHAWgbAVQgZAUgbAAQgMAAgMgEgAjKhtQgOgHgHgIIgBACIATANIADAAIAAAAgAjHi+IABgBIACAAIgCgCIgBADg");
	this.shape_5.setTransform(-488.3,-49.2);

	// nostrils
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#33CC33").s().p("AA/FpQhTgwgZheQgZheAwhUQAvhSBdgaQBfgZBVAwQBUAvAYBdQAaBfgwBUQgxBUheAZQghAJgfAAQg7AAg3gggAknAsQhVgugaheQgYheAwhTQAxhVBdgaQBfgZBUAwQBTAxAYBeQAaBegxBVQguBSheAZQghAIgfAAQg7AAg3ggg");
	this.shape_6.setTransform(-486.7,-46.6);

	// snout
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33CC33").s().p("AssOEQkBiTg6inQgmhpAthNQASgfAKgJIALgGQATgcATgSQADgHAEgHQAFgKC8ifQDXi0A1gxQBqhjBqhtIAlgkQAKgWBchmQBihrAIgaQAOgtAUgbQAlhvAugcQAngZAjAvQAhAvAIBVIABAbQAKgPAOgJQApgaAPABQAIABANARQAjAsBxgSQAlgFAMgfIAVg2QA5hDAuAKQAIgjgKgRQgMgUAIgXQAEgPAGgKIgMgDQgRgFgHgJQgHgLAFgMQgQgIgEgIQABgDAEgDQAEgDAFAAIA/AOQBCAXAUAkIAOAFIAKASQgFABABAEIgBADQgEACg9gYQAVAWAEANQAEAKgFAPIgHAUIgUgGQgRgFgLgCIgDATQgCAPgCAGIgCAGQAQALAQAXQAXAlALA0QAKAygJAcIgHARQAiAGAsAZQBOAbB2AsIAbgYQAigcAhgVIAJgmIAGgYQAFgRAKgIQARgNANAMQgEgOADgKQALgkASAMQAPAJAQApQAPAkAHApIAFAgQAHAYACASQAGBMgHAdQgFAWgWA5QgNApgYApQgPAbgOAPIgBACQgTAqgTARIgEAGQgbAigSgGIgDgBIghApQiiDEhGgFQgqAyhtBuQi+DBjECPQmVEsktAAQiPAAh3hFgAKUmKIgFgEIgdgHgAQ+mTIABADIAAgJIgBAGgAQeo9QgDAHgDAJQAEgCAFAAIABABIAEgBIgBgCQgDgLgBgIIgDAHg");
	this.shape_7.setTransform(-408.1,-105.8);

	// teeth
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ApkHpQgUgwgQgbIAHgVIAUhBQAigNA7AWQAoAQAYAZQgWAVgUAuIgnBIIgOAaIgHAEIgug6gAlYHDQgFgRgKhHQAEgLATgCQgCgGAAgHQAAgHAFgOQAUg/AfgZQAagVAcAKQAZAKANAeQAGAOACAQQgJABgIAJQgSARgJAcQgTA8gtB6IgCAFQgjgTgRg7gAs2FvQACgIAEgCIAIgBQAWAHAwAUQAEADAEAnQgCAGgiAVQgjAWgNAAQgOhaAGgRgAAAGUQgrgOgfhRIgUhIIgEgBQgfgKgDgtIAEgvQAMgmAbgSQA5gnBlA+IgEACQgRAPgEAMQgEAOgGBNQgHBNABAYQABAVgDBBIgDAAIgCAAQgJAAgMgEgAClCoQgZgbgGgVIgGgDQADgdgSgEIAAgEIAGgkQALgjAmgjQAugtAsAUIAAgBQAIACAFAEQgJAJgEAJIgZCwQgEApgCAhQgvgmgPgQgAGcAYQhQgxgrgLQgBgHAAgFQgBgLABgNQACgWADgJQAUg+AcgaQAqgoBFAMQgDAGgCAIQgCAEAHAOQgLAsgFCqIgBAMIgXgPgAI4ifQhChkgiAUIADgIQAGgUAjgiQAlgjAigSQAPgHALgDIABAgQgEAEgCAHQgEANgLA6QgLA7gBAWIgCATIgHgJgALTlNIgUgKQgWgMgkgNIgGgEQgCgDADgIIACgHIABgBIAAgGQgDgFgMgJQgIgHABgFIAMglQAFgSAEgGQAHgRAIAAQAqAPAWAJIADACQAEgGAHgBIADAOIAGADIgBAGIACAGQADAKgEAMIgCAFIACAWQABA0gDALQgEAMAAgDQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgLgCgAMHnPIgCgCQgBgCACgHQABgCAHgEIABgHQACgGAIgFIAJgEIgBgQQgDgQACgGQACgHACABIAAABQAgAJgRA0IgHASQgFAIgMABg");
	this.shape_8.setTransform(-402.2,-50.4);

	// tongue
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E06CD8").s().p("AmbIMQhhgHgwgQQhigfg1gsIgLgDQg6gSglhDQgQgNgMghIgCgKQgYgeADgMQAKgdAWAMQALgJAPAVIAPAaIAQASQAXAZAOAHQAQAGANALQgCgnAIgbQBjgkCCg5QEFh0Cfh3QD3i8C2hJQDnhdg+DCIgFAKQBWhzAyg6IA8g/IABgLQAGgUATACQAcgfAWgCQAHAAAEADQASgZAOAPQAQAQgHAWQgKAdiWC6QipDSgNAUQg2BOh/CLQg/BIgpAgQgZAVhLAdIgQAHQhJA7hYAfIg/AlQg3AegNAGQgqARg1AFQgYADgeAAQgnAAgzgEgAlAHbQA9ABAdgHIAJgCQguAFg1ADgAqaEfIAFA/QA3gyAygoQg2AQg4ALgAGIAwIgfAjIACABQAUgXAUgZIgLAMg");
	this.shape_9.setTransform(-410.8,-47.1);

	// jaw
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#33CC33").s().p("AtSP4QhYgsgmgxQgigngfgzQgrhFAAgkQAAgmAWgLQAVgKAcAjQAIAKAJAOQASBFAiAsQA8BNBXAgQCDAwEHgKIAYAAIANgHQATgZBJgkIAbgMICBhNQAogYBihJQBthPA6glQA4gjBOhGQArgnAigiQA6hUA7hHIAnguQCNigAABvQAAAHg8BSIAAAHQAAAHgEALQA2gXAAAxQAAAXgrAxQgkAngfAZQgdAYhHAzQhIAzgPAGQgWAUggAVQhCAqgmAZQhDAtgzAtQg2AyjEBlIgNAHQhYA4g4AdQgTAxi+AAQjJAAiRhIgAPrjYQgUAZgcAAQgQAAgFgDIgOgJIgCgLQgDgJAAgOQAojQAJg4QgUgVgFhAQgBhBgCgoQgNgngSgnIgeg7Igqg6QhEheAAgDQAAgtAcACIABAAQgJgRAAgFQAAgZAQgJQANgIAVAGQAiALALAbQALAGANAOQAcAdAYAxQAZAzAGAsQAPAfAJArIAEANQAXAnAGBRIABARIAAABQABAKANAlQAOAmACAUQAFAsADBOQACBAAAAbIgBBPQgGA8ghAAQggAAgKgtg");
	this.shape_10.setTransform(-391.4,-90.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#28AA28").s().p("Aq4JQQhXgfg8hOQgigrgThFQgIgOgIgKQASgxAigOQALgECcgdQA2gKBUgvQBWgwAggHQCNgiB5hYIBhhKQA7gvArgbQBTg0BthiQCHh7AsghQAdgXBegZQBtgdA1gbQAIgEAjggQAiggAXgMQA/ggApBIIAUgeQAJANAAAMQABAKgGATIgFARIgBABQgzCOiuD4IgWAgIgnAuQg7BHg7BTQghAigrAnQhOBGg4AjQg6AlhtBPQhlBJglAXIiBBNIgbANQhKAkgTAYIgMAIIgYAAQgsABgoAAQjJAAhtgog");
	this.shape_11.setTransform(-401.5,-55);

	// spikes
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#33CC33").s().p("AGObmQgDAAgBgRIAAAAQgrAAgHgnQACgzgCgQQgwAVgUg0IgLg8QgGhBAEgSQAKgsA2gxQgPglgggWQgcgSgBgOQgFg4AfgGQgcgTgGgJIABgUQAoAGB3BPQCHBZAFA6QABAGgIAdIgJAbIgdBXIgkBnIgBATQgFAngUASIgJAaQgCADgKADIgHAAQgJAAgBgBgAECQ2QgGgHgCgRIAAgJQgGAFgEAAQglAEgMgcIgGggIAAgPQgMAHgJABQghADgOgXQgGgJgCgQQgBgTA7hJQAbghApgtQhYgegbgLQgpgQgDgfQgDgeAZgRQAKgGALgCIgIgEIgDgeQApAOA8AJIBgAOQBjAQAEAsQACAUg4CiQg6CpgDAgQgDAAgFAFQgGAFgGACQgLgDgEgGgABHHqQgDAAgBgQQgCgUATgnQgNAIgJABQhBAGgHgzQgDgPADgcQAEgegBgJQgDgigdgjQgcgjgCgSQgDglAUgMQgWgPgCgOQgBgQABAAIACAEQAugRCRA4QCQA3ACAVQACAagqAtQg3A6gMAXQgHANgYA5QgTAtgRAYIgHAAQgJAAgCgBgAhpgjQgDgCgCgRQgBgNAKgrQgLAJgMABQgXACgNgMQgcAugDABQghADgNgXQgHgKgBgPQgDghAjhRQAghJApg/Qh9ADgsgQQgfgLgDgeQgDghAugQQAWgJAegDIgBgFQCBgDA/AMIAZAGIAJACQAvAQACAeQABADghBQQglBTgBAiQgDBcgpBbQgPgBgCgCgAgzksIAAADIACgJIgCAGgAkcpZQgHgLgBgPQgBgKAfg5IgHgHIg5AkQgpAEgPgWQgHgJgBgRQgDgcBMg7Qg0gJgEguQgDgoAngNIAHgFQATgoBdAgQAtAQAqAaIACABIAEADQAagNAMAaQAEADABAFIABAMIABABIAAAIIABAEIAAAHQABAGgEALQgFAQgMASQgRAegfAuQhHBrgUACIgIAAQgbAAgLgTgAmLwTQgGgLgCgQQgCgYAYg+QALgbAMgZQgWgQgagXIgZgYQgOgIgMgLQgPgNgJgQQgFgFAAABQgBgEABgDIgBgDQgEgrAggIQADgXATgHQAWgIAlAPQAiAOAcAYQAMAKAHAKQAhAMAbAHIAHgCQAigGAGA+QAAAJgaAxQgBAMgGAKQgEAHgIAFIgVAnQhEB3gPABIgHABIgDAAIgIAAQgbAAgLgTgAml3UQAAgbASgnQg3A0gOABQghADgOgWQgHgLgBgPQgCgSAggmQAUgaAYgVQgJgBgJgCIgFABQgLgBgEgCIgDgDQgTgGgNgLQgMgKgDgOIgBgJQgCgeAngPQAjgNA2ADQA0ADAoAOQAVAIALAKIACgBIAEAEQADADACAKIAAACIABACIAAACIAAACQAAAHgFAOQgJAcgbA4QgvBeggAbQgNgEgIgHg");
	this.shape_12.setTransform(-254.1,3.1);

	// belly lines
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ABAD5A").s().p("Ah2MVQhYgRgcgIQgsgNAAgjQAAgVAPgJQAMgHAbAAQAQAAAjAJIA3AQIEzAAQATgEBVgoQBNgZgBA/QAAAQgOAPQgKAKgPAKQgwAghTAIgAjnCkQg6gRgdgTIgLABQgPAAgGgEIgOgJIgEgeQAMgWAOgIQAEgGAEgEQAYgVAxApQBfAVgMANQALAEEcAKQALgMAWgDIAxAAQAYAGAKAOQAHAJAAAKQAAAZgpAQQgMAFgRAEQgxALhSAAQiXAAh3gjgAkNlTQhQgkAAgoQAAgnAagFQAUgEAsASQAbALA+AcQA4AZAmAHID2AFIAAAAQAXAGAKAOQAHAJgBAKQAAARgBAEQgDAJgNAEQgHACgPABQgkAEhUAAQjRAAhugygAjQq7QgLgFgHgFIgDAAQgPAAgGgEIgNgJIgGgeQAagsAdALQALAEAHAIQAugGBXAKQBFAJA4APQA5AQAAAMQAAAggPAGQgXAKhpAAQh9AAg7geg");
	this.shape_13.setTransform(-369.9,86.2);

	// right arm
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#33CC33").s().p("AicBuQhFgsgvgwQgpgqAAgWQAAhGAygSQA9gVCBA9QBPghA1grQBXhFA6AQQAzAPAAA6QgBAdgqAoIACAAQAwALAUAaQAMASAAAaQAAAfgnAkQAgALAQAaQAMAUAAAZQAAAegXAXQgZAZgmAAQjJAAi4h1g");
	this.shape_14.setTransform(-324.4,39.4);

	// claws
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DCE9DC").s().p("AnrB7QgCgEAAgIQAAgYANgTQAVgeAuAPIAHADQACABABAIQgBAMgdATIgyAgQgGgCgCgDgAnGBQIABABQADABAFgBIAIgGQgHAAgKAFgAGyBDIgBgBQgDAFAAgNQgBgXAYgTQAOgKAjgVIhhAAIgLgKQgEgEgBgBQAAgLAjgNQAjgOAmgDIgLgIIg4glIAAgLQAJAAAfAIIA0AOQAfAJgBAGQgBARAIAMIAAAHQgCAEgHAAQgPAAgagOIAAABQAAAGgCADIACgBQAIADADAHQgFAFgKAGQAIADABAGIgBAGIAEACQADABAAAIQAAAHgIAGQAPgFAHAAQAEAAAEAAQACAAAAAIQAAAHgEADIgEADIASgDQAEACAEAAQADAAAAAIQgGAIgJAHQgwgCgVANQgVAOgQAAQgHAAgDgBgAGrglIANAAIAAgCIgNACgAo0ApQACgJADgHIgFgEQABgHAFgIQAGgHAIgEIAIAAQAdgUA1APIABAGQAPAEAEANIgHAUIglAAIgRAIIgxAMQgMgFgIgHgAnXguQgrgigKgoQAZgJA6AeQA9AggEAgIgBANQgDAHgPAAQgcAAgogfg");
	this.shape_15.setTransform(-403.4,37.7);

	// belly
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C8CA6A").s().p("AEbbxIgegfQhMAIgYgcQgIgJgCgYQgCgNAMgQQALgRgCgNQAAgHg8hCQhjhxgtg5QjvkbiMj5Qgdg1gdhCQg1gyhFj7IgPg7Iglh1IAAgXIAAAAQgHgagGgxIgHgdIABgWIgFgxIgJhrQgbh1AAhkQAAhuARhpQAZiJAShpQAAixBDiDQAKgkAUg0QAfhTAMgiQgQg1Akg6QAqhBBng4QAdgQAogtQAWgYAdgkQASgVA5geIAKgGQA+ghANgSQAOgUAPgrQAQgiAhgIQAvgLARAuIALBBIAwDxQAhCpAHAtIAIAJQATAcAFA2IAFCIQADCNADA9QADAsAXCYQAFA8gIAiIAAAJQAFBXAPA5QA7DkCTFLQBGCeAoCjQAfB9AOB/QAIBDAqD3QApDxACARQAJBsg/ChQgeBNggAsQACAdgGAOQgKAZgiADQgDABhKgKQg9gIhEAQIgLACQgYAAgZgVgAg1yOIAGgBIgEgOIgCAPgAmdz9QAOgUAQgUQgXAOgHAag");
	this.shape_16.setTransform(-337.4,107.9);

	// left arm
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#33CC33").s().p("AkDLiQgeg7gihWQghhUgKgXQhRi/gKgzQgGgcAAipQAAhKAOh2IgigjIgsg3IgrgUQgkgMgegWQg/gigdgZQgjgKgRgRQgMgMgCgOIABgPQAAgiAYgRQAagSAvgIQAPgHAVgBQANgBAaACQAigBApABQA4ACATgcQAOgkALgQQALgQAMgNIASgnQAriSA+gRQAZgWAcgGIAHgBQAfgfAgAMQAXAIAQAdQAPAbAAAcQAAAFg8EDQgMA8gKA2QANAJAHAKQAMARAAAfQAAARgHAOQgDAHgPAWQAvALAfAgQAbAdAAAcQAAAXgMAWQgVAmgvAAQgPAAg1gXQgCAgAAAcQAAClAtCjIAfBsQAOA1AAAiQAAAegKAXIgBABIAQAeQAkBDBGBxQAvBPAAAMQAAAXgKAWQgVAmgvAAQhcAAhei3gAJZirQg5hQgRgLQgrgghZgsQgXgKgIgLQgJgNAAgZQAAgOA6hyQBOiXAQglQAKgUAJg+QAJgyAXgaQBAhFAzAeQAqAYAAAyQAAAkhECzQg9CjgQAcQA+AvBMBOQBXBaAAAhQAAAbgSAZQgWAhgoAAQgzAAg/hKg");
	this.shape_17.setTransform(-371.4,81);

	// body
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#33CC33").s().p("EgBxAh9QgJgHAAgJIABgKQgBgOAEgFQhdg+ifjiQj1l7hahyQiWi9hHjfQg3isgWj4QgFgxgFiIIgCh2QgCgjABgXQgHgjAFgvIAPhZQAFgcAJgUQAQheAah7IAljBQAXh5AThKQAbhmAphcQAYg5AxhEQBChfAGBKQABADgxBOQg1BUgJAeQgKAfgWA9QgTA2gKAoQgQBCgVB2QgZCOgKAtQgOBBgLA6QAKgBAMACIDKgSIAJgIQAMgLBPg7QCOhsAdg8IBCiGQAlhTAIg5QAOhaBdi6IAMgYQgZgxghhWQhJjFAAAGQAAgNAKgWQAKgWANgNIgDghQAAgdAXgZQAVgXAfgJIAKgDIAMgiQArh4AvgEIANgpQAahSApgSQAPiGAoBEQgPhQgFg0QgIhOAFg4QAIhwBOBQQAEAeAHBdQAGBNAIAuQAOBXAxCcQAzCpAQBJQBCFGAmCZQBDEVBNDRICwHXQBjEZApDMQAQBUAYCjQAXCQAkBhQAPArAJBPQAKBaAIAhQAGATAjBeQAdBMAEAqQAEAwgRCCQgKBBgLApIAAAGQACAagpA4QgsA9hEA6Qi0Cci8AOIk+AiQgQAGg0ALQgwAIgWACQgbADgYAAQg2AAgTgPg");
	this.shape_18.setTransform(-302.8,62.8);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.instance_2,this.instance_1,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-528.2,-232.6,328.5,520.4);


(lib.computer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(17.2,1,1).p("EhFKgjxMCKVAAAMAAABHjMiKVAAAg");
	this.shape.setTransform(441.1,229.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EggzAg0MAAAhBnMBBnAAAMAAABBng");
	mask.setTransform(657.2,230);

	// code
	this.instance = new lib.code();
	this.instance.setTransform(671.5,513.7,1,1,0,0,0,216.8,495.4);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:-46.3},0).wait(2));

	// code border
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF00").ss(1.2,1,1).p("EggzggzMBBnAAAMAAABBnMhBnAAAg");
	this.shape_1.setTransform(657.2,230);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4));

	// graphline
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF6600").ss(5.2,0,0,3).p("EggsAImIBQhkIBQCWIBkmGIAAFUIA8kOIBQDwIAUmkIBGFyIAyn8IAeHyIBuqcIAKKSIBGkiIAoCgIAejIIBGBkIA8taIAyOqIBkkOIBGFAIAej6IAyDSIAok2IBHC+ICWqwIgoRUIDm3aIgKbyICCuWIAUGsIBai0IAoCMIBQiWIBOkgIAyD4IBumiIB4i0IBukOIBQEOIBkhGIAyFAIA8C8IA8D6IBuk0IAeCeIBQlSIAUH8IBasKIA8KIIBaoaIAoKwICqqSIgeFwIBakWIBQC0IA8l8IA8DmIB4nMIAoC0IBaDIIAAkOIBaDIIAKjI");
	this.shape_2.setTransform(226.3,276.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4));

	// grid across
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FF00").ss(1.2,1,1).p("EggugcvMBA1AAAEggugX6MBA1AAAEgg4gTHMBBTAAAEgg4gOVMBBTAAAEgg4gJiMBBnAAAEggugEwMBBxAAAEggkAABMBBJAAAEgguAE0MBBTAAAEghCAJmMBBTAAAEghCAOYMBBJAAAEgguATLMBBTAAAEgguAX9MBBJAAAEghCAcwMBBdAAA");
	this.shape_3.setTransform(227.5,232.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4));

	// grid
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FF00").ss(1.2,1,1).p("EAcwgguMAAABA1EAX6gguMAAABA1EATIgg4MAAABBTEAOWgg4MAAABBTEAJjgg4MAAABBnEAExgguMAAABBxEAAAggkMAAABBJEgEzgguMAAABBTEgJlghCMAAABBTEgOYghCMAAABBJEgTKgguMAAABBTEgX9gguMAAABBJEgcvghCMAAABBd");
	this.shape_4.setTransform(224.1,230.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4));

	// graph
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00FF00").ss(1.2,1,1).p("EggzggzMBBnAAAMAAABBnMhBnAAAg");
	this.shape_5.setTransform(226,230.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(4));

	// bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("EhFdAjyMAAAhHjMCK6AAAMAABBHjg");
	this.shape_6.setTransform(444.6,229.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-8.5,902.6,475.2);


// stage content:
(lib.switchboard = function() {
	this.initialize();

	// desk
	this.instance = new lib.desk("synched",0);
	this.instance.setTransform(971,902.4,5.006,5.006,0,0,0,232.1,41);

	// crocodile
	this.instance_1 = new lib.croc();
	this.instance_1.setTransform(1532.5,540.1,1.439,1.439,0,0,0,-363.9,27.4);

	// computer
	this.instance_2 = new lib.computer();
	this.instance_2.setTransform(714.2,350.1,1,1,0,0,0,451.1,229.1);

	// room
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8EEF0").s().p("EiZdBXhMAAAivBMEy7AAAMAAACvBg");
	this.shape.setTransform(966.2,538.1);

	this.addChild(this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(736.1,518,2389.8,1152.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;