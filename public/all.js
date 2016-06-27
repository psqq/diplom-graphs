/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var CanvasGraphConstructor, GraphBuilder, GraphTable, g1, g2, gt, mainloop, mainloop_objects, prg;
	
	CanvasGraphConstructor = __webpack_require__(1);
	
	GraphBuilder = __webpack_require__(5);
	
	GraphTable = __webpack_require__(6);
	
	mainloop_objects = [];
	
	mainloop = function() {
	  var dt, step, time;
	  time = Date.now();
	  dt = 14;
	  step = function() {
	    var cur_dt, j, k, len, len1, obj;
	    cur_dt = Date.now() - time;
	    time = Date.now();
	    cur_dt = Math.min(cur_dt, 1000);
	    while (cur_dt > 0) {
	      for (j = 0, len = mainloop_objects.length; j < len; j++) {
	        obj = mainloop_objects[j];
	        if (obj.update != null) {
	          obj.update(dt);
	        }
	      }
	      cur_dt -= dt;
	    }
	    for (k = 0, len1 = mainloop_objects.length; k < len1; k++) {
	      obj = mainloop_objects[k];
	      if (obj.render != null) {
	        obj.render();
	      }
	    }
	    return requestAnimationFrame(step);
	  };
	  return requestAnimationFrame(step);
	};
	
	mainloop();
	
	g1 = GraphBuilder.builder1({
	  "vertices": {
	    "0": {
	      "x": 198,
	      "y": 375.1875
	    },
	    "1": {
	      "x": 93,
	      "y": 326.1875
	    },
	    "2": {
	      "x": 302,
	      "y": 338.1875
	    },
	    "3": {
	      "x": 43,
	      "y": 250.1875,
	      "name": "3"
	    },
	    "4": {
	      "x": 154,
	      "y": 247.1875,
	      "name": "4"
	    },
	    "5": {
	      "x": 300,
	      "y": 272.1875,
	      "name": "5"
	    },
	    "6": {
	      "x": 261,
	      "y": 208.1875,
	      "name": "6"
	    },
	    "7": {
	      "x": 354,
	      "y": 229.1875,
	      "name": "7"
	    },
	    "8": {
	      "x": 103,
	      "y": 170.1875,
	      "name": "8"
	    },
	    "9": {
	      "x": 37,
	      "y": 58.1875,
	      "name": "9"
	    },
	    "10": {
	      "x": 113,
	      "y": 62.1875,
	      "name": "10"
	    },
	    "11": {
	      "x": 194,
	      "y": 60.1875,
	      "name": "11"
	    },
	    "12": {
	      "x": 327,
	      "y": 183.1875,
	      "name": "12"
	    },
	    "13": {
	      "x": 361,
	      "y": 145.1875,
	      "name": "13"
	    },
	    "14": {
	      "x": 320,
	      "y": 113.1875,
	      "name": "14"
	    },
	    "15": {
	      "x": 357,
	      "y": 77.1875,
	      "name": "15"
	    },
	    "16": {
	      "x": 317,
	      "y": 46.1875,
	      "name": "16"
	    }
	  },
	  "links": {
	    "0": ["1", "2"],
	    "1": ["3", "4"],
	    "2": ["5"],
	    "3": ["8"],
	    "5": ["6", "7"],
	    "8": ["9"],
	    "10": ["8"],
	    "11": ["8"],
	    "12": ["7", "13"],
	    "13": ["14"],
	    "14": ["15"],
	    "15": ["16"]
	  }
	});
	
	g2 = GraphBuilder.builder1({
	  "vertices": {
	    "0": {
	      "x": 191,
	      "y": 380.375,
	      "name": "0"
	    },
	    "1": {
	      "x": 50,
	      "y": 320.375,
	      "name": "1"
	    },
	    "2": {
	      "x": 309,
	      "y": 303.375,
	      "name": "2"
	    },
	    "3": {
	      "x": 68,
	      "y": 190.375,
	      "name": "3"
	    },
	    "4": {
	      "x": 306,
	      "y": 180.375,
	      "name": "4"
	    },
	    "5": {
	      "x": 65,
	      "y": 71.375,
	      "name": "5"
	    },
	    "6": {
	      "x": 184,
	      "y": 187.375,
	      "name": "6"
	    },
	    "7": {
	      "x": 266,
	      "y": 89.375,
	      "name": "7"
	    },
	    "8": {
	      "x": 352,
	      "y": 82.375,
	      "name": "8"
	    },
	    "9": {
	      "x": 177,
	      "y": 297.375,
	      "name": "9"
	    }
	  },
	  "links": {
	    "0": ["2", "1", "9"],
	    "1": ["3"],
	    "2": ["4"],
	    "3": ["5"],
	    "4": ["7", "8"],
	    "6": ["9"]
	  }
	});
	
	gt = [new GraphTable("#gt1", g1), new GraphTable("#gt2", g2)];
	
	mainloop_objects = mainloop_objects.concat(gt);
	
	prg = function(i) {
	  return console.log(JSON.stringify(GraphBuilder.make_options_for_builder1(gt[i].graph)));
	};
	
	_.defaults(window, {
	  GraphBuilder: GraphBuilder,
	  prg: prg,
	  gt: gt
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var CanvasGraphConstructor, Graph, GraphDrawer, utils;
	
	utils = __webpack_require__(2);
	
	GraphDrawer = __webpack_require__(3);
	
	Graph = __webpack_require__(4);
	
	module.exports = CanvasGraphConstructor = (function() {
	  function CanvasGraphConstructor(container, graph) {
	    this.container = container;
	    this.graph = graph != null ? graph : new Graph;
	    this.can = $("<canvas>").get(0);
	    this.ctx = this.can.getContext('2d');
	    this.can.width = this.can.height = 400;
	    this.mouse = {
	      x: 0,
	      y: 0,
	      target: null
	    };
	    this.focus = false;
	    this.handle_events();
	    $(this.container).append(this.can);
	    this.graph_drawer = new GraphDrawer(this.graph, this.ctx);
	  }
	
	  CanvasGraphConstructor.prototype.update_mouse = function(e) {
	    var pos;
	    pos = utils.get_mousepos_in_element(this.can, e);
	    this.mouse.x = pos.x;
	    return this.mouse.y = pos.y;
	  };
	
	  CanvasGraphConstructor.prototype.handle_events = function() {
	    $(this.can).mouseout((function(_this) {
	      return function() {
	        return _this.focus = false;
	      };
	    })(this));
	    $(this.can).mouseover((function(_this) {
	      return function() {
	        return _this.focus = true;
	      };
	    })(this));
	    $(this.can).mousemove((function(_this) {
	      return function(e) {
	        var vertex_name;
	        _this.update_mouse(e);
	        if (_this.mouse.target) {
	          if (_this.mouse.dragtype === "move") {
	            vertex_name = _this.mouse.target;
	            _this.graph.set_vinfo(vertex_name, utils.vec2(_this.mouse.x, _this.mouse.y));
	          }
	          if (_this.mouse.dragtype === "link") {
	            return _this.mouse.linkend = _.clone(utils.vec2(_this.mouse.x, _this.mouse.y));
	          }
	        }
	      };
	    })(this));
	    $(this.can).mousedown((function(_this) {
	      return function(e) {
	        var vname;
	        vname = _this.graph_drawer.get_vertex_byxy(_this.mouse);
	        if ((vname != null) && (_this.mouse.target != null) && _this.mouse.dragtype === "link") {
	          _this.graph.add_link(_this.mouse.target, vname);
	          return;
	        }
	        _this.mouse.target = vname;
	        return _this.mouse.dragtype = "move";
	      };
	    })(this));
	    $(this.can).mouseup((function(_this) {
	      return function(e) {
	        _this.mouse.target = null;
	        return _this.mouse.dragtype = null;
	      };
	    })(this));
	    return $(document).keydown((function(_this) {
	      return function(e) {
	        var ch, i, len, name, ref, v, vname;
	        if (!_this.focus) {
	          return;
	        }
	        ch = String.fromCharCode(e.keyCode).toLowerCase();
	        switch (ch) {
	          case 'v':
	            name = _this.graph.generate_name();
	            return _this.graph.add_vertex(name, {
	              x: _this.mouse.x,
	              y: _this.mouse.y,
	              name: name
	            });
	          case 'd':
	            if (e.shiftKey) {
	              ref = _.clone(_this.graph.vertices);
	              for (i = 0, len = ref.length; i < len; i++) {
	                v = ref[i];
	                _this.graph.del_vertex(v);
	              }
	              return;
	            }
	            vname = _this.graph_drawer.get_vertex_byxy(_this.mouse);
	            return _this.graph.del_vertex(vname);
	          case 'l':
	            vname = _this.graph_drawer.get_vertex_byxy(_this.mouse);
	            _this.mouse.target = vname;
	            return _this.mouse.dragtype = "link";
	          case '1':
	            return console.log(_this.mouse);
	        }
	      };
	    })(this));
	  };
	
	  CanvasGraphConstructor.prototype.update = function(dt) {};
	
	  CanvasGraphConstructor.prototype.draw_draglink = function() {
	    var v;
	    if ((this.mouse.target != null) && this.mouse.dragtype === "link" && (this.mouse.linkend != null)) {
	      v = this.graph.get_vinfo(this.mouse.target);
	      return utils.draw_line(this.ctx, v, this.mouse);
	    }
	  };
	
	  CanvasGraphConstructor.prototype.render = function() {
	    this.ctx.clearRect(0, 0, this.can.width, this.can.height);
	    this.draw_draglink();
	    return this.graph_drawer.render();
	  };
	
	  return CanvasGraphConstructor;

	})();


/***/ },
/* 2 */
/***/ function(module, exports) {

	var dist, draw_circle_with_text, draw_line, get_mousepos_in_element, make_talbe, vec2;
	
	dist = function(a, b) {
	  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
	};
	
	vec2 = function(x, y) {
	  return {
	    x: x,
	    y: y
	  };
	};
	
	get_mousepos_in_element = function(el, e) {
	  var offset;
	  offset = $(el).offset();
	  return {
	    x: e.pageX - offset.left,
	    y: e.pageY - offset.top
	  };
	};
	
	make_talbe = function(arr, o) {
	  var cell, i, j, k, l, len, len1, line, t, tbl, tr, val;
	  if (o == null) {
	    o = {};
	  }
	  tbl = document.createElement('table');
	  for (i = k = 0, len = arr.length; k < len; i = ++k) {
	    line = arr[i];
	    tr = document.createElement('tr');
	    for (j = l = 0, len1 = line.length; l < len1; j = ++l) {
	      val = line[j];
	      t = o.header && i === 0 ? 'th' : 'td';
	      cell = document.createElement(t);
	      val = arr[i][j];
	      if (_.isString(val)) {
	        cell.innerHTML = val;
	      } else {
	        cell.appendChild(val);
	      }
	      tr.appendChild(cell);
	    }
	    tbl.appendChild(tr);
	  }
	  return tbl;
	};
	
	draw_line = function(ctx, a, b) {
	  ctx.beginPath();
	  ctx.moveTo(a.x, a.y);
	  ctx.lineTo(b.x, b.y);
	  return ctx.stroke();
	};
	
	draw_circle_with_text = function(ctx, x, y, r, text, o) {
	  ctx.font = o.fontsz + "px " + o.fontFamily;
	  ctx.beginPath();
	  ctx.arc(x, y, r, 0, 2 * Math.PI);
	  ctx.fillStyle = o.circleColor;
	  ctx.fill();
	  ctx.fillStyle = o.textColor;
	  ctx.textAlign = 'center';
	  ctx.textBaseLine = 'middle';
	  return ctx.fillText(text, x, y + o.fontsz / 4);
	};
	
	module.exports = {
	  dist: dist,
	  vec2: vec2,
	  get_mousepos_in_element: get_mousepos_in_element,
	  make_talbe: make_talbe,
	  draw_line: draw_line,
	  draw_circle_with_text: draw_circle_with_text
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var FONTSZ, GraphDrawer, RADIIUS, utils;
	
	utils = __webpack_require__(2);
	
	FONTSZ = 20;
	
	RADIIUS = FONTSZ;
	
	module.exports = GraphDrawer = (function() {
	  function GraphDrawer(graph, ctx) {
	    this.graph = graph;
	    this.ctx = ctx;
	  }
	
	  GraphDrawer.prototype.get_vertex_byxy = function(pos) {
	    var info, name, ref;
	    ref = this.graph.vinfo;
	    for (name in ref) {
	      info = ref[name];
	      if (utils.dist(pos, info) < RADIIUS) {
	        return name;
	      }
	    }
	  };
	
	  GraphDrawer.prototype.move_vertex = function(vertex_name, new_pos) {
	    return this.graph.set_vinfo(vertex_name, new_pos);
	  };
	
	  GraphDrawer.prototype.draw_links = function() {
	    var a, b, i, l, len, ref, results;
	    ref = this.graph.links;
	    results = [];
	    for (i = 0, len = ref.length; i < len; i++) {
	      l = ref[i];
	      a = this.graph.get_vinfo(l.from);
	      b = this.graph.get_vinfo(l.to);
	      results.push(utils.draw_line(this.ctx, a, b));
	    }
	    return results;
	  };
	
	  GraphDrawer.prototype.draw_vertices = function() {
	    var info, name, ref, results;
	    ref = this.graph.vinfo;
	    results = [];
	    for (name in ref) {
	      info = ref[name];
	      results.push(utils.draw_circle_with_text(this.ctx, info.x, info.y, RADIIUS, name, {
	        fontsz: FONTSZ,
	        fontFamily: 'Monospace',
	        circleColor: 'black',
	        textColor: 'white'
	      }));
	    }
	    return results;
	  };
	
	  GraphDrawer.prototype.render = function() {
	    this.ctx.save();
	    this.draw_links();
	    this.draw_vertices();
	    return this.ctx.restore();
	  };
	
	  return GraphDrawer;

	})();


/***/ },
/* 4 */
/***/ function(module, exports) {

	var Graph,
	  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
	module.exports = Graph = (function() {
	  function Graph() {
	    this.vertices = [];
	    this.links = [];
	    this.map = {};
	    this.vinfo = {};
	    this.change_listeners = [];
	    this.freenames = [];
	  }
	
	  Graph.prototype.on_change = function(callback) {
	    return this.change_listeners.push(callback);
	  };
	
	  Graph.prototype.changed = function() {
	    var callback, i, len, ref, results;
	    ref = this.change_listeners;
	    results = [];
	    for (i = 0, len = ref.length; i < len; i++) {
	      callback = ref[i];
	      results.push(callback(this));
	    }
	    return results;
	  };
	
	  Graph.prototype.generate_name = function() {
	    var res, v;
	    this.freenames.sort(function(a, b) {
	      return a - b;
	    });
	    res = "";
	    while (this.freenames.length > 0) {
	      v = "" + this.freenames.shift();
	      if (!this.is_vertex(v)) {
	        return v;
	      }
	    }
	    return "" + this.count_vertices();
	  };
	
	  Graph.prototype.count_vertices = function() {
	    return this.vertices.length;
	  };
	
	  Graph.prototype.is_vertex = function(name) {
	    return indexOf.call(this.vertices, name) >= 0;
	  };
	
	  Graph.prototype.get_vinfo = function(name) {
	    return this.vinfo[name];
	  };
	
	  Graph.prototype.set_vinfo = function(name, info) {
	    var k, results, v;
	    if (this.vinfo[name] == null) {
	      this.vinfo[name] = info;
	      return;
	    }
	    if (info != null) {
	      results = [];
	      for (k in info) {
	        v = info[k];
	        results.push(this.vinfo[name][k] = v);
	      }
	      return results;
	    }
	  };
	
	  Graph.prototype.add_vertex = function(name, info, call_changed) {
	    if (call_changed == null) {
	      call_changed = true;
	    }
	    this.set_vinfo(name, info);
	    if (this.is_vertex(name)) {
	      return;
	    }
	    this.vertices.push(name);
	    this.map[name] = {};
	    if (call_changed) {
	      return this.changed();
	    }
	  };
	
	  Graph.prototype.del_vertex = function(name, call_changed) {
	    if (call_changed == null) {
	      call_changed = true;
	    }
	    if (!this.is_vertex(name)) {
	      return;
	    }
	    _.pull(this.vertices, name);
	    delete this.vinfo[name];
	    this.freenames.push(parseInt(name));
	    this.del_links_with_vertex(name, false);
	    if (call_changed) {
	      return this.changed();
	    }
	  };
	
	  Graph.prototype.count_links = function() {
	    return this.links.length;
	  };
	
	  Graph.prototype._make_link = function(v1, v2) {
	    var arr;
	    arr = [v1, v2].sort();
	    return {
	      from: arr[0],
	      to: arr[1]
	    };
	  };
	
	  Graph.prototype.add_link = function(v1, v2, call_changed) {
	    if (call_changed == null) {
	      call_changed = true;
	    }
	    if (this.is_link(v1, v2)) {
	      return;
	    }
	    this.links.push(this._make_link(v1, v2));
	    this.map[v1][v2] = this.map[v2][v1] = true;
	    if (call_changed) {
	      return this.changed();
	    }
	  };
	
	  Graph.prototype.del_link = function(v1, v2, call_changed) {
	    var p;
	    if (call_changed == null) {
	      call_changed = true;
	    }
	    p = function(l) {
	      return (l.from === v1 && l.to === v2) || (l.from === v2 && l.to === v1);
	    };
	    return this.del_linkp(p, call_changed);
	  };
	
	  Graph.prototype.del_links_with_vertex = function(v, call_changed) {
	    var p;
	    if (call_changed == null) {
	      call_changed = true;
	    }
	    p = function(l) {
	      return indexOf.call(_.values(l), v) >= 0;
	    };
	    return this.del_linkp(p, call_changed);
	  };
	
	  Graph.prototype.del_link_from_map = function(v1, v2, call_changed) {
	    if (call_changed == null) {
	      call_changed = true;
	    }
	    this.map[v1][v2] = this.map[v2][v1] = false;
	    if (call_changed) {
	      return this.changed();
	    }
	  };
	
	  Graph.prototype.del_linkp = function(predicate, call_changed) {
	    var i, l, len, ref, res;
	    if (call_changed == null) {
	      call_changed = true;
	    }
	    res = [];
	    ref = this.links;
	    for (i = 0, len = ref.length; i < len; i++) {
	      l = ref[i];
	      if (predicate(l)) {
	        this.del_link_from_map(l.from, l.to, false);
	      } else {
	        res.push(l);
	      }
	    }
	    this.links = res;
	    if (call_changed) {
	      return this.changed();
	    }
	  };
	
	  Graph.prototype.is_link = function(v1, v2) {
	    return !!this.map[v1][v2];
	  };
	
	  return Graph;

	})();


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Graph;
	
	Graph = __webpack_require__(4);
	
	
	/*
	example for builder1:
	options
	    vertices:
	        0: x: 100, y: 100
	        1: x: 50, y: 50
	        2: x: 150, y: 50
	    links:
	        0: [1, 2]
	 */
	
	module.exports.builder1 = function(options) {
	  var a, arr, b, g, i, info, len, name, ref, ref1;
	  g = new Graph;
	  ref = options.vertices;
	  for (name in ref) {
	    info = ref[name];
	    g.add_vertex("" + name, info);
	  }
	  ref1 = options.links;
	  for (a in ref1) {
	    arr = ref1[a];
	    for (i = 0, len = arr.length; i < len; i++) {
	      b = arr[i];
	      g.add_link("" + a, "" + b);
	    }
	  }
	  return g;
	};
	
	module.exports.make_options_for_builder1 = function(graph) {
	  var from, i, len, links, ref, ref1, to, vertices;
	  vertices = _.clone(graph.vinfo);
	  links = {};
	  ref = graph.links;
	  for (i = 0, len = ref.length; i < len; i++) {
	    ref1 = ref[i], from = ref1.from, to = ref1.to;
	    if (links[from] == null) {
	      links[from] = [];
	    }
	    links[from].push(to);
	  }
	  return {
	    vertices: vertices,
	    links: links
	  };
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var CanvasGraphConstructor, Graph, GraphInfo, GraphTable, counter, utils;
	
	Graph = __webpack_require__(4);
	
	utils = __webpack_require__(2);
	
	CanvasGraphConstructor = __webpack_require__(1);
	
	GraphInfo = __webpack_require__(7);
	
	counter = 0;
	
	module.exports = GraphTable = (function() {
	  function GraphTable(container, graph) {
	    var div_for_constructor, div_for_graph_info;
	    this.container = container;
	    this.graph = graph != null ? graph : new Graph;
	    this.id = "gt" + counter++;
	    div_for_constructor = $("<div>").attr('id', this.id + ".gb").get(0);
	    div_for_graph_info = $("<div>").attr('id', this.id + ".info").get(0);
	    this.el = utils.make_talbe([['Рисунок графа', 'Информация о графе'], [div_for_constructor, div_for_graph_info]], {
	      header: true
	    });
	    $(this.container).append(this.el);
	    this.gb = new CanvasGraphConstructor(div_for_constructor, this.graph);
	    this.gi = new GraphInfo(div_for_graph_info, this.graph);
	  }
	
	  GraphTable.prototype.update = function() {
	    if (this.gb.update != null) {
	      return this.gb.update();
	    }
	  };
	
	  GraphTable.prototype.render = function() {
	    return this.gb.render();
	  };
	
	  return GraphTable;

	})();


/***/ },
/* 7 */
/***/ function(module, exports) {

	var GraphInfo, counter;
	
	counter = 0;
	
	module.exports = GraphInfo = (function() {
	  function GraphInfo(container, graph) {
	    var id, o, obj, ref;
	    this.container = container;
	    this.graph = graph != null ? graph : new Graph;
	    if (_.isString(this.container)) {
	      this.container = $(this.container).get(0);
	    }
	    this.id = "graphinfo" + counter++;
	    this.el = $("<div>").get(0);
	    $(this.container).append(this.el);
	    this.info = (
	      obj = {},
	      obj[this.id + "count_vertices"] = {
	        title: "Количество вершин:",
	        func: (function(_this) {
	          return function() {
	            return _this.graph.count_vertices();
	          };
	        })(this)
	      },
	      obj[this.id + "count_links"] = {
	        title: "Количество ребер:",
	        func: (function(_this) {
	          return function() {
	            return _this.graph.count_links();
	          };
	        })(this)
	      },
	      obj
	    );
	    ref = this.info;
	    for (id in ref) {
	      o = ref[id];
	      $(this.el).append($("<div><u>" + o.title + "</u> <span id=" + id + "></span></div>"));
	    }
	    this.graph.on_change((function(_this) {
	      return function() {
	        return _this.update_info();
	      };
	    })(this));
	    this.update_info();
	  }
	
	  GraphInfo.prototype.update_info = function() {
	    var id, o, ref, results;
	    ref = this.info;
	    results = [];
	    for (id in ref) {
	      o = ref[id];
	      console.log();
	      results.push($('#' + id).html("" + o.func()));
	    }
	    return results;
	  };
	
	  return GraphInfo;

	})();


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzEyZjNiNzkwZjI1MWY0YmI4MzYiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vQ2FudmFzR3JhcGhDb25zdHJ1Y3Rvci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMuY29mZmVlIiwid2VicGFjazovLy8uL0dyYXBoRHJhd2VyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vR3JhcGhCdWlsZGVyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaFRhYmxlLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaEluZm8uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDckNBOztBQUFBLDBCQUF5QixvQkFBUSxDQUFSOztBQUN6QixnQkFBZSxvQkFBUSxDQUFSOztBQUNmLGNBQWEsb0JBQVEsQ0FBUjs7QUFHYixvQkFBbUI7O0FBR25CLFlBQVc7QUFDUDtHQUFBLE9BQU8sSUFBSSxDQUFDLEdBQUw7R0FDUCxLQUFLO0dBQ0wsT0FBTztBQUNIO0tBQUEsU0FBUyxJQUFJLENBQUMsR0FBTCxLQUFhO0tBQ3RCLE9BQU8sSUFBSSxDQUFDLEdBQUw7S0FDUCxTQUFTLElBQUksQ0FBQyxHQUFMLENBQVMsTUFBVCxFQUFpQixJQUFqQjtBQUNULFlBQU0sU0FBUyxDQUFmO0FBQ0k7O1NBQ0ksSUFBaUIsa0JBQWpCO1dBQUEsR0FBRyxDQUFDLE1BQUosQ0FBVyxFQUFYOztBQURKO09BRUEsVUFBVTtLQUhkO0FBSUE7O09BQ0ksSUFBZ0Isa0JB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dC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNzEyZjNiNzkwZjI1MWY0YmI4MzZcbiAqKi8iLCJcclxuQ2FudmFzR3JhcGhDb25zdHJ1Y3RvciA9IHJlcXVpcmUgJy4vQ2FudmFzR3JhcGhDb25zdHJ1Y3RvcidcclxuR3JhcGhCdWlsZGVyID0gcmVxdWlyZSAnLi9HcmFwaEJ1aWxkZXInXHJcbkdyYXBoVGFibGUgPSByZXF1aXJlICcuL0dyYXBoVGFibGUnXHJcblxyXG5cclxubWFpbmxvb3Bfb2JqZWN0cyA9IFtdXHJcblxyXG5cclxubWFpbmxvb3AgPSAtPlxyXG4gICAgdGltZSA9IERhdGUubm93KClcclxuICAgIGR0ID0gMTRcclxuICAgIHN0ZXAgPSAtPlxyXG4gICAgICAgIGN1cl9kdCA9IERhdGUubm93KCkgLSB0aW1lXHJcbiAgICAgICAgdGltZSA9IERhdGUubm93KClcclxuICAgICAgICBjdXJfZHQgPSBNYXRoLm1pbihjdXJfZHQsIDEwMDApXHJcbiAgICAgICAgd2hpbGUgY3VyX2R0ID4gMFxyXG4gICAgICAgICAgICBmb3Igb2JqIGluIG1haW5sb29wX29iamVjdHNcclxuICAgICAgICAgICAgICAgIG9iai51cGRhdGUgZHQgaWYgb2JqLnVwZGF0ZT8gXHJcbiAgICAgICAgICAgIGN1cl9kdCAtPSBkdFxyXG4gICAgICAgIGZvciBvYmogaW4gbWFpbmxvb3Bfb2JqZWN0c1xyXG4gICAgICAgICAgICBvYmoucmVuZGVyKCkgaWYgb2JqLnJlbmRlcj9cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgc3RlcFxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHN0ZXBcclxuXHJcbm1haW5sb29wKClcclxuXHJcblxyXG5cclxuIyBKU09OLnN0cmluZ2lmeShHcmFwaEJ1aWxkZXIubWFrZV9vcHRpb25zX2Zvcl9idWlsZGVyMShnYjEuZ3JhcGgpLCBudWxsKVxyXG5nMSA9IEdyYXBoQnVpbGRlci5idWlsZGVyMSB7XCJ2ZXJ0aWNlc1wiOntcIjBcIjp7XCJ4XCI6MTk4LFwieVwiOjM3NS4xODc1fSxcIjFcIjp7XCJ4XCI6OTMsXCJ5XCI6MzI2LjE4NzV9LFwiMlwiOntcInhcIjozMDIsXCJ5XCI6MzM4LjE4NzV9LFwiM1wiOntcInhcIjo0MyxcInlcIjoyNTAuMTg3NSxcIm5hbWVcIjpcIjNcIn0sXCI0XCI6e1wieFwiOjE1NCxcInlcIjoyNDcuMTg3NSxcIm5hbWVcIjpcIjRcIn0sXCI1XCI6e1wieFwiOjMwMCxcInlcIjoyNzIuMTg3NSxcIm5hbWVcIjpcIjVcIn0sXCI2XCI6e1wieFwiOjI2MSxcInlcIjoyMDguMTg3NSxcIm5hbWVcIjpcIjZcIn0sXCI3XCI6e1wieFwiOjM1NCxcInlcIjoyMjkuMTg3NSxcIm5hbWVcIjpcIjdcIn0sXCI4XCI6e1wieFwiOjEwMyxcInlcIjoxNzAuMTg3NSxcIm5hbWVcIjpcIjhcIn0sXCI5XCI6e1wieFwiOjM3LFwieVwiOjU4LjE4NzUsXCJuYW1lXCI6XCI5XCJ9LFwiMTBcIjp7XCJ4XCI6MTEzLFwieVwiOjYyLjE4NzUsXCJuYW1lXCI6XCIxMFwifSxcIjExXCI6e1wieFwiOjE5NCxcInlcIjo2MC4xODc1LFwibmFtZVwiOlwiMTFcIn0sXCIxMlwiOntcInhcIjozMjcsXCJ5XCI6MTgzLjE4NzUsXCJuYW1lXCI6XCIxMlwifSxcIjEzXCI6e1wieFwiOjM2MSxcInlcIjoxNDUuMTg3NSxcIm5hbWVcIjpcIjEzXCJ9LFwiMTRcIjp7XCJ4XCI6MzIwLFwieVwiOjExMy4xODc1LFwibmFtZVwiOlwiMTRcIn0sXCIxNVwiOntcInhcIjozNTcsXCJ5XCI6NzcuMTg3NSxcIm5hbWVcIjpcIjE1XCJ9LFwiMTZcIjp7XCJ4XCI6MzE3LFwieVwiOjQ2LjE4NzUsXCJuYW1lXCI6XCIxNlwifX0sXCJsaW5rc1wiOntcIjBcIjpbXCIxXCIsXCIyXCJdLFwiMVwiOltcIjNcIixcIjRcIl0sXCIyXCI6W1wiNVwiXSxcIjNcIjpbXCI4XCJdLFwiNVwiOltcIjZcIixcIjdcIl0sXCI4XCI6W1wiOVwiXSxcIjEwXCI6W1wiOFwiXSxcIjExXCI6W1wiOFwiXSxcIjEyXCI6W1wiN1wiLFwiMTNcIl0sXCIxM1wiOltcIjE0XCJdLFwiMTRcIjpbXCIxNVwiXSxcIjE1XCI6W1wiMTZcIl19fVxyXG5nMiA9IEdyYXBoQnVpbGRlci5idWlsZGVyMSB7XCJ2ZXJ0aWNlc1wiOntcIjBcIjp7XCJ4XCI6MTkxLFwieVwiOjM4MC4zNzUsXCJuYW1lXCI6XCIwXCJ9LFwiMVwiOntcInhcIjo1MCxcInlcIjozMjAuMzc1LFwibmFtZVwiOlwiMVwifSxcIjJcIjp7XCJ4XCI6MzA5LFwieVwiOjMwMy4zNzUsXCJuYW1lXCI6XCIyXCJ9LFwiM1wiOntcInhcIjo2OCxcInlcIjoxOTAuMzc1LFwibmFtZVwiOlwiM1wifSxcIjRcIjp7XCJ4XCI6MzA2LFwieVwiOjE4MC4zNzUsXCJuYW1lXCI6XCI0XCJ9LFwiNVwiOntcInhcIjo2NSxcInlcIjo3MS4zNzUsXCJuYW1lXCI6XCI1XCJ9LFwiNlwiOntcInhcIjoxODQsXCJ5XCI6MTg3LjM3NSxcIm5hbWVcIjpcIjZcIn0sXCI3XCI6e1wieFwiOjI2NixcInlcIjo4OS4zNzUsXCJuYW1lXCI6XCI3XCJ9LFwiOFwiOntcInhcIjozNTIsXCJ5XCI6ODIuMzc1LFwibmFtZVwiOlwiOFwifSxcIjlcIjp7XCJ4XCI6MTc3LFwieVwiOjI5Ny4zNzUsXCJuYW1lXCI6XCI5XCJ9fSxcImxpbmtzXCI6e1wiMFwiOltcIjJcIixcIjFcIixcIjlcIl0sXCIxXCI6W1wiM1wiXSxcIjJcIjpbXCI0XCJdLFwiM1wiOltcIjVcIl0sXCI0XCI6W1wiN1wiLFwiOFwiXSxcIjZcIjpbXCI5XCJdfX1cclxuXHJcbmd0ID0gW25ldyBHcmFwaFRhYmxlKFwiI2d0MVwiLCBnMSksIG5ldyBHcmFwaFRhYmxlIFwiI2d0MlwiLCBnMl1cclxubWFpbmxvb3Bfb2JqZWN0cyA9IG1haW5sb29wX29iamVjdHMuY29uY2F0IGd0XHJcblxyXG5cclxucHJnID0gKGkpIC0+IGNvbnNvbGUubG9nIEpTT04uc3RyaW5naWZ5KEdyYXBoQnVpbGRlci5tYWtlX29wdGlvbnNfZm9yX2J1aWxkZXIxKGd0W2ldLmdyYXBoKSlcclxuXHJcblxyXG5cclxuXy5kZWZhdWx0cyB3aW5kb3csIHtHcmFwaEJ1aWxkZXIsIHByZywgZ3R9XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbWFpbi5jb2ZmZWVcbiAqKi8iLCJcclxudXRpbHMgPSByZXF1aXJlICcuL3V0aWxzJ1xyXG5HcmFwaERyYXdlciA9IHJlcXVpcmUgJy4vR3JhcGhEcmF3ZXInXHJcbkdyYXBoID0gcmVxdWlyZSAnLi9HcmFwaCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gXHJcbmNsYXNzIENhbnZhc0dyYXBoQ29uc3RydWN0b3JcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogKEBjb250YWluZXIsIEBncmFwaCA9IG5ldyBHcmFwaCkgLT5cclxuICAgICAgICBAY2FuID0gJChcIjxjYW52YXM+XCIpLmdldCAwXHJcbiAgICAgICAgQGN0eCA9IEBjYW4uZ2V0Q29udGV4dCAnMmQnXHJcbiAgICAgICAgQGNhbi53aWR0aCA9IEBjYW4uaGVpZ2h0ID0gNDAwXHJcbiAgICAgICAgQG1vdXNlID0geyBcclxuICAgICAgICAgICAgeDogMCwgeTogMCAjINGC0LXQutGD0YnQuNC1INC60L7QvtGA0LTQuNC90LDRgtGLINC80YvRiNC4INC90LDQtCBAY2FuXHJcbiAgICAgICAgICAgIHRhcmdldDogbnVsbCAjINC40LzRjyDQstC10YDRiNC40L3RiyDQvdCw0LQg0LrQvtGC0L7RgNC+0Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLRgdGPINC90LXQutC+0YLQvtGA0L7QtSDQtNC10LnRgdGC0LLQuNC1XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBmb2N1cyA9IGZhbHNlXHJcbiAgICAgICAgQGhhbmRsZV9ldmVudHMoKVxyXG4gICAgICAgICQoQGNvbnRhaW5lcikuYXBwZW5kIEBjYW5cclxuICAgICAgICBAZ3JhcGhfZHJhd2VyID0gbmV3IEdyYXBoRHJhd2VyIEBncmFwaCwgQGN0eFxyXG5cclxuICAgIHVwZGF0ZV9tb3VzZTogKGUpIC0+XHJcbiAgICAgICAgcG9zID0gdXRpbHMuZ2V0X21vdXNlcG9zX2luX2VsZW1lbnQgQGNhbiwgZVxyXG4gICAgICAgIEBtb3VzZS54ID0gcG9zLnhcclxuICAgICAgICBAbW91c2UueSA9IHBvcy55XHJcblxyXG4gICAgaGFuZGxlX2V2ZW50czogLT5cclxuICAgICAgICAkKEBjYW4pLm1vdXNlb3V0ID0+IEBmb2N1cyA9IGZhbHNlXHJcbiAgICAgICAgJChAY2FuKS5tb3VzZW92ZXIgPT4gQGZvY3VzID0gdHJ1ZVxyXG4gICAgICAgIFxyXG4gICAgICAgICQoQGNhbikubW91c2Vtb3ZlIChlKSA9PlxyXG4gICAgICAgICAgICBAdXBkYXRlX21vdXNlIGVcclxuICAgICAgICAgICAgaWYgQG1vdXNlLnRhcmdldFxyXG4gICAgICAgICAgICAgICAgaWYgQG1vdXNlLmRyYWd0eXBlID09IFwibW92ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4X25hbWUgPSBAbW91c2UudGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgQGdyYXBoLnNldF92aW5mbyB2ZXJ0ZXhfbmFtZSwgdXRpbHMudmVjMihAbW91c2UueCwgQG1vdXNlLnkpXHJcbiAgICAgICAgICAgICAgICBpZiBAbW91c2UuZHJhZ3R5cGUgPT0gXCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICBAbW91c2UubGlua2VuZCA9IF8uY2xvbmUgdXRpbHMudmVjMiBAbW91c2UueCwgQG1vdXNlLnlcclxuXHJcbiAgICAgICAgJChAY2FuKS5tb3VzZWRvd24gKGUpID0+XHJcbiAgICAgICAgICAgIHZuYW1lID0gQGdyYXBoX2RyYXdlci5nZXRfdmVydGV4X2J5eHkgQG1vdXNlXHJcbiAgICAgICAgICAgIGlmIHZuYW1lPyBhbmQgQG1vdXNlLnRhcmdldD8gYW5kIEBtb3VzZS5kcmFndHlwZSA9PSBcImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgQGdyYXBoLmFkZF9saW5rIEBtb3VzZS50YXJnZXQsIHZuYW1lXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgQG1vdXNlLnRhcmdldCA9IHZuYW1lXHJcbiAgICAgICAgICAgIEBtb3VzZS5kcmFndHlwZSA9IFwibW92ZVwiXHJcblxyXG4gICAgICAgICQoQGNhbikubW91c2V1cCAoZSkgPT5cclxuICAgICAgICAgICAgQG1vdXNlLnRhcmdldCA9IG51bGxcclxuICAgICAgICAgICAgQG1vdXNlLmRyYWd0eXBlID0gbnVsbFxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5rZXlkb3duIChlKSA9PlxyXG4gICAgICAgICAgICByZXR1cm4gdW5sZXNzIEBmb2N1c1xyXG4gICAgICAgICAgICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIHN3aXRjaCBjaFxyXG4gICAgICAgICAgICAgICAgIyBBZGQgdmVydGV4XHJcbiAgICAgICAgICAgICAgICB3aGVuICd2J1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBAZ3JhcGguZ2VuZXJhdGVfbmFtZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgQGdyYXBoLmFkZF92ZXJ0ZXggbmFtZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBAbW91c2UueCwgeTogQG1vdXNlLnksIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgIyBEZWxldGUgdmVydGV4XHJcbiAgICAgICAgICAgICAgICB3aGVuICdkJ1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIGUuc2hpZnRLZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHYgaW4gXy5jbG9uZSBAZ3JhcGgudmVydGljZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBncmFwaC5kZWxfdmVydGV4IHZcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgdm5hbWUgPSBAZ3JhcGhfZHJhd2VyLmdldF92ZXJ0ZXhfYnl4eSBAbW91c2VcclxuICAgICAgICAgICAgICAgICAgICBAZ3JhcGguZGVsX3ZlcnRleCB2bmFtZVxyXG5cclxuICAgICAgICAgICAgICAgICMgQWRkIGxpbmtcclxuICAgICAgICAgICAgICAgIHdoZW4gJ2wnXHJcbiAgICAgICAgICAgICAgICAgICAgdm5hbWUgPSBAZ3JhcGhfZHJhd2VyLmdldF92ZXJ0ZXhfYnl4eSBAbW91c2VcclxuICAgICAgICAgICAgICAgICAgICBAbW91c2UudGFyZ2V0ID0gdm5hbWVcclxuICAgICAgICAgICAgICAgICAgICBAbW91c2UuZHJhZ3R5cGUgPSBcImxpbmtcIlxyXG5cclxuICAgICAgICAgICAgICAgICMgUHJpbnQgb3RoZXIgaW5mb1xyXG4gICAgICAgICAgICAgICAgd2hlbiAnMSdcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyBAbW91c2VcclxuXHJcbiAgICB1cGRhdGU6IChkdCkgLT5cclxuXHJcbiAgICBkcmF3X2RyYWdsaW5rOiAtPlxyXG4gICAgICAgIGlmIEBtb3VzZS50YXJnZXQ/IGFuZCBAbW91c2UuZHJhZ3R5cGUgPT0gXCJsaW5rXCIgYW5kIEBtb3VzZS5saW5rZW5kP1xyXG4gICAgICAgICAgICB2ID0gQGdyYXBoLmdldF92aW5mbyBAbW91c2UudGFyZ2V0XHJcbiAgICAgICAgICAgIHV0aWxzLmRyYXdfbGluZSBAY3R4LCB2LCBAbW91c2VcclxuXHJcbiAgICByZW5kZXI6IC0+XHJcbiAgICAgICAgQGN0eC5jbGVhclJlY3QgMCwgMCwgQGNhbi53aWR0aCwgQGNhbi5oZWlnaHRcclxuICAgICAgICBAZHJhd19kcmFnbGluaygpXHJcbiAgICAgICAgQGdyYXBoX2RyYXdlci5yZW5kZXIoKVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DYW52YXNHcmFwaENvbnN0cnVjdG9yLmNvZmZlZVxuICoqLyIsIlxyXG4jID09PT09IG1hdGhzIHV0aWxzID09PT09XHJcbmRpc3QgPSAoYSwgYikgLT4gTWF0aC5zcXJ0KE1hdGgucG93KGEueCAtIGIueCwgMikgKyBNYXRoLnBvdyhhLnkgLSBiLnksIDIpKVxyXG52ZWMyID0gKHgsIHkpIC0+IHt4LCB5fVxyXG5cclxuIyA9PT09PSB1dGlscyBmb3IgaHRtbCBlbGVtZW50cyA9PT09PSBcclxuZ2V0X21vdXNlcG9zX2luX2VsZW1lbnQgPSAoZWwsIGUpIC0+XHJcbiAgICBvZmZzZXQgPSAkKGVsKS5vZmZzZXQoKVxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgeDogZS5wYWdlWCAtIG9mZnNldC5sZWZ0LCBcclxuICAgICAgICB5OiBlLnBhZ2VZIC0gb2Zmc2V0LnRvcCBcclxuICAgIH1cclxuXHJcbiMgY3JlYXRlIGh0bWwgdGFibGUgYnkganMgbWF0cml4XHJcbiMgbzogeyBoZWFkZXI6IGJvb2wgfVxyXG5tYWtlX3RhbGJlID0gKGFyciwgbyA9IHt9KSAtPlxyXG4gICAgdGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAndGFibGUnXHJcbiAgICBmb3IgbGluZSwgaSBpbiBhcnJcclxuICAgICAgICB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ3RyJ1xyXG4gICAgICAgIGZvciB2YWwsIGogaW4gbGluZVxyXG4gICAgICAgICAgICB0ID0gaWYgby5oZWFkZXIgYW5kIGkgPT0gMCB0aGVuICd0aCcgZWxzZSAndGQnXHJcbiAgICAgICAgICAgIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IHRcclxuICAgICAgICAgICAgdmFsID0gYXJyW2ldW2pdXHJcbiAgICAgICAgICAgIGlmIF8uaXNTdHJpbmcgdmFsXHJcbiAgICAgICAgICAgICAgICBjZWxsLmlubmVySFRNTCA9IHZhbFxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkIHZhbFxyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCBjZWxsXHJcbiAgICAgICAgdGJsLmFwcGVuZENoaWxkIHRyXHJcbiAgICByZXR1cm4gdGJsXHJcblxyXG4jID09PT09IEdyYXBoaWNzID09PT09XHJcbmRyYXdfbGluZSA9IChjdHgsIGEsIGIpIC0+XHJcbiAgICBjdHguYmVnaW5QYXRoKClcclxuICAgIGN0eC5tb3ZlVG8gYS54LCBhLnlcclxuICAgIGN0eC5saW5lVG8gYi54LCBiLnlcclxuICAgIGN0eC5zdHJva2UoKVxyXG5cclxuZHJhd19jaXJjbGVfd2l0aF90ZXh0ID0gKGN0eCwgeCwgeSwgciwgdGV4dCwgbykgLT5cclxuICAgIGN0eC5mb250ID0gXCIje28uZm9udHN6fXB4ICN7by5mb250RmFtaWx5fVwiXHJcbiAgICBjdHguYmVnaW5QYXRoKClcclxuICAgIGN0eC5hcmMgeCwgeSwgciwgMCwgMiAqIE1hdGguUElcclxuICAgIGN0eC5maWxsU3R5bGUgPSBvLmNpcmNsZUNvbG9yXHJcbiAgICBjdHguZmlsbCgpXHJcbiAgICBjdHguZmlsbFN0eWxlID0gby50ZXh0Q29sb3JcclxuICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJ1xyXG4gICAgY3R4LnRleHRCYXNlTGluZSA9ICdtaWRkbGUnXHJcbiAgICBjdHguZmlsbFRleHQgdGV4dCwgeCwgeSArIG8uZm9udHN6LzRcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICMgbWF0aCB1dGlsc1xyXG4gICAgZGlzdCwgdmVjMlxyXG4gICAgIyBodG1sIHV0aWxzXHJcbiAgICBnZXRfbW91c2Vwb3NfaW5fZWxlbWVudCwgbWFrZV90YWxiZVxyXG4gICAgIyBHcmFwaGljc1xyXG4gICAgZHJhd19saW5lLCBkcmF3X2NpcmNsZV93aXRoX3RleHRcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3V0aWxzLmNvZmZlZVxuICoqLyIsIlxyXG51dGlscyA9IHJlcXVpcmUgJy4vdXRpbHMnXHJcblxyXG5cclxuRk9OVFNaID0gMjBcclxuUkFESUlVUyA9IEZPTlRTWlxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gXHJcbmNsYXNzIEdyYXBoRHJhd2VyXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yOiAoQGdyYXBoLCBAY3R4KSAtPlxyXG5cclxuICAgICMgPT09IFZFUlRJQ0VTID09PSBcclxuICAgIGdldF92ZXJ0ZXhfYnl4eTogKHBvcykgLT5cclxuICAgICAgICBmb3IgbmFtZSwgaW5mbyBvZiBAZ3JhcGgudmluZm9cclxuICAgICAgICAgICAgcmV0dXJuIG5hbWUgaWYgdXRpbHMuZGlzdChwb3MsIGluZm8pIDwgUkFESUlVU1xyXG5cclxuICAgIG1vdmVfdmVydGV4OiAodmVydGV4X25hbWUsIG5ld19wb3MpIC0+XHJcbiAgICAgICAgQGdyYXBoLnNldF92aW5mbyB2ZXJ0ZXhfbmFtZSwgbmV3X3Bvc1xyXG5cclxuICAgICMgPT09IFJFTkRFUiA9PT1cclxuICAgIGRyYXdfbGlua3M6ICgpIC0+XHJcbiAgICAgICAgZm9yIGwgaW4gQGdyYXBoLmxpbmtzXHJcbiAgICAgICAgICAgIGEgPSBAZ3JhcGguZ2V0X3ZpbmZvIGwuZnJvbVxyXG4gICAgICAgICAgICBiID0gQGdyYXBoLmdldF92aW5mbyBsLnRvXHJcbiAgICAgICAgICAgIHV0aWxzLmRyYXdfbGluZSBAY3R4LCBhLCBiXHJcblxyXG4gICAgZHJhd192ZXJ0aWNlczogKCkgLT5cclxuICAgICAgICBmb3IgbmFtZSwgaW5mbyBvZiBAZ3JhcGgudmluZm9cclxuICAgICAgICAgICAgdXRpbHMuZHJhd19jaXJjbGVfd2l0aF90ZXh0KFxyXG4gICAgICAgICAgICAgICAgQGN0eCwgaW5mby54LCBpbmZvLnksIFJBRElJVVMsIG5hbWUsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250c3o6IEZPTlRTWiwgZm9udEZhbWlseTogJ01vbm9zcGFjZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlQ29sb3I6ICdibGFjaycsIHRleHRDb2xvcjogJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgcmVuZGVyOiAoKSAtPlxyXG4gICAgICAgIEBjdHguc2F2ZSgpXHJcbiAgICAgICAgQGRyYXdfbGlua3MoKVxyXG4gICAgICAgIEBkcmF3X3ZlcnRpY2VzKClcclxuICAgICAgICBAY3R4LnJlc3RvcmUoKVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaERyYXdlci5jb2ZmZWVcbiAqKi8iLCJcclxuIyBUT0RPOiDQsdC70L7QutC40YDQvtCy0LrQsCDQuCDRgNCw0LfQsdC70L7QutC40YDQvtCy0LrQsCBjYWxsX2NoYW5nZWRcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gXHJcbmNsYXNzIEdyYXBoXHJcbiAgICBjb25zdHJ1Y3RvcjogLT5cclxuICAgICAgICBAdmVydGljZXMgPSBbXVxyXG4gICAgICAgIEBsaW5rcyA9IFtdXHJcbiAgICAgICAgQG1hcCA9IHt9XHJcbiAgICAgICAgQHZpbmZvID0ge30gIyBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGZvciB2ZXJ0ZXhcclxuICAgICAgICBAY2hhbmdlX2xpc3RlbmVycyA9IFtdXHJcbiAgICAgICAgQGZyZWVuYW1lcyA9IFtdXHJcblxyXG4gICAgIyA9PT0gRVZFTlRTID09PVxyXG4gICAgb25fY2hhbmdlOiAoY2FsbGJhY2spIC0+IFxyXG4gICAgICAgIEBjaGFuZ2VfbGlzdGVuZXJzLnB1c2ggY2FsbGJhY2tcclxuXHJcbiAgICBjaGFuZ2VkOiAtPiBcclxuICAgICAgICBmb3IgY2FsbGJhY2sgaW4gQGNoYW5nZV9saXN0ZW5lcnNcclxuICAgICAgICAgICAgY2FsbGJhY2sodGhpcylcclxuXHJcbiAgICAjID09PSBWRVJUSUNFUyA9PT0gXHJcbiAgICBnZW5lcmF0ZV9uYW1lOiAtPlxyXG4gICAgICAgIEBmcmVlbmFtZXMuc29ydCAoYSwgYikgLT4gYSAtIGJcclxuICAgICAgICByZXMgPSBcIlwiXHJcbiAgICAgICAgd2hpbGUgQGZyZWVuYW1lcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgIHYgPSBcIlwiICsgQGZyZWVuYW1lcy5zaGlmdCgpXHJcbiAgICAgICAgICAgIHJldHVybiB2IGlmIG5vdCBAaXNfdmVydGV4IHZcclxuICAgICAgICByZXR1cm4gXCJcIiArIEBjb3VudF92ZXJ0aWNlcygpXHJcblxyXG4gICAgY291bnRfdmVydGljZXM6IC0+IEB2ZXJ0aWNlcy5sZW5ndGhcclxuXHJcbiAgICBpc192ZXJ0ZXg6IChuYW1lKSAtPlxyXG4gICAgICAgIHJldHVybiBuYW1lIGluIEB2ZXJ0aWNlc1xyXG5cclxuICAgIGdldF92aW5mbzogKG5hbWUpIC0+IEB2aW5mb1tuYW1lXVxyXG5cclxuICAgIHNldF92aW5mbzogKG5hbWUsIGluZm8pIC0+XHJcbiAgICAgICAgdW5sZXNzIEB2aW5mb1tuYW1lXT9cclxuICAgICAgICAgICAgQHZpbmZvW25hbWVdID0gaW5mb1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICBAdmluZm9bbmFtZV1ba10gPSB2IGZvciBrLHYgb2YgaW5mbyBpZiBpbmZvP1xyXG5cclxuICAgIGFkZF92ZXJ0ZXg6IChuYW1lLCBpbmZvLCBjYWxsX2NoYW5nZWQgPSB0cnVlKSAtPlxyXG4gICAgICAgIEBzZXRfdmluZm8gbmFtZSwgaW5mb1xyXG4gICAgICAgIHJldHVybiBpZiBAaXNfdmVydGV4IG5hbWVcclxuICAgICAgICBAdmVydGljZXMucHVzaCBuYW1lXHJcbiAgICAgICAgQG1hcFtuYW1lXSA9IHt9XHJcbiAgICAgICAgQGNoYW5nZWQoKSBpZiBjYWxsX2NoYW5nZWRcclxuXHJcbiAgICBkZWxfdmVydGV4OiAobmFtZSwgY2FsbF9jaGFuZ2VkID0gdHJ1ZSkgLT5cclxuICAgICAgICByZXR1cm4gaWYgbm90IEBpc192ZXJ0ZXgobmFtZSlcclxuICAgICAgICBfLnB1bGwgQHZlcnRpY2VzLCBuYW1lXHJcbiAgICAgICAgZGVsZXRlIEB2aW5mb1tuYW1lXVxyXG4gICAgICAgIEBmcmVlbmFtZXMucHVzaCBwYXJzZUludChuYW1lKVxyXG4gICAgICAgIEBkZWxfbGlua3Nfd2l0aF92ZXJ0ZXggbmFtZSwgZmFsc2VcclxuICAgICAgICBAY2hhbmdlZCgpIGlmIGNhbGxfY2hhbmdlZFxyXG5cclxuICAgICMgPT09IExJTktTID09PSBcclxuICAgIGNvdW50X2xpbmtzOiAtPiBcclxuICAgICAgICByZXR1cm4gQGxpbmtzLmxlbmd0aFxyXG5cclxuICAgIF9tYWtlX2xpbms6ICh2MSwgdjIpIC0+XHJcbiAgICAgICAgYXJyID0gW3YxLCB2Ml0uc29ydCgpXHJcbiAgICAgICAgcmV0dXJuIHsgZnJvbTogYXJyWzBdLCB0bzogYXJyWzFdIH1cclxuXHJcbiAgICBhZGRfbGluazogKHYxLCB2MiwgY2FsbF9jaGFuZ2VkID0gdHJ1ZSkgLT5cclxuICAgICAgICByZXR1cm4gaWYgQGlzX2xpbmsodjEsIHYyKVxyXG4gICAgICAgIEBsaW5rcy5wdXNoIEBfbWFrZV9saW5rKHYxLCB2MilcclxuICAgICAgICBAbWFwW3YxXVt2Ml0gPSBAbWFwW3YyXVt2MV0gPSB0cnVlXHJcbiAgICAgICAgQGNoYW5nZWQoKSBpZiBjYWxsX2NoYW5nZWRcclxuXHJcbiAgICBkZWxfbGluazogKHYxLCB2MiwgY2FsbF9jaGFuZ2VkID0gdHJ1ZSkgLT5cclxuICAgICAgICBwID0gKGwpIC0+IChsLmZyb20gPT0gdjEgYW5kIGwudG8gPT0gdjIpIG9yIChsLmZyb20gPT0gdjIgYW5kIGwudG8gPT0gdjEpXHJcbiAgICAgICAgQGRlbF9saW5rcCBwLCBjYWxsX2NoYW5nZWRcclxuXHJcbiAgICBkZWxfbGlua3Nfd2l0aF92ZXJ0ZXg6ICh2LCBjYWxsX2NoYW5nZWQgPSB0cnVlKSAtPlxyXG4gICAgICAgIHAgPSAobCkgLT4gdiBpbiBfLnZhbHVlcyBsXHJcbiAgICAgICAgQGRlbF9saW5rcCBwLCBjYWxsX2NoYW5nZWRcclxuXHJcbiAgICBkZWxfbGlua19mcm9tX21hcDogKHYxLCB2MiwgY2FsbF9jaGFuZ2VkID0gdHJ1ZSkgLT5cclxuICAgICAgICBAbWFwW3YxXVt2Ml0gPSBAbWFwW3YyXVt2MV0gPSBmYWxzZVxyXG4gICAgICAgIEBjaGFuZ2VkKCkgaWYgY2FsbF9jaGFuZ2VkXHJcblxyXG4gICAgZGVsX2xpbmtwOiAocHJlZGljYXRlLCBjYWxsX2NoYW5nZWQgPSB0cnVlKSAtPlxyXG4gICAgICAgIHJlcyA9IFtdXHJcbiAgICAgICAgZm9yIGwgaW4gQGxpbmtzXHJcbiAgICAgICAgICAgIGlmIHByZWRpY2F0ZSBsXHJcbiAgICAgICAgICAgICAgICBAZGVsX2xpbmtfZnJvbV9tYXAgbC5mcm9tLCBsLnRvLCBmYWxzZVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXMucHVzaCBsXHJcbiAgICAgICAgQGxpbmtzID0gcmVzXHJcbiAgICAgICAgQGNoYW5nZWQoKSBpZiBjYWxsX2NoYW5nZWRcclxuXHJcbiAgICBpc19saW5rOiAodjEsIHYyKSAtPlxyXG4gICAgICAgIHJldHVybiAhIUBtYXBbdjFdW3YyXVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaC5jb2ZmZWVcbiAqKi8iLCJcclxuR3JhcGggPSByZXF1aXJlICcuL0dyYXBoJ1xyXG5cclxuXHJcbiMjI1xyXG5leGFtcGxlIGZvciBidWlsZGVyMTpcclxub3B0aW9uc1xyXG4gICAgdmVydGljZXM6XHJcbiAgICAgICAgMDogeDogMTAwLCB5OiAxMDBcclxuICAgICAgICAxOiB4OiA1MCwgeTogNTBcclxuICAgICAgICAyOiB4OiAxNTAsIHk6IDUwXHJcbiAgICBsaW5rczpcclxuICAgICAgICAwOiBbMSwgMl1cclxuIyMjXHJcbm1vZHVsZS5leHBvcnRzLlxyXG5idWlsZGVyMSA9IChvcHRpb25zKSAtPlxyXG4gICAgZyA9IG5ldyBHcmFwaFxyXG4gICAgZy5hZGRfdmVydGV4IFwiXCIrbmFtZSwgaW5mbyBmb3IgbmFtZSwgaW5mbyBvZiBvcHRpb25zLnZlcnRpY2VzXHJcbiAgICBmb3IgYSwgYXJyIG9mIG9wdGlvbnMubGlua3NcclxuICAgICAgICBmb3IgYiBpbiBhcnJcclxuICAgICAgICAgICAgZy5hZGRfbGluayBcIlwiK2EsIFwiXCIrYlxyXG4gICAgcmV0dXJuIGdcclxuXHJcbm1vZHVsZS5leHBvcnRzLlxyXG5tYWtlX29wdGlvbnNfZm9yX2J1aWxkZXIxID0gKGdyYXBoKSAtPlxyXG4gICAgdmVydGljZXMgPSBfLmNsb25lIGdyYXBoLnZpbmZvXHJcbiAgICBsaW5rcyA9IHt9XHJcbiAgICBmb3Ige2Zyb20sIHRvfSBpbiBncmFwaC5saW5rc1xyXG4gICAgICAgIGxpbmtzW2Zyb21dID0gW10gaWYgbm90IGxpbmtzW2Zyb21dP1xyXG4gICAgICAgIGxpbmtzW2Zyb21dLnB1c2ggdG9cclxuICAgIHJldHVybiB7dmVydGljZXMsIGxpbmtzfVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0dyYXBoQnVpbGRlci5jb2ZmZWVcbiAqKi8iLCJcclxuR3JhcGggPSByZXF1aXJlICcuL0dyYXBoJ1xyXG51dGlscyA9IHJlcXVpcmUgJy4vdXRpbHMnXHJcbkNhbnZhc0dyYXBoQ29uc3RydWN0b3IgPSByZXF1aXJlICcuL0NhbnZhc0dyYXBoQ29uc3RydWN0b3InXHJcbkdyYXBoSW5mbyA9IHJlcXVpcmUgJy4vR3JhcGhJbmZvJ1xyXG5cclxuY291bnRlciA9IDBcclxuXHJcbm1vZHVsZS5leHBvcnRzID1cclxuY2xhc3MgR3JhcGhUYWJsZVxyXG4gICAgY29uc3RydWN0b3I6IChAY29udGFpbmVyLCBAZ3JhcGggPSBuZXcgR3JhcGgpIC0+XHJcbiAgICAgICAgQGlkID0gXCJndFwiICsgY291bnRlcisrXHJcbiAgICAgICAgZGl2X2Zvcl9jb25zdHJ1Y3RvciA9ICQoXCI8ZGl2PlwiKS5hdHRyKCdpZCcsIEBpZCArIFwiLmdiXCIpLmdldCAwXHJcbiAgICAgICAgZGl2X2Zvcl9ncmFwaF9pbmZvID0gJChcIjxkaXY+XCIpLmF0dHIoJ2lkJywgQGlkICsgXCIuaW5mb1wiKS5nZXQgMFxyXG5cclxuICAgICAgICBAZWwgPSB1dGlscy5tYWtlX3RhbGJlIFtcclxuICAgICAgICAgICAgWyfQoNC40YHRg9C90L7QuiDQs9GA0LDRhNCwJywgJ9CY0L3RhNC+0YDQvNCw0YbQuNGPINC+INCz0YDQsNGE0LUnXSwgXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIGRpdl9mb3JfY29uc3RydWN0b3IsIGRpdl9mb3JfZ3JhcGhfaW5mb1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXSwgeyBoZWFkZXI6IHRydWUgfVxyXG4gICAgICAgICQoQGNvbnRhaW5lcikuYXBwZW5kIEBlbFxyXG5cclxuICAgICAgICBAZ2IgPSBuZXcgQ2FudmFzR3JhcGhDb25zdHJ1Y3RvciBkaXZfZm9yX2NvbnN0cnVjdG9yLCBAZ3JhcGhcclxuICAgICAgICBAZ2kgPSBuZXcgR3JhcGhJbmZvIGRpdl9mb3JfZ3JhcGhfaW5mbywgQGdyYXBoXHJcblxyXG4gICAgdXBkYXRlOiAtPlxyXG4gICAgICAgIEBnYi51cGRhdGUoKSBpZiBAZ2IudXBkYXRlP1xyXG5cclxuICAgIHJlbmRlcjogLT5cclxuICAgICAgICBAZ2IucmVuZGVyKClcclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vR3JhcGhUYWJsZS5jb2ZmZWVcbiAqKi8iLCJcclxuXHJcbmNvdW50ZXIgPSAwXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPVxyXG5jbGFzcyBHcmFwaEluZm9cclxuICAgIGNvbnN0cnVjdG9yOiAoQGNvbnRhaW5lciwgQGdyYXBoID0gbmV3IEdyYXBoKSAtPlxyXG4gICAgICAgIEBjb250YWluZXIgPSAkKEBjb250YWluZXIpLmdldCAwIGlmIF8uaXNTdHJpbmcgQGNvbnRhaW5lclxyXG4gICAgICAgIEBpZCA9IFwiZ3JhcGhpbmZvXCIgKyBjb3VudGVyKytcclxuICAgICAgICBAZWwgPSAkKFwiPGRpdj5cIikuZ2V0IDBcclxuICAgICAgICAkKEBjb250YWluZXIpLmFwcGVuZCBAZWxcclxuICAgICAgICBAaW5mbyA9XHJcbiAgICAgICAgICAgIFwiI3tAaWR9Y291bnRfdmVydGljZXNcIjpcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcItCa0L7Qu9C40YfQtdGB0YLQstC+INCy0LXRgNGI0LjQvTpcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6ID0+IEBncmFwaC5jb3VudF92ZXJ0aWNlcygpXHJcbiAgICAgICAgICAgIFwiI3tAaWR9Y291bnRfbGlua3NcIjpcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcItCa0L7Qu9C40YfQtdGB0YLQstC+INGA0LXQsdC10YA6XCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOiA9PiBAZ3JhcGguY291bnRfbGlua3MoKVxyXG4gICAgICAgIGZvciBpZCxvIG9mIEBpbmZvXHJcbiAgICAgICAgICAgICQoQGVsKS5hcHBlbmQoJChcIjxkaXY+PHU+I3tvLnRpdGxlfTwvdT4gPHNwYW4gaWQ9I3tpZH0+PC9zcGFuPjwvZGl2PlwiKSlcclxuICAgICAgICBAZ3JhcGgub25fY2hhbmdlID0+IEB1cGRhdGVfaW5mbygpXHJcbiAgICAgICAgQHVwZGF0ZV9pbmZvKClcclxuXHJcbiAgICB1cGRhdGVfaW5mbzogLT5cclxuICAgICAgICBmb3IgaWQsIG8gb2YgQGluZm9cclxuICAgICAgICAgICAgY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgICAkKCcjJyArIGlkKS5odG1sIFwiXCIgKyBvLmZ1bmMoKVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaEluZm8uY29mZmVlXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==