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

	var CanvasGraphConstructor, GraphBuilder, GraphTable, Result, g1, g2, gt, mainloop, mainloop_objects, prg, r;
	
	CanvasGraphConstructor = __webpack_require__(1);
	
	GraphBuilder = __webpack_require__(5);
	
	GraphTable = __webpack_require__(6);
	
	Result = __webpack_require__(8);
	
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
	
	r = new Result(g1, g2, "#inv3g1", "#inv3g2", "#global_res");
	
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
	        var _print, args, ch, cmd, name, vname;
	        if (!_this.focus) {
	          return;
	        }
	        ch = String.fromCharCode(e.keyCode).toLowerCase();
	        switch (ch) {
	          case 'r':
	            vname = _this.graph_drawer.get_vertex_byxy(_this.mouse);
	            return _this.graph.set_root(vname);
	          case 'v':
	            name = _this.graph.generate_name();
	            return _this.graph.add_vertex(name, {
	              x: _this.mouse.x,
	              y: _this.mouse.y,
	              name: name
	            });
	          case 'q':
	            cmd = prompt("Введите команду");
	            args = _.pull(cmd.split(/\s/), '');
	            _print = function(s) {
	              return console.log(s);
	            };
	            switch (args[0]) {
	              case "dist":
	                if (args.length < 3) {
	                  break;
	                }
	                return _print("Расстояние между вершинами: " + _this.graph.dist(args[1], args[2]));
	              case "leaves":
	                return _print(_this.graph.leaves(args[1]));
	            }
	            break;
	          case 'd':
	            if (e.shiftKey) {
	              _this.graph.clear();
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
	    this.freenames = [];
	    this.root = null;
	    this.is_changes_lock = false;
	    this.is_updated = false;
	    this.change_listeners = [];
	  }
	
	  Graph.prototype.update = function() {
	    var i, len, ref, v;
	    if (this.is_updated) {
	      return;
	    }
	    ref = this.vertices;
	    for (i = 0, len = ref.length; i < len; i++) {
	      v = ref[i];
	      this.vinfo[v].bfs = this.make_bfs_info(v);
	    }
	    return this.is_updated = false;
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
	
	  Graph.prototype.leaves = function(root) {
	    var i, len, ref, res, rootbfs, u;
	    if (root == null) {
	      root = this.root;
	    }
	    if (!this.is_vertex(root)) {
	      return [];
	    }
	    this.update();
	    res = [];
	    rootbfs = this.vinfo[root].bfs;
	    ref = this.vertices;
	    for (i = 0, len = ref.length; i < len; i++) {
	      u = ref[i];
	      if (rootbfs[u].subvertices.length === 0) {
	        res.push(u);
	      }
	    }
	    return res;
	  };
	
	  Graph.prototype.make_bfs_info = function(s) {
	    var i, j, len, len1, q, ref, ref1, res, u, used, v;
	    if (!this.is_vertex(s)) {
	      return [];
	    }
	    q = [s];
	    used = {};
	    used[s] = true;
	    res = {};
	    ref = this.vertices;
	    for (i = 0, len = ref.length; i < len; i++) {
	      u = ref[i];
	      res[u] = {};
	    }
	    res[s].dist = 0;
	    res[s].subvertices = [];
	    while (q.length > 0) {
	      v = q.shift();
	      if (res[v].subvertices == null) {
	        res[v].subvertices = [];
	      }
	      ref1 = this.vertices;
	      for (j = 0, len1 = ref1.length; j < len1; j++) {
	        u = ref1[j];
	        if (this.is_link(v, u) && !used[u]) {
	          res[v].subvertices.push(u);
	          res[u].dist = res[v].dist + 1;
	          used[u] = true;
	          q.push(u);
	        }
	      }
	    }
	    return res;
	  };
	
	  Graph.prototype.dist = function(u, v) {
	    var res;
	    if (v == null) {
	      v = this.root;
	    }
	    if (!this.is_vertex(u) || !this.is_vertex(v)) {
	      return;
	    }
	    this.update();
	    res = this.vinfo[u].bfs[v].dist;
	    return res;
	  };
	
	  Graph.prototype.dists_to_leaves = function(v) {
	    var i, l, len, ref, res;
	    res = [];
	    ref = this.leaves();
	    for (i = 0, len = ref.length; i < len; i++) {
	      l = ref[i];
	      res.push(this.dist(l, v));
	    }
	    return res;
	  };
	
	  Graph.prototype.next_vertices = function(v) {
	    return this.vinfo[this.root].bfs[v].subvertices;
	  };
	
	  Graph.prototype.previous_vertices = function(v) {
	    var i, len, ref, res, rootbfs, u;
	    res = [];
	    rootbfs = this.vinfo[this.root].bfs;
	    ref = this.vertices;
	    for (i = 0, len = ref.length; i < len; i++) {
	      u = ref[i];
	      if (indexOf.call(rootbfs[u].subvertices, v) >= 0) {
	        res.push(u);
	      }
	    }
	    return res;
	  };
	
	  Graph.prototype.invariant3 = function(sep) {
	    var i, len, ref, res, t, v;
	    if (sep == null) {
	      sep = ', ';
	    }
	    res = {};
	    ref = this.vertices;
	    for (i = 0, len = ref.length; i < len; i++) {
	      v = ref[i];
	      t = [];
	      t[0] = this.dist(v);
	      t[1] = this.previous_vertices(v).length;
	      t[2] = this.next_vertices(v).length;
	      t[3] = '(' + this.dists_to_leaves(v).join(sep) + ')';
	      res[v] = t.join(sep);
	    }
	    return res;
	  };
	
	  Graph.prototype.invariant3_as_str = function() {
	    this.update();
	    return _.values(this.invariant3(',')).sort().join(';');
	  };
	
	  Graph.prototype.clear = function() {
	    this.vertices = [];
	    this.links = [];
	    this.map = {};
	    this.vinfo = {};
	    this.freenames = [];
	    this.root = null;
	    this.is_changes_lock = false;
	    this.is_updated = false;
	    return this.changed();
	  };
	
	  Graph.prototype.on_change = function(callback) {
	    return this.change_listeners.push(callback);
	  };
	
	  Graph.prototype.changed = function() {
	    var callback, i, len, ref, results;
	    this.is_updated = false;
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
	    if (name == null) {
	      return false;
	    }
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
	      "leaves": {
	        title: "Листья:",
	        func: (function(_this) {
	          return function() {
	            return _this.graph.leaves().join(', ');
	          };
	        })(this)
	      },
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
	    this.change_listeners = [];
	    this.res = "";
	  }
	
	  GraphInfo.prototype.invariant3 = function() {
	    var res;
	    res = JSON.stringify(this.graph.invariant3(), null, 2);
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


/***/ },
/* 8 */
/***/ function(module, exports) {

	var GraphInfo;
	
	module.exports = GraphInfo = (function() {
	  function GraphInfo(g1, g2, el1, el2, global_res) {
	    this.g1 = g1;
	    this.g2 = g2;
	    this.el1 = el1;
	    this.el2 = el2;
	    this.global_res = global_res;
	    this.update();
	    this.g1.on_change((function(_this) {
	      return function() {
	        return _this.update();
	      };
	    })(this));
	    this.g2.on_change((function(_this) {
	      return function() {
	        return _this.update();
	      };
	    })(this));
	  }
	
	  GraphInfo.prototype.update = function() {
	    var clr, msg, s1, s2;
	    s1 = this.g1.invariant3_as_str();
	    s2 = this.g2.invariant3_as_str();
	    $(this.el1).html(s1);
	    $(this.el2).html(s2);
	    clr = "red";
	    msg = "Инврианты НЕ совпадают";
	    if (s1 === s2) {
	      clr = "green";
	      msg = "Инврианты совпадают";
	    }
	    return $(this.global_res).html("<font color=" + clr + ">" + msg + "</font>");
	  };
	
	  return GraphInfo;

	})();


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDU4MDRkZDE0ZDRjNDY4YWU0NTkiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vQ2FudmFzR3JhcGhDb25zdHJ1Y3Rvci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMuY29mZmVlIiwid2VicGFjazovLy8uL0dyYXBoRHJhd2VyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vR3JhcGhCdWlsZGVyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaFRhYmxlLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaEluZm8uY29mZmVlIiwid2VicGFjazovLy8uL1Jlc3VsdC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNyQ0E7O0FBQUEsMEJBQXlCLG9CQUFRLENBQVI7O0FBQ3pCLGdCQUFlLG9CQUFRLENBQVI7O0FBQ2YsY0FBYSxvQkFBUSxDQUFSOztBQUNiLFVBQVMsb0JBQVEsQ0FBUjs7QUFHVCxvQkFBbUI7O0FBR25CLFlBQVc7QUFDUDtHQUFBLE9BQU8sSUFBSSxDQUFDLEdBQUw7R0FDUCxLQUFLO0dBQ0wsT0FBTztBQUNIO0tBQUEsU0FBUyxJQUFJLENBQUMsR0FBTCxLQUFhO0tBQ3RCLE9BQU8sSUFBSSxDQUFDLEdBQUw7S0FDUCxTQUFTLElBQUksQ0FBQyxHQUFMLENBQVMsTUFBVCxFQUFpQixJQUFqQjtBQUNULFlBQU0sU0FBUyxDQUFmO0FBQ0k7O1NBQ0ksSUFBaUIsa0JBQWpCO1dBQUEsR0FBRyxDQUFDLE1BQUos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LENBQUMsSUFBRjtPQUNOLEVBQUUsTUFBSSxFQUFOLENBQVMsQ0FBQyxJQUFWLENBQWUsRUFBZjtvQkFDQSxFQUFFLE1BQUksRUFBTixDQUFTLENBQUMsTUFBVixDQUFpQixHQUFqQjtBQUpKOztHQUZTOzs7Ozs7Ozs7OztBQ3ZDakI7O0FBQUEsT0FBTSxDQUFDLE9BQVAsR0FDTTtHQUVXLG1CQUFDLEVBQUQsRUFBTSxFQUFOLEVBQVcsR0FBWCxFQUFpQixHQUFqQixFQUF1QixVQUF2QjtLQUFDLElBQUMsTUFBRDtLQUFLLElBQUMsTUFBRDtLQUFLLElBQUMsT0FBRDtLQUFNLElBQUMsT0FBRDtLQUFNLElBQUMsY0FBRDtLQUNoQyxJQUFDLE9BQUQ7S0FDQSxJQUFDLEdBQUUsQ0FBQyxTQUFKLENBQWM7Y0FBQTtnQkFBRyxLQUFDLE9BQUQ7T0FBSDtLQUFBLFFBQWQ7S0FDQSxJQUFDLEdBQUUsQ0FBQyxTQUFKLENBQWM7Y0FBQTtnQkFBRyxLQUFDLE9BQUQ7T0FBSDtLQUFBLFFBQWQ7R0FIUzs7dUJBS2IsU0FBUTtBQUNKO0tBQUEsS0FBSyxJQUFDLEdBQUUsQ0FBQyxpQkFBSjtLQUNMLEtBQUssSUFBQyxHQUFFLENBQUMsaUJBQUo7S0FDTCxFQUFFLElBQUMsSUFBSCxDQUFPLENBQUMsSUFBUixDQUFhLEVBQWI7S0FDQSxFQUFFLElBQUMsSUFBSCxDQUFPLENBQUMsSUFBUixDQUFhLEVBQWI7S0FDQSxNQUFNO0tBQ04sTUFBTTtLQUNOLElBQUcsT0FBTSxFQUFUO09BQ0ksTUFBTTtPQUNOLE1BQU0sc0JBRlY7O1lBR0EsRUFBRSxJQUFDLFdBQUgsQ0FBYyxDQUFDLElBQWYsQ0FBb0IsaUJBQWUsR0FBZixHQUFtQixHQUFuQixHQUFzQixHQUF0QixHQUEwQixTQUE5QztHQVZJIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZDU4MDRkZDE0ZDRjNDY4YWU0NTlcbiAqKi8iLCJcclxuQ2FudmFzR3JhcGhDb25zdHJ1Y3RvciA9IHJlcXVpcmUgJy4vQ2FudmFzR3JhcGhDb25zdHJ1Y3RvcidcclxuR3JhcGhCdWlsZGVyID0gcmVxdWlyZSAnLi9HcmFwaEJ1aWxkZXInXHJcbkdyYXBoVGFibGUgPSByZXF1aXJlICcuL0dyYXBoVGFibGUnXHJcblJlc3VsdCA9IHJlcXVpcmUgJy4vUmVzdWx0J1xyXG5cclxuXHJcbm1haW5sb29wX29iamVjdHMgPSBbXVxyXG5cclxuXHJcbm1haW5sb29wID0gLT5cclxuICAgIHRpbWUgPSBEYXRlLm5vdygpXHJcbiAgICBkdCA9IDE0XHJcbiAgICBzdGVwID0gLT5cclxuICAgICAgICBjdXJfZHQgPSBEYXRlLm5vdygpIC0gdGltZVxyXG4gICAgICAgIHRpbWUgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgY3VyX2R0ID0gTWF0aC5taW4oY3VyX2R0LCAxMDAwKVxyXG4gICAgICAgIHdoaWxlIGN1cl9kdCA+IDBcclxuICAgICAgICAgICAgZm9yIG9iaiBpbiBtYWlubG9vcF9vYmplY3RzXHJcbiAgICAgICAgICAgICAgICBvYmoudXBkYXRlIGR0IGlmIG9iai51cGRhdGU/IFxyXG4gICAgICAgICAgICBjdXJfZHQgLT0gZHRcclxuICAgICAgICBmb3Igb2JqIGluIG1haW5sb29wX29iamVjdHNcclxuICAgICAgICAgICAgb2JqLnJlbmRlcigpIGlmIG9iai5yZW5kZXI/XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHN0ZXBcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBzdGVwXHJcblxyXG5tYWlubG9vcCgpXHJcblxyXG5cclxuXHJcbiMgSlNPTi5zdHJpbmdpZnkoR3JhcGhCdWlsZGVyLm1ha2Vfb3B0aW9uc19mb3JfYnVpbGRlcjEoZ2IxLmdyYXBoKSwgbnVsbClcclxuZzEgPSBHcmFwaEJ1aWxkZXIuYnVpbGRlcjEge1widmVydGljZXNcIjp7XCIwXCI6e1wieFwiOjE5OCxcInlcIjozNzUuMTg3NX0sXCIxXCI6e1wieFwiOjkzLFwieVwiOjMyNi4xODc1fSxcIjJcIjp7XCJ4XCI6MzAyLFwieVwiOjMzOC4xODc1fSxcIjNcIjp7XCJ4XCI6NDMsXCJ5XCI6MjUwLjE4NzUsXCJuYW1lXCI6XCIzXCJ9LFwiNFwiOntcInhcIjoxNTQsXCJ5XCI6MjQ3LjE4NzUsXCJuYW1lXCI6XCI0XCJ9LFwiNVwiOntcInhcIjozMDAsXCJ5XCI6MjcyLjE4NzUsXCJuYW1lXCI6XCI1XCJ9LFwiNlwiOntcInhcIjoyNjEsXCJ5XCI6MjA4LjE4NzUsXCJuYW1lXCI6XCI2XCJ9LFwiN1wiOntcInhcIjozNTQsXCJ5XCI6MjI5LjE4NzUsXCJuYW1lXCI6XCI3XCJ9LFwiOFwiOntcInhcIjoxMDMsXCJ5XCI6MTcwLjE4NzUsXCJuYW1lXCI6XCI4XCJ9LFwiOVwiOntcInhcIjozNyxcInlcIjo1OC4xODc1LFwibmFtZVwiOlwiOVwifSxcIjEwXCI6e1wieFwiOjExMyxcInlcIjo2Mi4xODc1LFwibmFtZVwiOlwiMTBcIn0sXCIxMVwiOntcInhcIjoxOTQsXCJ5XCI6NjAuMTg3NSxcIm5hbWVcIjpcIjExXCJ9LFwiMTJcIjp7XCJ4XCI6MzI3LFwieVwiOjE4My4xODc1LFwibmFtZVwiOlwiMTJcIn0sXCIxM1wiOntcInhcIjozNjEsXCJ5XCI6MTQ1LjE4NzUsXCJuYW1lXCI6XCIxM1wifSxcIjE0XCI6e1wieFwiOjMyMCxcInlcIjoxMTMuMTg3NSxcIm5hbWVcIjpcIjE0XCJ9LFwiMTVcIjp7XCJ4XCI6MzU3LFwieVwiOjc3LjE4NzUsXCJuYW1lXCI6XCIxNVwifSxcIjE2XCI6e1wieFwiOjMxNyxcInlcIjo0Ni4xODc1LFwibmFtZVwiOlwiMTZcIn19LFwibGlua3NcIjp7XCIwXCI6W1wiMVwiLFwiMlwiXSxcIjFcIjpbXCIzXCIsXCI0XCJdLFwiMlwiOltcIjVcIl0sXCIzXCI6W1wiOFwiXSxcIjVcIjpbXCI2XCIsXCI3XCJdLFwiOFwiOltcIjlcIl0sXCIxMFwiOltcIjhcIl0sXCIxMVwiOltcIjhcIl0sXCIxMlwiOltcIjdcIixcIjEzXCJdLFwiMTNcIjpbXCIxNFwiXSxcIjE0XCI6W1wiMTVcIl0sXCIxNVwiOltcIjE2XCJdfX1cclxuZzIgPSBHcmFwaEJ1aWxkZXIuYnVpbGRlcjEge1widmVydGljZXNcIjp7XCIwXCI6e1wieFwiOjE5MSxcInlcIjozODAuMzc1LFwibmFtZVwiOlwiMFwifSxcIjFcIjp7XCJ4XCI6NTAsXCJ5XCI6MzIwLjM3NSxcIm5hbWVcIjpcIjFcIn0sXCIyXCI6e1wieFwiOjMwOSxcInlcIjozMDMuMzc1LFwibmFtZVwiOlwiMlwifSxcIjNcIjp7XCJ4XCI6NjgsXCJ5XCI6MTkwLjM3NSxcIm5hbWVcIjpcIjNcIn0sXCI0XCI6e1wieFwiOjMwNixcInlcIjoxODAuMzc1LFwibmFtZVwiOlwiNFwifSxcIjVcIjp7XCJ4XCI6NjUsXCJ5XCI6NzEuMzc1LFwibmFtZVwiOlwiNVwifSxcIjZcIjp7XCJ4XCI6MTg0LFwieVwiOjE4Ny4zNzUsXCJuYW1lXCI6XCI2XCJ9LFwiN1wiOntcInhcIjoyNjYsXCJ5XCI6ODkuMzc1LFwibmFtZVwiOlwiN1wifSxcIjhcIjp7XCJ4XCI6MzUyLFwieVwiOjgyLjM3NSxcIm5hbWVcIjpcIjhcIn0sXCI5XCI6e1wieFwiOjE3NyxcInlcIjoyOTcuMzc1LFwibmFtZVwiOlwiOVwifX0sXCJsaW5rc1wiOntcIjBcIjpbXCIyXCIsXCIxXCIsXCI5XCJdLFwiMVwiOltcIjNcIl0sXCIyXCI6W1wiNFwiXSxcIjNcIjpbXCI1XCJdLFwiNFwiOltcIjdcIixcIjhcIl0sXCI2XCI6W1wiOVwiXX19XHJcblxyXG5ndCA9IFtuZXcgR3JhcGhUYWJsZShcIiNndDFcIiwgZzEpLCBuZXcgR3JhcGhUYWJsZSBcIiNndDJcIiwgZzJdXHJcbnIgPSBuZXcgUmVzdWx0IGcxLCBnMiwgXCIjaW52M2cxXCIsIFwiI2ludjNnMlwiLCBcIiNnbG9iYWxfcmVzXCJcclxubWFpbmxvb3Bfb2JqZWN0cyA9IG1haW5sb29wX29iamVjdHMuY29uY2F0IGd0XHJcblxyXG5cclxucHJnID0gKGkpIC0+IGNvbnNvbGUubG9nIEpTT04uc3RyaW5naWZ5KEdyYXBoQnVpbGRlci5tYWtlX29wdGlvbnNfZm9yX2J1aWxkZXIxKGd0W2ldLmdyYXBoKSlcclxuXHJcblxyXG5cclxuXy5kZWZhdWx0cyB3aW5kb3csIHtHcmFwaEJ1aWxkZXIsIHByZywgZ3R9XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbWFpbi5jb2ZmZWVcbiAqKi8iLCJcclxudXRpbHMgPSByZXF1aXJlICcuL3V0aWxzJ1xyXG5HcmFwaERyYXdlciA9IHJlcXVpcmUgJy4vR3JhcGhEcmF3ZXInXHJcbkdyYXBoID0gcmVxdWlyZSAnLi9HcmFwaCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gXHJcbmNsYXNzIENhbnZhc0dyYXBoQ29uc3RydWN0b3JcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogKEBjb250YWluZXIsIEBncmFwaCA9IG5ldyBHcmFwaCkgLT5cclxuICAgICAgICBAY2FuID0gJChcIjxjYW52YXM+XCIpLmdldCAwXHJcbiAgICAgICAgQGN0eCA9IEBjYW4uZ2V0Q29udGV4dCAnMmQnXHJcbiAgICAgICAgQGNhbi53aWR0aCA9IEBjYW4uaGVpZ2h0ID0gNDAwXHJcbiAgICAgICAgQG1vdXNlID0geyBcclxuICAgICAgICAgICAgeDogMCwgeTogMCAjINGC0LXQutGD0YnQuNC1INC60L7QvtGA0LTQuNC90LDRgtGLINC80YvRiNC4INC90LDQtCBAY2FuXHJcbiAgICAgICAgICAgIHRhcmdldDogbnVsbCAjINC40LzRjyDQstC10YDRiNC40L3RiyDQvdCw0LQg0LrQvtGC0L7RgNC+0Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLRgdGPINC90LXQutC+0YLQvtGA0L7QtSDQtNC10LnRgdGC0LLQuNC1XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBmb2N1cyA9IGZhbHNlXHJcbiAgICAgICAgQGhhbmRsZV9ldmVudHMoKVxyXG4gICAgICAgICQoQGNvbnRhaW5lcikuYXBwZW5kIEBjYW5cclxuICAgICAgICBAZ3JhcGhfZHJhd2VyID0gbmV3IEdyYXBoRHJhd2VyIEBncmFwaCwgQGN0eFxyXG5cclxuICAgIHVwZGF0ZV9tb3VzZTogKGUpIC0+XHJcbiAgICAgICAgcG9zID0gdXRpbHMuZ2V0X21vdXNlcG9zX2luX2VsZW1lbnQgQGNhbiwgZVxyXG4gICAgICAgIEBtb3VzZS54ID0gcG9zLnhcclxuICAgICAgICBAbW91c2UueSA9IHBvcy55XHJcblxyXG4gICAgaGFuZGxlX2V2ZW50czogLT5cclxuICAgICAgICAkKEBjYW4pLm1vdXNlb3V0ID0+IEBmb2N1cyA9IGZhbHNlXHJcbiAgICAgICAgJChAY2FuKS5tb3VzZW92ZXIgPT4gQGZvY3VzID0gdHJ1ZVxyXG4gICAgICAgIFxyXG4gICAgICAgICQoQGNhbikubW91c2Vtb3ZlIChlKSA9PlxyXG4gICAgICAgICAgICBAdXBkYXRlX21vdXNlIGVcclxuICAgICAgICAgICAgaWYgQG1vdXNlLnRhcmdldFxyXG4gICAgICAgICAgICAgICAgaWYgQG1vdXNlLmRyYWd0eXBlID09IFwibW92ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4X25hbWUgPSBAbW91c2UudGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgQGdyYXBoLnNldF92aW5mbyB2ZXJ0ZXhfbmFtZSwgdXRpbHMudmVjMihAbW91c2UueCwgQG1vdXNlLnkpXHJcbiAgICAgICAgICAgICAgICBpZiBAbW91c2UuZHJhZ3R5cGUgPT0gXCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICBAbW91c2UubGlua2VuZCA9IF8uY2xvbmUgdXRpbHMudmVjMiBAbW91c2UueCwgQG1vdXNlLnlcclxuXHJcbiAgICAgICAgJChAY2FuKS5tb3VzZWRvd24gKGUpID0+XHJcbiAgICAgICAgICAgIHZuYW1lID0gQGdyYXBoX2RyYXdlci5nZXRfdmVydGV4X2J5eHkgQG1vdXNlXHJcbiAgICAgICAgICAgIGlmIHZuYW1lPyBhbmQgQG1vdXNlLnRhcmdldD8gYW5kIEBtb3VzZS5kcmFndHlwZSA9PSBcImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgQGdyYXBoLmFkZF9saW5rIEBtb3VzZS50YXJnZXQsIHZuYW1lXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgQG1vdXNlLnRhcmdldCA9IHZuYW1lXHJcbiAgICAgICAgICAgIEBtb3VzZS5kcmFndHlwZSA9IFwibW92ZVwiXHJcblxyXG4gICAgICAgICQoQGNhbikubW91c2V1cCAoZSkgPT5cclxuICAgICAgICAgICAgQG1vdXNlLnRhcmdldCA9IG51bGxcclxuICAgICAgICAgICAgQG1vdXNlLmRyYWd0eXBlID0gbnVsbFxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5rZXlkb3duIChlKSA9PlxyXG4gICAgICAgICAgICByZXR1cm4gdW5sZXNzIEBmb2N1c1xyXG4gICAgICAgICAgICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIHN3aXRjaCBjaFxyXG4gICAgICAgICAgICAgICAgIyBTZXQgbmV3IHJvb3RcclxuICAgICAgICAgICAgICAgIHdoZW4gJ3InXHJcbiAgICAgICAgICAgICAgICAgICAgdm5hbWUgPSBAZ3JhcGhfZHJhd2VyLmdldF92ZXJ0ZXhfYnl4eSBAbW91c2VcclxuICAgICAgICAgICAgICAgICAgICBAZ3JhcGguc2V0X3Jvb3Qgdm5hbWVcclxuXHJcbiAgICAgICAgICAgICAgICAjIEFkZCB2ZXJ0ZXhcclxuICAgICAgICAgICAgICAgIHdoZW4gJ3YnXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IEBncmFwaC5nZW5lcmF0ZV9uYW1lKClcclxuICAgICAgICAgICAgICAgICAgICBAZ3JhcGguYWRkX3ZlcnRleCBuYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IEBtb3VzZS54LCB5OiBAbW91c2UueSwgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjIFF1ZXJ5IGZvciBncmFwaFxyXG4gICAgICAgICAgICAgICAgd2hlbiAncSdcclxuICAgICAgICAgICAgICAgICAgICBjbWQgPSBwcm9tcHQoXCLQktCy0LXQtNC40YLQtSDQutC+0LzQsNC90LTRg1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBfLnB1bGwgY21kLnNwbGl0KC9cXHMvKSwgJydcclxuICAgICAgICAgICAgICAgICAgICBfcHJpbnQgPSAocykgLT4gY29uc29sZS5sb2cgc1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCBhcmdzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVuIFwiZGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBpZiBhcmdzLmxlbmd0aCA8IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9wcmludCBcItCg0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LLQtdGA0YjQuNC90LDQvNC4OiBcIiArIEBncmFwaC5kaXN0KGFyZ3NbMV0sIGFyZ3NbMl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVuIFwibGVhdmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9wcmludCBAZ3JhcGgubGVhdmVzIGFyZ3NbMV1cclxuXHJcbiAgICAgICAgICAgICAgICAjIERlbGV0ZSB2ZXJ0ZXhcclxuICAgICAgICAgICAgICAgIHdoZW4gJ2QnXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgZS5zaGlmdEtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZ3JhcGguY2xlYXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB2bmFtZSA9IEBncmFwaF9kcmF3ZXIuZ2V0X3ZlcnRleF9ieXh5IEBtb3VzZVxyXG4gICAgICAgICAgICAgICAgICAgIEBncmFwaC5kZWxfdmVydGV4IHZuYW1lXHJcblxyXG4gICAgICAgICAgICAgICAgIyBBZGQgbGlua1xyXG4gICAgICAgICAgICAgICAgd2hlbiAnbCdcclxuICAgICAgICAgICAgICAgICAgICB2bmFtZSA9IEBncmFwaF9kcmF3ZXIuZ2V0X3ZlcnRleF9ieXh5IEBtb3VzZVxyXG4gICAgICAgICAgICAgICAgICAgIEBtb3VzZS50YXJnZXQgPSB2bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIEBtb3VzZS5kcmFndHlwZSA9IFwibGlua1wiXHJcblxyXG4gICAgICAgICAgICAgICAgIyBQcmludCBvdGhlciBpbmZvXHJcbiAgICAgICAgICAgICAgICB3aGVuICcxJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIEBtb3VzZVxyXG5cclxuICAgIHVwZGF0ZTogKGR0KSAtPlxyXG5cclxuICAgIGRyYXdfZHJhZ2xpbms6IC0+XHJcbiAgICAgICAgaWYgQG1vdXNlLnRhcmdldD8gYW5kIEBtb3VzZS5kcmFndHlwZSA9PSBcImxpbmtcIiBhbmQgQG1vdXNlLmxpbmtlbmQ/XHJcbiAgICAgICAgICAgIHYgPSBAZ3JhcGguZ2V0X3ZpbmZvIEBtb3VzZS50YXJnZXRcclxuICAgICAgICAgICAgdXRpbHMuZHJhd19saW5lIEBjdHgsIHYsIEBtb3VzZVxyXG5cclxuICAgIHJlbmRlcjogLT5cclxuICAgICAgICBAY3R4LmNsZWFyUmVjdCAwLCAwLCBAY2FuLndpZHRoLCBAY2FuLmhlaWdodFxyXG4gICAgICAgIEBkcmF3X2RyYWdsaW5rKClcclxuICAgICAgICBAZ3JhcGhfZHJhd2VyLnJlbmRlcigpXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NhbnZhc0dyYXBoQ29uc3RydWN0b3IuY29mZmVlXG4gKiovIiwiXHJcbiMgPT09PT0gbWF0aHMgdXRpbHMgPT09PT1cclxuZGlzdCA9IChhLCBiKSAtPiBNYXRoLnNxcnQoTWF0aC5wb3coYS54IC0gYi54LCAyKSArIE1hdGgucG93KGEueSAtIGIueSwgMikpXHJcbnZlYzIgPSAoeCwgeSkgLT4ge3gsIHl9XHJcblxyXG4jID09PT09IHV0aWxzIGZvciBodG1sIGVsZW1lbnRzID09PT09IFxyXG5nZXRfbW91c2Vwb3NfaW5fZWxlbWVudCA9IChlbCwgZSkgLT5cclxuICAgIG9mZnNldCA9ICQoZWwpLm9mZnNldCgpXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICB4OiBlLnBhZ2VYIC0gb2Zmc2V0LmxlZnQsIFxyXG4gICAgICAgIHk6IGUucGFnZVkgLSBvZmZzZXQudG9wIFxyXG4gICAgfVxyXG5cclxuIyBjcmVhdGUgaHRtbCB0YWJsZSBieSBqcyBtYXRyaXhcclxuIyBvOiB7IGhlYWRlcjogYm9vbCB9XHJcbm1ha2VfdGFsYmUgPSAoYXJyLCBvID0ge30pIC0+XHJcbiAgICB0YmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICd0YWJsZSdcclxuICAgIGZvciBsaW5lLCBpIGluIGFyclxyXG4gICAgICAgIHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAndHInXHJcbiAgICAgICAgZm9yIHZhbCwgaiBpbiBsaW5lXHJcbiAgICAgICAgICAgIHQgPSBpZiBvLmhlYWRlciBhbmQgaSA9PSAwIHRoZW4gJ3RoJyBlbHNlICd0ZCdcclxuICAgICAgICAgICAgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgdFxyXG4gICAgICAgICAgICB2YWwgPSBhcnJbaV1bal1cclxuICAgICAgICAgICAgaWYgXy5pc1N0cmluZyB2YWxcclxuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gdmFsXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQgdmFsXHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkIGNlbGxcclxuICAgICAgICB0YmwuYXBwZW5kQ2hpbGQgdHJcclxuICAgIHJldHVybiB0YmxcclxuXHJcbiMgPT09PT0gR3JhcGhpY3MgPT09PT1cclxuZHJhd19saW5lID0gKGN0eCwgYSwgYikgLT5cclxuICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgY3R4Lm1vdmVUbyBhLngsIGEueVxyXG4gICAgY3R4LmxpbmVUbyBiLngsIGIueVxyXG4gICAgY3R4LnN0cm9rZSgpXHJcblxyXG5kcmF3X2NpcmNsZV93aXRoX3RleHQgPSAoY3R4LCB4LCB5LCByLCB0ZXh0LCBvKSAtPlxyXG4gICAgY3R4LmZvbnQgPSBcIiN7by5mb250c3p9cHggI3tvLmZvbnRGYW1pbHl9XCJcclxuICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgY3R4LmFyYyB4LCB5LCByLCAwLCAyICogTWF0aC5QSVxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IG8uY2lyY2xlQ29sb3JcclxuICAgIGN0eC5maWxsKClcclxuICAgIGN0eC5maWxsU3R5bGUgPSBvLnRleHRDb2xvclxyXG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInXHJcbiAgICBjdHgudGV4dEJhc2VMaW5lID0gJ21pZGRsZSdcclxuICAgIGN0eC5maWxsVGV4dCB0ZXh0LCB4LCB5ICsgby5mb250c3ovNFxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgIyBtYXRoIHV0aWxzXHJcbiAgICBkaXN0LCB2ZWMyXHJcbiAgICAjIGh0bWwgdXRpbHNcclxuICAgIGdldF9tb3VzZXBvc19pbl9lbGVtZW50LCBtYWtlX3RhbGJlXHJcbiAgICAjIEdyYXBoaWNzXHJcbiAgICBkcmF3X2xpbmUsIGRyYXdfY2lyY2xlX3dpdGhfdGV4dFxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdXRpbHMuY29mZmVlXG4gKiovIiwiXHJcbnV0aWxzID0gcmVxdWlyZSAnLi91dGlscydcclxuXHJcblxyXG5GT05UU1ogPSAyMFxyXG5SQURJSVVTID0gRk9OVFNaXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBcclxuY2xhc3MgR3JhcGhEcmF3ZXJcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3I6IChAZ3JhcGgsIEBjdHgpIC0+XHJcblxyXG4gICAgIyA9PT0gVkVSVElDRVMgPT09IFxyXG4gICAgZ2V0X3ZlcnRleF9ieXh5OiAocG9zKSAtPlxyXG4gICAgICAgIGZvciBuYW1lLCBpbmZvIG9mIEBncmFwaC52aW5mb1xyXG4gICAgICAgICAgICByZXR1cm4gbmFtZSBpZiB1dGlscy5kaXN0KHBvcywgaW5mbykgPCBSQURJSVVTXHJcblxyXG4gICAgbW92ZV92ZXJ0ZXg6ICh2ZXJ0ZXhfbmFtZSwgbmV3X3BvcykgLT5cclxuICAgICAgICBAZ3JhcGguc2V0X3ZpbmZvIHZlcnRleF9uYW1lLCBuZXdfcG9zXHJcblxyXG4gICAgIyA9PT0gUkVOREVSID09PVxyXG4gICAgZHJhd19saW5rczogKCkgLT5cclxuICAgICAgICBmb3IgbCBpbiBAZ3JhcGgubGlua3NcclxuICAgICAgICAgICAgYSA9IEBncmFwaC5nZXRfdmluZm8gbC5mcm9tXHJcbiAgICAgICAgICAgIGIgPSBAZ3JhcGguZ2V0X3ZpbmZvIGwudG9cclxuICAgICAgICAgICAgdXRpbHMuZHJhd19saW5lIEBjdHgsIGEsIGJcclxuXHJcbiAgICBkcmF3X3ZlcnRpY2VzOiAoKSAtPlxyXG4gICAgICAgIGZvciBuYW1lLCBpbmZvIG9mIEBncmFwaC52aW5mb1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3IgPSBpZiBAZ3JhcGguaXNfcm9vdCBuYW1lIHRoZW4gJ3JlZCcgZWxzZSAnd2hpdGUnXHJcbiAgICAgICAgICAgIHV0aWxzLmRyYXdfY2lyY2xlX3dpdGhfdGV4dChcclxuICAgICAgICAgICAgICAgIEBjdHgsIGluZm8ueCwgaW5mby55LCBSQURJSVVTLCBuYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udHN6OiBGT05UU1osIGZvbnRGYW1pbHk6ICdNb25vc3BhY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZUNvbG9yOiAnYmxhY2snLCB0ZXh0Q29sb3I6IHRleHRDb2xvclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgcmVuZGVyOiAoKSAtPlxyXG4gICAgICAgIEBjdHguc2F2ZSgpXHJcbiAgICAgICAgQGRyYXdfbGlua3MoKVxyXG4gICAgICAgIEBkcmF3X3ZlcnRpY2VzKClcclxuICAgICAgICBAY3R4LnJlc3RvcmUoKVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaERyYXdlci5jb2ZmZWVcbiAqKi8iLCJcclxuIyBUT0RPOiDQsdC70L7QutC40YDQvtCy0LrQsCDQuCDRgNCw0LfQsdC70L7QutC40YDQvtCy0LrQsCBjYWxsX2NoYW5nZWRcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gXHJcbmNsYXNzIEdyYXBoXHJcbiAgICBjb25zdHJ1Y3RvcjogLT5cclxuICAgICAgICBAdmVydGljZXMgPSBbXVxyXG4gICAgICAgIEBsaW5rcyA9IFtdXHJcbiAgICAgICAgQG1hcCA9IHt9XHJcbiAgICAgICAgQHZpbmZvID0ge30gIyBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGZvciB2ZXJ0ZXhcclxuICAgICAgICBAZnJlZW5hbWVzID0gW11cclxuICAgICAgICBAcm9vdCA9IG51bGxcclxuICAgICAgICBAaXNfY2hhbmdlc19sb2NrID0gZmFsc2VcclxuICAgICAgICBAaXNfdXBkYXRlZCA9IGZhbHNlXHJcbiAgICAgICAgQGNoYW5nZV9saXN0ZW5lcnMgPSBbXVxyXG5cclxuICAgICMgPT09IE9USEVSID09PT1cclxuICAgICMgdXBkYXRlIGFsbCBpbmZvIGludG8gdGhpcyBncmFwaFxyXG4gICAgdXBkYXRlOiAtPlxyXG4gICAgICAgIHJldHVybiBpZiBAaXNfdXBkYXRlZFxyXG4gICAgICAgIGZvciB2IGluIEB2ZXJ0aWNlc1xyXG4gICAgICAgICAgICBAdmluZm9bdl0uYmZzID0gQG1ha2VfYmZzX2luZm8gdlxyXG4gICAgICAgIEBpc191cGRhdGVkID0gZmFsc2VcclxuXHJcbiAgICBpc19yb290OiAodikgLT4gdiA9PSBAcm9vdFxyXG4gICAgc2V0X3Jvb3Q6IChyKSAtPiBcclxuICAgICAgICByZXR1cm4gaWYgciA9PSBAcm9vdFxyXG4gICAgICAgIEByb290ID0gclxyXG4gICAgICAgIEBjaGFuZ2VkKClcclxuXHJcbiAgICBsZWF2ZXM6IChyb290ID0gQHJvb3QpIC0+XHJcbiAgICAgICAgcmV0dXJuIFtdIGlmIG5vdCBAaXNfdmVydGV4IHJvb3RcclxuICAgICAgICBAdXBkYXRlKClcclxuICAgICAgICByZXMgPSBbXVxyXG4gICAgICAgIHJvb3RiZnMgPSBAdmluZm9bcm9vdF0uYmZzXHJcbiAgICAgICAgZm9yIHUgaW4gQHZlcnRpY2VzXHJcbiAgICAgICAgICAgIGlmIHJvb3RiZnNbdV0uc3VidmVydGljZXMubGVuZ3RoID09IDBcclxuICAgICAgICAgICAgICAgIHJlcy5wdXNoIHVcclxuICAgICAgICByZXR1cm4gcmVzXHJcblxyXG4gICAgbWFrZV9iZnNfaW5mbzogKHMpIC0+XHJcbiAgICAgICAgcmV0dXJuIFtdIGlmIG5vdCBAaXNfdmVydGV4IHNcclxuICAgICAgICBxID0gW3NdXHJcbiAgICAgICAgdXNlZCA9IHt9XHJcbiAgICAgICAgdXNlZFtzXSA9IHRydWVcclxuICAgICAgICByZXMgPSB7fVxyXG4gICAgICAgIHJlc1t1XSA9IHt9IGZvciB1IGluIEB2ZXJ0aWNlc1xyXG4gICAgICAgIHJlc1tzXS5kaXN0ID0gMFxyXG4gICAgICAgIHJlc1tzXS5zdWJ2ZXJ0aWNlcyA9IFtdXHJcbiAgICAgICAgd2hpbGUgcS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgIHYgPSBxLnNoaWZ0KClcclxuICAgICAgICAgICAgcmVzW3ZdLnN1YnZlcnRpY2VzID0gW10gaWYgbm90IHJlc1t2XS5zdWJ2ZXJ0aWNlcz9cclxuICAgICAgICAgICAgZm9yIHUgaW4gQHZlcnRpY2VzXHJcbiAgICAgICAgICAgICAgICBpZiBAaXNfbGluayh2LCB1KSBhbmQgbm90IHVzZWRbdV1cclxuICAgICAgICAgICAgICAgICAgICByZXNbdl0uc3VidmVydGljZXMucHVzaCB1XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzW3VdLmRpc3QgPSByZXNbdl0uZGlzdCArIDFcclxuICAgICAgICAgICAgICAgICAgICB1c2VkW3VdID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHEucHVzaCB1XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG5cclxuICAgIGRpc3Q6ICh1LCB2ID0gQHJvb3QpIC0+XHJcbiAgICAgICAgcmV0dXJuIGlmIG5vdCBAaXNfdmVydGV4KHUpIG9yIG5vdCBAaXNfdmVydGV4KHYpXHJcbiAgICAgICAgQHVwZGF0ZSgpXHJcbiAgICAgICAgcmVzID0gQHZpbmZvW3VdLmJmc1t2XS5kaXN0XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG5cclxuICAgIGRpc3RzX3RvX2xlYXZlczogKHYpIC0+XHJcbiAgICAgICAgcmVzID0gW11cclxuICAgICAgICBmb3IgbCBpbiBAbGVhdmVzKClcclxuICAgICAgICAgICAgcmVzLnB1c2ggQGRpc3QgbCwgdlxyXG4gICAgICAgIHJldHVybiByZXNcclxuXHJcbiAgICBuZXh0X3ZlcnRpY2VzOiAodikgLT5cclxuICAgICAgICByZXR1cm4gQHZpbmZvW0Byb290XS5iZnNbdl0uc3VidmVydGljZXNcclxuXHJcbiAgICBwcmV2aW91c192ZXJ0aWNlczogKHYpIC0+XHJcbiAgICAgICAgcmVzID0gW11cclxuICAgICAgICByb290YmZzID0gQHZpbmZvW0Byb290XS5iZnNcclxuICAgICAgICBmb3IgdSBpbiBAdmVydGljZXNcclxuICAgICAgICAgICAgaWYgdiBpbiByb290YmZzW3VdLnN1YnZlcnRpY2VzXHJcbiAgICAgICAgICAgICAgICByZXMucHVzaCB1XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG5cclxuICAgIGludmFyaWFudDM6IChzZXAgPSAnLCAnKSAtPlxyXG4gICAgICAgIHJlcyA9IHt9XHJcbiAgICAgICAgZm9yIHYgaW4gQHZlcnRpY2VzXHJcbiAgICAgICAgICAgIHQgPSBbXVxyXG4gICAgICAgICAgICB0WzBdID0gQGRpc3QgdlxyXG4gICAgICAgICAgICB0WzFdID0gQHByZXZpb3VzX3ZlcnRpY2VzKHYpLmxlbmd0aFxyXG4gICAgICAgICAgICB0WzJdID0gQG5leHRfdmVydGljZXModikubGVuZ3RoXHJcbiAgICAgICAgICAgIHRbM10gPSAnKCcgKyBAZGlzdHNfdG9fbGVhdmVzKHYpLmpvaW4oc2VwKSArICcpJ1xyXG4gICAgICAgICAgICByZXNbdl0gPSB0LmpvaW4gc2VwXHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG5cclxuICAgIGludmFyaWFudDNfYXNfc3RyOiAtPlxyXG4gICAgICAgIEB1cGRhdGUoKVxyXG4gICAgICAgIHJldHVybiBfLnZhbHVlcyhAaW52YXJpYW50MygnLCcpKS5zb3J0KCkuam9pbiAnOydcclxuXHJcbiAgICBjbGVhcjogLT5cclxuICAgICAgICBAdmVydGljZXMgPSBbXVxyXG4gICAgICAgIEBsaW5rcyA9IFtdXHJcbiAgICAgICAgQG1hcCA9IHt9XHJcbiAgICAgICAgQHZpbmZvID0ge30gIyBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGZvciB2ZXJ0ZXhcclxuICAgICAgICBAZnJlZW5hbWVzID0gW11cclxuICAgICAgICBAcm9vdCA9IG51bGxcclxuICAgICAgICBAaXNfY2hhbmdlc19sb2NrID0gZmFsc2VcclxuICAgICAgICBAaXNfdXBkYXRlZCA9IGZhbHNlXHJcbiAgICAgICAgQGNoYW5nZWQoKVxyXG5cclxuICAgICMgPT09IENIQU5HRVMgPT09XHJcbiAgICBvbl9jaGFuZ2U6IChjYWxsYmFjaykgLT4gXHJcbiAgICAgICAgQGNoYW5nZV9saXN0ZW5lcnMucHVzaCBjYWxsYmFja1xyXG5cclxuICAgIGNoYW5nZWQ6IC0+IFxyXG4gICAgICAgIEBpc191cGRhdGVkID0gZmFsc2VcclxuICAgICAgICByZXR1cm4gaWYgQGlzX2NoYW5nZXNfbG9ja1xyXG4gICAgICAgIGZvciBjYWxsYmFjayBpbiBAY2hhbmdlX2xpc3RlbmVyc1xyXG4gICAgICAgICAgICBjYWxsYmFjayh0aGlzKVxyXG5cclxuICAgIGxvY2tfY2hhbmdlczogLT5cclxuICAgICAgICBAaXNfY2hhbmdlc19sb2NrID0gdHJ1ZVxyXG5cclxuICAgIHVubG9ja19jaGFuZ2VzOiAtPlxyXG4gICAgICAgIEBpc19jaGFuZ2VzX2xvY2sgPSBmYWxzZVxyXG5cclxuICAgICMgPT09IFZFUlRJQ0VTID09PSBcclxuICAgIGdlbmVyYXRlX25hbWU6IC0+XHJcbiAgICAgICAgQGZyZWVuYW1lcy5zb3J0IChhLCBiKSAtPiBhIC0gYlxyXG4gICAgICAgIHJlcyA9IFwiXCJcclxuICAgICAgICB3aGlsZSBAZnJlZW5hbWVzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgdiA9IFwiXCIgKyBAZnJlZW5hbWVzLnNoaWZ0KClcclxuICAgICAgICAgICAgcmV0dXJuIHYgaWYgbm90IEBpc192ZXJ0ZXggdlxyXG4gICAgICAgIHJldHVybiBcIlwiICsgQGNvdW50X3ZlcnRpY2VzKClcclxuXHJcbiAgICBjb3VudF92ZXJ0aWNlczogLT4gQHZlcnRpY2VzLmxlbmd0aFxyXG5cclxuICAgIGlzX3ZlcnRleDogKG5hbWUpIC0+XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlIGlmIG5vdCBuYW1lP1xyXG4gICAgICAgIHJldHVybiBuYW1lIGluIEB2ZXJ0aWNlc1xyXG5cclxuICAgIGdldF92aW5mbzogKG5hbWUpIC0+IEB2aW5mb1tuYW1lXVxyXG5cclxuICAgIHNldF92aW5mbzogKG5hbWUsIGluZm8pIC0+XHJcbiAgICAgICAgdW5sZXNzIEB2aW5mb1tuYW1lXT9cclxuICAgICAgICAgICAgQHZpbmZvW25hbWVdID0gaW5mb1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICBAdmluZm9bbmFtZV1ba10gPSB2IGZvciBrLHYgb2YgaW5mbyBpZiBpbmZvP1xyXG5cclxuICAgIGFkZF92ZXJ0ZXg6IChuYW1lLCBpbmZvKSAtPlxyXG4gICAgICAgIEBzZXRfdmluZm8gbmFtZSwgaW5mb1xyXG4gICAgICAgIHJldHVybiBpZiBAaXNfdmVydGV4IG5hbWVcclxuICAgICAgICBAdmVydGljZXMucHVzaCBuYW1lXHJcbiAgICAgICAgQG1hcFtuYW1lXSA9IHt9XHJcbiAgICAgICAgaWYgbm90IEByb290P1xyXG4gICAgICAgICAgICBAcm9vdCA9IG5hbWVcclxuICAgICAgICBAY2hhbmdlZCgpXHJcblxyXG4gICAgZGVsX3ZlcnRleDogKG5hbWUpIC0+XHJcbiAgICAgICAgcmV0dXJuIGlmIG5vdCBAaXNfdmVydGV4KG5hbWUpXHJcblxyXG4gICAgICAgIHByZXZfbG9ja19zdGF0dXMgPSBAaXNfY2hhbmdlc19sb2NrXHJcbiAgICAgICAgQGxvY2tfY2hhbmdlcygpXHJcblxyXG4gICAgICAgIF8ucHVsbCBAdmVydGljZXMsIG5hbWVcclxuICAgICAgICBkZWxldGUgQHZpbmZvW25hbWVdXHJcbiAgICAgICAgQGZyZWVuYW1lcy5wdXNoIHBhcnNlSW50KG5hbWUpXHJcbiAgICAgICAgQGRlbF9saW5rc193aXRoX3ZlcnRleCBuYW1lXHJcbiAgICAgICAgaWYgbmFtZSA9PSBAcm9vdFxyXG4gICAgICAgICAgICBAcm9vdCA9IGlmIEB2ZXJ0aWNlcy5sZW5ndGggPiAwIHRoZW4gQHZlcnRpY2VzWzBdIGVsc2UgbnVsbFxyXG5cclxuICAgICAgICBAaXNfY2hhbmdlc19sb2NrID0gcHJldl9sb2NrX3N0YXR1c1xyXG4gICAgICAgIEBjaGFuZ2VkKClcclxuXHJcbiAgICAjID09PSBMSU5LUyA9PT0gXHJcbiAgICBjb3VudF9saW5rczogLT4gXHJcbiAgICAgICAgcmV0dXJuIEBsaW5rcy5sZW5ndGhcclxuXHJcbiAgICBfbWFrZV9saW5rOiAodjEsIHYyKSAtPlxyXG4gICAgICAgIGFyciA9IFt2MSwgdjJdLnNvcnQoKVxyXG4gICAgICAgIHJldHVybiB7IGZyb206IGFyclswXSwgdG86IGFyclsxXSB9XHJcblxyXG4gICAgYWRkX2xpbms6ICh2MSwgdjIpIC0+XHJcbiAgICAgICAgcmV0dXJuIGlmIEBpc19saW5rKHYxLCB2MilcclxuICAgICAgICBAbGlua3MucHVzaCBAX21ha2VfbGluayh2MSwgdjIpXHJcbiAgICAgICAgQG1hcFt2MV1bdjJdID0gQG1hcFt2Ml1bdjFdID0gdHJ1ZVxyXG4gICAgICAgIEBjaGFuZ2VkKClcclxuXHJcbiAgICBkZWxfbGluazogKHYxLCB2MikgLT5cclxuICAgICAgICBwID0gKGwpIC0+IChsLmZyb20gPT0gdjEgYW5kIGwudG8gPT0gdjIpIG9yIChsLmZyb20gPT0gdjIgYW5kIGwudG8gPT0gdjEpXHJcbiAgICAgICAgQGRlbF9saW5rcCBwXHJcblxyXG4gICAgZGVsX2xpbmtzX3dpdGhfdmVydGV4OiAodikgLT5cclxuICAgICAgICBwID0gKGwpIC0+IHYgaW4gXy52YWx1ZXMgbFxyXG4gICAgICAgIEBkZWxfbGlua3AgcFxyXG5cclxuICAgIGRlbF9saW5rX2Zyb21fbWFwOiAodjEsIHYyKSAtPlxyXG4gICAgICAgIEBtYXBbdjFdW3YyXSA9IEBtYXBbdjJdW3YxXSA9IGZhbHNlXHJcbiAgICAgICAgQGNoYW5nZWQoKVxyXG5cclxuICAgIGRlbF9saW5rcDogKHByZWRpY2F0ZSkgLT5cclxuICAgICAgICByZXMgPSBbXVxyXG4gICAgICAgIGZvciBsIGluIEBsaW5rc1xyXG4gICAgICAgICAgICBpZiBwcmVkaWNhdGUgbFxyXG4gICAgICAgICAgICAgICAgQGRlbF9saW5rX2Zyb21fbWFwIGwuZnJvbSwgbC50bywgZmFsc2VcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmVzLnB1c2ggbFxyXG4gICAgICAgIEBsaW5rcyA9IHJlc1xyXG4gICAgICAgIEBjaGFuZ2VkKClcclxuXHJcbiAgICBpc19saW5rOiAodjEsIHYyKSAtPlxyXG4gICAgICAgIHJldHVybiAhIUBtYXBbdjFdW3YyXVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaC5jb2ZmZWVcbiAqKi8iLCJcclxuR3JhcGggPSByZXF1aXJlICcuL0dyYXBoJ1xyXG5cclxuXHJcbiMjI1xyXG5leGFtcGxlIGZvciBidWlsZGVyMTpcclxub3B0aW9uc1xyXG4gICAgdmVydGljZXM6XHJcbiAgICAgICAgMDogeDogMTAwLCB5OiAxMDBcclxuICAgICAgICAxOiB4OiA1MCwgeTogNTBcclxuICAgICAgICAyOiB4OiAxNTAsIHk6IDUwXHJcbiAgICBsaW5rczpcclxuICAgICAgICAwOiBbMSwgMl1cclxuIyMjXHJcbm1vZHVsZS5leHBvcnRzLlxyXG5idWlsZGVyMSA9IChvcHRpb25zKSAtPlxyXG4gICAgZyA9IG5ldyBHcmFwaFxyXG4gICAgZy5hZGRfdmVydGV4IFwiXCIrbmFtZSwgaW5mbyBmb3IgbmFtZSwgaW5mbyBvZiBvcHRpb25zLnZlcnRpY2VzXHJcbiAgICBmb3IgYSwgYXJyIG9mIG9wdGlvbnMubGlua3NcclxuICAgICAgICBmb3IgYiBpbiBhcnJcclxuICAgICAgICAgICAgZy5hZGRfbGluayBcIlwiK2EsIFwiXCIrYlxyXG4gICAgcmV0dXJuIGdcclxuXHJcbm1vZHVsZS5leHBvcnRzLlxyXG5tYWtlX29wdGlvbnNfZm9yX2J1aWxkZXIxID0gKGdyYXBoKSAtPlxyXG4gICAgdmVydGljZXMgPSBfLmNsb25lIGdyYXBoLnZpbmZvXHJcbiAgICBsaW5rcyA9IHt9XHJcbiAgICBmb3Ige2Zyb20sIHRvfSBpbiBncmFwaC5saW5rc1xyXG4gICAgICAgIGxpbmtzW2Zyb21dID0gW10gaWYgbm90IGxpbmtzW2Zyb21dP1xyXG4gICAgICAgIGxpbmtzW2Zyb21dLnB1c2ggdG9cclxuICAgIHJldHVybiB7dmVydGljZXMsIGxpbmtzfVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0dyYXBoQnVpbGRlci5jb2ZmZWVcbiAqKi8iLCJcclxuR3JhcGggPSByZXF1aXJlICcuL0dyYXBoJ1xyXG51dGlscyA9IHJlcXVpcmUgJy4vdXRpbHMnXHJcbkNhbnZhc0dyYXBoQ29uc3RydWN0b3IgPSByZXF1aXJlICcuL0NhbnZhc0dyYXBoQ29uc3RydWN0b3InXHJcbkdyYXBoSW5mbyA9IHJlcXVpcmUgJy4vR3JhcGhJbmZvJ1xyXG5cclxuY291bnRlciA9IDBcclxuXHJcbm1vZHVsZS5leHBvcnRzID1cclxuY2xhc3MgR3JhcGhUYWJsZVxyXG4gICAgY29uc3RydWN0b3I6IChAY29udGFpbmVyLCBAZ3JhcGggPSBuZXcgR3JhcGgpIC0+XHJcbiAgICAgICAgQGlkID0gXCJndFwiICsgY291bnRlcisrXHJcbiAgICAgICAgZGl2X2Zvcl9jb25zdHJ1Y3RvciA9ICQoXCI8ZGl2PlwiKS5hdHRyKCdpZCcsIEBpZCArIFwiZ2JcIikuZ2V0IDBcclxuICAgICAgICBkaXZfZm9yX2dyYXBoX2luZm8gPSAkKFwiPGRpdj5cIikuYXR0cignaWQnLCBAaWQgKyBcImluZm9cIikuZ2V0IDBcclxuXHJcbiAgICAgICAgQGVsID0gdXRpbHMubWFrZV90YWxiZSBbXHJcbiAgICAgICAgICAgIFsn0KDQuNGB0YPQvdC+0Log0LPRgNCw0YTQsCcsICfQmNC90YTQvtGA0LzQsNGG0LjRjyDQviDQs9GA0LDRhNC1J10sIFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBkaXZfZm9yX2NvbnN0cnVjdG9yLCBkaXZfZm9yX2dyYXBoX2luZm9cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF0sIHsgaGVhZGVyOiB0cnVlIH1cclxuICAgICAgICAkKEBjb250YWluZXIpLmFwcGVuZCBAZWxcclxuXHJcbiAgICAgICAgQGdiID0gbmV3IENhbnZhc0dyYXBoQ29uc3RydWN0b3IgZGl2X2Zvcl9jb25zdHJ1Y3RvciwgQGdyYXBoXHJcbiAgICAgICAgQGdpID0gbmV3IEdyYXBoSW5mbyBkaXZfZm9yX2dyYXBoX2luZm8sIEBncmFwaFxyXG5cclxuICAgIHVwZGF0ZTogLT5cclxuICAgICAgICBAZ2IudXBkYXRlKCkgaWYgQGdiLnVwZGF0ZT9cclxuXHJcbiAgICByZW5kZXI6IC0+XHJcbiAgICAgICAgQGdiLnJlbmRlcigpXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0dyYXBoVGFibGUuY29mZmVlXG4gKiovIiwiXHJcblxyXG5jb3VudGVyID0gMFxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID1cclxuY2xhc3MgR3JhcGhJbmZvXHJcbiAgICBjb25zdHJ1Y3RvcjogKEBjb250YWluZXIsIEBncmFwaCA9IG5ldyBHcmFwaCkgLT5cclxuICAgICAgICBAY29udGFpbmVyID0gJChAY29udGFpbmVyKS5nZXQgMCBpZiBfLmlzU3RyaW5nIEBjb250YWluZXJcclxuICAgICAgICBAaWQgPSBcImdyYXBoaW5mb1wiICsgY291bnRlcisrXHJcbiAgICAgICAgQGVsID0gJChcIjxkaXY+XCIpLmdldCAwXHJcbiAgICAgICAgJChAY29udGFpbmVyKS5hcHBlbmQgQGVsXHJcbiAgICAgICAgQGluZm8gPVxyXG4gICAgICAgICAgICBcImxlYXZlc1wiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JvQuNGB0YLRjNGPOlwiXHJcbiAgICAgICAgICAgICAgICBmdW5jOiA9PlxyXG4gICAgICAgICAgICAgICAgICAgIEBncmFwaC5sZWF2ZXMoKS5qb2luICcsICdcclxuICAgICAgICAgICAgXCJjb3VudF92ZXJ0aWNlc1wiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JrQvtC70LjRh9C10YHRgtCy0L4g0LLQtdGA0YjQuNC9OlwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzogPT4gQGdyYXBoLmNvdW50X3ZlcnRpY2VzKClcclxuICAgICAgICAgICAgXCJjb3VudF9saW5rc1wiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JrQvtC70LjRh9C10YHRgtCy0L4g0YDQtdCx0LXRgDpcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6ID0+IEBncmFwaC5jb3VudF9saW5rcygpXHJcbiAgICAgICAgICAgIFwiaW52YXJpYW50M1wiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JjQvdCy0LDRgNC40LDQvdGCIDM6XCJcclxuICAgICAgICAgICAgICAgIGZ1bmM6ID0+IEBpbnZhcmlhbnQzKClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgZm9yIGlkLG8gb2YgQGluZm9cclxuICAgICAgICAgICAgJChAZWwpLmFwcGVuZCgkKFwiPGRpdj48dT4je28udGl0bGV9PC91PiA8c3BhbiBpZD0je0BpZCtpZH0+PC9zcGFuPjwvZGl2PlwiKSlcclxuICAgICAgICBAZ3JhcGgub25fY2hhbmdlID0+IEB1cGRhdGVfaW5mbygpXHJcbiAgICAgICAgQHVwZGF0ZV9pbmZvKClcclxuXHJcbiAgICAgICAgQGNoYW5nZV9saXN0ZW5lcnMgPSBbXVxyXG4gICAgICAgIEByZXMgPSBcIlwiXHJcblxyXG4gICAgIyA9PT09PSBJTkZPID09PT09XHJcbiAgICBpbnZhcmlhbnQzOiAtPlxyXG4gICAgICAgIHJlcyA9IEpTT04uc3RyaW5naWZ5IEBncmFwaC5pbnZhcmlhbnQzKCksIG51bGwsIDJcclxuICAgICAgICByZXR1cm4gJChcIjxwcmU+I3tyZXN9PC9wcmU+XCIpXHJcblxyXG4gICAgdXBkYXRlX2luZm86IC0+XHJcbiAgICAgICAgQGdyYXBoLnVwZGF0ZSgpXHJcbiAgICAgICAgZm9yIGlkLCBvIG9mIEBpbmZvXHJcbiAgICAgICAgICAgIGlkID0gQGlkICsgaWRcclxuICAgICAgICAgICAgcmVzID0gby5mdW5jKClcclxuICAgICAgICAgICAgJCgnIycraWQpLmh0bWwgXCJcIlxyXG4gICAgICAgICAgICAkKCcjJytpZCkuYXBwZW5kIHJlc1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0dyYXBoSW5mby5jb2ZmZWVcbiAqKi8iLCJcclxubW9kdWxlLmV4cG9ydHMgPVxyXG5jbGFzcyBHcmFwaEluZm9cclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogKEBnMSwgQGcyLCBAZWwxLCBAZWwyLCBAZ2xvYmFsX3JlcykgLT5cclxuICAgICAgICBAdXBkYXRlKClcclxuICAgICAgICBAZzEub25fY2hhbmdlID0+IEB1cGRhdGUoKVxyXG4gICAgICAgIEBnMi5vbl9jaGFuZ2UgPT4gQHVwZGF0ZSgpXHJcblxyXG4gICAgdXBkYXRlOiAtPlxyXG4gICAgICAgIHMxID0gQGcxLmludmFyaWFudDNfYXNfc3RyKClcclxuICAgICAgICBzMiA9IEBnMi5pbnZhcmlhbnQzX2FzX3N0cigpXHJcbiAgICAgICAgJChAZWwxKS5odG1sIHMxXHJcbiAgICAgICAgJChAZWwyKS5odG1sIHMyXHJcbiAgICAgICAgY2xyID0gXCJyZWRcIlxyXG4gICAgICAgIG1zZyA9IFwi0JjQvdCy0YDQuNCw0L3RgtGLINCd0JUg0YHQvtCy0L/QsNC00LDRjtGCXCJcclxuICAgICAgICBpZiBzMSA9PSBzMlxyXG4gICAgICAgICAgICBjbHIgPSBcImdyZWVuXCJcclxuICAgICAgICAgICAgbXNnID0gXCLQmNC90LLRgNC40LDQvdGC0Ysg0YHQvtCy0L/QsNC00LDRjtGCXCJcclxuICAgICAgICAkKEBnbG9iYWxfcmVzKS5odG1sIFwiPGZvbnQgY29sb3I9I3tjbHJ9PiN7bXNnfTwvZm9udD5cIlxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9SZXN1bHQuY29mZmVlXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==