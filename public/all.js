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
	        var ch, cmd, i, len, name, ref, v, vname;
	        if (!_this.focus) {
	          return;
	        }
	        ch = String.fromCharCode(e.keyCode).toLowerCase();
	        switch (ch) {
	          case 'r':
	            vname = _this.graph_drawer.get_vertex_byxy(_this.mouse);
	            return _this.graph.root = vname;
	          case 'v':
	            name = _this.graph.generate_name();
	            return _this.graph.add_vertex(name, {
	              x: _this.mouse.x,
	              y: _this.mouse.y,
	              name: name
	            });
	          case 'q':
	            return cmd = prompt("Введите команду");
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
	    var info, name, ref, results, textColor;
	    ref = this.graph.vinfo;
	    results = [];
	    for (name in ref) {
	      info = ref[name];
	      textColor = this.graph.is_root(name) ? 'red' : 'white';
	      results.push(utils.draw_circle_with_text(this.ctx, info.x, info.y, RADIIUS, name, {
	        fontsz: FONTSZ,
	        fontFamily: 'Monospace',
	        circleColor: 'black',
	        textColor: textColor
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
	    this.root = null;
	    this.is_changes_lock = false;
	  }
	
	  Graph.prototype.update = function() {
	    return this.dfs();
	  };
	
	  Graph.prototype.is_root = function(v) {
	    return v === this.root;
	  };
	
	  Graph.prototype.set_root = function(r) {
	    if (r === this.root) {
	      return;
	    }
	    this.root = r;
	    return this.changed();
	  };
	
	  Graph.prototype.dfs = function() {
	    var q, results, u, used, v;
	    if (this.root == null) {
	      return;
	    }
	    q = [this.root];
	    this.vinfo[this.root].disttoroot = 0;
	    this.vinfo[this.root].subvertices = [];
	    used = {};
	    used[this.root] = true;
	    results = [];
	    while (q.length > 0) {
	      v = q.shift();
	      results.push((function() {
	        var i, len, ref, results1;
	        ref = this.vertices;
	        results1 = [];
	        for (i = 0, len = ref.length; i < len; i++) {
	          u = ref[i];
	          if (this.is_link(v, u) && !used[u]) {
	            if (this.vinfo[v].subvertices == null) {
	              this.vinfo[v].subvertices = [];
	            }
	            this.vinfo[v].subvertices.push(u);
	            this.vinfo[u].disttoroot = this.vinfo[v].disttoroot + 1;
	            q.push(u);
	            results1.push(used[u] = true);
	          } else {
	            results1.push(void 0);
	          }
	        }
	        return results1;
	      }).call(this));
	    }
	    return results;
	  };
	
	  Graph.prototype.on_change = function(callback) {
	    return this.change_listeners.push(callback);
	  };
	
	  Graph.prototype.changed = function() {
	    var callback, i, len, ref, results;
	    if (this.is_changes_lock) {
	      return;
	    }
	    ref = this.change_listeners;
	    results = [];
	    for (i = 0, len = ref.length; i < len; i++) {
	      callback = ref[i];
	      results.push(callback(this));
	    }
	    return results;
	  };
	
	  Graph.prototype.lock_changes = function() {
	    return this.is_changes_lock = true;
	  };
	
	  Graph.prototype.unlock_changes = function() {
	    return this.is_changes_lock = false;
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
	
	  Graph.prototype.add_vertex = function(name, info) {
	    this.set_vinfo(name, info);
	    if (this.is_vertex(name)) {
	      return;
	    }
	    this.vertices.push(name);
	    this.map[name] = {};
	    if (this.root == null) {
	      this.root = name;
	    }
	    return this.changed();
	  };
	
	  Graph.prototype.del_vertex = function(name) {
	    var prev_lock_status;
	    if (!this.is_vertex(name)) {
	      return;
	    }
	    prev_lock_status = this.is_changes_lock;
	    this.lock_changes();
	    _.pull(this.vertices, name);
	    delete this.vinfo[name];
	    this.freenames.push(parseInt(name));
	    this.del_links_with_vertex(name);
	    if (name === this.root) {
	      this.root = this.vertices.length > 0 ? this.vertices[0] : null;
	    }
	    this.is_changes_lock = prev_lock_status;
	    return this.changed();
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
	
	  Graph.prototype.add_link = function(v1, v2) {
	    if (this.is_link(v1, v2)) {
	      return;
	    }
	    this.links.push(this._make_link(v1, v2));
	    this.map[v1][v2] = this.map[v2][v1] = true;
	    return this.changed();
	  };
	
	  Graph.prototype.del_link = function(v1, v2) {
	    var p;
	    p = function(l) {
	      return (l.from === v1 && l.to === v2) || (l.from === v2 && l.to === v1);
	    };
	    return this.del_linkp(p);
	  };
	
	  Graph.prototype.del_links_with_vertex = function(v) {
	    var p;
	    p = function(l) {
	      return indexOf.call(_.values(l), v) >= 0;
	    };
	    return this.del_linkp(p);
	  };
	
	  Graph.prototype.del_link_from_map = function(v1, v2) {
	    this.map[v1][v2] = this.map[v2][v1] = false;
	    return this.changed();
	  };
	
	  Graph.prototype.del_linkp = function(predicate) {
	    var i, l, len, ref, res;
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
	    return this.changed();
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
	    div_for_constructor = $("<div>").attr('id', this.id + "gb").get(0);
	    div_for_graph_info = $("<div>").attr('id', this.id + "info").get(0);
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
	    var id, o, ref;
	    this.container = container;
	    this.graph = graph != null ? graph : new Graph;
	    if (_.isString(this.container)) {
	      this.container = $(this.container).get(0);
	    }
	    this.id = "graphinfo" + counter++;
	    this.el = $("<div>").get(0);
	    $(this.container).append(this.el);
	    this.info = {
	      "count_vertices": {
	        title: "Количество вершин:",
	        func: (function(_this) {
	          return function() {
	            return _this.graph.count_vertices();
	          };
	        })(this)
	      },
	      "count_links": {
	        title: "Количество ребер:",
	        func: (function(_this) {
	          return function() {
	            return _this.graph.count_links();
	          };
	        })(this)
	      },
	      "invariant3": {
	        title: "Инвариант 3:",
	        func: (function(_this) {
	          return function() {
	            return _this.invariant3();
	          };
	        })(this)
	      }
	    };
	    ref = this.info;
	    for (id in ref) {
	      o = ref[id];
	      $(this.el).append($("<div><u>" + o.title + "</u> <span id=" + (this.id + id) + "></span></div>"));
	    }
	    this.graph.on_change((function(_this) {
	      return function() {
	        return _this.update_info();
	      };
	    })(this));
	    this.update_info();
	  }
	
	  GraphInfo.prototype.invariant3 = function() {
	    var i, len, ref, res, v;
	    res = {};
	    ref = this.graph.vertices;
	    for (i = 0, len = ref.length; i < len; i++) {
	      v = ref[i];
	      res[v] = this.graph.vinfo[v].disttoroot;
	    }
	    res = JSON.stringify(res, null, 2);
	    return $("<pre>" + res + "</pre>");
	  };
	
	  GraphInfo.prototype.update_info = function() {
	    var id, o, ref, res, results;
	    this.graph.update();
	    ref = this.info;
	    results = [];
	    for (id in ref) {
	      o = ref[id];
	      id = this.id + id;
	      res = o.func();
	      $('#' + id).html("");
	      results.push($('#' + id).append(res));
	    }
	    return results;
	  };
	
	  return GraphInfo;

	})();


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmI2Mjg4YTViZGYwOTUwOTNjMjAiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vQ2FudmFzR3JhcGhDb25zdHJ1Y3Rvci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMuY29mZmVlIiwid2VicGFjazovLy8uL0dyYXBoRHJhd2VyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vR3JhcGhCdWlsZGVyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaFRhYmxlLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaEluZm8uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDckNBOztBQUFBLDBCQUF5QixvQkFBUSxDQUFSOztBQUN6QixnQkFBZSxvQkFBUSxDQUFSOztBQUNmLGNBQWEsb0JBQVEsQ0FBUjs7QUFHYixvQkFBbUI7O0FBR25CLFlBQVc7QUFDUDtHQUFBLE9BQU8sSUFBSSxDQUFDLEdBQUw7R0FDUCxLQUFLO0dBQ0wsT0FBTztBQUNIO0tBQUEsU0FBUyxJQUFJLENBQUMsR0FBTCxLQUFhO0tBQ3RCLE9BQU8sSUFBSSxDQUFDLEdBQUw7S0FDUCxTQUFTLElBQUksQ0FBQyxHQUFMLENBQVMsTUFBVCxFQUFpQixJQUFqQjtBQUNULFlBQU0sU0FBUyxDQUFmO0FBQ0k7O1NBQ0ksSUFBaUIsa0JBQWpCO1dBQUEsR0FBRyxDQUFDLE1BQUosQ0FBVyxFQUFYOztBQURKO09BRUEsVUFBVTtLQUhkO0FBSUE7O09BQ0ksSUFBZ0Isa0JB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QUFpQjtjQUFBO2dCQUFHLEtBQUMsWUFBRDtPQUFIO0tBQUEsUUFBakI7S0FDQSxJQUFDLFlBQUQ7R0FuQlM7O3VCQXFCYixhQUFZO0FBQ1I7S0FBQSxNQUFNO0FBQ047QUFBQTs7T0FDSSxHQUFJLEdBQUosR0FBUyxJQUFDLE1BQUssQ0FBQyxLQUFNLEdBQUUsQ0FBQztBQUQ3QjtLQUdBLE1BQU0sSUFBSSxDQUFDLFNBQUwsQ0FBZSxHQUFmLEVBQW9CLElBQXBCLEVBQTBCLENBQTFCO0FBQ04sWUFBTyxFQUFFLFVBQVEsR0FBUixHQUFZLFFBQWQ7R0FOQzs7dUJBUVosY0FBYTtBQUNUO0tBQUEsSUFBQyxNQUFLLENBQUMsTUFBUDtBQUNBO0FBQUE7VUFBQTs7T0FDSSxLQUFLLElBQUMsR0FBRCxHQUFNO09BQ1gsTUFBTSxDQUFDLENBQUMsSUFBRjtPQUNOLEVBQUUsTUFBSSxFQUFOLENBQVMsQ0FBQyxJQUFWLENBQWUsRUFBZjtvQkFDQSxFQUFFLE1BQUksRUFBTixDQUFTLENBQUMsTUFBVixDQUFpQixHQUFqQjtBQUpKOztHQUZTIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMmI2Mjg4YTViZGYwOTUwOTNjMjBcbiAqKi8iLCJcclxuQ2FudmFzR3JhcGhDb25zdHJ1Y3RvciA9IHJlcXVpcmUgJy4vQ2FudmFzR3JhcGhDb25zdHJ1Y3RvcidcclxuR3JhcGhCdWlsZGVyID0gcmVxdWlyZSAnLi9HcmFwaEJ1aWxkZXInXHJcbkdyYXBoVGFibGUgPSByZXF1aXJlICcuL0dyYXBoVGFibGUnXHJcblxyXG5cclxubWFpbmxvb3Bfb2JqZWN0cyA9IFtdXHJcblxyXG5cclxubWFpbmxvb3AgPSAtPlxyXG4gICAgdGltZSA9IERhdGUubm93KClcclxuICAgIGR0ID0gMTRcclxuICAgIHN0ZXAgPSAtPlxyXG4gICAgICAgIGN1cl9kdCA9IERhdGUubm93KCkgLSB0aW1lXHJcbiAgICAgICAgdGltZSA9IERhdGUubm93KClcclxuICAgICAgICBjdXJfZHQgPSBNYXRoLm1pbihjdXJfZHQsIDEwMDApXHJcbiAgICAgICAgd2hpbGUgY3VyX2R0ID4gMFxyXG4gICAgICAgICAgICBmb3Igb2JqIGluIG1haW5sb29wX29iamVjdHNcclxuICAgICAgICAgICAgICAgIG9iai51cGRhdGUgZHQgaWYgb2JqLnVwZGF0ZT8gXHJcbiAgICAgICAgICAgIGN1cl9kdCAtPSBkdFxyXG4gICAgICAgIGZvciBvYmogaW4gbWFpbmxvb3Bfb2JqZWN0c1xyXG4gICAgICAgICAgICBvYmoucmVuZGVyKCkgaWYgb2JqLnJlbmRlcj9cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgc3RlcFxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHN0ZXBcclxuXHJcbm1haW5sb29wKClcclxuXHJcblxyXG5cclxuIyBKU09OLnN0cmluZ2lmeShHcmFwaEJ1aWxkZXIubWFrZV9vcHRpb25zX2Zvcl9idWlsZGVyMShnYjEuZ3JhcGgpLCBudWxsKVxyXG5nMSA9IEdyYXBoQnVpbGRlci5idWlsZGVyMSB7XCJ2ZXJ0aWNlc1wiOntcIjBcIjp7XCJ4XCI6MTk4LFwieVwiOjM3NS4xODc1fSxcIjFcIjp7XCJ4XCI6OTMsXCJ5XCI6MzI2LjE4NzV9LFwiMlwiOntcInhcIjozMDIsXCJ5XCI6MzM4LjE4NzV9LFwiM1wiOntcInhcIjo0MyxcInlcIjoyNTAuMTg3NSxcIm5hbWVcIjpcIjNcIn0sXCI0XCI6e1wieFwiOjE1NCxcInlcIjoyNDcuMTg3NSxcIm5hbWVcIjpcIjRcIn0sXCI1XCI6e1wieFwiOjMwMCxcInlcIjoyNzIuMTg3NSxcIm5hbWVcIjpcIjVcIn0sXCI2XCI6e1wieFwiOjI2MSxcInlcIjoyMDguMTg3NSxcIm5hbWVcIjpcIjZcIn0sXCI3XCI6e1wieFwiOjM1NCxcInlcIjoyMjkuMTg3NSxcIm5hbWVcIjpcIjdcIn0sXCI4XCI6e1wieFwiOjEwMyxcInlcIjoxNzAuMTg3NSxcIm5hbWVcIjpcIjhcIn0sXCI5XCI6e1wieFwiOjM3LFwieVwiOjU4LjE4NzUsXCJuYW1lXCI6XCI5XCJ9LFwiMTBcIjp7XCJ4XCI6MTEzLFwieVwiOjYyLjE4NzUsXCJuYW1lXCI6XCIxMFwifSxcIjExXCI6e1wieFwiOjE5NCxcInlcIjo2MC4xODc1LFwibmFtZVwiOlwiMTFcIn0sXCIxMlwiOntcInhcIjozMjcsXCJ5XCI6MTgzLjE4NzUsXCJuYW1lXCI6XCIxMlwifSxcIjEzXCI6e1wieFwiOjM2MSxcInlcIjoxNDUuMTg3NSxcIm5hbWVcIjpcIjEzXCJ9LFwiMTRcIjp7XCJ4XCI6MzIwLFwieVwiOjExMy4xODc1LFwibmFtZVwiOlwiMTRcIn0sXCIxNVwiOntcInhcIjozNTcsXCJ5XCI6NzcuMTg3NSxcIm5hbWVcIjpcIjE1XCJ9LFwiMTZcIjp7XCJ4XCI6MzE3LFwieVwiOjQ2LjE4NzUsXCJuYW1lXCI6XCIxNlwifX0sXCJsaW5rc1wiOntcIjBcIjpbXCIxXCIsXCIyXCJdLFwiMVwiOltcIjNcIixcIjRcIl0sXCIyXCI6W1wiNVwiXSxcIjNcIjpbXCI4XCJdLFwiNVwiOltcIjZcIixcIjdcIl0sXCI4XCI6W1wiOVwiXSxcIjEwXCI6W1wiOFwiXSxcIjExXCI6W1wiOFwiXSxcIjEyXCI6W1wiN1wiLFwiMTNcIl0sXCIxM1wiOltcIjE0XCJdLFwiMTRcIjpbXCIxNVwiXSxcIjE1XCI6W1wiMTZcIl19fVxyXG5nMiA9IEdyYXBoQnVpbGRlci5idWlsZGVyMSB7XCJ2ZXJ0aWNlc1wiOntcIjBcIjp7XCJ4XCI6MTkxLFwieVwiOjM4MC4zNzUsXCJuYW1lXCI6XCIwXCJ9LFwiMVwiOntcInhcIjo1MCxcInlcIjozMjAuMzc1LFwibmFtZVwiOlwiMVwifSxcIjJcIjp7XCJ4XCI6MzA5LFwieVwiOjMwMy4zNzUsXCJuYW1lXCI6XCIyXCJ9LFwiM1wiOntcInhcIjo2OCxcInlcIjoxOTAuMzc1LFwibmFtZVwiOlwiM1wifSxcIjRcIjp7XCJ4XCI6MzA2LFwieVwiOjE4MC4zNzUsXCJuYW1lXCI6XCI0XCJ9LFwiNVwiOntcInhcIjo2NSxcInlcIjo3MS4zNzUsXCJuYW1lXCI6XCI1XCJ9LFwiNlwiOntcInhcIjoxODQsXCJ5XCI6MTg3LjM3NSxcIm5hbWVcIjpcIjZcIn0sXCI3XCI6e1wieFwiOjI2NixcInlcIjo4OS4zNzUsXCJuYW1lXCI6XCI3XCJ9LFwiOFwiOntcInhcIjozNTIsXCJ5XCI6ODIuMzc1LFwibmFtZVwiOlwiOFwifSxcIjlcIjp7XCJ4XCI6MTc3LFwieVwiOjI5Ny4zNzUsXCJuYW1lXCI6XCI5XCJ9fSxcImxpbmtzXCI6e1wiMFwiOltcIjJcIixcIjFcIixcIjlcIl0sXCIxXCI6W1wiM1wiXSxcIjJcIjpbXCI0XCJdLFwiM1wiOltcIjVcIl0sXCI0XCI6W1wiN1wiLFwiOFwiXSxcIjZcIjpbXCI5XCJdfX1cclxuXHJcbmd0ID0gW25ldyBHcmFwaFRhYmxlKFwiI2d0MVwiLCBnMSksIG5ldyBHcmFwaFRhYmxlIFwiI2d0MlwiLCBnMl1cclxubWFpbmxvb3Bfb2JqZWN0cyA9IG1haW5sb29wX29iamVjdHMuY29uY2F0IGd0XHJcblxyXG5cclxucHJnID0gKGkpIC0+IGNvbnNvbGUubG9nIEpTT04uc3RyaW5naWZ5KEdyYXBoQnVpbGRlci5tYWtlX29wdGlvbnNfZm9yX2J1aWxkZXIxKGd0W2ldLmdyYXBoKSlcclxuXHJcblxyXG5cclxuXy5kZWZhdWx0cyB3aW5kb3csIHtHcmFwaEJ1aWxkZXIsIHByZywgZ3R9XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbWFpbi5jb2ZmZWVcbiAqKi8iLCJcclxudXRpbHMgPSByZXF1aXJlICcuL3V0aWxzJ1xyXG5HcmFwaERyYXdlciA9IHJlcXVpcmUgJy4vR3JhcGhEcmF3ZXInXHJcbkdyYXBoID0gcmVxdWlyZSAnLi9HcmFwaCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gXHJcbmNsYXNzIENhbnZhc0dyYXBoQ29uc3RydWN0b3JcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogKEBjb250YWluZXIsIEBncmFwaCA9IG5ldyBHcmFwaCkgLT5cclxuICAgICAgICBAY2FuID0gJChcIjxjYW52YXM+XCIpLmdldCAwXHJcbiAgICAgICAgQGN0eCA9IEBjYW4uZ2V0Q29udGV4dCAnMmQnXHJcbiAgICAgICAgQGNhbi53aWR0aCA9IEBjYW4uaGVpZ2h0ID0gNDAwXHJcbiAgICAgICAgQG1vdXNlID0geyBcclxuICAgICAgICAgICAgeDogMCwgeTogMCAjINGC0LXQutGD0YnQuNC1INC60L7QvtGA0LTQuNC90LDRgtGLINC80YvRiNC4INC90LDQtCBAY2FuXHJcbiAgICAgICAgICAgIHRhcmdldDogbnVsbCAjINC40LzRjyDQstC10YDRiNC40L3RiyDQvdCw0LQg0LrQvtGC0L7RgNC+0Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLRgdGPINC90LXQutC+0YLQvtGA0L7QtSDQtNC10LnRgdGC0LLQuNC1XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBmb2N1cyA9IGZhbHNlXHJcbiAgICAgICAgQGhhbmRsZV9ldmVudHMoKVxyXG4gICAgICAgICQoQGNvbnRhaW5lcikuYXBwZW5kIEBjYW5cclxuICAgICAgICBAZ3JhcGhfZHJhd2VyID0gbmV3IEdyYXBoRHJhd2VyIEBncmFwaCwgQGN0eFxyXG5cclxuICAgIHVwZGF0ZV9tb3VzZTogKGUpIC0+XHJcbiAgICAgICAgcG9zID0gdXRpbHMuZ2V0X21vdXNlcG9zX2luX2VsZW1lbnQgQGNhbiwgZVxyXG4gICAgICAgIEBtb3VzZS54ID0gcG9zLnhcclxuICAgICAgICBAbW91c2UueSA9IHBvcy55XHJcblxyXG4gICAgaGFuZGxlX2V2ZW50czogLT5cclxuICAgICAgICAkKEBjYW4pLm1vdXNlb3V0ID0+IEBmb2N1cyA9IGZhbHNlXHJcbiAgICAgICAgJChAY2FuKS5tb3VzZW92ZXIgPT4gQGZvY3VzID0gdHJ1ZVxyXG4gICAgICAgIFxyXG4gICAgICAgICQoQGNhbikubW91c2Vtb3ZlIChlKSA9PlxyXG4gICAgICAgICAgICBAdXBkYXRlX21vdXNlIGVcclxuICAgICAgICAgICAgaWYgQG1vdXNlLnRhcmdldFxyXG4gICAgICAgICAgICAgICAgaWYgQG1vdXNlLmRyYWd0eXBlID09IFwibW92ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4X25hbWUgPSBAbW91c2UudGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgQGdyYXBoLnNldF92aW5mbyB2ZXJ0ZXhfbmFtZSwgdXRpbHMudmVjMihAbW91c2UueCwgQG1vdXNlLnkpXHJcbiAgICAgICAgICAgICAgICBpZiBAbW91c2UuZHJhZ3R5cGUgPT0gXCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICBAbW91c2UubGlua2VuZCA9IF8uY2xvbmUgdXRpbHMudmVjMiBAbW91c2UueCwgQG1vdXNlLnlcclxuXHJcbiAgICAgICAgJChAY2FuKS5tb3VzZWRvd24gKGUpID0+XHJcbiAgICAgICAgICAgIHZuYW1lID0gQGdyYXBoX2RyYXdlci5nZXRfdmVydGV4X2J5eHkgQG1vdXNlXHJcbiAgICAgICAgICAgIGlmIHZuYW1lPyBhbmQgQG1vdXNlLnRhcmdldD8gYW5kIEBtb3VzZS5kcmFndHlwZSA9PSBcImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgQGdyYXBoLmFkZF9saW5rIEBtb3VzZS50YXJnZXQsIHZuYW1lXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgQG1vdXNlLnRhcmdldCA9IHZuYW1lXHJcbiAgICAgICAgICAgIEBtb3VzZS5kcmFndHlwZSA9IFwibW92ZVwiXHJcblxyXG4gICAgICAgICQoQGNhbikubW91c2V1cCAoZSkgPT5cclxuICAgICAgICAgICAgQG1vdXNlLnRhcmdldCA9IG51bGxcclxuICAgICAgICAgICAgQG1vdXNlLmRyYWd0eXBlID0gbnVsbFxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5rZXlkb3duIChlKSA9PlxyXG4gICAgICAgICAgICByZXR1cm4gdW5sZXNzIEBmb2N1c1xyXG4gICAgICAgICAgICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIHN3aXRjaCBjaFxyXG4gICAgICAgICAgICAgICAgIyBTZXQgbmV3IHJvb3RcclxuICAgICAgICAgICAgICAgIHdoZW4gJ3InXHJcbiAgICAgICAgICAgICAgICAgICAgdm5hbWUgPSBAZ3JhcGhfZHJhd2VyLmdldF92ZXJ0ZXhfYnl4eSBAbW91c2VcclxuICAgICAgICAgICAgICAgICAgICBAZ3JhcGgucm9vdCA9IHZuYW1lXHJcblxyXG4gICAgICAgICAgICAgICAgIyBBZGQgdmVydGV4XHJcbiAgICAgICAgICAgICAgICB3aGVuICd2J1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBAZ3JhcGguZ2VuZXJhdGVfbmFtZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgQGdyYXBoLmFkZF92ZXJ0ZXggbmFtZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBAbW91c2UueCwgeTogQG1vdXNlLnksIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgIyBRdWVyeSBmb3IgZ3JhcGhcclxuICAgICAgICAgICAgICAgIHdoZW4gJ3EnXHJcbiAgICAgICAgICAgICAgICAgICAgY21kID0gcHJvbXB0KFwi0JLQstC10LTQuNGC0LUg0LrQvtC80LDQvdC00YNcIilcclxuXHJcbiAgICAgICAgICAgICAgICAjIERlbGV0ZSB2ZXJ0ZXhcclxuICAgICAgICAgICAgICAgIHdoZW4gJ2QnXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgZS5zaGlmdEtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgdiBpbiBfLmNsb25lIEBncmFwaC52ZXJ0aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGdyYXBoLmRlbF92ZXJ0ZXggdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB2bmFtZSA9IEBncmFwaF9kcmF3ZXIuZ2V0X3ZlcnRleF9ieXh5IEBtb3VzZVxyXG4gICAgICAgICAgICAgICAgICAgIEBncmFwaC5kZWxfdmVydGV4IHZuYW1lXHJcblxyXG4gICAgICAgICAgICAgICAgIyBBZGQgbGlua1xyXG4gICAgICAgICAgICAgICAgd2hlbiAnbCdcclxuICAgICAgICAgICAgICAgICAgICB2bmFtZSA9IEBncmFwaF9kcmF3ZXIuZ2V0X3ZlcnRleF9ieXh5IEBtb3VzZVxyXG4gICAgICAgICAgICAgICAgICAgIEBtb3VzZS50YXJnZXQgPSB2bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIEBtb3VzZS5kcmFndHlwZSA9IFwibGlua1wiXHJcblxyXG4gICAgICAgICAgICAgICAgIyBQcmludCBvdGhlciBpbmZvXHJcbiAgICAgICAgICAgICAgICB3aGVuICcxJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIEBtb3VzZVxyXG5cclxuICAgIHVwZGF0ZTogKGR0KSAtPlxyXG5cclxuICAgIGRyYXdfZHJhZ2xpbms6IC0+XHJcbiAgICAgICAgaWYgQG1vdXNlLnRhcmdldD8gYW5kIEBtb3VzZS5kcmFndHlwZSA9PSBcImxpbmtcIiBhbmQgQG1vdXNlLmxpbmtlbmQ/XHJcbiAgICAgICAgICAgIHYgPSBAZ3JhcGguZ2V0X3ZpbmZvIEBtb3VzZS50YXJnZXRcclxuICAgICAgICAgICAgdXRpbHMuZHJhd19saW5lIEBjdHgsIHYsIEBtb3VzZVxyXG5cclxuICAgIHJlbmRlcjogLT5cclxuICAgICAgICBAY3R4LmNsZWFyUmVjdCAwLCAwLCBAY2FuLndpZHRoLCBAY2FuLmhlaWdodFxyXG4gICAgICAgIEBkcmF3X2RyYWdsaW5rKClcclxuICAgICAgICBAZ3JhcGhfZHJhd2VyLnJlbmRlcigpXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NhbnZhc0dyYXBoQ29uc3RydWN0b3IuY29mZmVlXG4gKiovIiwiXHJcbiMgPT09PT0gbWF0aHMgdXRpbHMgPT09PT1cclxuZGlzdCA9IChhLCBiKSAtPiBNYXRoLnNxcnQoTWF0aC5wb3coYS54IC0gYi54LCAyKSArIE1hdGgucG93KGEueSAtIGIueSwgMikpXHJcbnZlYzIgPSAoeCwgeSkgLT4ge3gsIHl9XHJcblxyXG4jID09PT09IHV0aWxzIGZvciBodG1sIGVsZW1lbnRzID09PT09IFxyXG5nZXRfbW91c2Vwb3NfaW5fZWxlbWVudCA9IChlbCwgZSkgLT5cclxuICAgIG9mZnNldCA9ICQoZWwpLm9mZnNldCgpXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICB4OiBlLnBhZ2VYIC0gb2Zmc2V0LmxlZnQsIFxyXG4gICAgICAgIHk6IGUucGFnZVkgLSBvZmZzZXQudG9wIFxyXG4gICAgfVxyXG5cclxuIyBjcmVhdGUgaHRtbCB0YWJsZSBieSBqcyBtYXRyaXhcclxuIyBvOiB7IGhlYWRlcjogYm9vbCB9XHJcbm1ha2VfdGFsYmUgPSAoYXJyLCBvID0ge30pIC0+XHJcbiAgICB0YmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICd0YWJsZSdcclxuICAgIGZvciBsaW5lLCBpIGluIGFyclxyXG4gICAgICAgIHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAndHInXHJcbiAgICAgICAgZm9yIHZhbCwgaiBpbiBsaW5lXHJcbiAgICAgICAgICAgIHQgPSBpZiBvLmhlYWRlciBhbmQgaSA9PSAwIHRoZW4gJ3RoJyBlbHNlICd0ZCdcclxuICAgICAgICAgICAgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgdFxyXG4gICAgICAgICAgICB2YWwgPSBhcnJbaV1bal1cclxuICAgICAgICAgICAgaWYgXy5pc1N0cmluZyB2YWxcclxuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gdmFsXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQgdmFsXHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkIGNlbGxcclxuICAgICAgICB0YmwuYXBwZW5kQ2hpbGQgdHJcclxuICAgIHJldHVybiB0YmxcclxuXHJcbiMgPT09PT0gR3JhcGhpY3MgPT09PT1cclxuZHJhd19saW5lID0gKGN0eCwgYSwgYikgLT5cclxuICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgY3R4Lm1vdmVUbyBhLngsIGEueVxyXG4gICAgY3R4LmxpbmVUbyBiLngsIGIueVxyXG4gICAgY3R4LnN0cm9rZSgpXHJcblxyXG5kcmF3X2NpcmNsZV93aXRoX3RleHQgPSAoY3R4LCB4LCB5LCByLCB0ZXh0LCBvKSAtPlxyXG4gICAgY3R4LmZvbnQgPSBcIiN7by5mb250c3p9cHggI3tvLmZvbnRGYW1pbHl9XCJcclxuICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgY3R4LmFyYyB4LCB5LCByLCAwLCAyICogTWF0aC5QSVxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IG8uY2lyY2xlQ29sb3JcclxuICAgIGN0eC5maWxsKClcclxuICAgIGN0eC5maWxsU3R5bGUgPSBvLnRleHRDb2xvclxyXG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInXHJcbiAgICBjdHgudGV4dEJhc2VMaW5lID0gJ21pZGRsZSdcclxuICAgIGN0eC5maWxsVGV4dCB0ZXh0LCB4LCB5ICsgby5mb250c3ovNFxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgIyBtYXRoIHV0aWxzXHJcbiAgICBkaXN0LCB2ZWMyXHJcbiAgICAjIGh0bWwgdXRpbHNcclxuICAgIGdldF9tb3VzZXBvc19pbl9lbGVtZW50LCBtYWtlX3RhbGJlXHJcbiAgICAjIEdyYXBoaWNzXHJcbiAgICBkcmF3X2xpbmUsIGRyYXdfY2lyY2xlX3dpdGhfdGV4dFxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdXRpbHMuY29mZmVlXG4gKiovIiwiXHJcbnV0aWxzID0gcmVxdWlyZSAnLi91dGlscydcclxuXHJcblxyXG5GT05UU1ogPSAyMFxyXG5SQURJSVVTID0gRk9OVFNaXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBcclxuY2xhc3MgR3JhcGhEcmF3ZXJcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3I6IChAZ3JhcGgsIEBjdHgpIC0+XHJcblxyXG4gICAgIyA9PT0gVkVSVElDRVMgPT09IFxyXG4gICAgZ2V0X3ZlcnRleF9ieXh5OiAocG9zKSAtPlxyXG4gICAgICAgIGZvciBuYW1lLCBpbmZvIG9mIEBncmFwaC52aW5mb1xyXG4gICAgICAgICAgICByZXR1cm4gbmFtZSBpZiB1dGlscy5kaXN0KHBvcywgaW5mbykgPCBSQURJSVVTXHJcblxyXG4gICAgbW92ZV92ZXJ0ZXg6ICh2ZXJ0ZXhfbmFtZSwgbmV3X3BvcykgLT5cclxuICAgICAgICBAZ3JhcGguc2V0X3ZpbmZvIHZlcnRleF9uYW1lLCBuZXdfcG9zXHJcblxyXG4gICAgIyA9PT0gUkVOREVSID09PVxyXG4gICAgZHJhd19saW5rczogKCkgLT5cclxuICAgICAgICBmb3IgbCBpbiBAZ3JhcGgubGlua3NcclxuICAgICAgICAgICAgYSA9IEBncmFwaC5nZXRfdmluZm8gbC5mcm9tXHJcbiAgICAgICAgICAgIGIgPSBAZ3JhcGguZ2V0X3ZpbmZvIGwudG9cclxuICAgICAgICAgICAgdXRpbHMuZHJhd19saW5lIEBjdHgsIGEsIGJcclxuXHJcbiAgICBkcmF3X3ZlcnRpY2VzOiAoKSAtPlxyXG4gICAgICAgIGZvciBuYW1lLCBpbmZvIG9mIEBncmFwaC52aW5mb1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3IgPSBpZiBAZ3JhcGguaXNfcm9vdCBuYW1lIHRoZW4gJ3JlZCcgZWxzZSAnd2hpdGUnXHJcbiAgICAgICAgICAgIHV0aWxzLmRyYXdfY2lyY2xlX3dpdGhfdGV4dChcclxuICAgICAgICAgICAgICAgIEBjdHgsIGluZm8ueCwgaW5mby55LCBSQURJSVVTLCBuYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udHN6OiBGT05UU1osIGZvbnRGYW1pbHk6ICdNb25vc3BhY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZUNvbG9yOiAnYmxhY2snLCB0ZXh0Q29sb3I6IHRleHRDb2xvclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgcmVuZGVyOiAoKSAtPlxyXG4gICAgICAgIEBjdHguc2F2ZSgpXHJcbiAgICAgICAgQGRyYXdfbGlua3MoKVxyXG4gICAgICAgIEBkcmF3X3ZlcnRpY2VzKClcclxuICAgICAgICBAY3R4LnJlc3RvcmUoKVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaERyYXdlci5jb2ZmZWVcbiAqKi8iLCJcclxuIyBUT0RPOiDQsdC70L7QutC40YDQvtCy0LrQsCDQuCDRgNCw0LfQsdC70L7QutC40YDQvtCy0LrQsCBjYWxsX2NoYW5nZWRcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gXHJcbmNsYXNzIEdyYXBoXHJcbiAgICBjb25zdHJ1Y3RvcjogLT5cclxuICAgICAgICBAdmVydGljZXMgPSBbXVxyXG4gICAgICAgIEBsaW5rcyA9IFtdXHJcbiAgICAgICAgQG1hcCA9IHt9XHJcbiAgICAgICAgQHZpbmZvID0ge30gIyBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGZvciB2ZXJ0ZXhcclxuICAgICAgICBAY2hhbmdlX2xpc3RlbmVycyA9IFtdXHJcbiAgICAgICAgQGZyZWVuYW1lcyA9IFtdXHJcbiAgICAgICAgQHJvb3QgPSBudWxsXHJcbiAgICAgICAgQGlzX2NoYW5nZXNfbG9jayA9IGZhbHNlXHJcblxyXG4gICAgIyA9PT0gT1RIRVIgPT09PVxyXG4gICAgIyB1cGRhdGUgYWxsIGluZm8gaW50byB0aGlzIGdyYXBoXHJcbiAgICB1cGRhdGU6IC0+XHJcbiAgICAgICAgQGRmcygpXHJcblxyXG4gICAgaXNfcm9vdDogKHYpIC0+IHYgPT0gQHJvb3RcclxuICAgIHNldF9yb290OiAocikgLT4gXHJcbiAgICAgICAgcmV0dXJuIGlmIHIgPT0gQHJvb3RcclxuICAgICAgICBAcm9vdCA9IHJcclxuICAgICAgICBAY2hhbmdlZCgpXHJcblxyXG4gICAgZGZzOiAtPlxyXG4gICAgICAgIHJldHVybiBpZiBub3QgQHJvb3Q/XHJcbiAgICAgICAgcSA9IFtAcm9vdF1cclxuICAgICAgICBAdmluZm9bQHJvb3RdLmRpc3R0b3Jvb3QgPSAwXHJcbiAgICAgICAgQHZpbmZvW0Byb290XS5zdWJ2ZXJ0aWNlcyA9IFtdXHJcbiAgICAgICAgdXNlZCA9IHt9XHJcbiAgICAgICAgdXNlZFtAcm9vdF0gPSB0cnVlXHJcbiAgICAgICAgd2hpbGUgcS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgIHYgPSBxLnNoaWZ0KClcclxuICAgICAgICAgICAgZm9yIHUgaW4gQHZlcnRpY2VzXHJcbiAgICAgICAgICAgICAgICBpZiBAaXNfbGluayh2LCB1KSBhbmQgbm90IHVzZWRbdV1cclxuICAgICAgICAgICAgICAgICAgICBAdmluZm9bdl0uc3VidmVydGljZXMgPSBbXSBpZiBub3QgQHZpbmZvW3ZdLnN1YnZlcnRpY2VzP1xyXG4gICAgICAgICAgICAgICAgICAgIEB2aW5mb1t2XS5zdWJ2ZXJ0aWNlcy5wdXNoIHVcclxuICAgICAgICAgICAgICAgICAgICBAdmluZm9bdV0uZGlzdHRvcm9vdCA9IEB2aW5mb1t2XS5kaXN0dG9yb290ICsgMVxyXG4gICAgICAgICAgICAgICAgICAgIHEucHVzaCB1XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlZFt1XSA9IHRydWVcclxuXHJcbiAgICAjID09PSBDSEFOR0VTID09PVxyXG4gICAgb25fY2hhbmdlOiAoY2FsbGJhY2spIC0+IFxyXG4gICAgICAgIEBjaGFuZ2VfbGlzdGVuZXJzLnB1c2ggY2FsbGJhY2tcclxuXHJcbiAgICBjaGFuZ2VkOiAtPiBcclxuICAgICAgICByZXR1cm4gaWYgQGlzX2NoYW5nZXNfbG9ja1xyXG4gICAgICAgIGZvciBjYWxsYmFjayBpbiBAY2hhbmdlX2xpc3RlbmVyc1xyXG4gICAgICAgICAgICBjYWxsYmFjayh0aGlzKVxyXG5cclxuICAgIGxvY2tfY2hhbmdlczogLT5cclxuICAgICAgICBAaXNfY2hhbmdlc19sb2NrID0gdHJ1ZVxyXG5cclxuICAgIHVubG9ja19jaGFuZ2VzOiAtPlxyXG4gICAgICAgIEBpc19jaGFuZ2VzX2xvY2sgPSBmYWxzZVxyXG5cclxuICAgICMgPT09IFZFUlRJQ0VTID09PSBcclxuICAgIGdlbmVyYXRlX25hbWU6IC0+XHJcbiAgICAgICAgQGZyZWVuYW1lcy5zb3J0IChhLCBiKSAtPiBhIC0gYlxyXG4gICAgICAgIHJlcyA9IFwiXCJcclxuICAgICAgICB3aGlsZSBAZnJlZW5hbWVzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgdiA9IFwiXCIgKyBAZnJlZW5hbWVzLnNoaWZ0KClcclxuICAgICAgICAgICAgcmV0dXJuIHYgaWYgbm90IEBpc192ZXJ0ZXggdlxyXG4gICAgICAgIHJldHVybiBcIlwiICsgQGNvdW50X3ZlcnRpY2VzKClcclxuXHJcbiAgICBjb3VudF92ZXJ0aWNlczogLT4gQHZlcnRpY2VzLmxlbmd0aFxyXG5cclxuICAgIGlzX3ZlcnRleDogKG5hbWUpIC0+XHJcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gQHZlcnRpY2VzXHJcblxyXG4gICAgZ2V0X3ZpbmZvOiAobmFtZSkgLT4gQHZpbmZvW25hbWVdXHJcblxyXG4gICAgc2V0X3ZpbmZvOiAobmFtZSwgaW5mbykgLT5cclxuICAgICAgICB1bmxlc3MgQHZpbmZvW25hbWVdP1xyXG4gICAgICAgICAgICBAdmluZm9bbmFtZV0gPSBpbmZvXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIEB2aW5mb1tuYW1lXVtrXSA9IHYgZm9yIGssdiBvZiBpbmZvIGlmIGluZm8/XHJcblxyXG4gICAgYWRkX3ZlcnRleDogKG5hbWUsIGluZm8pIC0+XHJcbiAgICAgICAgQHNldF92aW5mbyBuYW1lLCBpbmZvXHJcbiAgICAgICAgcmV0dXJuIGlmIEBpc192ZXJ0ZXggbmFtZVxyXG4gICAgICAgIEB2ZXJ0aWNlcy5wdXNoIG5hbWVcclxuICAgICAgICBAbWFwW25hbWVdID0ge31cclxuICAgICAgICBpZiBub3QgQHJvb3Q/XHJcbiAgICAgICAgICAgIEByb290ID0gbmFtZVxyXG4gICAgICAgIEBjaGFuZ2VkKClcclxuXHJcbiAgICBkZWxfdmVydGV4OiAobmFtZSkgLT5cclxuICAgICAgICByZXR1cm4gaWYgbm90IEBpc192ZXJ0ZXgobmFtZSlcclxuXHJcbiAgICAgICAgcHJldl9sb2NrX3N0YXR1cyA9IEBpc19jaGFuZ2VzX2xvY2tcclxuICAgICAgICBAbG9ja19jaGFuZ2VzKClcclxuXHJcbiAgICAgICAgXy5wdWxsIEB2ZXJ0aWNlcywgbmFtZVxyXG4gICAgICAgIGRlbGV0ZSBAdmluZm9bbmFtZV1cclxuICAgICAgICBAZnJlZW5hbWVzLnB1c2ggcGFyc2VJbnQobmFtZSlcclxuICAgICAgICBAZGVsX2xpbmtzX3dpdGhfdmVydGV4IG5hbWVcclxuICAgICAgICBpZiBuYW1lID09IEByb290XHJcbiAgICAgICAgICAgIEByb290ID0gaWYgQHZlcnRpY2VzLmxlbmd0aCA+IDAgdGhlbiBAdmVydGljZXNbMF0gZWxzZSBudWxsXHJcblxyXG4gICAgICAgIEBpc19jaGFuZ2VzX2xvY2sgPSBwcmV2X2xvY2tfc3RhdHVzXHJcbiAgICAgICAgQGNoYW5nZWQoKVxyXG5cclxuICAgICMgPT09IExJTktTID09PSBcclxuICAgIGNvdW50X2xpbmtzOiAtPiBcclxuICAgICAgICByZXR1cm4gQGxpbmtzLmxlbmd0aFxyXG5cclxuICAgIF9tYWtlX2xpbms6ICh2MSwgdjIpIC0+XHJcbiAgICAgICAgYXJyID0gW3YxLCB2Ml0uc29ydCgpXHJcbiAgICAgICAgcmV0dXJuIHsgZnJvbTogYXJyWzBdLCB0bzogYXJyWzFdIH1cclxuXHJcbiAgICBhZGRfbGluazogKHYxLCB2MikgLT5cclxuICAgICAgICByZXR1cm4gaWYgQGlzX2xpbmsodjEsIHYyKVxyXG4gICAgICAgIEBsaW5rcy5wdXNoIEBfbWFrZV9saW5rKHYxLCB2MilcclxuICAgICAgICBAbWFwW3YxXVt2Ml0gPSBAbWFwW3YyXVt2MV0gPSB0cnVlXHJcbiAgICAgICAgQGNoYW5nZWQoKVxyXG5cclxuICAgIGRlbF9saW5rOiAodjEsIHYyKSAtPlxyXG4gICAgICAgIHAgPSAobCkgLT4gKGwuZnJvbSA9PSB2MSBhbmQgbC50byA9PSB2Mikgb3IgKGwuZnJvbSA9PSB2MiBhbmQgbC50byA9PSB2MSlcclxuICAgICAgICBAZGVsX2xpbmtwIHBcclxuXHJcbiAgICBkZWxfbGlua3Nfd2l0aF92ZXJ0ZXg6ICh2KSAtPlxyXG4gICAgICAgIHAgPSAobCkgLT4gdiBpbiBfLnZhbHVlcyBsXHJcbiAgICAgICAgQGRlbF9saW5rcCBwXHJcblxyXG4gICAgZGVsX2xpbmtfZnJvbV9tYXA6ICh2MSwgdjIpIC0+XHJcbiAgICAgICAgQG1hcFt2MV1bdjJdID0gQG1hcFt2Ml1bdjFdID0gZmFsc2VcclxuICAgICAgICBAY2hhbmdlZCgpXHJcblxyXG4gICAgZGVsX2xpbmtwOiAocHJlZGljYXRlKSAtPlxyXG4gICAgICAgIHJlcyA9IFtdXHJcbiAgICAgICAgZm9yIGwgaW4gQGxpbmtzXHJcbiAgICAgICAgICAgIGlmIHByZWRpY2F0ZSBsXHJcbiAgICAgICAgICAgICAgICBAZGVsX2xpbmtfZnJvbV9tYXAgbC5mcm9tLCBsLnRvLCBmYWxzZVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXMucHVzaCBsXHJcbiAgICAgICAgQGxpbmtzID0gcmVzXHJcbiAgICAgICAgQGNoYW5nZWQoKVxyXG5cclxuICAgIGlzX2xpbms6ICh2MSwgdjIpIC0+XHJcbiAgICAgICAgcmV0dXJuICEhQG1hcFt2MV1bdjJdXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0dyYXBoLmNvZmZlZVxuICoqLyIsIlxyXG5HcmFwaCA9IHJlcXVpcmUgJy4vR3JhcGgnXHJcblxyXG5cclxuIyMjXHJcbmV4YW1wbGUgZm9yIGJ1aWxkZXIxOlxyXG5vcHRpb25zXHJcbiAgICB2ZXJ0aWNlczpcclxuICAgICAgICAwOiB4OiAxMDAsIHk6IDEwMFxyXG4gICAgICAgIDE6IHg6IDUwLCB5OiA1MFxyXG4gICAgICAgIDI6IHg6IDE1MCwgeTogNTBcclxuICAgIGxpbmtzOlxyXG4gICAgICAgIDA6IFsxLCAyXVxyXG4jIyNcclxubW9kdWxlLmV4cG9ydHMuXHJcbmJ1aWxkZXIxID0gKG9wdGlvbnMpIC0+XHJcbiAgICBnID0gbmV3IEdyYXBoXHJcbiAgICBnLmFkZF92ZXJ0ZXggXCJcIituYW1lLCBpbmZvIGZvciBuYW1lLCBpbmZvIG9mIG9wdGlvbnMudmVydGljZXNcclxuICAgIGZvciBhLCBhcnIgb2Ygb3B0aW9ucy5saW5rc1xyXG4gICAgICAgIGZvciBiIGluIGFyclxyXG4gICAgICAgICAgICBnLmFkZF9saW5rIFwiXCIrYSwgXCJcIitiXHJcbiAgICByZXR1cm4gZ1xyXG5cclxubW9kdWxlLmV4cG9ydHMuXHJcbm1ha2Vfb3B0aW9uc19mb3JfYnVpbGRlcjEgPSAoZ3JhcGgpIC0+XHJcbiAgICB2ZXJ0aWNlcyA9IF8uY2xvbmUgZ3JhcGgudmluZm9cclxuICAgIGxpbmtzID0ge31cclxuICAgIGZvciB7ZnJvbSwgdG99IGluIGdyYXBoLmxpbmtzXHJcbiAgICAgICAgbGlua3NbZnJvbV0gPSBbXSBpZiBub3QgbGlua3NbZnJvbV0/XHJcbiAgICAgICAgbGlua3NbZnJvbV0ucHVzaCB0b1xyXG4gICAgcmV0dXJuIHt2ZXJ0aWNlcywgbGlua3N9XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vR3JhcGhCdWlsZGVyLmNvZmZlZVxuICoqLyIsIlxyXG5HcmFwaCA9IHJlcXVpcmUgJy4vR3JhcGgnXHJcbnV0aWxzID0gcmVxdWlyZSAnLi91dGlscydcclxuQ2FudmFzR3JhcGhDb25zdHJ1Y3RvciA9IHJlcXVpcmUgJy4vQ2FudmFzR3JhcGhDb25zdHJ1Y3RvcidcclxuR3JhcGhJbmZvID0gcmVxdWlyZSAnLi9HcmFwaEluZm8nXHJcblxyXG5jb3VudGVyID0gMFxyXG5cclxubW9kdWxlLmV4cG9ydHMgPVxyXG5jbGFzcyBHcmFwaFRhYmxlXHJcbiAgICBjb25zdHJ1Y3RvcjogKEBjb250YWluZXIsIEBncmFwaCA9IG5ldyBHcmFwaCkgLT5cclxuICAgICAgICBAaWQgPSBcImd0XCIgKyBjb3VudGVyKytcclxuICAgICAgICBkaXZfZm9yX2NvbnN0cnVjdG9yID0gJChcIjxkaXY+XCIpLmF0dHIoJ2lkJywgQGlkICsgXCJnYlwiKS5nZXQgMFxyXG4gICAgICAgIGRpdl9mb3JfZ3JhcGhfaW5mbyA9ICQoXCI8ZGl2PlwiKS5hdHRyKCdpZCcsIEBpZCArIFwiaW5mb1wiKS5nZXQgMFxyXG5cclxuICAgICAgICBAZWwgPSB1dGlscy5tYWtlX3RhbGJlIFtcclxuICAgICAgICAgICAgWyfQoNC40YHRg9C90L7QuiDQs9GA0LDRhNCwJywgJ9CY0L3RhNC+0YDQvNCw0YbQuNGPINC+INCz0YDQsNGE0LUnXSwgXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIGRpdl9mb3JfY29uc3RydWN0b3IsIGRpdl9mb3JfZ3JhcGhfaW5mb1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXSwgeyBoZWFkZXI6IHRydWUgfVxyXG4gICAgICAgICQoQGNvbnRhaW5lcikuYXBwZW5kIEBlbFxyXG5cclxuICAgICAgICBAZ2IgPSBuZXcgQ2FudmFzR3JhcGhDb25zdHJ1Y3RvciBkaXZfZm9yX2NvbnN0cnVjdG9yLCBAZ3JhcGhcclxuICAgICAgICBAZ2kgPSBuZXcgR3JhcGhJbmZvIGRpdl9mb3JfZ3JhcGhfaW5mbywgQGdyYXBoXHJcblxyXG4gICAgdXBkYXRlOiAtPlxyXG4gICAgICAgIEBnYi51cGRhdGUoKSBpZiBAZ2IudXBkYXRlP1xyXG5cclxuICAgIHJlbmRlcjogLT5cclxuICAgICAgICBAZ2IucmVuZGVyKClcclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vR3JhcGhUYWJsZS5jb2ZmZWVcbiAqKi8iLCJcclxuXHJcbmNvdW50ZXIgPSAwXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPVxyXG5jbGFzcyBHcmFwaEluZm9cclxuICAgIGNvbnN0cnVjdG9yOiAoQGNvbnRhaW5lciwgQGdyYXBoID0gbmV3IEdyYXBoKSAtPlxyXG4gICAgICAgIEBjb250YWluZXIgPSAkKEBjb250YWluZXIpLmdldCAwIGlmIF8uaXNTdHJpbmcgQGNvbnRhaW5lclxyXG4gICAgICAgIEBpZCA9IFwiZ3JhcGhpbmZvXCIgKyBjb3VudGVyKytcclxuICAgICAgICBAZWwgPSAkKFwiPGRpdj5cIikuZ2V0IDBcclxuICAgICAgICAkKEBjb250YWluZXIpLmFwcGVuZCBAZWxcclxuICAgICAgICBAaW5mbyA9XHJcbiAgICAgICAgICAgIFwiY291bnRfdmVydGljZXNcIjpcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcItCa0L7Qu9C40YfQtdGB0YLQstC+INCy0LXRgNGI0LjQvTpcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6ID0+IEBncmFwaC5jb3VudF92ZXJ0aWNlcygpXHJcbiAgICAgICAgICAgIFwiY291bnRfbGlua3NcIjpcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcItCa0L7Qu9C40YfQtdGB0YLQstC+INGA0LXQsdC10YA6XCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jOiA9PiBAZ3JhcGguY291bnRfbGlua3MoKVxyXG4gICAgICAgICAgICBcImludmFyaWFudDNcIjpcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcItCY0L3QstCw0YDQuNCw0L3RgiAzOlwiXHJcbiAgICAgICAgICAgICAgICBmdW5jOiA9PiBAaW52YXJpYW50MygpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGZvciBpZCxvIG9mIEBpbmZvXHJcbiAgICAgICAgICAgICQoQGVsKS5hcHBlbmQoJChcIjxkaXY+PHU+I3tvLnRpdGxlfTwvdT4gPHNwYW4gaWQ9I3tAaWQraWR9Pjwvc3Bhbj48L2Rpdj5cIikpXHJcbiAgICAgICAgQGdyYXBoLm9uX2NoYW5nZSA9PiBAdXBkYXRlX2luZm8oKVxyXG4gICAgICAgIEB1cGRhdGVfaW5mbygpXHJcblxyXG4gICAgaW52YXJpYW50MzogLT5cclxuICAgICAgICByZXMgPSB7fVxyXG4gICAgICAgIGZvciB2IGluIEBncmFwaC52ZXJ0aWNlc1xyXG4gICAgICAgICAgICByZXNbdl0gPSBAZ3JhcGgudmluZm9bdl0uZGlzdHRvcm9vdFxyXG4gICAgICAgICMgY29udmVydCByZXMgdG8gc3RyaW5nXHJcbiAgICAgICAgcmVzID0gSlNPTi5zdHJpbmdpZnkgcmVzLCBudWxsLCAyXHJcbiAgICAgICAgcmV0dXJuICQoXCI8cHJlPiN7cmVzfTwvcHJlPlwiKVxyXG5cclxuICAgIHVwZGF0ZV9pbmZvOiAtPlxyXG4gICAgICAgIEBncmFwaC51cGRhdGUoKVxyXG4gICAgICAgIGZvciBpZCwgbyBvZiBAaW5mb1xyXG4gICAgICAgICAgICBpZCA9IEBpZCArIGlkXHJcbiAgICAgICAgICAgIHJlcyA9IG8uZnVuYygpXHJcbiAgICAgICAgICAgICQoJyMnK2lkKS5odG1sIFwiXCJcclxuICAgICAgICAgICAgJCgnIycraWQpLmFwcGVuZCByZXNcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaEluZm8uY29mZmVlXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==