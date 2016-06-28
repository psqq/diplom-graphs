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
	        var _print, args, ch, cmd, i, len, name, ref, v, vname;
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
	    this.is_updated = false;
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
	    return _.values(this.invariant3(',')).sort().join(';');
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


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzNlNDIyMTYwY2I3YjM4Zjk1YTciLCJ3ZWJwYWNrOi8vLy4vbWFpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vQ2FudmFzR3JhcGhDb25zdHJ1Y3Rvci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMuY29mZmVlIiwid2VicGFjazovLy8uL0dyYXBoRHJhd2VyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vR3JhcGhCdWlsZGVyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaFRhYmxlLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaEluZm8uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDckNBOztBQUFBLDBCQUF5QixvQkFBUSxDQUFSOztBQUN6QixnQkFBZSxvQkFBUSxDQUFSOztBQUNmLGNBQWEsb0JBQVEsQ0FBUjs7QUFHYixvQkFBbUI7O0FBR25CLFlBQVc7QUFDUDtHQUFBLE9BQU8sSUFBSSxDQUFDLEdBQUw7R0FDUCxLQUFLO0dBQ0wsT0FBTztBQUNIO0tBQUEsU0FBUyxJQUFJLENBQUMsR0FBTCxLQUFhO0tBQ3RCLE9BQU8sSUFBSSxDQUFDLEdBQUw7S0FDUCxTQUFTLElBQUksQ0FBQyxHQUFMLENBQVMsTUFBVCxFQUFpQixJQUFqQjtBQUNULFlBQU0sU0FBUyxDQUFmO0FBQ0k7O1NBQ0ksSUFBaUIsa0JBQWpCO1dBQUEsR0FBRyxDQUFDLE1BQUosQ0FBVyxFQUFYOztBQURKO09BRUEsVUFBVTtLQUhkO0FBSUE7O09BQ0ksSUFBZ0Isa0JB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QVcsQ0FBQyxDQUFDLEtBQWIsR0FBbUIsZ0JBQW5CLEdBQWtDLENBQUMsSUFBQyxHQUFELEdBQUksRUFBTCxDQUFsQyxHQUEwQyxnQkFBNUMsQ0FBZDtBQURKO0tBRUEsSUFBQyxNQUFLLENBQUMsU0FBUCxDQUFpQjtjQUFBO2dCQUFHLEtBQUMsWUFBRDtPQUFIO0tBQUEsUUFBakI7S0FDQSxJQUFDLFlBQUQ7S0FFQSxJQUFDLGlCQUFELEdBQW9CO0tBQ3BCLElBQUMsSUFBRCxHQUFPO0dBMUJFOzt1QkE2QmIsYUFBWTtBQUNSO0tBQUEsTUFBTSxJQUFJLENBQUMsU0FBTCxDQUFlLElBQUMsTUFBSyxDQUFDLFVBQVAsRUFBZixFQUFvQyxJQUFwQyxFQUEwQyxDQUExQztBQUNOLFlBQU8sRUFBRSxVQUFRLEdBQVIsR0FBWSxRQUFkO0dBRkM7O3VCQUlaLGNBQWE7QUFDVDtLQUFBLElBQUMsTUFBSyxDQUFDLE1BQVA7QUFDQTtBQUFBO1VBQUE7O09BQ0ksS0FBSyxJQUFDLEdBQUQsR0FBTTtPQUNYLE1BQU0sQ0FBQyxDQUFDLElBQUY7T0FDTixFQUFFLE1BQUksRUFBTixDQUFTLENBQUMsSUFBVixDQUFlLEVBQWY7b0JBQ0EsRUFBRSxNQUFJLEVBQU4sQ0FBUyxDQUFDLE1BQVYsQ0FBaUIsR0FBakI7QUFKSjs7R0FGUyIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDczZTQyMjE2MGNiN2IzOGY5NWE3XG4gKiovIiwiXHJcbkNhbnZhc0dyYXBoQ29uc3RydWN0b3IgPSByZXF1aXJlICcuL0NhbnZhc0dyYXBoQ29uc3RydWN0b3InXHJcbkdyYXBoQnVpbGRlciA9IHJlcXVpcmUgJy4vR3JhcGhCdWlsZGVyJ1xyXG5HcmFwaFRhYmxlID0gcmVxdWlyZSAnLi9HcmFwaFRhYmxlJ1xyXG5cclxuXHJcbm1haW5sb29wX29iamVjdHMgPSBbXVxyXG5cclxuXHJcbm1haW5sb29wID0gLT5cclxuICAgIHRpbWUgPSBEYXRlLm5vdygpXHJcbiAgICBkdCA9IDE0XHJcbiAgICBzdGVwID0gLT5cclxuICAgICAgICBjdXJfZHQgPSBEYXRlLm5vdygpIC0gdGltZVxyXG4gICAgICAgIHRpbWUgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgY3VyX2R0ID0gTWF0aC5taW4oY3VyX2R0LCAxMDAwKVxyXG4gICAgICAgIHdoaWxlIGN1cl9kdCA+IDBcclxuICAgICAgICAgICAgZm9yIG9iaiBpbiBtYWlubG9vcF9vYmplY3RzXHJcbiAgICAgICAgICAgICAgICBvYmoudXBkYXRlIGR0IGlmIG9iai51cGRhdGU/IFxyXG4gICAgICAgICAgICBjdXJfZHQgLT0gZHRcclxuICAgICAgICBmb3Igb2JqIGluIG1haW5sb29wX29iamVjdHNcclxuICAgICAgICAgICAgb2JqLnJlbmRlcigpIGlmIG9iai5yZW5kZXI/XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHN0ZXBcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBzdGVwXHJcblxyXG5tYWlubG9vcCgpXHJcblxyXG5cclxuXHJcbiMgSlNPTi5zdHJpbmdpZnkoR3JhcGhCdWlsZGVyLm1ha2Vfb3B0aW9uc19mb3JfYnVpbGRlcjEoZ2IxLmdyYXBoKSwgbnVsbClcclxuZzEgPSBHcmFwaEJ1aWxkZXIuYnVpbGRlcjEge1widmVydGljZXNcIjp7XCIwXCI6e1wieFwiOjE5OCxcInlcIjozNzUuMTg3NX0sXCIxXCI6e1wieFwiOjkzLFwieVwiOjMyNi4xODc1fSxcIjJcIjp7XCJ4XCI6MzAyLFwieVwiOjMzOC4xODc1fSxcIjNcIjp7XCJ4XCI6NDMsXCJ5XCI6MjUwLjE4NzUsXCJuYW1lXCI6XCIzXCJ9LFwiNFwiOntcInhcIjoxNTQsXCJ5XCI6MjQ3LjE4NzUsXCJuYW1lXCI6XCI0XCJ9LFwiNVwiOntcInhcIjozMDAsXCJ5XCI6MjcyLjE4NzUsXCJuYW1lXCI6XCI1XCJ9LFwiNlwiOntcInhcIjoyNjEsXCJ5XCI6MjA4LjE4NzUsXCJuYW1lXCI6XCI2XCJ9LFwiN1wiOntcInhcIjozNTQsXCJ5XCI6MjI5LjE4NzUsXCJuYW1lXCI6XCI3XCJ9LFwiOFwiOntcInhcIjoxMDMsXCJ5XCI6MTcwLjE4NzUsXCJuYW1lXCI6XCI4XCJ9LFwiOVwiOntcInhcIjozNyxcInlcIjo1OC4xODc1LFwibmFtZVwiOlwiOVwifSxcIjEwXCI6e1wieFwiOjExMyxcInlcIjo2Mi4xODc1LFwibmFtZVwiOlwiMTBcIn0sXCIxMVwiOntcInhcIjoxOTQsXCJ5XCI6NjAuMTg3NSxcIm5hbWVcIjpcIjExXCJ9LFwiMTJcIjp7XCJ4XCI6MzI3LFwieVwiOjE4My4xODc1LFwibmFtZVwiOlwiMTJcIn0sXCIxM1wiOntcInhcIjozNjEsXCJ5XCI6MTQ1LjE4NzUsXCJuYW1lXCI6XCIxM1wifSxcIjE0XCI6e1wieFwiOjMyMCxcInlcIjoxMTMuMTg3NSxcIm5hbWVcIjpcIjE0XCJ9LFwiMTVcIjp7XCJ4XCI6MzU3LFwieVwiOjc3LjE4NzUsXCJuYW1lXCI6XCIxNVwifSxcIjE2XCI6e1wieFwiOjMxNyxcInlcIjo0Ni4xODc1LFwibmFtZVwiOlwiMTZcIn19LFwibGlua3NcIjp7XCIwXCI6W1wiMVwiLFwiMlwiXSxcIjFcIjpbXCIzXCIsXCI0XCJdLFwiMlwiOltcIjVcIl0sXCIzXCI6W1wiOFwiXSxcIjVcIjpbXCI2XCIsXCI3XCJdLFwiOFwiOltcIjlcIl0sXCIxMFwiOltcIjhcIl0sXCIxMVwiOltcIjhcIl0sXCIxMlwiOltcIjdcIixcIjEzXCJdLFwiMTNcIjpbXCIxNFwiXSxcIjE0XCI6W1wiMTVcIl0sXCIxNVwiOltcIjE2XCJdfX1cclxuZzIgPSBHcmFwaEJ1aWxkZXIuYnVpbGRlcjEge1widmVydGljZXNcIjp7XCIwXCI6e1wieFwiOjE5MSxcInlcIjozODAuMzc1LFwibmFtZVwiOlwiMFwifSxcIjFcIjp7XCJ4XCI6NTAsXCJ5XCI6MzIwLjM3NSxcIm5hbWVcIjpcIjFcIn0sXCIyXCI6e1wieFwiOjMwOSxcInlcIjozMDMuMzc1LFwibmFtZVwiOlwiMlwifSxcIjNcIjp7XCJ4XCI6NjgsXCJ5XCI6MTkwLjM3NSxcIm5hbWVcIjpcIjNcIn0sXCI0XCI6e1wieFwiOjMwNixcInlcIjoxODAuMzc1LFwibmFtZVwiOlwiNFwifSxcIjVcIjp7XCJ4XCI6NjUsXCJ5XCI6NzEuMzc1LFwibmFtZVwiOlwiNVwifSxcIjZcIjp7XCJ4XCI6MTg0LFwieVwiOjE4Ny4zNzUsXCJuYW1lXCI6XCI2XCJ9LFwiN1wiOntcInhcIjoyNjYsXCJ5XCI6ODkuMzc1LFwibmFtZVwiOlwiN1wifSxcIjhcIjp7XCJ4XCI6MzUyLFwieVwiOjgyLjM3NSxcIm5hbWVcIjpcIjhcIn0sXCI5XCI6e1wieFwiOjE3NyxcInlcIjoyOTcuMzc1LFwibmFtZVwiOlwiOVwifX0sXCJsaW5rc1wiOntcIjBcIjpbXCIyXCIsXCIxXCIsXCI5XCJdLFwiMVwiOltcIjNcIl0sXCIyXCI6W1wiNFwiXSxcIjNcIjpbXCI1XCJdLFwiNFwiOltcIjdcIixcIjhcIl0sXCI2XCI6W1wiOVwiXX19XHJcblxyXG5ndCA9IFtuZXcgR3JhcGhUYWJsZShcIiNndDFcIiwgZzEpLCBuZXcgR3JhcGhUYWJsZSBcIiNndDJcIiwgZzJdXHJcbm1haW5sb29wX29iamVjdHMgPSBtYWlubG9vcF9vYmplY3RzLmNvbmNhdCBndFxyXG5cclxuXHJcbnByZyA9IChpKSAtPiBjb25zb2xlLmxvZyBKU09OLnN0cmluZ2lmeShHcmFwaEJ1aWxkZXIubWFrZV9vcHRpb25zX2Zvcl9idWlsZGVyMShndFtpXS5ncmFwaCkpXHJcblxyXG5cclxuXHJcbl8uZGVmYXVsdHMgd2luZG93LCB7R3JhcGhCdWlsZGVyLCBwcmcsIGd0fVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21haW4uY29mZmVlXG4gKiovIiwiXHJcbnV0aWxzID0gcmVxdWlyZSAnLi91dGlscydcclxuR3JhcGhEcmF3ZXIgPSByZXF1aXJlICcuL0dyYXBoRHJhd2VyJ1xyXG5HcmFwaCA9IHJlcXVpcmUgJy4vR3JhcGgnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFxyXG5jbGFzcyBDYW52YXNHcmFwaENvbnN0cnVjdG9yXHJcblxyXG4gICAgY29uc3RydWN0b3I6IChAY29udGFpbmVyLCBAZ3JhcGggPSBuZXcgR3JhcGgpIC0+XHJcbiAgICAgICAgQGNhbiA9ICQoXCI8Y2FudmFzPlwiKS5nZXQgMFxyXG4gICAgICAgIEBjdHggPSBAY2FuLmdldENvbnRleHQgJzJkJ1xyXG4gICAgICAgIEBjYW4ud2lkdGggPSBAY2FuLmhlaWdodCA9IDQwMFxyXG4gICAgICAgIEBtb3VzZSA9IHsgXHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDAgIyDRgtC10LrRg9GJ0LjQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQvNGL0YjQuCDQvdCw0LQgQGNhblxyXG4gICAgICAgICAgICB0YXJnZXQ6IG51bGwgIyDQuNC80Y8g0LLQtdGA0YjQuNC90Ysg0L3QsNC0INC60L7RgtC+0YDQvtC5INC/0YDQvtC40LfQstC+0LTQuNGC0YHRjyDQvdC10LrQvtGC0L7RgNC+0LUg0LTQtdC50YHRgtCy0LjQtVxyXG4gICAgICAgIH1cclxuICAgICAgICBAZm9jdXMgPSBmYWxzZVxyXG4gICAgICAgIEBoYW5kbGVfZXZlbnRzKClcclxuICAgICAgICAkKEBjb250YWluZXIpLmFwcGVuZCBAY2FuXHJcbiAgICAgICAgQGdyYXBoX2RyYXdlciA9IG5ldyBHcmFwaERyYXdlciBAZ3JhcGgsIEBjdHhcclxuXHJcbiAgICB1cGRhdGVfbW91c2U6IChlKSAtPlxyXG4gICAgICAgIHBvcyA9IHV0aWxzLmdldF9tb3VzZXBvc19pbl9lbGVtZW50IEBjYW4sIGVcclxuICAgICAgICBAbW91c2UueCA9IHBvcy54XHJcbiAgICAgICAgQG1vdXNlLnkgPSBwb3MueVxyXG5cclxuICAgIGhhbmRsZV9ldmVudHM6IC0+XHJcbiAgICAgICAgJChAY2FuKS5tb3VzZW91dCA9PiBAZm9jdXMgPSBmYWxzZVxyXG4gICAgICAgICQoQGNhbikubW91c2VvdmVyID0+IEBmb2N1cyA9IHRydWVcclxuICAgICAgICBcclxuICAgICAgICAkKEBjYW4pLm1vdXNlbW92ZSAoZSkgPT5cclxuICAgICAgICAgICAgQHVwZGF0ZV9tb3VzZSBlXHJcbiAgICAgICAgICAgIGlmIEBtb3VzZS50YXJnZXRcclxuICAgICAgICAgICAgICAgIGlmIEBtb3VzZS5kcmFndHlwZSA9PSBcIm1vdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleF9uYW1lID0gQG1vdXNlLnRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgIEBncmFwaC5zZXRfdmluZm8gdmVydGV4X25hbWUsIHV0aWxzLnZlYzIoQG1vdXNlLngsIEBtb3VzZS55KVxyXG4gICAgICAgICAgICAgICAgaWYgQG1vdXNlLmRyYWd0eXBlID09IFwibGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgQG1vdXNlLmxpbmtlbmQgPSBfLmNsb25lIHV0aWxzLnZlYzIgQG1vdXNlLngsIEBtb3VzZS55XHJcblxyXG4gICAgICAgICQoQGNhbikubW91c2Vkb3duIChlKSA9PlxyXG4gICAgICAgICAgICB2bmFtZSA9IEBncmFwaF9kcmF3ZXIuZ2V0X3ZlcnRleF9ieXh5IEBtb3VzZVxyXG4gICAgICAgICAgICBpZiB2bmFtZT8gYW5kIEBtb3VzZS50YXJnZXQ/IGFuZCBAbW91c2UuZHJhZ3R5cGUgPT0gXCJsaW5rXCJcclxuICAgICAgICAgICAgICAgIEBncmFwaC5hZGRfbGluayBAbW91c2UudGFyZ2V0LCB2bmFtZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIEBtb3VzZS50YXJnZXQgPSB2bmFtZVxyXG4gICAgICAgICAgICBAbW91c2UuZHJhZ3R5cGUgPSBcIm1vdmVcIlxyXG5cclxuICAgICAgICAkKEBjYW4pLm1vdXNldXAgKGUpID0+XHJcbiAgICAgICAgICAgIEBtb3VzZS50YXJnZXQgPSBudWxsXHJcbiAgICAgICAgICAgIEBtb3VzZS5kcmFndHlwZSA9IG51bGxcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkua2V5ZG93biAoZSkgPT5cclxuICAgICAgICAgICAgcmV0dXJuIHVubGVzcyBAZm9jdXNcclxuICAgICAgICAgICAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUua2V5Q29kZSkudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICBzd2l0Y2ggY2hcclxuICAgICAgICAgICAgICAgICMgU2V0IG5ldyByb290XHJcbiAgICAgICAgICAgICAgICB3aGVuICdyJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZuYW1lID0gQGdyYXBoX2RyYXdlci5nZXRfdmVydGV4X2J5eHkgQG1vdXNlXHJcbiAgICAgICAgICAgICAgICAgICAgQGdyYXBoLnNldF9yb290IHZuYW1lXHJcblxyXG4gICAgICAgICAgICAgICAgIyBBZGQgdmVydGV4XHJcbiAgICAgICAgICAgICAgICB3aGVuICd2J1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBAZ3JhcGguZ2VuZXJhdGVfbmFtZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgQGdyYXBoLmFkZF92ZXJ0ZXggbmFtZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBAbW91c2UueCwgeTogQG1vdXNlLnksIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgIyBRdWVyeSBmb3IgZ3JhcGhcclxuICAgICAgICAgICAgICAgIHdoZW4gJ3EnXHJcbiAgICAgICAgICAgICAgICAgICAgY21kID0gcHJvbXB0KFwi0JLQstC10LTQuNGC0LUg0LrQvtC80LDQvdC00YNcIilcclxuICAgICAgICAgICAgICAgICAgICBhcmdzID0gXy5wdWxsIGNtZC5zcGxpdCgvXFxzLyksICcnXHJcbiAgICAgICAgICAgICAgICAgICAgX3ByaW50ID0gKHMpIC0+IGNvbnNvbGUubG9nIHNcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggYXJnc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBcImRpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgaWYgYXJncy5sZW5ndGggPCAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcHJpbnQgXCLQoNCw0YHRgdGC0L7Rj9C90LjQtSDQvNC10LbQtNGDINCy0LXRgNGI0LjQvdCw0LzQuDogXCIgKyBAZ3JhcGguZGlzdChhcmdzWzFdLCBhcmdzWzJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBcImxlYXZlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcHJpbnQgQGdyYXBoLmxlYXZlcyBhcmdzWzFdXHJcblxyXG4gICAgICAgICAgICAgICAgIyBEZWxldGUgdmVydGV4XHJcbiAgICAgICAgICAgICAgICB3aGVuICdkJ1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIGUuc2hpZnRLZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHYgaW4gXy5jbG9uZSBAZ3JhcGgudmVydGljZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBncmFwaC5kZWxfdmVydGV4IHZcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgdm5hbWUgPSBAZ3JhcGhfZHJhd2VyLmdldF92ZXJ0ZXhfYnl4eSBAbW91c2VcclxuICAgICAgICAgICAgICAgICAgICBAZ3JhcGguZGVsX3ZlcnRleCB2bmFtZVxyXG5cclxuICAgICAgICAgICAgICAgICMgQWRkIGxpbmtcclxuICAgICAgICAgICAgICAgIHdoZW4gJ2wnXHJcbiAgICAgICAgICAgICAgICAgICAgdm5hbWUgPSBAZ3JhcGhfZHJhd2VyLmdldF92ZXJ0ZXhfYnl4eSBAbW91c2VcclxuICAgICAgICAgICAgICAgICAgICBAbW91c2UudGFyZ2V0ID0gdm5hbWVcclxuICAgICAgICAgICAgICAgICAgICBAbW91c2UuZHJhZ3R5cGUgPSBcImxpbmtcIlxyXG5cclxuICAgICAgICAgICAgICAgICMgUHJpbnQgb3RoZXIgaW5mb1xyXG4gICAgICAgICAgICAgICAgd2hlbiAnMSdcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyBAbW91c2VcclxuXHJcbiAgICB1cGRhdGU6IChkdCkgLT5cclxuXHJcbiAgICBkcmF3X2RyYWdsaW5rOiAtPlxyXG4gICAgICAgIGlmIEBtb3VzZS50YXJnZXQ/IGFuZCBAbW91c2UuZHJhZ3R5cGUgPT0gXCJsaW5rXCIgYW5kIEBtb3VzZS5saW5rZW5kP1xyXG4gICAgICAgICAgICB2ID0gQGdyYXBoLmdldF92aW5mbyBAbW91c2UudGFyZ2V0XHJcbiAgICAgICAgICAgIHV0aWxzLmRyYXdfbGluZSBAY3R4LCB2LCBAbW91c2VcclxuXHJcbiAgICByZW5kZXI6IC0+XHJcbiAgICAgICAgQGN0eC5jbGVhclJlY3QgMCwgMCwgQGNhbi53aWR0aCwgQGNhbi5oZWlnaHRcclxuICAgICAgICBAZHJhd19kcmFnbGluaygpXHJcbiAgICAgICAgQGdyYXBoX2RyYXdlci5yZW5kZXIoKVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DYW52YXNHcmFwaENvbnN0cnVjdG9yLmNvZmZlZVxuICoqLyIsIlxyXG4jID09PT09IG1hdGhzIHV0aWxzID09PT09XHJcbmRpc3QgPSAoYSwgYikgLT4gTWF0aC5zcXJ0KE1hdGgucG93KGEueCAtIGIueCwgMikgKyBNYXRoLnBvdyhhLnkgLSBiLnksIDIpKVxyXG52ZWMyID0gKHgsIHkpIC0+IHt4LCB5fVxyXG5cclxuIyA9PT09PSB1dGlscyBmb3IgaHRtbCBlbGVtZW50cyA9PT09PSBcclxuZ2V0X21vdXNlcG9zX2luX2VsZW1lbnQgPSAoZWwsIGUpIC0+XHJcbiAgICBvZmZzZXQgPSAkKGVsKS5vZmZzZXQoKVxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgeDogZS5wYWdlWCAtIG9mZnNldC5sZWZ0LCBcclxuICAgICAgICB5OiBlLnBhZ2VZIC0gb2Zmc2V0LnRvcCBcclxuICAgIH1cclxuXHJcbiMgY3JlYXRlIGh0bWwgdGFibGUgYnkganMgbWF0cml4XHJcbiMgbzogeyBoZWFkZXI6IGJvb2wgfVxyXG5tYWtlX3RhbGJlID0gKGFyciwgbyA9IHt9KSAtPlxyXG4gICAgdGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAndGFibGUnXHJcbiAgICBmb3IgbGluZSwgaSBpbiBhcnJcclxuICAgICAgICB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ3RyJ1xyXG4gICAgICAgIGZvciB2YWwsIGogaW4gbGluZVxyXG4gICAgICAgICAgICB0ID0gaWYgby5oZWFkZXIgYW5kIGkgPT0gMCB0aGVuICd0aCcgZWxzZSAndGQnXHJcbiAgICAgICAgICAgIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IHRcclxuICAgICAgICAgICAgdmFsID0gYXJyW2ldW2pdXHJcbiAgICAgICAgICAgIGlmIF8uaXNTdHJpbmcgdmFsXHJcbiAgICAgICAgICAgICAgICBjZWxsLmlubmVySFRNTCA9IHZhbFxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkIHZhbFxyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCBjZWxsXHJcbiAgICAgICAgdGJsLmFwcGVuZENoaWxkIHRyXHJcbiAgICByZXR1cm4gdGJsXHJcblxyXG4jID09PT09IEdyYXBoaWNzID09PT09XHJcbmRyYXdfbGluZSA9IChjdHgsIGEsIGIpIC0+XHJcbiAgICBjdHguYmVnaW5QYXRoKClcclxuICAgIGN0eC5tb3ZlVG8gYS54LCBhLnlcclxuICAgIGN0eC5saW5lVG8gYi54LCBiLnlcclxuICAgIGN0eC5zdHJva2UoKVxyXG5cclxuZHJhd19jaXJjbGVfd2l0aF90ZXh0ID0gKGN0eCwgeCwgeSwgciwgdGV4dCwgbykgLT5cclxuICAgIGN0eC5mb250ID0gXCIje28uZm9udHN6fXB4ICN7by5mb250RmFtaWx5fVwiXHJcbiAgICBjdHguYmVnaW5QYXRoKClcclxuICAgIGN0eC5hcmMgeCwgeSwgciwgMCwgMiAqIE1hdGguUElcclxuICAgIGN0eC5maWxsU3R5bGUgPSBvLmNpcmNsZUNvbG9yXHJcbiAgICBjdHguZmlsbCgpXHJcbiAgICBjdHguZmlsbFN0eWxlID0gby50ZXh0Q29sb3JcclxuICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJ1xyXG4gICAgY3R4LnRleHRCYXNlTGluZSA9ICdtaWRkbGUnXHJcbiAgICBjdHguZmlsbFRleHQgdGV4dCwgeCwgeSArIG8uZm9udHN6LzRcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICMgbWF0aCB1dGlsc1xyXG4gICAgZGlzdCwgdmVjMlxyXG4gICAgIyBodG1sIHV0aWxzXHJcbiAgICBnZXRfbW91c2Vwb3NfaW5fZWxlbWVudCwgbWFrZV90YWxiZVxyXG4gICAgIyBHcmFwaGljc1xyXG4gICAgZHJhd19saW5lLCBkcmF3X2NpcmNsZV93aXRoX3RleHRcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3V0aWxzLmNvZmZlZVxuICoqLyIsIlxyXG51dGlscyA9IHJlcXVpcmUgJy4vdXRpbHMnXHJcblxyXG5cclxuRk9OVFNaID0gMjBcclxuUkFESUlVUyA9IEZPTlRTWlxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gXHJcbmNsYXNzIEdyYXBoRHJhd2VyXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yOiAoQGdyYXBoLCBAY3R4KSAtPlxyXG5cclxuICAgICMgPT09IFZFUlRJQ0VTID09PSBcclxuICAgIGdldF92ZXJ0ZXhfYnl4eTogKHBvcykgLT5cclxuICAgICAgICBmb3IgbmFtZSwgaW5mbyBvZiBAZ3JhcGgudmluZm9cclxuICAgICAgICAgICAgcmV0dXJuIG5hbWUgaWYgdXRpbHMuZGlzdChwb3MsIGluZm8pIDwgUkFESUlVU1xyXG5cclxuICAgIG1vdmVfdmVydGV4OiAodmVydGV4X25hbWUsIG5ld19wb3MpIC0+XHJcbiAgICAgICAgQGdyYXBoLnNldF92aW5mbyB2ZXJ0ZXhfbmFtZSwgbmV3X3Bvc1xyXG5cclxuICAgICMgPT09IFJFTkRFUiA9PT1cclxuICAgIGRyYXdfbGlua3M6ICgpIC0+XHJcbiAgICAgICAgZm9yIGwgaW4gQGdyYXBoLmxpbmtzXHJcbiAgICAgICAgICAgIGEgPSBAZ3JhcGguZ2V0X3ZpbmZvIGwuZnJvbVxyXG4gICAgICAgICAgICBiID0gQGdyYXBoLmdldF92aW5mbyBsLnRvXHJcbiAgICAgICAgICAgIHV0aWxzLmRyYXdfbGluZSBAY3R4LCBhLCBiXHJcblxyXG4gICAgZHJhd192ZXJ0aWNlczogKCkgLT5cclxuICAgICAgICBmb3IgbmFtZSwgaW5mbyBvZiBAZ3JhcGgudmluZm9cclxuICAgICAgICAgICAgdGV4dENvbG9yID0gaWYgQGdyYXBoLmlzX3Jvb3QgbmFtZSB0aGVuICdyZWQnIGVsc2UgJ3doaXRlJ1xyXG4gICAgICAgICAgICB1dGlscy5kcmF3X2NpcmNsZV93aXRoX3RleHQoXHJcbiAgICAgICAgICAgICAgICBAY3R4LCBpbmZvLngsIGluZm8ueSwgUkFESUlVUywgbmFtZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRzejogRk9OVFNaLCBmb250RmFtaWx5OiAnTW9ub3NwYWNlJyxcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGVDb2xvcjogJ2JsYWNrJywgdGV4dENvbG9yOiB0ZXh0Q29sb3JcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgIHJlbmRlcjogKCkgLT5cclxuICAgICAgICBAY3R4LnNhdmUoKVxyXG4gICAgICAgIEBkcmF3X2xpbmtzKClcclxuICAgICAgICBAZHJhd192ZXJ0aWNlcygpXHJcbiAgICAgICAgQGN0eC5yZXN0b3JlKClcclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vR3JhcGhEcmF3ZXIuY29mZmVlXG4gKiovIiwiXHJcbiMgVE9ETzog0LHQu9C+0LrQuNGA0L7QstC60LAg0Lgg0YDQsNC30LHQu9C+0LrQuNGA0L7QstC60LAgY2FsbF9jaGFuZ2VkXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFxyXG5jbGFzcyBHcmFwaFxyXG4gICAgY29uc3RydWN0b3I6IC0+XHJcbiAgICAgICAgQHZlcnRpY2VzID0gW11cclxuICAgICAgICBAbGlua3MgPSBbXVxyXG4gICAgICAgIEBtYXAgPSB7fVxyXG4gICAgICAgIEB2aW5mbyA9IHt9ICMgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBmb3IgdmVydGV4XHJcbiAgICAgICAgQGNoYW5nZV9saXN0ZW5lcnMgPSBbXVxyXG4gICAgICAgIEBmcmVlbmFtZXMgPSBbXVxyXG4gICAgICAgIEByb290ID0gbnVsbFxyXG4gICAgICAgIEBpc19jaGFuZ2VzX2xvY2sgPSBmYWxzZVxyXG4gICAgICAgIEBpc191cGRhdGVkID0gZmFsc2VcclxuXHJcbiAgICAjID09PSBPVEhFUiA9PT09XHJcbiAgICAjIHVwZGF0ZSBhbGwgaW5mbyBpbnRvIHRoaXMgZ3JhcGhcclxuICAgIHVwZGF0ZTogLT5cclxuICAgICAgICByZXR1cm4gaWYgQGlzX3VwZGF0ZWRcclxuICAgICAgICBmb3IgdiBpbiBAdmVydGljZXNcclxuICAgICAgICAgICAgQHZpbmZvW3ZdLmJmcyA9IEBtYWtlX2Jmc19pbmZvIHZcclxuICAgICAgICBAaXNfdXBkYXRlZCA9IGZhbHNlXHJcblxyXG4gICAgaXNfcm9vdDogKHYpIC0+IHYgPT0gQHJvb3RcclxuICAgIHNldF9yb290OiAocikgLT4gXHJcbiAgICAgICAgcmV0dXJuIGlmIHIgPT0gQHJvb3RcclxuICAgICAgICBAcm9vdCA9IHJcclxuICAgICAgICBAY2hhbmdlZCgpXHJcblxyXG4gICAgbGVhdmVzOiAocm9vdCA9IEByb290KSAtPlxyXG4gICAgICAgIEB1cGRhdGUoKVxyXG4gICAgICAgIHJlcyA9IFtdXHJcbiAgICAgICAgcm9vdGJmcyA9IEB2aW5mb1tyb290XS5iZnNcclxuICAgICAgICBmb3IgdSBpbiBAdmVydGljZXNcclxuICAgICAgICAgICAgaWYgcm9vdGJmc1t1XS5zdWJ2ZXJ0aWNlcy5sZW5ndGggPT0gMFxyXG4gICAgICAgICAgICAgICAgcmVzLnB1c2ggdVxyXG4gICAgICAgIHJldHVybiByZXNcclxuXHJcbiAgICBtYWtlX2Jmc19pbmZvOiAocykgLT5cclxuICAgICAgICBxID0gW3NdXHJcbiAgICAgICAgdXNlZCA9IHt9XHJcbiAgICAgICAgdXNlZFtzXSA9IHRydWVcclxuICAgICAgICByZXMgPSB7fVxyXG4gICAgICAgIHJlc1t1XSA9IHt9IGZvciB1IGluIEB2ZXJ0aWNlc1xyXG4gICAgICAgIHJlc1tzXS5kaXN0ID0gMFxyXG4gICAgICAgIHJlc1tzXS5zdWJ2ZXJ0aWNlcyA9IFtdXHJcbiAgICAgICAgd2hpbGUgcS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgIHYgPSBxLnNoaWZ0KClcclxuICAgICAgICAgICAgcmVzW3ZdLnN1YnZlcnRpY2VzID0gW10gaWYgbm90IHJlc1t2XS5zdWJ2ZXJ0aWNlcz9cclxuICAgICAgICAgICAgZm9yIHUgaW4gQHZlcnRpY2VzXHJcbiAgICAgICAgICAgICAgICBpZiBAaXNfbGluayh2LCB1KSBhbmQgbm90IHVzZWRbdV1cclxuICAgICAgICAgICAgICAgICAgICByZXNbdl0uc3VidmVydGljZXMucHVzaCB1XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzW3VdLmRpc3QgPSByZXNbdl0uZGlzdCArIDFcclxuICAgICAgICAgICAgICAgICAgICB1c2VkW3VdID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHEucHVzaCB1XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG5cclxuICAgIGRpc3Q6ICh1LCB2ID0gQHJvb3QpIC0+XHJcbiAgICAgICAgcmV0dXJuIGlmIG5vdCBAaXNfdmVydGV4KHUpIG9yIG5vdCBAaXNfdmVydGV4KHYpXHJcbiAgICAgICAgQHVwZGF0ZSgpXHJcbiAgICAgICAgcmVzID0gQHZpbmZvW3VdLmJmc1t2XS5kaXN0XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG5cclxuICAgIGRpc3RzX3RvX2xlYXZlczogKHYpIC0+XHJcbiAgICAgICAgcmVzID0gW11cclxuICAgICAgICBmb3IgbCBpbiBAbGVhdmVzKClcclxuICAgICAgICAgICAgcmVzLnB1c2ggQGRpc3QgbCwgdlxyXG4gICAgICAgIHJldHVybiByZXNcclxuXHJcbiAgICBuZXh0X3ZlcnRpY2VzOiAodikgLT5cclxuICAgICAgICByZXR1cm4gQHZpbmZvW0Byb290XS5iZnNbdl0uc3VidmVydGljZXNcclxuXHJcbiAgICBwcmV2aW91c192ZXJ0aWNlczogKHYpIC0+XHJcbiAgICAgICAgcmVzID0gW11cclxuICAgICAgICByb290YmZzID0gQHZpbmZvW0Byb290XS5iZnNcclxuICAgICAgICBmb3IgdSBpbiBAdmVydGljZXNcclxuICAgICAgICAgICAgaWYgdiBpbiByb290YmZzW3VdLnN1YnZlcnRpY2VzXHJcbiAgICAgICAgICAgICAgICByZXMucHVzaCB1XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG5cclxuICAgIGludmFyaWFudDM6IChzZXAgPSAnLCAnKSAtPlxyXG4gICAgICAgIHJlcyA9IHt9XHJcbiAgICAgICAgZm9yIHYgaW4gQHZlcnRpY2VzXHJcbiAgICAgICAgICAgIHQgPSBbXVxyXG4gICAgICAgICAgICB0WzBdID0gQGRpc3QgdlxyXG4gICAgICAgICAgICB0WzFdID0gQHByZXZpb3VzX3ZlcnRpY2VzKHYpLmxlbmd0aFxyXG4gICAgICAgICAgICB0WzJdID0gQG5leHRfdmVydGljZXModikubGVuZ3RoXHJcbiAgICAgICAgICAgIHRbM10gPSAnKCcgKyBAZGlzdHNfdG9fbGVhdmVzKHYpLmpvaW4oc2VwKSArICcpJ1xyXG4gICAgICAgICAgICByZXNbdl0gPSB0LmpvaW4gc2VwXHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG5cclxuICAgIGludmFyaWFudDNfYXNfc3RyOiAtPlxyXG4gICAgICAgIHJldHVybiBfLnZhbHVlcyhAaW52YXJpYW50MygnLCcpKS5zb3J0KCkuam9pbiAnOydcclxuXHJcbiAgICAjID09PSBDSEFOR0VTID09PVxyXG4gICAgb25fY2hhbmdlOiAoY2FsbGJhY2spIC0+IFxyXG4gICAgICAgIEBjaGFuZ2VfbGlzdGVuZXJzLnB1c2ggY2FsbGJhY2tcclxuXHJcbiAgICBjaGFuZ2VkOiAtPiBcclxuICAgICAgICBAaXNfdXBkYXRlZCA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIGlmIEBpc19jaGFuZ2VzX2xvY2tcclxuICAgICAgICBmb3IgY2FsbGJhY2sgaW4gQGNoYW5nZV9saXN0ZW5lcnNcclxuICAgICAgICAgICAgY2FsbGJhY2sodGhpcylcclxuXHJcbiAgICBsb2NrX2NoYW5nZXM6IC0+XHJcbiAgICAgICAgQGlzX2NoYW5nZXNfbG9jayA9IHRydWVcclxuXHJcbiAgICB1bmxvY2tfY2hhbmdlczogLT5cclxuICAgICAgICBAaXNfY2hhbmdlc19sb2NrID0gZmFsc2VcclxuXHJcbiAgICAjID09PSBWRVJUSUNFUyA9PT0gXHJcbiAgICBnZW5lcmF0ZV9uYW1lOiAtPlxyXG4gICAgICAgIEBmcmVlbmFtZXMuc29ydCAoYSwgYikgLT4gYSAtIGJcclxuICAgICAgICByZXMgPSBcIlwiXHJcbiAgICAgICAgd2hpbGUgQGZyZWVuYW1lcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgIHYgPSBcIlwiICsgQGZyZWVuYW1lcy5zaGlmdCgpXHJcbiAgICAgICAgICAgIHJldHVybiB2IGlmIG5vdCBAaXNfdmVydGV4IHZcclxuICAgICAgICByZXR1cm4gXCJcIiArIEBjb3VudF92ZXJ0aWNlcygpXHJcblxyXG4gICAgY291bnRfdmVydGljZXM6IC0+IEB2ZXJ0aWNlcy5sZW5ndGhcclxuXHJcbiAgICBpc192ZXJ0ZXg6IChuYW1lKSAtPlxyXG4gICAgICAgIHJldHVybiBuYW1lIGluIEB2ZXJ0aWNlc1xyXG5cclxuICAgIGdldF92aW5mbzogKG5hbWUpIC0+IEB2aW5mb1tuYW1lXVxyXG5cclxuICAgIHNldF92aW5mbzogKG5hbWUsIGluZm8pIC0+XHJcbiAgICAgICAgdW5sZXNzIEB2aW5mb1tuYW1lXT9cclxuICAgICAgICAgICAgQHZpbmZvW25hbWVdID0gaW5mb1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICBAdmluZm9bbmFtZV1ba10gPSB2IGZvciBrLHYgb2YgaW5mbyBpZiBpbmZvP1xyXG5cclxuICAgIGFkZF92ZXJ0ZXg6IChuYW1lLCBpbmZvKSAtPlxyXG4gICAgICAgIEBzZXRfdmluZm8gbmFtZSwgaW5mb1xyXG4gICAgICAgIHJldHVybiBpZiBAaXNfdmVydGV4IG5hbWVcclxuICAgICAgICBAdmVydGljZXMucHVzaCBuYW1lXHJcbiAgICAgICAgQG1hcFtuYW1lXSA9IHt9XHJcbiAgICAgICAgaWYgbm90IEByb290P1xyXG4gICAgICAgICAgICBAcm9vdCA9IG5hbWVcclxuICAgICAgICBAY2hhbmdlZCgpXHJcblxyXG4gICAgZGVsX3ZlcnRleDogKG5hbWUpIC0+XHJcbiAgICAgICAgcmV0dXJuIGlmIG5vdCBAaXNfdmVydGV4KG5hbWUpXHJcblxyXG4gICAgICAgIHByZXZfbG9ja19zdGF0dXMgPSBAaXNfY2hhbmdlc19sb2NrXHJcbiAgICAgICAgQGxvY2tfY2hhbmdlcygpXHJcblxyXG4gICAgICAgIF8ucHVsbCBAdmVydGljZXMsIG5hbWVcclxuICAgICAgICBkZWxldGUgQHZpbmZvW25hbWVdXHJcbiAgICAgICAgQGZyZWVuYW1lcy5wdXNoIHBhcnNlSW50KG5hbWUpXHJcbiAgICAgICAgQGRlbF9saW5rc193aXRoX3ZlcnRleCBuYW1lXHJcbiAgICAgICAgaWYgbmFtZSA9PSBAcm9vdFxyXG4gICAgICAgICAgICBAcm9vdCA9IGlmIEB2ZXJ0aWNlcy5sZW5ndGggPiAwIHRoZW4gQHZlcnRpY2VzWzBdIGVsc2UgbnVsbFxyXG5cclxuICAgICAgICBAaXNfY2hhbmdlc19sb2NrID0gcHJldl9sb2NrX3N0YXR1c1xyXG4gICAgICAgIEBjaGFuZ2VkKClcclxuXHJcbiAgICAjID09PSBMSU5LUyA9PT0gXHJcbiAgICBjb3VudF9saW5rczogLT4gXHJcbiAgICAgICAgcmV0dXJuIEBsaW5rcy5sZW5ndGhcclxuXHJcbiAgICBfbWFrZV9saW5rOiAodjEsIHYyKSAtPlxyXG4gICAgICAgIGFyciA9IFt2MSwgdjJdLnNvcnQoKVxyXG4gICAgICAgIHJldHVybiB7IGZyb206IGFyclswXSwgdG86IGFyclsxXSB9XHJcblxyXG4gICAgYWRkX2xpbms6ICh2MSwgdjIpIC0+XHJcbiAgICAgICAgcmV0dXJuIGlmIEBpc19saW5rKHYxLCB2MilcclxuICAgICAgICBAbGlua3MucHVzaCBAX21ha2VfbGluayh2MSwgdjIpXHJcbiAgICAgICAgQG1hcFt2MV1bdjJdID0gQG1hcFt2Ml1bdjFdID0gdHJ1ZVxyXG4gICAgICAgIEBjaGFuZ2VkKClcclxuXHJcbiAgICBkZWxfbGluazogKHYxLCB2MikgLT5cclxuICAgICAgICBwID0gKGwpIC0+IChsLmZyb20gPT0gdjEgYW5kIGwudG8gPT0gdjIpIG9yIChsLmZyb20gPT0gdjIgYW5kIGwudG8gPT0gdjEpXHJcbiAgICAgICAgQGRlbF9saW5rcCBwXHJcblxyXG4gICAgZGVsX2xpbmtzX3dpdGhfdmVydGV4OiAodikgLT5cclxuICAgICAgICBwID0gKGwpIC0+IHYgaW4gXy52YWx1ZXMgbFxyXG4gICAgICAgIEBkZWxfbGlua3AgcFxyXG5cclxuICAgIGRlbF9saW5rX2Zyb21fbWFwOiAodjEsIHYyKSAtPlxyXG4gICAgICAgIEBtYXBbdjFdW3YyXSA9IEBtYXBbdjJdW3YxXSA9IGZhbHNlXHJcbiAgICAgICAgQGNoYW5nZWQoKVxyXG5cclxuICAgIGRlbF9saW5rcDogKHByZWRpY2F0ZSkgLT5cclxuICAgICAgICByZXMgPSBbXVxyXG4gICAgICAgIGZvciBsIGluIEBsaW5rc1xyXG4gICAgICAgICAgICBpZiBwcmVkaWNhdGUgbFxyXG4gICAgICAgICAgICAgICAgQGRlbF9saW5rX2Zyb21fbWFwIGwuZnJvbSwgbC50bywgZmFsc2VcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmVzLnB1c2ggbFxyXG4gICAgICAgIEBsaW5rcyA9IHJlc1xyXG4gICAgICAgIEBjaGFuZ2VkKClcclxuXHJcbiAgICBpc19saW5rOiAodjEsIHYyKSAtPlxyXG4gICAgICAgIHJldHVybiAhIUBtYXBbdjFdW3YyXVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaC5jb2ZmZWVcbiAqKi8iLCJcclxuR3JhcGggPSByZXF1aXJlICcuL0dyYXBoJ1xyXG5cclxuXHJcbiMjI1xyXG5leGFtcGxlIGZvciBidWlsZGVyMTpcclxub3B0aW9uc1xyXG4gICAgdmVydGljZXM6XHJcbiAgICAgICAgMDogeDogMTAwLCB5OiAxMDBcclxuICAgICAgICAxOiB4OiA1MCwgeTogNTBcclxuICAgICAgICAyOiB4OiAxNTAsIHk6IDUwXHJcbiAgICBsaW5rczpcclxuICAgICAgICAwOiBbMSwgMl1cclxuIyMjXHJcbm1vZHVsZS5leHBvcnRzLlxyXG5idWlsZGVyMSA9IChvcHRpb25zKSAtPlxyXG4gICAgZyA9IG5ldyBHcmFwaFxyXG4gICAgZy5hZGRfdmVydGV4IFwiXCIrbmFtZSwgaW5mbyBmb3IgbmFtZSwgaW5mbyBvZiBvcHRpb25zLnZlcnRpY2VzXHJcbiAgICBmb3IgYSwgYXJyIG9mIG9wdGlvbnMubGlua3NcclxuICAgICAgICBmb3IgYiBpbiBhcnJcclxuICAgICAgICAgICAgZy5hZGRfbGluayBcIlwiK2EsIFwiXCIrYlxyXG4gICAgcmV0dXJuIGdcclxuXHJcbm1vZHVsZS5leHBvcnRzLlxyXG5tYWtlX29wdGlvbnNfZm9yX2J1aWxkZXIxID0gKGdyYXBoKSAtPlxyXG4gICAgdmVydGljZXMgPSBfLmNsb25lIGdyYXBoLnZpbmZvXHJcbiAgICBsaW5rcyA9IHt9XHJcbiAgICBmb3Ige2Zyb20sIHRvfSBpbiBncmFwaC5saW5rc1xyXG4gICAgICAgIGxpbmtzW2Zyb21dID0gW10gaWYgbm90IGxpbmtzW2Zyb21dP1xyXG4gICAgICAgIGxpbmtzW2Zyb21dLnB1c2ggdG9cclxuICAgIHJldHVybiB7dmVydGljZXMsIGxpbmtzfVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0dyYXBoQnVpbGRlci5jb2ZmZWVcbiAqKi8iLCJcclxuR3JhcGggPSByZXF1aXJlICcuL0dyYXBoJ1xyXG51dGlscyA9IHJlcXVpcmUgJy4vdXRpbHMnXHJcbkNhbnZhc0dyYXBoQ29uc3RydWN0b3IgPSByZXF1aXJlICcuL0NhbnZhc0dyYXBoQ29uc3RydWN0b3InXHJcbkdyYXBoSW5mbyA9IHJlcXVpcmUgJy4vR3JhcGhJbmZvJ1xyXG5cclxuY291bnRlciA9IDBcclxuXHJcbm1vZHVsZS5leHBvcnRzID1cclxuY2xhc3MgR3JhcGhUYWJsZVxyXG4gICAgY29uc3RydWN0b3I6IChAY29udGFpbmVyLCBAZ3JhcGggPSBuZXcgR3JhcGgpIC0+XHJcbiAgICAgICAgQGlkID0gXCJndFwiICsgY291bnRlcisrXHJcbiAgICAgICAgZGl2X2Zvcl9jb25zdHJ1Y3RvciA9ICQoXCI8ZGl2PlwiKS5hdHRyKCdpZCcsIEBpZCArIFwiZ2JcIikuZ2V0IDBcclxuICAgICAgICBkaXZfZm9yX2dyYXBoX2luZm8gPSAkKFwiPGRpdj5cIikuYXR0cignaWQnLCBAaWQgKyBcImluZm9cIikuZ2V0IDBcclxuXHJcbiAgICAgICAgQGVsID0gdXRpbHMubWFrZV90YWxiZSBbXHJcbiAgICAgICAgICAgIFsn0KDQuNGB0YPQvdC+0Log0LPRgNCw0YTQsCcsICfQmNC90YTQvtGA0LzQsNGG0LjRjyDQviDQs9GA0LDRhNC1J10sIFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBkaXZfZm9yX2NvbnN0cnVjdG9yLCBkaXZfZm9yX2dyYXBoX2luZm9cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF0sIHsgaGVhZGVyOiB0cnVlIH1cclxuICAgICAgICAkKEBjb250YWluZXIpLmFwcGVuZCBAZWxcclxuXHJcbiAgICAgICAgQGdiID0gbmV3IENhbnZhc0dyYXBoQ29uc3RydWN0b3IgZGl2X2Zvcl9jb25zdHJ1Y3RvciwgQGdyYXBoXHJcbiAgICAgICAgQGdpID0gbmV3IEdyYXBoSW5mbyBkaXZfZm9yX2dyYXBoX2luZm8sIEBncmFwaFxyXG5cclxuICAgIHVwZGF0ZTogLT5cclxuICAgICAgICBAZ2IudXBkYXRlKCkgaWYgQGdiLnVwZGF0ZT9cclxuXHJcbiAgICByZW5kZXI6IC0+XHJcbiAgICAgICAgQGdiLnJlbmRlcigpXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0dyYXBoVGFibGUuY29mZmVlXG4gKiovIiwiXHJcblxyXG5jb3VudGVyID0gMFxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID1cclxuY2xhc3MgR3JhcGhJbmZvXHJcbiAgICBjb25zdHJ1Y3RvcjogKEBjb250YWluZXIsIEBncmFwaCA9IG5ldyBHcmFwaCkgLT5cclxuICAgICAgICBAY29udGFpbmVyID0gJChAY29udGFpbmVyKS5nZXQgMCBpZiBfLmlzU3RyaW5nIEBjb250YWluZXJcclxuICAgICAgICBAaWQgPSBcImdyYXBoaW5mb1wiICsgY291bnRlcisrXHJcbiAgICAgICAgQGVsID0gJChcIjxkaXY+XCIpLmdldCAwXHJcbiAgICAgICAgJChAY29udGFpbmVyKS5hcHBlbmQgQGVsXHJcbiAgICAgICAgQGluZm8gPVxyXG4gICAgICAgICAgICBcImxlYXZlc1wiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JvQuNGB0YLRjNGPOlwiXHJcbiAgICAgICAgICAgICAgICBmdW5jOiA9PlxyXG4gICAgICAgICAgICAgICAgICAgIEBncmFwaC5sZWF2ZXMoKS5qb2luICcsICdcclxuICAgICAgICAgICAgXCJjb3VudF92ZXJ0aWNlc1wiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JrQvtC70LjRh9C10YHRgtCy0L4g0LLQtdGA0YjQuNC9OlwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzogPT4gQGdyYXBoLmNvdW50X3ZlcnRpY2VzKClcclxuICAgICAgICAgICAgXCJjb3VudF9saW5rc1wiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JrQvtC70LjRh9C10YHRgtCy0L4g0YDQtdCx0LXRgDpcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6ID0+IEBncmFwaC5jb3VudF9saW5rcygpXHJcbiAgICAgICAgICAgIFwiaW52YXJpYW50M1wiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JjQvdCy0LDRgNC40LDQvdGCIDM6XCJcclxuICAgICAgICAgICAgICAgIGZ1bmM6ID0+IEBpbnZhcmlhbnQzKClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgZm9yIGlkLG8gb2YgQGluZm9cclxuICAgICAgICAgICAgJChAZWwpLmFwcGVuZCgkKFwiPGRpdj48dT4je28udGl0bGV9PC91PiA8c3BhbiBpZD0je0BpZCtpZH0+PC9zcGFuPjwvZGl2PlwiKSlcclxuICAgICAgICBAZ3JhcGgub25fY2hhbmdlID0+IEB1cGRhdGVfaW5mbygpXHJcbiAgICAgICAgQHVwZGF0ZV9pbmZvKClcclxuXHJcbiAgICAgICAgQGNoYW5nZV9saXN0ZW5lcnMgPSBbXVxyXG4gICAgICAgIEByZXMgPSBcIlwiXHJcblxyXG4gICAgIyA9PT09PSBJTkZPID09PT09XHJcbiAgICBpbnZhcmlhbnQzOiAtPlxyXG4gICAgICAgIHJlcyA9IEpTT04uc3RyaW5naWZ5IEBncmFwaC5pbnZhcmlhbnQzKCksIG51bGwsIDJcclxuICAgICAgICByZXR1cm4gJChcIjxwcmU+I3tyZXN9PC9wcmU+XCIpXHJcblxyXG4gICAgdXBkYXRlX2luZm86IC0+XHJcbiAgICAgICAgQGdyYXBoLnVwZGF0ZSgpXHJcbiAgICAgICAgZm9yIGlkLCBvIG9mIEBpbmZvXHJcbiAgICAgICAgICAgIGlkID0gQGlkICsgaWRcclxuICAgICAgICAgICAgcmVzID0gby5mdW5jKClcclxuICAgICAgICAgICAgJCgnIycraWQpLmh0bWwgXCJcIlxyXG4gICAgICAgICAgICAkKCcjJytpZCkuYXBwZW5kIHJlc1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0dyYXBoSW5mby5jb2ZmZWVcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9