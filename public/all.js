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
	              console.log(s);
	              return alert(s);
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
	        if (used[u] && res[u].dist > res[v].dist) {
	          res[v].subvertices.push(u);
	        }
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
	      t[3] = '(' + this.dists_to_leaves(v).sort().join(sep) + ')';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmZkZjg2MmEwYzk2NDVlMzMzYTMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vQ2FudmFzR3JhcGhDb25zdHJ1Y3Rvci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMuY29mZmVlIiwid2VicGFjazovLy8uL0dyYXBoRHJhd2VyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vR3JhcGhCdWlsZGVyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaFRhYmxlLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaEluZm8uY29mZmVlIiwid2VicGFjazovLy8uL1Jlc3VsdC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNyQ0E7O0FBQUEsMEJBQXlCLG9CQUFRLENBQVI7O0FBQ3pCLGdCQUFlLG9CQUFRLENBQVI7O0FBQ2YsY0FBYSxvQkFBUSxDQUFSOztBQUNiLFVBQVMsb0JBQVEsQ0FBUjs7QUFHVCxvQkFBbUI7O0FBR25CLFlBQVc7QUFDUDtHQUFBLE9BQU8sSUFBSSxDQUFDLEdBQUw7R0FDUCxLQUFLO0dBQ0wsT0FBTztBQUNIO0tBQUEsU0FBUyxJQUFJLENBQUMsR0FBTCxLQUFhO0tBQ3RCLE9BQU8sSUFBSSxDQUFDLEdBQUw7S0FDUCxTQUFTLElBQUksQ0FBQyxHQUFMLENBQVMsTUFBVCxFQUFpQixJQUFqQjtBQUNULFlBQU0sU0FBUyxDQUFmO0FBQ0k7O1NBQ0ksSUFBaUIsa0JBQWpCO1dBQUEsR0FBRyxDQUFDLE1BQUos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bkIsR0FBc0IsR0FBdEIsR0FBMEIsU0FBOUM7R0FWSSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDZmZGY4NjJhMGM5NjQ1ZTMzM2EzXG4gKiovIiwiXG5DYW52YXNHcmFwaENvbnN0cnVjdG9yID0gcmVxdWlyZSAnLi9DYW52YXNHcmFwaENvbnN0cnVjdG9yJ1xuR3JhcGhCdWlsZGVyID0gcmVxdWlyZSAnLi9HcmFwaEJ1aWxkZXInXG5HcmFwaFRhYmxlID0gcmVxdWlyZSAnLi9HcmFwaFRhYmxlJ1xuUmVzdWx0ID0gcmVxdWlyZSAnLi9SZXN1bHQnXG5cblxubWFpbmxvb3Bfb2JqZWN0cyA9IFtdXG5cblxubWFpbmxvb3AgPSAtPlxuICAgIHRpbWUgPSBEYXRlLm5vdygpXG4gICAgZHQgPSAxNFxuICAgIHN0ZXAgPSAtPlxuICAgICAgICBjdXJfZHQgPSBEYXRlLm5vdygpIC0gdGltZVxuICAgICAgICB0aW1lID0gRGF0ZS5ub3coKVxuICAgICAgICBjdXJfZHQgPSBNYXRoLm1pbihjdXJfZHQsIDEwMDApXG4gICAgICAgIHdoaWxlIGN1cl9kdCA+IDBcbiAgICAgICAgICAgIGZvciBvYmogaW4gbWFpbmxvb3Bfb2JqZWN0c1xuICAgICAgICAgICAgICAgIG9iai51cGRhdGUgZHQgaWYgb2JqLnVwZGF0ZT8gXG4gICAgICAgICAgICBjdXJfZHQgLT0gZHRcbiAgICAgICAgZm9yIG9iaiBpbiBtYWlubG9vcF9vYmplY3RzXG4gICAgICAgICAgICBvYmoucmVuZGVyKCkgaWYgb2JqLnJlbmRlcj9cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHN0ZXBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgc3RlcFxuXG5tYWlubG9vcCgpXG5cblxuXG4jIEpTT04uc3RyaW5naWZ5KEdyYXBoQnVpbGRlci5tYWtlX29wdGlvbnNfZm9yX2J1aWxkZXIxKGdiMS5ncmFwaCksIG51bGwpXG5nMSA9IEdyYXBoQnVpbGRlci5idWlsZGVyMSB7XCJ2ZXJ0aWNlc1wiOntcIjBcIjp7XCJ4XCI6MTk4LFwieVwiOjM3NS4xODc1fSxcIjFcIjp7XCJ4XCI6OTMsXCJ5XCI6MzI2LjE4NzV9LFwiMlwiOntcInhcIjozMDIsXCJ5XCI6MzM4LjE4NzV9LFwiM1wiOntcInhcIjo0MyxcInlcIjoyNTAuMTg3NSxcIm5hbWVcIjpcIjNcIn0sXCI0XCI6e1wieFwiOjE1NCxcInlcIjoyNDcuMTg3NSxcIm5hbWVcIjpcIjRcIn0sXCI1XCI6e1wieFwiOjMwMCxcInlcIjoyNzIuMTg3NSxcIm5hbWVcIjpcIjVcIn0sXCI2XCI6e1wieFwiOjI2MSxcInlcIjoyMDguMTg3NSxcIm5hbWVcIjpcIjZcIn0sXCI3XCI6e1wieFwiOjM1NCxcInlcIjoyMjkuMTg3NSxcIm5hbWVcIjpcIjdcIn0sXCI4XCI6e1wieFwiOjEwMyxcInlcIjoxNzAuMTg3NSxcIm5hbWVcIjpcIjhcIn0sXCI5XCI6e1wieFwiOjM3LFwieVwiOjU4LjE4NzUsXCJuYW1lXCI6XCI5XCJ9LFwiMTBcIjp7XCJ4XCI6MTEzLFwieVwiOjYyLjE4NzUsXCJuYW1lXCI6XCIxMFwifSxcIjExXCI6e1wieFwiOjE5NCxcInlcIjo2MC4xODc1LFwibmFtZVwiOlwiMTFcIn0sXCIxMlwiOntcInhcIjozMjcsXCJ5XCI6MTgzLjE4NzUsXCJuYW1lXCI6XCIxMlwifSxcIjEzXCI6e1wieFwiOjM2MSxcInlcIjoxNDUuMTg3NSxcIm5hbWVcIjpcIjEzXCJ9LFwiMTRcIjp7XCJ4XCI6MzIwLFwieVwiOjExMy4xODc1LFwibmFtZVwiOlwiMTRcIn0sXCIxNVwiOntcInhcIjozNTcsXCJ5XCI6NzcuMTg3NSxcIm5hbWVcIjpcIjE1XCJ9LFwiMTZcIjp7XCJ4XCI6MzE3LFwieVwiOjQ2LjE4NzUsXCJuYW1lXCI6XCIxNlwifX0sXCJsaW5rc1wiOntcIjBcIjpbXCIxXCIsXCIyXCJdLFwiMVwiOltcIjNcIixcIjRcIl0sXCIyXCI6W1wiNVwiXSxcIjNcIjpbXCI4XCJdLFwiNVwiOltcIjZcIixcIjdcIl0sXCI4XCI6W1wiOVwiXSxcIjEwXCI6W1wiOFwiXSxcIjExXCI6W1wiOFwiXSxcIjEyXCI6W1wiN1wiLFwiMTNcIl0sXCIxM1wiOltcIjE0XCJdLFwiMTRcIjpbXCIxNVwiXSxcIjE1XCI6W1wiMTZcIl19fVxuZzIgPSBHcmFwaEJ1aWxkZXIuYnVpbGRlcjEge1widmVydGljZXNcIjp7XCIwXCI6e1wieFwiOjE5MSxcInlcIjozODAuMzc1LFwibmFtZVwiOlwiMFwifSxcIjFcIjp7XCJ4XCI6NTAsXCJ5XCI6MzIwLjM3NSxcIm5hbWVcIjpcIjFcIn0sXCIyXCI6e1wieFwiOjMwOSxcInlcIjozMDMuMzc1LFwibmFtZVwiOlwiMlwifSxcIjNcIjp7XCJ4XCI6NjgsXCJ5XCI6MTkwLjM3NSxcIm5hbWVcIjpcIjNcIn0sXCI0XCI6e1wieFwiOjMwNixcInlcIjoxODAuMzc1LFwibmFtZVwiOlwiNFwifSxcIjVcIjp7XCJ4XCI6NjUsXCJ5XCI6NzEuMzc1LFwibmFtZVwiOlwiNVwifSxcIjZcIjp7XCJ4XCI6MTg0LFwieVwiOjE4Ny4zNzUsXCJuYW1lXCI6XCI2XCJ9LFwiN1wiOntcInhcIjoyNjYsXCJ5XCI6ODkuMzc1LFwibmFtZVwiOlwiN1wifSxcIjhcIjp7XCJ4XCI6MzUyLFwieVwiOjgyLjM3NSxcIm5hbWVcIjpcIjhcIn0sXCI5XCI6e1wieFwiOjE3NyxcInlcIjoyOTcuMzc1LFwibmFtZVwiOlwiOVwifX0sXCJsaW5rc1wiOntcIjBcIjpbXCIyXCIsXCIxXCIsXCI5XCJdLFwiMVwiOltcIjNcIl0sXCIyXCI6W1wiNFwiXSxcIjNcIjpbXCI1XCJdLFwiNFwiOltcIjdcIixcIjhcIl0sXCI2XCI6W1wiOVwiXX19XG5cbmd0ID0gW25ldyBHcmFwaFRhYmxlKFwiI2d0MVwiLCBnMSksIG5ldyBHcmFwaFRhYmxlIFwiI2d0MlwiLCBnMl1cbnIgPSBuZXcgUmVzdWx0IGcxLCBnMiwgXCIjaW52M2cxXCIsIFwiI2ludjNnMlwiLCBcIiNnbG9iYWxfcmVzXCJcbm1haW5sb29wX29iamVjdHMgPSBtYWlubG9vcF9vYmplY3RzLmNvbmNhdCBndFxuXG5cbnByZyA9IChpKSAtPiBjb25zb2xlLmxvZyBKU09OLnN0cmluZ2lmeShHcmFwaEJ1aWxkZXIubWFrZV9vcHRpb25zX2Zvcl9idWlsZGVyMShndFtpXS5ncmFwaCkpXG5cblxuXG5fLmRlZmF1bHRzIHdpbmRvdywge0dyYXBoQnVpbGRlciwgcHJnLCBndH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbWFpbi5jb2ZmZWVcbiAqKi8iLCJcbnV0aWxzID0gcmVxdWlyZSAnLi91dGlscydcbkdyYXBoRHJhd2VyID0gcmVxdWlyZSAnLi9HcmFwaERyYXdlcidcbkdyYXBoID0gcmVxdWlyZSAnLi9HcmFwaCdcblxubW9kdWxlLmV4cG9ydHMgPSBcbmNsYXNzIENhbnZhc0dyYXBoQ29uc3RydWN0b3JcblxuICAgIGNvbnN0cnVjdG9yOiAoQGNvbnRhaW5lciwgQGdyYXBoID0gbmV3IEdyYXBoKSAtPlxuICAgICAgICBAY2FuID0gJChcIjxjYW52YXM+XCIpLmdldCAwXG4gICAgICAgIEBjdHggPSBAY2FuLmdldENvbnRleHQgJzJkJ1xuICAgICAgICBAY2FuLndpZHRoID0gQGNhbi5oZWlnaHQgPSA0MDBcbiAgICAgICAgQG1vdXNlID0geyBcbiAgICAgICAgICAgIHg6IDAsIHk6IDAgIyDRgtC10LrRg9GJ0LjQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQvNGL0YjQuCDQvdCw0LQgQGNhblxuICAgICAgICAgICAgdGFyZ2V0OiBudWxsICMg0LjQvNGPINCy0LXRgNGI0LjQvdGLINC90LDQtCDQutC+0YLQvtGA0L7QuSDQv9GA0L7QuNC30LLQvtC00LjRgtGB0Y8g0L3QtdC60L7RgtC+0YDQvtC1INC00LXQudGB0YLQstC40LVcbiAgICAgICAgfVxuICAgICAgICBAZm9jdXMgPSBmYWxzZVxuICAgICAgICBAaGFuZGxlX2V2ZW50cygpXG4gICAgICAgICQoQGNvbnRhaW5lcikuYXBwZW5kIEBjYW5cbiAgICAgICAgQGdyYXBoX2RyYXdlciA9IG5ldyBHcmFwaERyYXdlciBAZ3JhcGgsIEBjdHhcblxuICAgIHVwZGF0ZV9tb3VzZTogKGUpIC0+XG4gICAgICAgIHBvcyA9IHV0aWxzLmdldF9tb3VzZXBvc19pbl9lbGVtZW50IEBjYW4sIGVcbiAgICAgICAgQG1vdXNlLnggPSBwb3MueFxuICAgICAgICBAbW91c2UueSA9IHBvcy55XG5cbiAgICBoYW5kbGVfZXZlbnRzOiAtPlxuICAgICAgICAkKEBjYW4pLm1vdXNlb3V0ID0+IEBmb2N1cyA9IGZhbHNlXG4gICAgICAgICQoQGNhbikubW91c2VvdmVyID0+IEBmb2N1cyA9IHRydWVcbiAgICAgICAgXG4gICAgICAgICQoQGNhbikubW91c2Vtb3ZlIChlKSA9PlxuICAgICAgICAgICAgQHVwZGF0ZV9tb3VzZSBlXG4gICAgICAgICAgICBpZiBAbW91c2UudGFyZ2V0XG4gICAgICAgICAgICAgICAgaWYgQG1vdXNlLmRyYWd0eXBlID09IFwibW92ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleF9uYW1lID0gQG1vdXNlLnRhcmdldFxuICAgICAgICAgICAgICAgICAgICBAZ3JhcGguc2V0X3ZpbmZvIHZlcnRleF9uYW1lLCB1dGlscy52ZWMyKEBtb3VzZS54LCBAbW91c2UueSlcbiAgICAgICAgICAgICAgICBpZiBAbW91c2UuZHJhZ3R5cGUgPT0gXCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgQG1vdXNlLmxpbmtlbmQgPSBfLmNsb25lIHV0aWxzLnZlYzIgQG1vdXNlLngsIEBtb3VzZS55XG5cbiAgICAgICAgJChAY2FuKS5tb3VzZWRvd24gKGUpID0+XG4gICAgICAgICAgICB2bmFtZSA9IEBncmFwaF9kcmF3ZXIuZ2V0X3ZlcnRleF9ieXh5IEBtb3VzZVxuICAgICAgICAgICAgaWYgdm5hbWU/IGFuZCBAbW91c2UudGFyZ2V0PyBhbmQgQG1vdXNlLmRyYWd0eXBlID09IFwibGlua1wiXG4gICAgICAgICAgICAgICAgQGdyYXBoLmFkZF9saW5rIEBtb3VzZS50YXJnZXQsIHZuYW1lXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICBAbW91c2UudGFyZ2V0ID0gdm5hbWVcbiAgICAgICAgICAgIEBtb3VzZS5kcmFndHlwZSA9IFwibW92ZVwiXG5cbiAgICAgICAgJChAY2FuKS5tb3VzZXVwIChlKSA9PlxuICAgICAgICAgICAgQG1vdXNlLnRhcmdldCA9IG51bGxcbiAgICAgICAgICAgIEBtb3VzZS5kcmFndHlwZSA9IG51bGxcblxuICAgICAgICAkKGRvY3VtZW50KS5rZXlkb3duIChlKSA9PlxuICAgICAgICAgICAgcmV0dXJuIHVubGVzcyBAZm9jdXNcbiAgICAgICAgICAgIGNoID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLmtleUNvZGUpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIHN3aXRjaCBjaFxuICAgICAgICAgICAgICAgICMgU2V0IG5ldyByb290XG4gICAgICAgICAgICAgICAgd2hlbiAncidcbiAgICAgICAgICAgICAgICAgICAgdm5hbWUgPSBAZ3JhcGhfZHJhd2VyLmdldF92ZXJ0ZXhfYnl4eSBAbW91c2VcbiAgICAgICAgICAgICAgICAgICAgQGdyYXBoLnNldF9yb290IHZuYW1lXG5cbiAgICAgICAgICAgICAgICAjIEFkZCB2ZXJ0ZXhcbiAgICAgICAgICAgICAgICB3aGVuICd2J1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gQGdyYXBoLmdlbmVyYXRlX25hbWUoKVxuICAgICAgICAgICAgICAgICAgICBAZ3JhcGguYWRkX3ZlcnRleCBuYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBAbW91c2UueCwgeTogQG1vdXNlLnksIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgIyBRdWVyeSBmb3IgZ3JhcGhcbiAgICAgICAgICAgICAgICB3aGVuICdxJ1xuICAgICAgICAgICAgICAgICAgICBjbWQgPSBwcm9tcHQoXCLQktCy0LXQtNC40YLQtSDQutC+0LzQsNC90LTRg1wiKVxuICAgICAgICAgICAgICAgICAgICBhcmdzID0gXy5wdWxsIGNtZC5zcGxpdCgvXFxzLyksICcnXG4gICAgICAgICAgICAgICAgICAgIF9wcmludCA9IChzKSAtPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0IHNcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIGFyZ3NbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBcImRpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGlmIGFyZ3MubGVuZ3RoIDwgM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9wcmludCBcItCg0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LLQtdGA0YjQuNC90LDQvNC4OiBcIiArIEBncmFwaC5kaXN0KGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gXCJsZWF2ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9wcmludCBAZ3JhcGgubGVhdmVzIGFyZ3NbMV1cblxuICAgICAgICAgICAgICAgICMgRGVsZXRlIHZlcnRleFxuICAgICAgICAgICAgICAgIHdoZW4gJ2QnXG4gICAgICAgICAgICAgICAgICAgIGlmIGUuc2hpZnRLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIEBncmFwaC5jbGVhcigpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgdm5hbWUgPSBAZ3JhcGhfZHJhd2VyLmdldF92ZXJ0ZXhfYnl4eSBAbW91c2VcbiAgICAgICAgICAgICAgICAgICAgQGdyYXBoLmRlbF92ZXJ0ZXggdm5hbWVcblxuICAgICAgICAgICAgICAgICMgQWRkIGxpbmtcbiAgICAgICAgICAgICAgICB3aGVuICdsJ1xuICAgICAgICAgICAgICAgICAgICB2bmFtZSA9IEBncmFwaF9kcmF3ZXIuZ2V0X3ZlcnRleF9ieXh5IEBtb3VzZVxuICAgICAgICAgICAgICAgICAgICBAbW91c2UudGFyZ2V0ID0gdm5hbWVcbiAgICAgICAgICAgICAgICAgICAgQG1vdXNlLmRyYWd0eXBlID0gXCJsaW5rXCJcblxuICAgICAgICAgICAgICAgICMgUHJpbnQgb3RoZXIgaW5mb1xuICAgICAgICAgICAgICAgIHdoZW4gJzEnXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIEBtb3VzZVxuXG4gICAgdXBkYXRlOiAoZHQpIC0+XG5cbiAgICBkcmF3X2RyYWdsaW5rOiAtPlxuICAgICAgICBpZiBAbW91c2UudGFyZ2V0PyBhbmQgQG1vdXNlLmRyYWd0eXBlID09IFwibGlua1wiIGFuZCBAbW91c2UubGlua2VuZD9cbiAgICAgICAgICAgIHYgPSBAZ3JhcGguZ2V0X3ZpbmZvIEBtb3VzZS50YXJnZXRcbiAgICAgICAgICAgIHV0aWxzLmRyYXdfbGluZSBAY3R4LCB2LCBAbW91c2VcblxuICAgIHJlbmRlcjogLT5cbiAgICAgICAgQGN0eC5jbGVhclJlY3QgMCwgMCwgQGNhbi53aWR0aCwgQGNhbi5oZWlnaHRcbiAgICAgICAgQGRyYXdfZHJhZ2xpbmsoKVxuICAgICAgICBAZ3JhcGhfZHJhd2VyLnJlbmRlcigpXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2FudmFzR3JhcGhDb25zdHJ1Y3Rvci5jb2ZmZWVcbiAqKi8iLCJcbiMgPT09PT0gbWF0aHMgdXRpbHMgPT09PT1cbmRpc3QgPSAoYSwgYikgLT4gTWF0aC5zcXJ0KE1hdGgucG93KGEueCAtIGIueCwgMikgKyBNYXRoLnBvdyhhLnkgLSBiLnksIDIpKVxudmVjMiA9ICh4LCB5KSAtPiB7eCwgeX1cblxuIyA9PT09PSB1dGlscyBmb3IgaHRtbCBlbGVtZW50cyA9PT09PSBcbmdldF9tb3VzZXBvc19pbl9lbGVtZW50ID0gKGVsLCBlKSAtPlxuICAgIG9mZnNldCA9ICQoZWwpLm9mZnNldCgpXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIHg6IGUucGFnZVggLSBvZmZzZXQubGVmdCwgXG4gICAgICAgIHk6IGUucGFnZVkgLSBvZmZzZXQudG9wIFxuICAgIH1cblxuIyBjcmVhdGUgaHRtbCB0YWJsZSBieSBqcyBtYXRyaXhcbiMgbzogeyBoZWFkZXI6IGJvb2wgfVxubWFrZV90YWxiZSA9IChhcnIsIG8gPSB7fSkgLT5cbiAgICB0YmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICd0YWJsZSdcbiAgICBmb3IgbGluZSwgaSBpbiBhcnJcbiAgICAgICAgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICd0cidcbiAgICAgICAgZm9yIHZhbCwgaiBpbiBsaW5lXG4gICAgICAgICAgICB0ID0gaWYgby5oZWFkZXIgYW5kIGkgPT0gMCB0aGVuICd0aCcgZWxzZSAndGQnXG4gICAgICAgICAgICBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCB0XG4gICAgICAgICAgICB2YWwgPSBhcnJbaV1bal1cbiAgICAgICAgICAgIGlmIF8uaXNTdHJpbmcgdmFsXG4gICAgICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSB2YWxcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkIHZhbFxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQgY2VsbFxuICAgICAgICB0YmwuYXBwZW5kQ2hpbGQgdHJcbiAgICByZXR1cm4gdGJsXG5cbiMgPT09PT0gR3JhcGhpY3MgPT09PT1cbmRyYXdfbGluZSA9IChjdHgsIGEsIGIpIC0+XG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4Lm1vdmVUbyBhLngsIGEueVxuICAgIGN0eC5saW5lVG8gYi54LCBiLnlcbiAgICBjdHguc3Ryb2tlKClcblxuZHJhd19jaXJjbGVfd2l0aF90ZXh0ID0gKGN0eCwgeCwgeSwgciwgdGV4dCwgbykgLT5cbiAgICBjdHguZm9udCA9IFwiI3tvLmZvbnRzen1weCAje28uZm9udEZhbWlseX1cIlxuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIGN0eC5hcmMgeCwgeSwgciwgMCwgMiAqIE1hdGguUElcbiAgICBjdHguZmlsbFN0eWxlID0gby5jaXJjbGVDb2xvclxuICAgIGN0eC5maWxsKClcbiAgICBjdHguZmlsbFN0eWxlID0gby50ZXh0Q29sb3JcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcidcbiAgICBjdHgudGV4dEJhc2VMaW5lID0gJ21pZGRsZSdcbiAgICBjdHguZmlsbFRleHQgdGV4dCwgeCwgeSArIG8uZm9udHN6LzRcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAjIG1hdGggdXRpbHNcbiAgICBkaXN0LCB2ZWMyXG4gICAgIyBodG1sIHV0aWxzXG4gICAgZ2V0X21vdXNlcG9zX2luX2VsZW1lbnQsIG1ha2VfdGFsYmVcbiAgICAjIEdyYXBoaWNzXG4gICAgZHJhd19saW5lLCBkcmF3X2NpcmNsZV93aXRoX3RleHRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdXRpbHMuY29mZmVlXG4gKiovIiwiXG51dGlscyA9IHJlcXVpcmUgJy4vdXRpbHMnXG5cblxuRk9OVFNaID0gMjBcblJBRElJVVMgPSBGT05UU1pcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFxuY2xhc3MgR3JhcGhEcmF3ZXJcbiAgICBcbiAgICBjb25zdHJ1Y3RvcjogKEBncmFwaCwgQGN0eCkgLT5cblxuICAgICMgPT09IFZFUlRJQ0VTID09PSBcbiAgICBnZXRfdmVydGV4X2J5eHk6IChwb3MpIC0+XG4gICAgICAgIGZvciBuYW1lLCBpbmZvIG9mIEBncmFwaC52aW5mb1xuICAgICAgICAgICAgcmV0dXJuIG5hbWUgaWYgdXRpbHMuZGlzdChwb3MsIGluZm8pIDwgUkFESUlVU1xuXG4gICAgbW92ZV92ZXJ0ZXg6ICh2ZXJ0ZXhfbmFtZSwgbmV3X3BvcykgLT5cbiAgICAgICAgQGdyYXBoLnNldF92aW5mbyB2ZXJ0ZXhfbmFtZSwgbmV3X3Bvc1xuXG4gICAgIyA9PT0gUkVOREVSID09PVxuICAgIGRyYXdfbGlua3M6ICgpIC0+XG4gICAgICAgIGZvciBsIGluIEBncmFwaC5saW5rc1xuICAgICAgICAgICAgYSA9IEBncmFwaC5nZXRfdmluZm8gbC5mcm9tXG4gICAgICAgICAgICBiID0gQGdyYXBoLmdldF92aW5mbyBsLnRvXG4gICAgICAgICAgICB1dGlscy5kcmF3X2xpbmUgQGN0eCwgYSwgYlxuXG4gICAgZHJhd192ZXJ0aWNlczogKCkgLT5cbiAgICAgICAgZm9yIG5hbWUsIGluZm8gb2YgQGdyYXBoLnZpbmZvXG4gICAgICAgICAgICB0ZXh0Q29sb3IgPSBpZiBAZ3JhcGguaXNfcm9vdCBuYW1lIHRoZW4gJ3JlZCcgZWxzZSAnd2hpdGUnXG4gICAgICAgICAgICB1dGlscy5kcmF3X2NpcmNsZV93aXRoX3RleHQoXG4gICAgICAgICAgICAgICAgQGN0eCwgaW5mby54LCBpbmZvLnksIFJBRElJVVMsIG5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udHN6OiBGT05UU1osIGZvbnRGYW1pbHk6ICdNb25vc3BhY2UnLFxuICAgICAgICAgICAgICAgICAgICBjaXJjbGVDb2xvcjogJ2JsYWNrJywgdGV4dENvbG9yOiB0ZXh0Q29sb3JcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG5cbiAgICByZW5kZXI6ICgpIC0+XG4gICAgICAgIEBjdHguc2F2ZSgpXG4gICAgICAgIEBkcmF3X2xpbmtzKClcbiAgICAgICAgQGRyYXdfdmVydGljZXMoKVxuICAgICAgICBAY3R4LnJlc3RvcmUoKVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0dyYXBoRHJhd2VyLmNvZmZlZVxuICoqLyIsIlxuIyBUT0RPOiDQsdC70L7QutC40YDQvtCy0LrQsCDQuCDRgNCw0LfQsdC70L7QutC40YDQvtCy0LrQsCBjYWxsX2NoYW5nZWRcblxubW9kdWxlLmV4cG9ydHMgPSBcbmNsYXNzIEdyYXBoXG4gICAgY29uc3RydWN0b3I6IC0+XG4gICAgICAgIEB2ZXJ0aWNlcyA9IFtdXG4gICAgICAgIEBsaW5rcyA9IFtdXG4gICAgICAgIEBtYXAgPSB7fVxuICAgICAgICBAdmluZm8gPSB7fSAjIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gZm9yIHZlcnRleFxuICAgICAgICBAZnJlZW5hbWVzID0gW11cbiAgICAgICAgQHJvb3QgPSBudWxsXG4gICAgICAgIEBpc19jaGFuZ2VzX2xvY2sgPSBmYWxzZVxuICAgICAgICBAaXNfdXBkYXRlZCA9IGZhbHNlXG4gICAgICAgIEBjaGFuZ2VfbGlzdGVuZXJzID0gW11cblxuICAgICMgPT09IE9USEVSID09PT1cbiAgICAjIHVwZGF0ZSBhbGwgaW5mbyBpbnRvIHRoaXMgZ3JhcGhcbiAgICB1cGRhdGU6IC0+XG4gICAgICAgIHJldHVybiBpZiBAaXNfdXBkYXRlZFxuICAgICAgICBmb3IgdiBpbiBAdmVydGljZXNcbiAgICAgICAgICAgIEB2aW5mb1t2XS5iZnMgPSBAbWFrZV9iZnNfaW5mbyB2XG4gICAgICAgIEBpc191cGRhdGVkID0gZmFsc2VcblxuICAgIGlzX3Jvb3Q6ICh2KSAtPiB2ID09IEByb290XG4gICAgc2V0X3Jvb3Q6IChyKSAtPiBcbiAgICAgICAgcmV0dXJuIGlmIHIgPT0gQHJvb3RcbiAgICAgICAgQHJvb3QgPSByXG4gICAgICAgIEBjaGFuZ2VkKClcblxuICAgIGxlYXZlczogKHJvb3QgPSBAcm9vdCkgLT5cbiAgICAgICAgcmV0dXJuIFtdIGlmIG5vdCBAaXNfdmVydGV4IHJvb3RcbiAgICAgICAgQHVwZGF0ZSgpXG4gICAgICAgIHJlcyA9IFtdXG4gICAgICAgIHJvb3RiZnMgPSBAdmluZm9bcm9vdF0uYmZzXG4gICAgICAgIGZvciB1IGluIEB2ZXJ0aWNlc1xuICAgICAgICAgICAgaWYgcm9vdGJmc1t1XS5zdWJ2ZXJ0aWNlcy5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICAgIHJlcy5wdXNoIHVcbiAgICAgICAgcmV0dXJuIHJlc1xuXG4gICAgbWFrZV9iZnNfaW5mbzogKHMpIC0+XG4gICAgICAgIHJldHVybiBbXSBpZiBub3QgQGlzX3ZlcnRleCBzXG4gICAgICAgIHEgPSBbc11cbiAgICAgICAgdXNlZCA9IHt9XG4gICAgICAgIHVzZWRbc10gPSB0cnVlXG4gICAgICAgIHJlcyA9IHt9XG4gICAgICAgIHJlc1t1XSA9IHt9IGZvciB1IGluIEB2ZXJ0aWNlc1xuICAgICAgICByZXNbc10uZGlzdCA9IDBcbiAgICAgICAgcmVzW3NdLnN1YnZlcnRpY2VzID0gW11cbiAgICAgICAgd2hpbGUgcS5sZW5ndGggPiAwXG4gICAgICAgICAgICB2ID0gcS5zaGlmdCgpXG4gICAgICAgICAgICByZXNbdl0uc3VidmVydGljZXMgPSBbXSBpZiBub3QgcmVzW3ZdLnN1YnZlcnRpY2VzP1xuICAgICAgICAgICAgZm9yIHUgaW4gQHZlcnRpY2VzXG4gICAgICAgICAgICAgICAgaWYgdXNlZFt1XSBhbmQgcmVzW3VdLmRpc3QgPiByZXNbdl0uZGlzdFxuICAgICAgICAgICAgICAgICAgICByZXNbdl0uc3VidmVydGljZXMucHVzaCB1XG4gICAgICAgICAgICAgICAgaWYgQGlzX2xpbmsodiwgdSkgYW5kIG5vdCB1c2VkW3VdXG4gICAgICAgICAgICAgICAgICAgIHJlc1t2XS5zdWJ2ZXJ0aWNlcy5wdXNoIHVcbiAgICAgICAgICAgICAgICAgICAgcmVzW3VdLmRpc3QgPSByZXNbdl0uZGlzdCArIDFcbiAgICAgICAgICAgICAgICAgICAgdXNlZFt1XSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcS5wdXNoIHVcbiAgICAgICAgcmV0dXJuIHJlc1xuXG4gICAgZGlzdDogKHUsIHYgPSBAcm9vdCkgLT5cbiAgICAgICAgcmV0dXJuIGlmIG5vdCBAaXNfdmVydGV4KHUpIG9yIG5vdCBAaXNfdmVydGV4KHYpXG4gICAgICAgIEB1cGRhdGUoKVxuICAgICAgICByZXMgPSBAdmluZm9bdV0uYmZzW3ZdLmRpc3RcbiAgICAgICAgcmV0dXJuIHJlc1xuXG4gICAgZGlzdHNfdG9fbGVhdmVzOiAodikgLT5cbiAgICAgICAgcmVzID0gW11cbiAgICAgICAgZm9yIGwgaW4gQGxlYXZlcygpXG4gICAgICAgICAgICByZXMucHVzaCBAZGlzdCBsLCB2XG4gICAgICAgIHJldHVybiByZXNcblxuICAgIG5leHRfdmVydGljZXM6ICh2KSAtPlxuICAgICAgICByZXR1cm4gQHZpbmZvW0Byb290XS5iZnNbdl0uc3VidmVydGljZXNcblxuICAgIHByZXZpb3VzX3ZlcnRpY2VzOiAodikgLT5cbiAgICAgICAgcmVzID0gW11cbiAgICAgICAgcm9vdGJmcyA9IEB2aW5mb1tAcm9vdF0uYmZzXG4gICAgICAgIGZvciB1IGluIEB2ZXJ0aWNlc1xuICAgICAgICAgICAgaWYgdiBpbiByb290YmZzW3VdLnN1YnZlcnRpY2VzXG4gICAgICAgICAgICAgICAgcmVzLnB1c2ggdVxuICAgICAgICByZXR1cm4gcmVzXG5cbiAgICBpbnZhcmlhbnQzOiAoc2VwID0gJywgJykgLT5cbiAgICAgICAgcmVzID0ge31cbiAgICAgICAgZm9yIHYgaW4gQHZlcnRpY2VzXG4gICAgICAgICAgICB0ID0gW11cbiAgICAgICAgICAgIHRbMF0gPSBAZGlzdCB2XG4gICAgICAgICAgICB0WzFdID0gQHByZXZpb3VzX3ZlcnRpY2VzKHYpLmxlbmd0aFxuICAgICAgICAgICAgdFsyXSA9IEBuZXh0X3ZlcnRpY2VzKHYpLmxlbmd0aFxuICAgICAgICAgICAgdFszXSA9ICcoJyArIEBkaXN0c190b19sZWF2ZXModikuc29ydCgpLmpvaW4oc2VwKSArICcpJ1xuICAgICAgICAgICAgcmVzW3ZdID0gdC5qb2luIHNlcFxuICAgICAgICByZXR1cm4gcmVzXG5cbiAgICBpbnZhcmlhbnQzX2FzX3N0cjogLT5cbiAgICAgICAgQHVwZGF0ZSgpXG4gICAgICAgIHJldHVybiBfLnZhbHVlcyhAaW52YXJpYW50MygnLCcpKS5zb3J0KCkuam9pbiAnOydcblxuICAgIGNsZWFyOiAtPlxuICAgICAgICBAdmVydGljZXMgPSBbXVxuICAgICAgICBAbGlua3MgPSBbXVxuICAgICAgICBAbWFwID0ge31cbiAgICAgICAgQHZpbmZvID0ge30gIyBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGZvciB2ZXJ0ZXhcbiAgICAgICAgQGZyZWVuYW1lcyA9IFtdXG4gICAgICAgIEByb290ID0gbnVsbFxuICAgICAgICBAaXNfY2hhbmdlc19sb2NrID0gZmFsc2VcbiAgICAgICAgQGlzX3VwZGF0ZWQgPSBmYWxzZVxuICAgICAgICBAY2hhbmdlZCgpXG5cbiAgICAjID09PSBDSEFOR0VTID09PVxuICAgIG9uX2NoYW5nZTogKGNhbGxiYWNrKSAtPiBcbiAgICAgICAgQGNoYW5nZV9saXN0ZW5lcnMucHVzaCBjYWxsYmFja1xuXG4gICAgY2hhbmdlZDogLT4gXG4gICAgICAgIEBpc191cGRhdGVkID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIGlmIEBpc19jaGFuZ2VzX2xvY2tcbiAgICAgICAgZm9yIGNhbGxiYWNrIGluIEBjaGFuZ2VfbGlzdGVuZXJzXG4gICAgICAgICAgICBjYWxsYmFjayh0aGlzKVxuXG4gICAgbG9ja19jaGFuZ2VzOiAtPlxuICAgICAgICBAaXNfY2hhbmdlc19sb2NrID0gdHJ1ZVxuXG4gICAgdW5sb2NrX2NoYW5nZXM6IC0+XG4gICAgICAgIEBpc19jaGFuZ2VzX2xvY2sgPSBmYWxzZVxuXG4gICAgIyA9PT0gVkVSVElDRVMgPT09IFxuICAgIGdlbmVyYXRlX25hbWU6IC0+XG4gICAgICAgIEBmcmVlbmFtZXMuc29ydCAoYSwgYikgLT4gYSAtIGJcbiAgICAgICAgcmVzID0gXCJcIlxuICAgICAgICB3aGlsZSBAZnJlZW5hbWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgIHYgPSBcIlwiICsgQGZyZWVuYW1lcy5zaGlmdCgpXG4gICAgICAgICAgICByZXR1cm4gdiBpZiBub3QgQGlzX3ZlcnRleCB2XG4gICAgICAgIHJldHVybiBcIlwiICsgQGNvdW50X3ZlcnRpY2VzKClcblxuICAgIGNvdW50X3ZlcnRpY2VzOiAtPiBAdmVydGljZXMubGVuZ3RoXG5cbiAgICBpc192ZXJ0ZXg6IChuYW1lKSAtPlxuICAgICAgICByZXR1cm4gZmFsc2UgaWYgbm90IG5hbWU/XG4gICAgICAgIHJldHVybiBuYW1lIGluIEB2ZXJ0aWNlc1xuXG4gICAgZ2V0X3ZpbmZvOiAobmFtZSkgLT4gQHZpbmZvW25hbWVdXG5cbiAgICBzZXRfdmluZm86IChuYW1lLCBpbmZvKSAtPlxuICAgICAgICB1bmxlc3MgQHZpbmZvW25hbWVdP1xuICAgICAgICAgICAgQHZpbmZvW25hbWVdID0gaW5mb1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIEB2aW5mb1tuYW1lXVtrXSA9IHYgZm9yIGssdiBvZiBpbmZvIGlmIGluZm8/XG5cbiAgICBhZGRfdmVydGV4OiAobmFtZSwgaW5mbykgLT5cbiAgICAgICAgQHNldF92aW5mbyBuYW1lLCBpbmZvXG4gICAgICAgIHJldHVybiBpZiBAaXNfdmVydGV4IG5hbWVcbiAgICAgICAgQHZlcnRpY2VzLnB1c2ggbmFtZVxuICAgICAgICBAbWFwW25hbWVdID0ge31cbiAgICAgICAgaWYgbm90IEByb290P1xuICAgICAgICAgICAgQHJvb3QgPSBuYW1lXG4gICAgICAgIEBjaGFuZ2VkKClcblxuICAgIGRlbF92ZXJ0ZXg6IChuYW1lKSAtPlxuICAgICAgICByZXR1cm4gaWYgbm90IEBpc192ZXJ0ZXgobmFtZSlcblxuICAgICAgICBwcmV2X2xvY2tfc3RhdHVzID0gQGlzX2NoYW5nZXNfbG9ja1xuICAgICAgICBAbG9ja19jaGFuZ2VzKClcblxuICAgICAgICBfLnB1bGwgQHZlcnRpY2VzLCBuYW1lXG4gICAgICAgIGRlbGV0ZSBAdmluZm9bbmFtZV1cbiAgICAgICAgQGZyZWVuYW1lcy5wdXNoIHBhcnNlSW50KG5hbWUpXG4gICAgICAgIEBkZWxfbGlua3Nfd2l0aF92ZXJ0ZXggbmFtZVxuICAgICAgICBpZiBuYW1lID09IEByb290XG4gICAgICAgICAgICBAcm9vdCA9IGlmIEB2ZXJ0aWNlcy5sZW5ndGggPiAwIHRoZW4gQHZlcnRpY2VzWzBdIGVsc2UgbnVsbFxuXG4gICAgICAgIEBpc19jaGFuZ2VzX2xvY2sgPSBwcmV2X2xvY2tfc3RhdHVzXG4gICAgICAgIEBjaGFuZ2VkKClcblxuICAgICMgPT09IExJTktTID09PSBcbiAgICBjb3VudF9saW5rczogLT4gXG4gICAgICAgIHJldHVybiBAbGlua3MubGVuZ3RoXG5cbiAgICBfbWFrZV9saW5rOiAodjEsIHYyKSAtPlxuICAgICAgICBhcnIgPSBbdjEsIHYyXS5zb3J0KClcbiAgICAgICAgcmV0dXJuIHsgZnJvbTogYXJyWzBdLCB0bzogYXJyWzFdIH1cblxuICAgIGFkZF9saW5rOiAodjEsIHYyKSAtPlxuICAgICAgICByZXR1cm4gaWYgQGlzX2xpbmsodjEsIHYyKVxuICAgICAgICBAbGlua3MucHVzaCBAX21ha2VfbGluayh2MSwgdjIpXG4gICAgICAgIEBtYXBbdjFdW3YyXSA9IEBtYXBbdjJdW3YxXSA9IHRydWVcbiAgICAgICAgQGNoYW5nZWQoKVxuXG4gICAgZGVsX2xpbms6ICh2MSwgdjIpIC0+XG4gICAgICAgIHAgPSAobCkgLT4gKGwuZnJvbSA9PSB2MSBhbmQgbC50byA9PSB2Mikgb3IgKGwuZnJvbSA9PSB2MiBhbmQgbC50byA9PSB2MSlcbiAgICAgICAgQGRlbF9saW5rcCBwXG5cbiAgICBkZWxfbGlua3Nfd2l0aF92ZXJ0ZXg6ICh2KSAtPlxuICAgICAgICBwID0gKGwpIC0+IHYgaW4gXy52YWx1ZXMgbFxuICAgICAgICBAZGVsX2xpbmtwIHBcblxuICAgIGRlbF9saW5rX2Zyb21fbWFwOiAodjEsIHYyKSAtPlxuICAgICAgICBAbWFwW3YxXVt2Ml0gPSBAbWFwW3YyXVt2MV0gPSBmYWxzZVxuICAgICAgICBAY2hhbmdlZCgpXG5cbiAgICBkZWxfbGlua3A6IChwcmVkaWNhdGUpIC0+XG4gICAgICAgIHJlcyA9IFtdXG4gICAgICAgIGZvciBsIGluIEBsaW5rc1xuICAgICAgICAgICAgaWYgcHJlZGljYXRlIGxcbiAgICAgICAgICAgICAgICBAZGVsX2xpbmtfZnJvbV9tYXAgbC5mcm9tLCBsLnRvLCBmYWxzZVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJlcy5wdXNoIGxcbiAgICAgICAgQGxpbmtzID0gcmVzXG4gICAgICAgIEBjaGFuZ2VkKClcblxuICAgIGlzX2xpbms6ICh2MSwgdjIpIC0+XG4gICAgICAgIHJldHVybiAhIUBtYXBbdjFdW3YyXVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0dyYXBoLmNvZmZlZVxuICoqLyIsIlxuR3JhcGggPSByZXF1aXJlICcuL0dyYXBoJ1xuXG5cbiMjI1xuZXhhbXBsZSBmb3IgYnVpbGRlcjE6XG5vcHRpb25zXG4gICAgdmVydGljZXM6XG4gICAgICAgIDA6IHg6IDEwMCwgeTogMTAwXG4gICAgICAgIDE6IHg6IDUwLCB5OiA1MFxuICAgICAgICAyOiB4OiAxNTAsIHk6IDUwXG4gICAgbGlua3M6XG4gICAgICAgIDA6IFsxLCAyXVxuIyMjXG5tb2R1bGUuZXhwb3J0cy5cbmJ1aWxkZXIxID0gKG9wdGlvbnMpIC0+XG4gICAgZyA9IG5ldyBHcmFwaFxuICAgIGcuYWRkX3ZlcnRleCBcIlwiK25hbWUsIGluZm8gZm9yIG5hbWUsIGluZm8gb2Ygb3B0aW9ucy52ZXJ0aWNlc1xuICAgIGZvciBhLCBhcnIgb2Ygb3B0aW9ucy5saW5rc1xuICAgICAgICBmb3IgYiBpbiBhcnJcbiAgICAgICAgICAgIGcuYWRkX2xpbmsgXCJcIithLCBcIlwiK2JcbiAgICByZXR1cm4gZ1xuXG5tb2R1bGUuZXhwb3J0cy5cbm1ha2Vfb3B0aW9uc19mb3JfYnVpbGRlcjEgPSAoZ3JhcGgpIC0+XG4gICAgdmVydGljZXMgPSBfLmNsb25lIGdyYXBoLnZpbmZvXG4gICAgbGlua3MgPSB7fVxuICAgIGZvciB7ZnJvbSwgdG99IGluIGdyYXBoLmxpbmtzXG4gICAgICAgIGxpbmtzW2Zyb21dID0gW10gaWYgbm90IGxpbmtzW2Zyb21dP1xuICAgICAgICBsaW5rc1tmcm9tXS5wdXNoIHRvXG4gICAgcmV0dXJuIHt2ZXJ0aWNlcywgbGlua3N9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0dyYXBoQnVpbGRlci5jb2ZmZWVcbiAqKi8iLCJcbkdyYXBoID0gcmVxdWlyZSAnLi9HcmFwaCdcbnV0aWxzID0gcmVxdWlyZSAnLi91dGlscydcbkNhbnZhc0dyYXBoQ29uc3RydWN0b3IgPSByZXF1aXJlICcuL0NhbnZhc0dyYXBoQ29uc3RydWN0b3InXG5HcmFwaEluZm8gPSByZXF1aXJlICcuL0dyYXBoSW5mbydcblxuY291bnRlciA9IDBcblxubW9kdWxlLmV4cG9ydHMgPVxuY2xhc3MgR3JhcGhUYWJsZVxuICAgIGNvbnN0cnVjdG9yOiAoQGNvbnRhaW5lciwgQGdyYXBoID0gbmV3IEdyYXBoKSAtPlxuICAgICAgICBAaWQgPSBcImd0XCIgKyBjb3VudGVyKytcbiAgICAgICAgZGl2X2Zvcl9jb25zdHJ1Y3RvciA9ICQoXCI8ZGl2PlwiKS5hdHRyKCdpZCcsIEBpZCArIFwiZ2JcIikuZ2V0IDBcbiAgICAgICAgZGl2X2Zvcl9ncmFwaF9pbmZvID0gJChcIjxkaXY+XCIpLmF0dHIoJ2lkJywgQGlkICsgXCJpbmZvXCIpLmdldCAwXG5cbiAgICAgICAgQGVsID0gdXRpbHMubWFrZV90YWxiZSBbXG4gICAgICAgICAgICBbJ9Cg0LjRgdGD0L3QvtC6INCz0YDQsNGE0LAnLCAn0JjQvdGE0L7RgNC80LDRhtC40Y8g0L4g0LPRgNCw0YTQtSddLCBcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBkaXZfZm9yX2NvbnN0cnVjdG9yLCBkaXZfZm9yX2dyYXBoX2luZm9cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSwgeyBoZWFkZXI6IHRydWUgfVxuICAgICAgICAkKEBjb250YWluZXIpLmFwcGVuZCBAZWxcblxuICAgICAgICBAZ2IgPSBuZXcgQ2FudmFzR3JhcGhDb25zdHJ1Y3RvciBkaXZfZm9yX2NvbnN0cnVjdG9yLCBAZ3JhcGhcbiAgICAgICAgQGdpID0gbmV3IEdyYXBoSW5mbyBkaXZfZm9yX2dyYXBoX2luZm8sIEBncmFwaFxuXG4gICAgdXBkYXRlOiAtPlxuICAgICAgICBAZ2IudXBkYXRlKCkgaWYgQGdiLnVwZGF0ZT9cblxuICAgIHJlbmRlcjogLT5cbiAgICAgICAgQGdiLnJlbmRlcigpXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vR3JhcGhUYWJsZS5jb2ZmZWVcbiAqKi8iLCJcblxuY291bnRlciA9IDBcblxuXG5tb2R1bGUuZXhwb3J0cyA9XG5jbGFzcyBHcmFwaEluZm9cbiAgICBjb25zdHJ1Y3RvcjogKEBjb250YWluZXIsIEBncmFwaCA9IG5ldyBHcmFwaCkgLT5cbiAgICAgICAgQGNvbnRhaW5lciA9ICQoQGNvbnRhaW5lcikuZ2V0IDAgaWYgXy5pc1N0cmluZyBAY29udGFpbmVyXG4gICAgICAgIEBpZCA9IFwiZ3JhcGhpbmZvXCIgKyBjb3VudGVyKytcbiAgICAgICAgQGVsID0gJChcIjxkaXY+XCIpLmdldCAwXG4gICAgICAgICQoQGNvbnRhaW5lcikuYXBwZW5kIEBlbFxuICAgICAgICBAaW5mbyA9XG4gICAgICAgICAgICBcImxlYXZlc1wiOlxuICAgICAgICAgICAgICAgIHRpdGxlOiBcItCb0LjRgdGC0YzRjzpcIlxuICAgICAgICAgICAgICAgIGZ1bmM6ID0+XG4gICAgICAgICAgICAgICAgICAgIEBncmFwaC5sZWF2ZXMoKS5qb2luICcsICdcbiAgICAgICAgICAgIFwiY291bnRfdmVydGljZXNcIjpcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLQmtC+0LvQuNGH0LXRgdGC0LLQviDQstC10YDRiNC40L06XCIsXG4gICAgICAgICAgICAgICAgZnVuYzogPT4gQGdyYXBoLmNvdW50X3ZlcnRpY2VzKClcbiAgICAgICAgICAgIFwiY291bnRfbGlua3NcIjpcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLQmtC+0LvQuNGH0LXRgdGC0LLQviDRgNC10LHQtdGAOlwiLFxuICAgICAgICAgICAgICAgIGZ1bmM6ID0+IEBncmFwaC5jb3VudF9saW5rcygpXG4gICAgICAgICAgICBcImludmFyaWFudDNcIjpcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLQmNC90LLQsNGA0LjQsNC90YIgMzpcIlxuICAgICAgICAgICAgICAgIGZ1bmM6ID0+IEBpbnZhcmlhbnQzKClcbiAgICAgICAgICAgIFxuICAgICAgICBmb3IgaWQsbyBvZiBAaW5mb1xuICAgICAgICAgICAgJChAZWwpLmFwcGVuZCgkKFwiPGRpdj48dT4je28udGl0bGV9PC91PiA8c3BhbiBpZD0je0BpZCtpZH0+PC9zcGFuPjwvZGl2PlwiKSlcbiAgICAgICAgQGdyYXBoLm9uX2NoYW5nZSA9PiBAdXBkYXRlX2luZm8oKVxuICAgICAgICBAdXBkYXRlX2luZm8oKVxuXG4gICAgICAgIEBjaGFuZ2VfbGlzdGVuZXJzID0gW11cbiAgICAgICAgQHJlcyA9IFwiXCJcblxuICAgICMgPT09PT0gSU5GTyA9PT09PVxuICAgIGludmFyaWFudDM6IC0+XG4gICAgICAgIHJlcyA9IEpTT04uc3RyaW5naWZ5IEBncmFwaC5pbnZhcmlhbnQzKCksIG51bGwsIDJcbiAgICAgICAgcmV0dXJuICQoXCI8cHJlPiN7cmVzfTwvcHJlPlwiKVxuXG4gICAgdXBkYXRlX2luZm86IC0+XG4gICAgICAgIEBncmFwaC51cGRhdGUoKVxuICAgICAgICBmb3IgaWQsIG8gb2YgQGluZm9cbiAgICAgICAgICAgIGlkID0gQGlkICsgaWRcbiAgICAgICAgICAgIHJlcyA9IG8uZnVuYygpXG4gICAgICAgICAgICAkKCcjJytpZCkuaHRtbCBcIlwiXG4gICAgICAgICAgICAkKCcjJytpZCkuYXBwZW5kIHJlc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaEluZm8uY29mZmVlXG4gKiovIiwiXG5tb2R1bGUuZXhwb3J0cyA9XG5jbGFzcyBHcmFwaEluZm9cblxuICAgIGNvbnN0cnVjdG9yOiAoQGcxLCBAZzIsIEBlbDEsIEBlbDIsIEBnbG9iYWxfcmVzKSAtPlxuICAgICAgICBAdXBkYXRlKClcbiAgICAgICAgQGcxLm9uX2NoYW5nZSA9PiBAdXBkYXRlKClcbiAgICAgICAgQGcyLm9uX2NoYW5nZSA9PiBAdXBkYXRlKClcblxuICAgIHVwZGF0ZTogLT5cbiAgICAgICAgczEgPSBAZzEuaW52YXJpYW50M19hc19zdHIoKVxuICAgICAgICBzMiA9IEBnMi5pbnZhcmlhbnQzX2FzX3N0cigpXG4gICAgICAgICQoQGVsMSkuaHRtbCBzMVxuICAgICAgICAkKEBlbDIpLmh0bWwgczJcbiAgICAgICAgY2xyID0gXCJyZWRcIlxuICAgICAgICBtc2cgPSBcItCY0L3QstGA0LjQsNC90YLRiyDQndCVINGB0L7QstC/0LDQtNCw0Y7RglwiXG4gICAgICAgIGlmIHMxID09IHMyXG4gICAgICAgICAgICBjbHIgPSBcImdyZWVuXCJcbiAgICAgICAgICAgIG1zZyA9IFwi0JjQvdCy0YDQuNCw0L3RgtGLINGB0L7QstC/0LDQtNCw0Y7RglwiXG4gICAgICAgICQoQGdsb2JhbF9yZXMpLmh0bWwgXCI8Zm9udCBjb2xvcj0je2Nscn0+I3ttc2d9PC9mb250PlwiXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vUmVzdWx0LmNvZmZlZVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=