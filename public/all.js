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
	          if (_this.mouse.target === vname) {
	            return;
	          }
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
	        var _print, args, ch, cmd, name, v, vname;
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
	                return _print("Листья: " + _this.graph.leaves(args[1]));
	              case "next":
	                v = args[1];
	                if (v == null) {
	                  return;
	                }
	                return _print(("Вершины следующие за вершиной '" + v + "': ") + _this.graph.next_vertices(v));
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
	      res[u] = {
	        subvertices: [],
	        dist: 0
	      };
	    }
	    res[s].dist = 0;
	    res[s].subvertices = [];
	    while (q.length > 0) {
	      v = q.shift();
	      ref1 = this.vertices;
	      for (j = 0, len1 = ref1.length; j < len1; j++) {
	        u = ref1[j];
	        if (used[u] && this.is_link(v, u) && res[u].dist > res[v].dist) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzA0YjRlOWE1ZmY0YjJhZjUxYTMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vQ2FudmFzR3JhcGhDb25zdHJ1Y3Rvci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMuY29mZmVlIiwid2VicGFjazovLy8uL0dyYXBoRHJhd2VyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vR3JhcGhCdWlsZGVyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaFRhYmxlLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaEluZm8uY29mZmVlIiwid2VicGFjazovLy8uL1Jlc3VsdC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNyQ0E7O0FBQUEsMEJBQXlCLG9CQUFRLENBQVI7O0FBQ3pCLGdCQUFlLG9CQUFRLENBQVI7O0FBQ2YsY0FBYSxvQkFBUSxDQUFSOztBQUNiLFVBQVMsb0JBQVEsQ0FBUjs7QUFHVCxvQkFBbUI7O0FBR25CLFlBQVc7QUFDUDtHQUFBLE9BQU8sSUFBSSxDQUFDLEdBQUw7R0FDUCxLQUFLO0dBQ0wsT0FBTztBQUNIO0tBQUEsU0FBUyxJQUFJLENBQUMsR0FBTCxLQUFhO0tBQ3RCLE9BQU8sSUFBSSxDQUFDLEdBQUw7S0FDUCxTQUFTLElBQUksQ0FBQyxHQUFMLENBQVMsTUFBVCxFQUFpQixJQUFqQjtBQUNULFlBQU0sU0FBUyxDQUFmO0FBQ0k7O1NBQ0ksSUFBaUIsa0JBQWpCO1dBQUEsR0FBRyxDQUFDLE1BQUos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QUMsSUFBSCxDQUFPLENBQUMsSUFBUixDQUFhLEVBQWI7S0FDQSxFQUFFLElBQUMsSUFBSCxDQUFPLENBQUMsSUFBUixDQUFhLEVBQWI7S0FDQSxNQUFNO0tBQ04sTUFBTTtLQUNOLElBQUcsT0FBTSxFQUFUO09BQ0ksTUFBTTtPQUNOLE1BQU0sc0JBRlY7O1lBR0EsRUFBRSxJQUFDLFdBQUgsQ0FBYyxDQUFDLElBQWYsQ0FBb0IsaUJBQWUsR0FBZixHQUFtQixHQUFuQixHQUFzQixHQUF0QixHQUEwQixTQUE5QztHQVZJIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMzA0YjRlOWE1ZmY0YjJhZjUxYTNcbiAqKi8iLCJcbkNhbnZhc0dyYXBoQ29uc3RydWN0b3IgPSByZXF1aXJlICcuL0NhbnZhc0dyYXBoQ29uc3RydWN0b3InXG5HcmFwaEJ1aWxkZXIgPSByZXF1aXJlICcuL0dyYXBoQnVpbGRlcidcbkdyYXBoVGFibGUgPSByZXF1aXJlICcuL0dyYXBoVGFibGUnXG5SZXN1bHQgPSByZXF1aXJlICcuL1Jlc3VsdCdcblxuXG5tYWlubG9vcF9vYmplY3RzID0gW11cblxuXG5tYWlubG9vcCA9IC0+XG4gICAgdGltZSA9IERhdGUubm93KClcbiAgICBkdCA9IDE0XG4gICAgc3RlcCA9IC0+XG4gICAgICAgIGN1cl9kdCA9IERhdGUubm93KCkgLSB0aW1lXG4gICAgICAgIHRpbWUgPSBEYXRlLm5vdygpXG4gICAgICAgIGN1cl9kdCA9IE1hdGgubWluKGN1cl9kdCwgMTAwMClcbiAgICAgICAgd2hpbGUgY3VyX2R0ID4gMFxuICAgICAgICAgICAgZm9yIG9iaiBpbiBtYWlubG9vcF9vYmplY3RzXG4gICAgICAgICAgICAgICAgb2JqLnVwZGF0ZSBkdCBpZiBvYmoudXBkYXRlPyBcbiAgICAgICAgICAgIGN1cl9kdCAtPSBkdFxuICAgICAgICBmb3Igb2JqIGluIG1haW5sb29wX29iamVjdHNcbiAgICAgICAgICAgIG9iai5yZW5kZXIoKSBpZiBvYmoucmVuZGVyP1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgc3RlcFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBzdGVwXG5cbm1haW5sb29wKClcblxuXG5cbiMgSlNPTi5zdHJpbmdpZnkoR3JhcGhCdWlsZGVyLm1ha2Vfb3B0aW9uc19mb3JfYnVpbGRlcjEoZ2IxLmdyYXBoKSwgbnVsbClcbmcxID0gR3JhcGhCdWlsZGVyLmJ1aWxkZXIxIHtcInZlcnRpY2VzXCI6e1wiMFwiOntcInhcIjoxOTgsXCJ5XCI6Mzc1LjE4NzV9LFwiMVwiOntcInhcIjo5MyxcInlcIjozMjYuMTg3NX0sXCIyXCI6e1wieFwiOjMwMixcInlcIjozMzguMTg3NX0sXCIzXCI6e1wieFwiOjQzLFwieVwiOjI1MC4xODc1LFwibmFtZVwiOlwiM1wifSxcIjRcIjp7XCJ4XCI6MTU0LFwieVwiOjI0Ny4xODc1LFwibmFtZVwiOlwiNFwifSxcIjVcIjp7XCJ4XCI6MzAwLFwieVwiOjI3Mi4xODc1LFwibmFtZVwiOlwiNVwifSxcIjZcIjp7XCJ4XCI6MjYxLFwieVwiOjIwOC4xODc1LFwibmFtZVwiOlwiNlwifSxcIjdcIjp7XCJ4XCI6MzU0LFwieVwiOjIyOS4xODc1LFwibmFtZVwiOlwiN1wifSxcIjhcIjp7XCJ4XCI6MTAzLFwieVwiOjE3MC4xODc1LFwibmFtZVwiOlwiOFwifSxcIjlcIjp7XCJ4XCI6MzcsXCJ5XCI6NTguMTg3NSxcIm5hbWVcIjpcIjlcIn0sXCIxMFwiOntcInhcIjoxMTMsXCJ5XCI6NjIuMTg3NSxcIm5hbWVcIjpcIjEwXCJ9LFwiMTFcIjp7XCJ4XCI6MTk0LFwieVwiOjYwLjE4NzUsXCJuYW1lXCI6XCIxMVwifSxcIjEyXCI6e1wieFwiOjMyNyxcInlcIjoxODMuMTg3NSxcIm5hbWVcIjpcIjEyXCJ9LFwiMTNcIjp7XCJ4XCI6MzYxLFwieVwiOjE0NS4xODc1LFwibmFtZVwiOlwiMTNcIn0sXCIxNFwiOntcInhcIjozMjAsXCJ5XCI6MTEzLjE4NzUsXCJuYW1lXCI6XCIxNFwifSxcIjE1XCI6e1wieFwiOjM1NyxcInlcIjo3Ny4xODc1LFwibmFtZVwiOlwiMTVcIn0sXCIxNlwiOntcInhcIjozMTcsXCJ5XCI6NDYuMTg3NSxcIm5hbWVcIjpcIjE2XCJ9fSxcImxpbmtzXCI6e1wiMFwiOltcIjFcIixcIjJcIl0sXCIxXCI6W1wiM1wiLFwiNFwiXSxcIjJcIjpbXCI1XCJdLFwiM1wiOltcIjhcIl0sXCI1XCI6W1wiNlwiLFwiN1wiXSxcIjhcIjpbXCI5XCJdLFwiMTBcIjpbXCI4XCJdLFwiMTFcIjpbXCI4XCJdLFwiMTJcIjpbXCI3XCIsXCIxM1wiXSxcIjEzXCI6W1wiMTRcIl0sXCIxNFwiOltcIjE1XCJdLFwiMTVcIjpbXCIxNlwiXX19XG5nMiA9IEdyYXBoQnVpbGRlci5idWlsZGVyMSB7XCJ2ZXJ0aWNlc1wiOntcIjBcIjp7XCJ4XCI6MTkxLFwieVwiOjM4MC4zNzUsXCJuYW1lXCI6XCIwXCJ9LFwiMVwiOntcInhcIjo1MCxcInlcIjozMjAuMzc1LFwibmFtZVwiOlwiMVwifSxcIjJcIjp7XCJ4XCI6MzA5LFwieVwiOjMwMy4zNzUsXCJuYW1lXCI6XCIyXCJ9LFwiM1wiOntcInhcIjo2OCxcInlcIjoxOTAuMzc1LFwibmFtZVwiOlwiM1wifSxcIjRcIjp7XCJ4XCI6MzA2LFwieVwiOjE4MC4zNzUsXCJuYW1lXCI6XCI0XCJ9LFwiNVwiOntcInhcIjo2NSxcInlcIjo3MS4zNzUsXCJuYW1lXCI6XCI1XCJ9LFwiNlwiOntcInhcIjoxODQsXCJ5XCI6MTg3LjM3NSxcIm5hbWVcIjpcIjZcIn0sXCI3XCI6e1wieFwiOjI2NixcInlcIjo4OS4zNzUsXCJuYW1lXCI6XCI3XCJ9LFwiOFwiOntcInhcIjozNTIsXCJ5XCI6ODIuMzc1LFwibmFtZVwiOlwiOFwifSxcIjlcIjp7XCJ4XCI6MTc3LFwieVwiOjI5Ny4zNzUsXCJuYW1lXCI6XCI5XCJ9fSxcImxpbmtzXCI6e1wiMFwiOltcIjJcIixcIjFcIixcIjlcIl0sXCIxXCI6W1wiM1wiXSxcIjJcIjpbXCI0XCJdLFwiM1wiOltcIjVcIl0sXCI0XCI6W1wiN1wiLFwiOFwiXSxcIjZcIjpbXCI5XCJdfX1cblxuZ3QgPSBbbmV3IEdyYXBoVGFibGUoXCIjZ3QxXCIsIGcxKSwgbmV3IEdyYXBoVGFibGUgXCIjZ3QyXCIsIGcyXVxuciA9IG5ldyBSZXN1bHQgZzEsIGcyLCBcIiNpbnYzZzFcIiwgXCIjaW52M2cyXCIsIFwiI2dsb2JhbF9yZXNcIlxubWFpbmxvb3Bfb2JqZWN0cyA9IG1haW5sb29wX29iamVjdHMuY29uY2F0IGd0XG5cblxucHJnID0gKGkpIC0+IGNvbnNvbGUubG9nIEpTT04uc3RyaW5naWZ5KEdyYXBoQnVpbGRlci5tYWtlX29wdGlvbnNfZm9yX2J1aWxkZXIxKGd0W2ldLmdyYXBoKSlcblxuXG5cbl8uZGVmYXVsdHMgd2luZG93LCB7R3JhcGhCdWlsZGVyLCBwcmcsIGd0fVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tYWluLmNvZmZlZVxuICoqLyIsIlxudXRpbHMgPSByZXF1aXJlICcuL3V0aWxzJ1xuR3JhcGhEcmF3ZXIgPSByZXF1aXJlICcuL0dyYXBoRHJhd2VyJ1xuR3JhcGggPSByZXF1aXJlICcuL0dyYXBoJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFxuY2xhc3MgQ2FudmFzR3JhcGhDb25zdHJ1Y3RvclxuXG4gICAgY29uc3RydWN0b3I6IChAY29udGFpbmVyLCBAZ3JhcGggPSBuZXcgR3JhcGgpIC0+XG4gICAgICAgIEBjYW4gPSAkKFwiPGNhbnZhcz5cIikuZ2V0IDBcbiAgICAgICAgQGN0eCA9IEBjYW4uZ2V0Q29udGV4dCAnMmQnXG4gICAgICAgIEBjYW4ud2lkdGggPSBAY2FuLmhlaWdodCA9IDQwMFxuICAgICAgICBAbW91c2UgPSB7IFxuICAgICAgICAgICAgeDogMCwgeTogMCAjINGC0LXQutGD0YnQuNC1INC60L7QvtGA0LTQuNC90LDRgtGLINC80YvRiNC4INC90LDQtCBAY2FuXG4gICAgICAgICAgICB0YXJnZXQ6IG51bGwgIyDQuNC80Y8g0LLQtdGA0YjQuNC90Ysg0L3QsNC0INC60L7RgtC+0YDQvtC5INC/0YDQvtC40LfQstC+0LTQuNGC0YHRjyDQvdC10LrQvtGC0L7RgNC+0LUg0LTQtdC50YHRgtCy0LjQtVxuICAgICAgICB9XG4gICAgICAgIEBmb2N1cyA9IGZhbHNlXG4gICAgICAgIEBoYW5kbGVfZXZlbnRzKClcbiAgICAgICAgJChAY29udGFpbmVyKS5hcHBlbmQgQGNhblxuICAgICAgICBAZ3JhcGhfZHJhd2VyID0gbmV3IEdyYXBoRHJhd2VyIEBncmFwaCwgQGN0eFxuXG4gICAgdXBkYXRlX21vdXNlOiAoZSkgLT5cbiAgICAgICAgcG9zID0gdXRpbHMuZ2V0X21vdXNlcG9zX2luX2VsZW1lbnQgQGNhbiwgZVxuICAgICAgICBAbW91c2UueCA9IHBvcy54XG4gICAgICAgIEBtb3VzZS55ID0gcG9zLnlcblxuICAgIGhhbmRsZV9ldmVudHM6IC0+XG4gICAgICAgICQoQGNhbikubW91c2VvdXQgPT4gQGZvY3VzID0gZmFsc2VcbiAgICAgICAgJChAY2FuKS5tb3VzZW92ZXIgPT4gQGZvY3VzID0gdHJ1ZVxuICAgICAgICBcbiAgICAgICAgJChAY2FuKS5tb3VzZW1vdmUgKGUpID0+XG4gICAgICAgICAgICBAdXBkYXRlX21vdXNlIGVcbiAgICAgICAgICAgIGlmIEBtb3VzZS50YXJnZXRcbiAgICAgICAgICAgICAgICBpZiBAbW91c2UuZHJhZ3R5cGUgPT0gXCJtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4X25hbWUgPSBAbW91c2UudGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIEBncmFwaC5zZXRfdmluZm8gdmVydGV4X25hbWUsIHV0aWxzLnZlYzIoQG1vdXNlLngsIEBtb3VzZS55KVxuICAgICAgICAgICAgICAgIGlmIEBtb3VzZS5kcmFndHlwZSA9PSBcImxpbmtcIlxuICAgICAgICAgICAgICAgICAgICBAbW91c2UubGlua2VuZCA9IF8uY2xvbmUgdXRpbHMudmVjMiBAbW91c2UueCwgQG1vdXNlLnlcblxuICAgICAgICAkKEBjYW4pLm1vdXNlZG93biAoZSkgPT5cbiAgICAgICAgICAgIHZuYW1lID0gQGdyYXBoX2RyYXdlci5nZXRfdmVydGV4X2J5eHkgQG1vdXNlXG4gICAgICAgICAgICBpZiB2bmFtZT8gYW5kIEBtb3VzZS50YXJnZXQ/IGFuZCBAbW91c2UuZHJhZ3R5cGUgPT0gXCJsaW5rXCJcbiAgICAgICAgICAgICAgICByZXR1cm4gaWYgQG1vdXNlLnRhcmdldCA9PSB2bmFtZVxuICAgICAgICAgICAgICAgIEBncmFwaC5hZGRfbGluayBAbW91c2UudGFyZ2V0LCB2bmFtZVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgQG1vdXNlLnRhcmdldCA9IHZuYW1lXG4gICAgICAgICAgICBAbW91c2UuZHJhZ3R5cGUgPSBcIm1vdmVcIlxuXG4gICAgICAgICQoQGNhbikubW91c2V1cCAoZSkgPT5cbiAgICAgICAgICAgIEBtb3VzZS50YXJnZXQgPSBudWxsXG4gICAgICAgICAgICBAbW91c2UuZHJhZ3R5cGUgPSBudWxsXG5cbiAgICAgICAgJChkb2N1bWVudCkua2V5ZG93biAoZSkgPT5cbiAgICAgICAgICAgIHJldHVybiB1bmxlc3MgQGZvY3VzXG4gICAgICAgICAgICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICBzd2l0Y2ggY2hcbiAgICAgICAgICAgICAgICAjIFNldCBuZXcgcm9vdFxuICAgICAgICAgICAgICAgIHdoZW4gJ3InXG4gICAgICAgICAgICAgICAgICAgIHZuYW1lID0gQGdyYXBoX2RyYXdlci5nZXRfdmVydGV4X2J5eHkgQG1vdXNlXG4gICAgICAgICAgICAgICAgICAgIEBncmFwaC5zZXRfcm9vdCB2bmFtZVxuXG4gICAgICAgICAgICAgICAgIyBBZGQgdmVydGV4XG4gICAgICAgICAgICAgICAgd2hlbiAndidcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IEBncmFwaC5nZW5lcmF0ZV9uYW1lKClcbiAgICAgICAgICAgICAgICAgICAgQGdyYXBoLmFkZF92ZXJ0ZXggbmFtZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogQG1vdXNlLngsIHk6IEBtb3VzZS55LCBuYW1lXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICMgUXVlcnkgZm9yIGdyYXBoXG4gICAgICAgICAgICAgICAgd2hlbiAncSdcbiAgICAgICAgICAgICAgICAgICAgY21kID0gcHJvbXB0KFwi0JLQstC10LTQuNGC0LUg0LrQvtC80LDQvdC00YNcIilcbiAgICAgICAgICAgICAgICAgICAgYXJncyA9IF8ucHVsbCBjbWQuc3BsaXQoL1xccy8pLCAnJ1xuICAgICAgICAgICAgICAgICAgICBfcHJpbnQgPSAocykgLT4gXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyBzXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCBzXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCBhcmdzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gXCJkaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBpZiBhcmdzLmxlbmd0aCA8IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcHJpbnQgXCLQoNCw0YHRgdGC0L7Rj9C90LjQtSDQvNC10LbQtNGDINCy0LXRgNGI0LjQvdCw0LzQuDogXCIgKyBAZ3JhcGguZGlzdChhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVuIFwibGVhdmVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcHJpbnQgXCLQm9C40YHRgtGM0Y86IFwiICsgQGdyYXBoLmxlYXZlcyBhcmdzWzFdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gXCJuZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gYXJnc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpZiBub3Qgdj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcHJpbnQgXCLQktC10YDRiNC40L3RiyDRgdC70LXQtNGD0Y7RidC40LUg0LfQsCDQstC10YDRiNC40L3QvtC5ICcje3Z9JzogXCIgKyBAZ3JhcGgubmV4dF92ZXJ0aWNlcyB2XG5cbiAgICAgICAgICAgICAgICAjIERlbGV0ZSB2ZXJ0ZXhcbiAgICAgICAgICAgICAgICB3aGVuICdkJ1xuICAgICAgICAgICAgICAgICAgICBpZiBlLnNoaWZ0S2V5XG4gICAgICAgICAgICAgICAgICAgICAgICBAZ3JhcGguY2xlYXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHZuYW1lID0gQGdyYXBoX2RyYXdlci5nZXRfdmVydGV4X2J5eHkgQG1vdXNlXG4gICAgICAgICAgICAgICAgICAgIEBncmFwaC5kZWxfdmVydGV4IHZuYW1lXG5cbiAgICAgICAgICAgICAgICAjIEFkZCBsaW5rXG4gICAgICAgICAgICAgICAgd2hlbiAnbCdcbiAgICAgICAgICAgICAgICAgICAgdm5hbWUgPSBAZ3JhcGhfZHJhd2VyLmdldF92ZXJ0ZXhfYnl4eSBAbW91c2VcbiAgICAgICAgICAgICAgICAgICAgQG1vdXNlLnRhcmdldCA9IHZuYW1lXG4gICAgICAgICAgICAgICAgICAgIEBtb3VzZS5kcmFndHlwZSA9IFwibGlua1wiXG5cbiAgICAgICAgICAgICAgICAjIFByaW50IG90aGVyIGluZm9cbiAgICAgICAgICAgICAgICB3aGVuICcxJ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyBAbW91c2VcblxuICAgIHVwZGF0ZTogKGR0KSAtPlxuXG4gICAgZHJhd19kcmFnbGluazogLT5cbiAgICAgICAgaWYgQG1vdXNlLnRhcmdldD8gYW5kIEBtb3VzZS5kcmFndHlwZSA9PSBcImxpbmtcIiBhbmQgQG1vdXNlLmxpbmtlbmQ/XG4gICAgICAgICAgICB2ID0gQGdyYXBoLmdldF92aW5mbyBAbW91c2UudGFyZ2V0XG4gICAgICAgICAgICB1dGlscy5kcmF3X2xpbmUgQGN0eCwgdiwgQG1vdXNlXG5cbiAgICByZW5kZXI6IC0+XG4gICAgICAgIEBjdHguY2xlYXJSZWN0IDAsIDAsIEBjYW4ud2lkdGgsIEBjYW4uaGVpZ2h0XG4gICAgICAgIEBkcmF3X2RyYWdsaW5rKClcbiAgICAgICAgQGdyYXBoX2RyYXdlci5yZW5kZXIoKVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NhbnZhc0dyYXBoQ29uc3RydWN0b3IuY29mZmVlXG4gKiovIiwiXG4jID09PT09IG1hdGhzIHV0aWxzID09PT09XG5kaXN0ID0gKGEsIGIpIC0+IE1hdGguc3FydChNYXRoLnBvdyhhLnggLSBiLngsIDIpICsgTWF0aC5wb3coYS55IC0gYi55LCAyKSlcbnZlYzIgPSAoeCwgeSkgLT4ge3gsIHl9XG5cbiMgPT09PT0gdXRpbHMgZm9yIGh0bWwgZWxlbWVudHMgPT09PT0gXG5nZXRfbW91c2Vwb3NfaW5fZWxlbWVudCA9IChlbCwgZSkgLT5cbiAgICBvZmZzZXQgPSAkKGVsKS5vZmZzZXQoKVxuICAgIHJldHVybiB7IFxuICAgICAgICB4OiBlLnBhZ2VYIC0gb2Zmc2V0LmxlZnQsIFxuICAgICAgICB5OiBlLnBhZ2VZIC0gb2Zmc2V0LnRvcCBcbiAgICB9XG5cbiMgY3JlYXRlIGh0bWwgdGFibGUgYnkganMgbWF0cml4XG4jIG86IHsgaGVhZGVyOiBib29sIH1cbm1ha2VfdGFsYmUgPSAoYXJyLCBvID0ge30pIC0+XG4gICAgdGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAndGFibGUnXG4gICAgZm9yIGxpbmUsIGkgaW4gYXJyXG4gICAgICAgIHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAndHInXG4gICAgICAgIGZvciB2YWwsIGogaW4gbGluZVxuICAgICAgICAgICAgdCA9IGlmIG8uaGVhZGVyIGFuZCBpID09IDAgdGhlbiAndGgnIGVsc2UgJ3RkJ1xuICAgICAgICAgICAgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgdFxuICAgICAgICAgICAgdmFsID0gYXJyW2ldW2pdXG4gICAgICAgICAgICBpZiBfLmlzU3RyaW5nIHZhbFxuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gdmFsXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCB2YWxcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkIGNlbGxcbiAgICAgICAgdGJsLmFwcGVuZENoaWxkIHRyXG4gICAgcmV0dXJuIHRibFxuXG4jID09PT09IEdyYXBoaWNzID09PT09XG5kcmF3X2xpbmUgPSAoY3R4LCBhLCBiKSAtPlxuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIGN0eC5tb3ZlVG8gYS54LCBhLnlcbiAgICBjdHgubGluZVRvIGIueCwgYi55XG4gICAgY3R4LnN0cm9rZSgpXG5cbmRyYXdfY2lyY2xlX3dpdGhfdGV4dCA9IChjdHgsIHgsIHksIHIsIHRleHQsIG8pIC0+XG4gICAgY3R4LmZvbnQgPSBcIiN7by5mb250c3p9cHggI3tvLmZvbnRGYW1pbHl9XCJcbiAgICBjdHguYmVnaW5QYXRoKClcbiAgICBjdHguYXJjIHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJXG4gICAgY3R4LmZpbGxTdHlsZSA9IG8uY2lyY2xlQ29sb3JcbiAgICBjdHguZmlsbCgpXG4gICAgY3R4LmZpbGxTdHlsZSA9IG8udGV4dENvbG9yXG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInXG4gICAgY3R4LnRleHRCYXNlTGluZSA9ICdtaWRkbGUnXG4gICAgY3R4LmZpbGxUZXh0IHRleHQsIHgsIHkgKyBvLmZvbnRzei80XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgIyBtYXRoIHV0aWxzXG4gICAgZGlzdCwgdmVjMlxuICAgICMgaHRtbCB1dGlsc1xuICAgIGdldF9tb3VzZXBvc19pbl9lbGVtZW50LCBtYWtlX3RhbGJlXG4gICAgIyBHcmFwaGljc1xuICAgIGRyYXdfbGluZSwgZHJhd19jaXJjbGVfd2l0aF90ZXh0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3V0aWxzLmNvZmZlZVxuICoqLyIsIlxudXRpbHMgPSByZXF1aXJlICcuL3V0aWxzJ1xuXG5cbkZPTlRTWiA9IDIwXG5SQURJSVVTID0gRk9OVFNaXG5cblxubW9kdWxlLmV4cG9ydHMgPSBcbmNsYXNzIEdyYXBoRHJhd2VyXG4gICAgXG4gICAgY29uc3RydWN0b3I6IChAZ3JhcGgsIEBjdHgpIC0+XG5cbiAgICAjID09PSBWRVJUSUNFUyA9PT0gXG4gICAgZ2V0X3ZlcnRleF9ieXh5OiAocG9zKSAtPlxuICAgICAgICBmb3IgbmFtZSwgaW5mbyBvZiBAZ3JhcGgudmluZm9cbiAgICAgICAgICAgIHJldHVybiBuYW1lIGlmIHV0aWxzLmRpc3QocG9zLCBpbmZvKSA8IFJBRElJVVNcblxuICAgIG1vdmVfdmVydGV4OiAodmVydGV4X25hbWUsIG5ld19wb3MpIC0+XG4gICAgICAgIEBncmFwaC5zZXRfdmluZm8gdmVydGV4X25hbWUsIG5ld19wb3NcblxuICAgICMgPT09IFJFTkRFUiA9PT1cbiAgICBkcmF3X2xpbmtzOiAoKSAtPlxuICAgICAgICBmb3IgbCBpbiBAZ3JhcGgubGlua3NcbiAgICAgICAgICAgIGEgPSBAZ3JhcGguZ2V0X3ZpbmZvIGwuZnJvbVxuICAgICAgICAgICAgYiA9IEBncmFwaC5nZXRfdmluZm8gbC50b1xuICAgICAgICAgICAgdXRpbHMuZHJhd19saW5lIEBjdHgsIGEsIGJcblxuICAgIGRyYXdfdmVydGljZXM6ICgpIC0+XG4gICAgICAgIGZvciBuYW1lLCBpbmZvIG9mIEBncmFwaC52aW5mb1xuICAgICAgICAgICAgdGV4dENvbG9yID0gaWYgQGdyYXBoLmlzX3Jvb3QgbmFtZSB0aGVuICdyZWQnIGVsc2UgJ3doaXRlJ1xuICAgICAgICAgICAgdXRpbHMuZHJhd19jaXJjbGVfd2l0aF90ZXh0KFxuICAgICAgICAgICAgICAgIEBjdHgsIGluZm8ueCwgaW5mby55LCBSQURJSVVTLCBuYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRzejogRk9OVFNaLCBmb250RmFtaWx5OiAnTW9ub3NwYWNlJyxcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlQ29sb3I6ICdibGFjaycsIHRleHRDb2xvcjogdGV4dENvbG9yXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuXG4gICAgcmVuZGVyOiAoKSAtPlxuICAgICAgICBAY3R4LnNhdmUoKVxuICAgICAgICBAZHJhd19saW5rcygpXG4gICAgICAgIEBkcmF3X3ZlcnRpY2VzKClcbiAgICAgICAgQGN0eC5yZXN0b3JlKClcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaERyYXdlci5jb2ZmZWVcbiAqKi8iLCJcbiMgVE9ETzog0LHQu9C+0LrQuNGA0L7QstC60LAg0Lgg0YDQsNC30LHQu9C+0LrQuNGA0L7QstC60LAgY2FsbF9jaGFuZ2VkXG5cbm1vZHVsZS5leHBvcnRzID0gXG5jbGFzcyBHcmFwaFxuICAgIGNvbnN0cnVjdG9yOiAtPlxuICAgICAgICBAdmVydGljZXMgPSBbXVxuICAgICAgICBAbGlua3MgPSBbXVxuICAgICAgICBAbWFwID0ge31cbiAgICAgICAgQHZpbmZvID0ge30gIyBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGZvciB2ZXJ0ZXhcbiAgICAgICAgQGZyZWVuYW1lcyA9IFtdXG4gICAgICAgIEByb290ID0gbnVsbFxuICAgICAgICBAaXNfY2hhbmdlc19sb2NrID0gZmFsc2VcbiAgICAgICAgQGlzX3VwZGF0ZWQgPSBmYWxzZVxuICAgICAgICBAY2hhbmdlX2xpc3RlbmVycyA9IFtdXG5cbiAgICAjID09PSBPVEhFUiA9PT09XG4gICAgIyB1cGRhdGUgYWxsIGluZm8gaW50byB0aGlzIGdyYXBoXG4gICAgdXBkYXRlOiAtPlxuICAgICAgICByZXR1cm4gaWYgQGlzX3VwZGF0ZWRcbiAgICAgICAgZm9yIHYgaW4gQHZlcnRpY2VzXG4gICAgICAgICAgICBAdmluZm9bdl0uYmZzID0gQG1ha2VfYmZzX2luZm8gdlxuICAgICAgICBAaXNfdXBkYXRlZCA9IGZhbHNlXG5cbiAgICBpc19yb290OiAodikgLT4gdiA9PSBAcm9vdFxuICAgIHNldF9yb290OiAocikgLT4gXG4gICAgICAgIHJldHVybiBpZiByID09IEByb290XG4gICAgICAgIEByb290ID0gclxuICAgICAgICBAY2hhbmdlZCgpXG5cbiAgICBsZWF2ZXM6IChyb290ID0gQHJvb3QpIC0+XG4gICAgICAgIHJldHVybiBbXSBpZiBub3QgQGlzX3ZlcnRleCByb290XG4gICAgICAgIEB1cGRhdGUoKVxuICAgICAgICByZXMgPSBbXVxuICAgICAgICByb290YmZzID0gQHZpbmZvW3Jvb3RdLmJmc1xuICAgICAgICBmb3IgdSBpbiBAdmVydGljZXNcbiAgICAgICAgICAgIGlmIHJvb3RiZnNbdV0uc3VidmVydGljZXMubGVuZ3RoID09IDBcbiAgICAgICAgICAgICAgICByZXMucHVzaCB1XG4gICAgICAgIHJldHVybiByZXNcblxuICAgIG1ha2VfYmZzX2luZm86IChzKSAtPlxuICAgICAgICByZXR1cm4gW10gaWYgbm90IEBpc192ZXJ0ZXggc1xuICAgICAgICBxID0gW3NdXG4gICAgICAgIHVzZWQgPSB7fVxuICAgICAgICB1c2VkW3NdID0gdHJ1ZVxuICAgICAgICByZXMgPSB7fVxuICAgICAgICByZXNbdV0gPSB7c3VidmVydGljZXM6W10sZGlzdDowfSBmb3IgdSBpbiBAdmVydGljZXNcbiAgICAgICAgcmVzW3NdLmRpc3QgPSAwXG4gICAgICAgIHJlc1tzXS5zdWJ2ZXJ0aWNlcyA9IFtdXG4gICAgICAgIHdoaWxlIHEubGVuZ3RoID4gMFxuICAgICAgICAgICAgdiA9IHEuc2hpZnQoKVxuICAgICAgICAgICAgZm9yIHUgaW4gQHZlcnRpY2VzXG4gICAgICAgICAgICAgICAgaWYgdXNlZFt1XSBhbmQgQGlzX2xpbmsodiwgdSkgYW5kIHJlc1t1XS5kaXN0ID4gcmVzW3ZdLmRpc3RcbiAgICAgICAgICAgICAgICAgICAgcmVzW3ZdLnN1YnZlcnRpY2VzLnB1c2ggdVxuICAgICAgICAgICAgICAgIGlmIEBpc19saW5rKHYsIHUpIGFuZCBub3QgdXNlZFt1XVxuICAgICAgICAgICAgICAgICAgICByZXNbdl0uc3VidmVydGljZXMucHVzaCB1XG4gICAgICAgICAgICAgICAgICAgIHJlc1t1XS5kaXN0ID0gcmVzW3ZdLmRpc3QgKyAxXG4gICAgICAgICAgICAgICAgICAgIHVzZWRbdV0gPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHEucHVzaCB1XG4gICAgICAgIHJldHVybiByZXNcblxuICAgIGRpc3Q6ICh1LCB2ID0gQHJvb3QpIC0+XG4gICAgICAgIHJldHVybiBpZiBub3QgQGlzX3ZlcnRleCh1KSBvciBub3QgQGlzX3ZlcnRleCh2KVxuICAgICAgICBAdXBkYXRlKClcbiAgICAgICAgcmVzID0gQHZpbmZvW3VdLmJmc1t2XS5kaXN0XG4gICAgICAgIHJldHVybiByZXNcblxuICAgIGRpc3RzX3RvX2xlYXZlczogKHYpIC0+XG4gICAgICAgIHJlcyA9IFtdXG4gICAgICAgIGZvciBsIGluIEBsZWF2ZXMoKVxuICAgICAgICAgICAgcmVzLnB1c2ggQGRpc3QgbCwgdlxuICAgICAgICByZXR1cm4gcmVzXG5cbiAgICBuZXh0X3ZlcnRpY2VzOiAodikgLT5cbiAgICAgICAgcmV0dXJuIEB2aW5mb1tAcm9vdF0uYmZzW3ZdLnN1YnZlcnRpY2VzXG5cbiAgICBwcmV2aW91c192ZXJ0aWNlczogKHYpIC0+XG4gICAgICAgIHJlcyA9IFtdXG4gICAgICAgIHJvb3RiZnMgPSBAdmluZm9bQHJvb3RdLmJmc1xuICAgICAgICBmb3IgdSBpbiBAdmVydGljZXNcbiAgICAgICAgICAgIGlmIHYgaW4gcm9vdGJmc1t1XS5zdWJ2ZXJ0aWNlc1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoIHVcbiAgICAgICAgcmV0dXJuIHJlc1xuXG4gICAgaW52YXJpYW50MzogKHNlcCA9ICcsICcpIC0+XG4gICAgICAgIHJlcyA9IHt9XG4gICAgICAgIGZvciB2IGluIEB2ZXJ0aWNlc1xuICAgICAgICAgICAgdCA9IFtdXG4gICAgICAgICAgICB0WzBdID0gQGRpc3QgdlxuICAgICAgICAgICAgdFsxXSA9IEBwcmV2aW91c192ZXJ0aWNlcyh2KS5sZW5ndGhcbiAgICAgICAgICAgIHRbMl0gPSBAbmV4dF92ZXJ0aWNlcyh2KS5sZW5ndGhcbiAgICAgICAgICAgIHRbM10gPSAnKCcgKyBAZGlzdHNfdG9fbGVhdmVzKHYpLnNvcnQoKS5qb2luKHNlcCkgKyAnKSdcbiAgICAgICAgICAgIHJlc1t2XSA9IHQuam9pbiBzZXBcbiAgICAgICAgcmV0dXJuIHJlc1xuXG4gICAgaW52YXJpYW50M19hc19zdHI6IC0+XG4gICAgICAgIEB1cGRhdGUoKVxuICAgICAgICByZXR1cm4gXy52YWx1ZXMoQGludmFyaWFudDMoJywnKSkuc29ydCgpLmpvaW4gJzsnXG5cbiAgICBjbGVhcjogLT5cbiAgICAgICAgQHZlcnRpY2VzID0gW11cbiAgICAgICAgQGxpbmtzID0gW11cbiAgICAgICAgQG1hcCA9IHt9XG4gICAgICAgIEB2aW5mbyA9IHt9ICMgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBmb3IgdmVydGV4XG4gICAgICAgIEBmcmVlbmFtZXMgPSBbXVxuICAgICAgICBAcm9vdCA9IG51bGxcbiAgICAgICAgQGlzX2NoYW5nZXNfbG9jayA9IGZhbHNlXG4gICAgICAgIEBpc191cGRhdGVkID0gZmFsc2VcbiAgICAgICAgQGNoYW5nZWQoKVxuXG4gICAgIyA9PT0gQ0hBTkdFUyA9PT1cbiAgICBvbl9jaGFuZ2U6IChjYWxsYmFjaykgLT4gXG4gICAgICAgIEBjaGFuZ2VfbGlzdGVuZXJzLnB1c2ggY2FsbGJhY2tcblxuICAgIGNoYW5nZWQ6IC0+IFxuICAgICAgICBAaXNfdXBkYXRlZCA9IGZhbHNlXG4gICAgICAgIHJldHVybiBpZiBAaXNfY2hhbmdlc19sb2NrXG4gICAgICAgIGZvciBjYWxsYmFjayBpbiBAY2hhbmdlX2xpc3RlbmVyc1xuICAgICAgICAgICAgY2FsbGJhY2sodGhpcylcblxuICAgIGxvY2tfY2hhbmdlczogLT5cbiAgICAgICAgQGlzX2NoYW5nZXNfbG9jayA9IHRydWVcblxuICAgIHVubG9ja19jaGFuZ2VzOiAtPlxuICAgICAgICBAaXNfY2hhbmdlc19sb2NrID0gZmFsc2VcblxuICAgICMgPT09IFZFUlRJQ0VTID09PSBcbiAgICBnZW5lcmF0ZV9uYW1lOiAtPlxuICAgICAgICBAZnJlZW5hbWVzLnNvcnQgKGEsIGIpIC0+IGEgLSBiXG4gICAgICAgIHJlcyA9IFwiXCJcbiAgICAgICAgd2hpbGUgQGZyZWVuYW1lcy5sZW5ndGggPiAwXG4gICAgICAgICAgICB2ID0gXCJcIiArIEBmcmVlbmFtZXMuc2hpZnQoKVxuICAgICAgICAgICAgcmV0dXJuIHYgaWYgbm90IEBpc192ZXJ0ZXggdlxuICAgICAgICByZXR1cm4gXCJcIiArIEBjb3VudF92ZXJ0aWNlcygpXG5cbiAgICBjb3VudF92ZXJ0aWNlczogLT4gQHZlcnRpY2VzLmxlbmd0aFxuXG4gICAgaXNfdmVydGV4OiAobmFtZSkgLT5cbiAgICAgICAgcmV0dXJuIGZhbHNlIGlmIG5vdCBuYW1lP1xuICAgICAgICByZXR1cm4gbmFtZSBpbiBAdmVydGljZXNcblxuICAgIGdldF92aW5mbzogKG5hbWUpIC0+IEB2aW5mb1tuYW1lXVxuXG4gICAgc2V0X3ZpbmZvOiAobmFtZSwgaW5mbykgLT5cbiAgICAgICAgdW5sZXNzIEB2aW5mb1tuYW1lXT9cbiAgICAgICAgICAgIEB2aW5mb1tuYW1lXSA9IGluZm9cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICBAdmluZm9bbmFtZV1ba10gPSB2IGZvciBrLHYgb2YgaW5mbyBpZiBpbmZvP1xuXG4gICAgYWRkX3ZlcnRleDogKG5hbWUsIGluZm8pIC0+XG4gICAgICAgIEBzZXRfdmluZm8gbmFtZSwgaW5mb1xuICAgICAgICByZXR1cm4gaWYgQGlzX3ZlcnRleCBuYW1lXG4gICAgICAgIEB2ZXJ0aWNlcy5wdXNoIG5hbWVcbiAgICAgICAgQG1hcFtuYW1lXSA9IHt9XG4gICAgICAgIGlmIG5vdCBAcm9vdD9cbiAgICAgICAgICAgIEByb290ID0gbmFtZVxuICAgICAgICBAY2hhbmdlZCgpXG5cbiAgICBkZWxfdmVydGV4OiAobmFtZSkgLT5cbiAgICAgICAgcmV0dXJuIGlmIG5vdCBAaXNfdmVydGV4KG5hbWUpXG5cbiAgICAgICAgcHJldl9sb2NrX3N0YXR1cyA9IEBpc19jaGFuZ2VzX2xvY2tcbiAgICAgICAgQGxvY2tfY2hhbmdlcygpXG5cbiAgICAgICAgXy5wdWxsIEB2ZXJ0aWNlcywgbmFtZVxuICAgICAgICBkZWxldGUgQHZpbmZvW25hbWVdXG4gICAgICAgIEBmcmVlbmFtZXMucHVzaCBwYXJzZUludChuYW1lKVxuICAgICAgICBAZGVsX2xpbmtzX3dpdGhfdmVydGV4IG5hbWVcbiAgICAgICAgaWYgbmFtZSA9PSBAcm9vdFxuICAgICAgICAgICAgQHJvb3QgPSBpZiBAdmVydGljZXMubGVuZ3RoID4gMCB0aGVuIEB2ZXJ0aWNlc1swXSBlbHNlIG51bGxcblxuICAgICAgICBAaXNfY2hhbmdlc19sb2NrID0gcHJldl9sb2NrX3N0YXR1c1xuICAgICAgICBAY2hhbmdlZCgpXG5cbiAgICAjID09PSBMSU5LUyA9PT0gXG4gICAgY291bnRfbGlua3M6IC0+IFxuICAgICAgICByZXR1cm4gQGxpbmtzLmxlbmd0aFxuXG4gICAgX21ha2VfbGluazogKHYxLCB2MikgLT5cbiAgICAgICAgYXJyID0gW3YxLCB2Ml0uc29ydCgpXG4gICAgICAgIHJldHVybiB7IGZyb206IGFyclswXSwgdG86IGFyclsxXSB9XG5cbiAgICBhZGRfbGluazogKHYxLCB2MikgLT5cbiAgICAgICAgcmV0dXJuIGlmIEBpc19saW5rKHYxLCB2MilcbiAgICAgICAgQGxpbmtzLnB1c2ggQF9tYWtlX2xpbmsodjEsIHYyKVxuICAgICAgICBAbWFwW3YxXVt2Ml0gPSBAbWFwW3YyXVt2MV0gPSB0cnVlXG4gICAgICAgIEBjaGFuZ2VkKClcblxuICAgIGRlbF9saW5rOiAodjEsIHYyKSAtPlxuICAgICAgICBwID0gKGwpIC0+IChsLmZyb20gPT0gdjEgYW5kIGwudG8gPT0gdjIpIG9yIChsLmZyb20gPT0gdjIgYW5kIGwudG8gPT0gdjEpXG4gICAgICAgIEBkZWxfbGlua3AgcFxuXG4gICAgZGVsX2xpbmtzX3dpdGhfdmVydGV4OiAodikgLT5cbiAgICAgICAgcCA9IChsKSAtPiB2IGluIF8udmFsdWVzIGxcbiAgICAgICAgQGRlbF9saW5rcCBwXG5cbiAgICBkZWxfbGlua19mcm9tX21hcDogKHYxLCB2MikgLT5cbiAgICAgICAgQG1hcFt2MV1bdjJdID0gQG1hcFt2Ml1bdjFdID0gZmFsc2VcbiAgICAgICAgQGNoYW5nZWQoKVxuXG4gICAgZGVsX2xpbmtwOiAocHJlZGljYXRlKSAtPlxuICAgICAgICByZXMgPSBbXVxuICAgICAgICBmb3IgbCBpbiBAbGlua3NcbiAgICAgICAgICAgIGlmIHByZWRpY2F0ZSBsXG4gICAgICAgICAgICAgICAgQGRlbF9saW5rX2Zyb21fbWFwIGwuZnJvbSwgbC50bywgZmFsc2VcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXMucHVzaCBsXG4gICAgICAgIEBsaW5rcyA9IHJlc1xuICAgICAgICBAY2hhbmdlZCgpXG5cbiAgICBpc19saW5rOiAodjEsIHYyKSAtPlxuICAgICAgICByZXR1cm4gISFAbWFwW3YxXVt2Ml1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaC5jb2ZmZWVcbiAqKi8iLCJcbkdyYXBoID0gcmVxdWlyZSAnLi9HcmFwaCdcblxuXG4jIyNcbmV4YW1wbGUgZm9yIGJ1aWxkZXIxOlxub3B0aW9uc1xuICAgIHZlcnRpY2VzOlxuICAgICAgICAwOiB4OiAxMDAsIHk6IDEwMFxuICAgICAgICAxOiB4OiA1MCwgeTogNTBcbiAgICAgICAgMjogeDogMTUwLCB5OiA1MFxuICAgIGxpbmtzOlxuICAgICAgICAwOiBbMSwgMl1cbiMjI1xubW9kdWxlLmV4cG9ydHMuXG5idWlsZGVyMSA9IChvcHRpb25zKSAtPlxuICAgIGcgPSBuZXcgR3JhcGhcbiAgICBnLmFkZF92ZXJ0ZXggXCJcIituYW1lLCBpbmZvIGZvciBuYW1lLCBpbmZvIG9mIG9wdGlvbnMudmVydGljZXNcbiAgICBmb3IgYSwgYXJyIG9mIG9wdGlvbnMubGlua3NcbiAgICAgICAgZm9yIGIgaW4gYXJyXG4gICAgICAgICAgICBnLmFkZF9saW5rIFwiXCIrYSwgXCJcIitiXG4gICAgcmV0dXJuIGdcblxubW9kdWxlLmV4cG9ydHMuXG5tYWtlX29wdGlvbnNfZm9yX2J1aWxkZXIxID0gKGdyYXBoKSAtPlxuICAgIHZlcnRpY2VzID0gXy5jbG9uZSBncmFwaC52aW5mb1xuICAgIGxpbmtzID0ge31cbiAgICBmb3Ige2Zyb20sIHRvfSBpbiBncmFwaC5saW5rc1xuICAgICAgICBsaW5rc1tmcm9tXSA9IFtdIGlmIG5vdCBsaW5rc1tmcm9tXT9cbiAgICAgICAgbGlua3NbZnJvbV0ucHVzaCB0b1xuICAgIHJldHVybiB7dmVydGljZXMsIGxpbmtzfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaEJ1aWxkZXIuY29mZmVlXG4gKiovIiwiXG5HcmFwaCA9IHJlcXVpcmUgJy4vR3JhcGgnXG51dGlscyA9IHJlcXVpcmUgJy4vdXRpbHMnXG5DYW52YXNHcmFwaENvbnN0cnVjdG9yID0gcmVxdWlyZSAnLi9DYW52YXNHcmFwaENvbnN0cnVjdG9yJ1xuR3JhcGhJbmZvID0gcmVxdWlyZSAnLi9HcmFwaEluZm8nXG5cbmNvdW50ZXIgPSAwXG5cbm1vZHVsZS5leHBvcnRzID1cbmNsYXNzIEdyYXBoVGFibGVcbiAgICBjb25zdHJ1Y3RvcjogKEBjb250YWluZXIsIEBncmFwaCA9IG5ldyBHcmFwaCkgLT5cbiAgICAgICAgQGlkID0gXCJndFwiICsgY291bnRlcisrXG4gICAgICAgIGRpdl9mb3JfY29uc3RydWN0b3IgPSAkKFwiPGRpdj5cIikuYXR0cignaWQnLCBAaWQgKyBcImdiXCIpLmdldCAwXG4gICAgICAgIGRpdl9mb3JfZ3JhcGhfaW5mbyA9ICQoXCI8ZGl2PlwiKS5hdHRyKCdpZCcsIEBpZCArIFwiaW5mb1wiKS5nZXQgMFxuXG4gICAgICAgIEBlbCA9IHV0aWxzLm1ha2VfdGFsYmUgW1xuICAgICAgICAgICAgWyfQoNC40YHRg9C90L7QuiDQs9GA0LDRhNCwJywgJ9CY0L3RhNC+0YDQvNCw0YbQuNGPINC+INCz0YDQsNGE0LUnXSwgXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgZGl2X2Zvcl9jb25zdHJ1Y3RvciwgZGl2X2Zvcl9ncmFwaF9pbmZvXG4gICAgICAgICAgICBdXG4gICAgICAgIF0sIHsgaGVhZGVyOiB0cnVlIH1cbiAgICAgICAgJChAY29udGFpbmVyKS5hcHBlbmQgQGVsXG5cbiAgICAgICAgQGdiID0gbmV3IENhbnZhc0dyYXBoQ29uc3RydWN0b3IgZGl2X2Zvcl9jb25zdHJ1Y3RvciwgQGdyYXBoXG4gICAgICAgIEBnaSA9IG5ldyBHcmFwaEluZm8gZGl2X2Zvcl9ncmFwaF9pbmZvLCBAZ3JhcGhcblxuICAgIHVwZGF0ZTogLT5cbiAgICAgICAgQGdiLnVwZGF0ZSgpIGlmIEBnYi51cGRhdGU/XG5cbiAgICByZW5kZXI6IC0+XG4gICAgICAgIEBnYi5yZW5kZXIoKVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0dyYXBoVGFibGUuY29mZmVlXG4gKiovIiwiXG5cbmNvdW50ZXIgPSAwXG5cblxubW9kdWxlLmV4cG9ydHMgPVxuY2xhc3MgR3JhcGhJbmZvXG4gICAgY29uc3RydWN0b3I6IChAY29udGFpbmVyLCBAZ3JhcGggPSBuZXcgR3JhcGgpIC0+XG4gICAgICAgIEBjb250YWluZXIgPSAkKEBjb250YWluZXIpLmdldCAwIGlmIF8uaXNTdHJpbmcgQGNvbnRhaW5lclxuICAgICAgICBAaWQgPSBcImdyYXBoaW5mb1wiICsgY291bnRlcisrXG4gICAgICAgIEBlbCA9ICQoXCI8ZGl2PlwiKS5nZXQgMFxuICAgICAgICAkKEBjb250YWluZXIpLmFwcGVuZCBAZWxcbiAgICAgICAgQGluZm8gPVxuICAgICAgICAgICAgXCJsZWF2ZXNcIjpcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLQm9C40YHRgtGM0Y86XCJcbiAgICAgICAgICAgICAgICBmdW5jOiA9PlxuICAgICAgICAgICAgICAgICAgICBAZ3JhcGgubGVhdmVzKCkuam9pbiAnLCAnXG4gICAgICAgICAgICBcImNvdW50X3ZlcnRpY2VzXCI6XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JrQvtC70LjRh9C10YHRgtCy0L4g0LLQtdGA0YjQuNC9OlwiLFxuICAgICAgICAgICAgICAgIGZ1bmM6ID0+IEBncmFwaC5jb3VudF92ZXJ0aWNlcygpXG4gICAgICAgICAgICBcImNvdW50X2xpbmtzXCI6XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JrQvtC70LjRh9C10YHRgtCy0L4g0YDQtdCx0LXRgDpcIixcbiAgICAgICAgICAgICAgICBmdW5jOiA9PiBAZ3JhcGguY291bnRfbGlua3MoKVxuICAgICAgICAgICAgXCJpbnZhcmlhbnQzXCI6XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JjQvdCy0LDRgNC40LDQvdGCIDM6XCJcbiAgICAgICAgICAgICAgICBmdW5jOiA9PiBAaW52YXJpYW50MygpXG4gICAgICAgICAgICBcbiAgICAgICAgZm9yIGlkLG8gb2YgQGluZm9cbiAgICAgICAgICAgICQoQGVsKS5hcHBlbmQoJChcIjxkaXY+PHU+I3tvLnRpdGxlfTwvdT4gPHNwYW4gaWQ9I3tAaWQraWR9Pjwvc3Bhbj48L2Rpdj5cIikpXG4gICAgICAgIEBncmFwaC5vbl9jaGFuZ2UgPT4gQHVwZGF0ZV9pbmZvKClcbiAgICAgICAgQHVwZGF0ZV9pbmZvKClcblxuICAgICAgICBAY2hhbmdlX2xpc3RlbmVycyA9IFtdXG4gICAgICAgIEByZXMgPSBcIlwiXG5cbiAgICAjID09PT09IElORk8gPT09PT1cbiAgICBpbnZhcmlhbnQzOiAtPlxuICAgICAgICByZXMgPSBKU09OLnN0cmluZ2lmeSBAZ3JhcGguaW52YXJpYW50MygpLCBudWxsLCAyXG4gICAgICAgIHJldHVybiAkKFwiPHByZT4je3Jlc308L3ByZT5cIilcblxuICAgIHVwZGF0ZV9pbmZvOiAtPlxuICAgICAgICBAZ3JhcGgudXBkYXRlKClcbiAgICAgICAgZm9yIGlkLCBvIG9mIEBpbmZvXG4gICAgICAgICAgICBpZCA9IEBpZCArIGlkXG4gICAgICAgICAgICByZXMgPSBvLmZ1bmMoKVxuICAgICAgICAgICAgJCgnIycraWQpLmh0bWwgXCJcIlxuICAgICAgICAgICAgJCgnIycraWQpLmFwcGVuZCByZXNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vR3JhcGhJbmZvLmNvZmZlZVxuICoqLyIsIlxubW9kdWxlLmV4cG9ydHMgPVxuY2xhc3MgR3JhcGhJbmZvXG5cbiAgICBjb25zdHJ1Y3RvcjogKEBnMSwgQGcyLCBAZWwxLCBAZWwyLCBAZ2xvYmFsX3JlcykgLT5cbiAgICAgICAgQHVwZGF0ZSgpXG4gICAgICAgIEBnMS5vbl9jaGFuZ2UgPT4gQHVwZGF0ZSgpXG4gICAgICAgIEBnMi5vbl9jaGFuZ2UgPT4gQHVwZGF0ZSgpXG5cbiAgICB1cGRhdGU6IC0+XG4gICAgICAgIHMxID0gQGcxLmludmFyaWFudDNfYXNfc3RyKClcbiAgICAgICAgczIgPSBAZzIuaW52YXJpYW50M19hc19zdHIoKVxuICAgICAgICAkKEBlbDEpLmh0bWwgczFcbiAgICAgICAgJChAZWwyKS5odG1sIHMyXG4gICAgICAgIGNsciA9IFwicmVkXCJcbiAgICAgICAgbXNnID0gXCLQmNC90LLRgNC40LDQvdGC0Ysg0J3QlSDRgdC+0LLQv9Cw0LTQsNGO0YJcIlxuICAgICAgICBpZiBzMSA9PSBzMlxuICAgICAgICAgICAgY2xyID0gXCJncmVlblwiXG4gICAgICAgICAgICBtc2cgPSBcItCY0L3QstGA0LjQsNC90YLRiyDRgdC+0LLQv9Cw0LTQsNGO0YJcIlxuICAgICAgICAkKEBnbG9iYWxfcmVzKS5odG1sIFwiPGZvbnQgY29sb3I9I3tjbHJ9PiN7bXNnfTwvZm9udD5cIlxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Jlc3VsdC5jb2ZmZWVcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9