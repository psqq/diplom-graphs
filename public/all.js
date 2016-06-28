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
	    res = {};
	    res.dists_to_leaves = this.graph.dists_to_leaves();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmJlOTI3NjM5YjAyZDI3MTU2YzgiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vQ2FudmFzR3JhcGhDb25zdHJ1Y3Rvci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMuY29mZmVlIiwid2VicGFjazovLy8uL0dyYXBoRHJhd2VyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vR3JhcGhCdWlsZGVyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaFRhYmxlLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9HcmFwaEluZm8uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDckNBOztBQUFBLDBCQUF5QixvQkFBUSxDQUFSOztBQUN6QixnQkFBZSxvQkFBUSxDQUFSOztBQUNmLGNBQWEsb0JBQVEsQ0FBUjs7QUFHYixvQkFBbUI7O0FBR25CLFlBQVc7QUFDUDtHQUFBLE9BQU8sSUFBSSxDQUFDLEdBQUw7R0FDUCxLQUFLO0dBQ0wsT0FBTztBQUNIO0tBQUEsU0FBUyxJQUFJLENBQUMsR0FBTCxLQUFhO0tBQ3RCLE9BQU8sSUFBSSxDQUFDLEdBQUw7S0FDUCxTQUFTLElBQUksQ0FBQyxHQUFMLENBQVMsTUFBVCxFQUFpQixJQUFqQjtBQUNULFlBQU0sU0FBUyxDQUFmO0FBQ0k7O1NBQ0ksSUFBaUIsa0JBQWpCO1dBQUEsR0FBRyxDQUFDLE1BQUosQ0FBVyxFQUFYOztBQURKO09BRUEsVUFBVTtLQUhkO0FBSUE7O09BQ0ksSUFBZ0Isa0JBQWhCO1NBQUEsR0FBRyxDQUFDLE1BQUo7O0FBREo7WUFFQSxzQkFBc0IsSUFBdEI7R0FWRztVQVdQLHNCQUFzQixJQUF0QjtBQWRPOztBQWdCWDs7QUFLQSxNQUFLLFlBQVksQ0FBQyxRQUFiLENBQXNCO0dBQUMsWUFBVztLQUFDLEtBQUk7T0FBQyxLQUFJLEdBQUw7T0FBUyxLQUFJLFFBQWI7TUFBTDtLQUE0QixLQUFJO09BQUMsS0FBSSxFQUFMO09BQVEsS0FBSSxRQUFaO01BQWhDO0tBQXNELEtBQUk7T0FBQyxLQUFJLEdBQUw7T0FBUyxLQUFJLFFBQWI7TUFBMUQ7S0FBaUYsS0FBSTtPQUFDLEtBQUksRUFBTDtPQUFRLEtBQUksUUFBWjtPQUFxQixRQUFPLEdBQTVCO01BQXJGO0tBQXNILEtBQUk7T0FBQyxLQUFJLEdBQUw7T0FBUyxLQUFJLFFBQWI7T0FBc0IsUUFBTyxHQUE3QjtNQUExSDtLQUE0SixLQUFJO09BQUMsS0FBSSxHQUFMO09BQVMsS0FBSSxRQUFiO09BQXNCLFFBQU8sR0FBN0I7TUFBaEs7S0FBa00sS0FBSTtPQUFDLEtBQUksR0FBTDtPQUFTLEtBQUksUUFBYjtPQUFzQixRQUFPLEdBQTdCO01BQXRNO0tBQXdPLEtBQUk7T0FBQyxLQUFJLEdBQUw7T0FBUyxLQUFJLFFBQWI7T0FBc0IsUUFBTyxHQUE3QjtNQUE1TztLQUE4USxLQUFJO09BQUMsS0FBSSxHQUFMO09BQVMsS0FBSSxRQUFiO09BQXNCLFFBQU8sR0FBN0I7TUFBbFI7S0FBb1QsS0FBSTtPQUFDLEtBQUksRUFBTDtPQUFRLEtBQUksT0FBWjtPQUFvQixRQUFPLEdBQTNCO01BQXhUO0tBQXdWLE1BQUs7T0FBQyxLQUFJLEdBQUw7T0FBUyxLQUFJLE9BQWI7T0FBcUIsUUFBTyxJQUE1QjtNQUE3VjtLQUErWCxNQUFLO09BQUMsS0FBSSxHQUFMO09BQVMsS0FBSSxPQUFiO09BQXFCLFFBQU8sSUFBNUI7TUFBcFk7S0FBc2EsTUFBSztPQUFDLEtBQUksR0FBTDtPQUFTLEtBQUksUUFBYjtPQUFzQixRQUFPLElBQTdCO01BQTNhO0tBQThjLE1BQUs7T0FBQyxLQUFJLEdBQUw7T0FBUyxLQUFJLFFBQWI7T0FBc0IsUUFBTyxJQUE3QjtNQUFuZDtLQUFzZixNQUFLO09BQUMsS0FBSSxHQUFMO09BQVMsS0FBSSxRQUFiO09BQXNCLFFBQU8sSUFBN0I7TUFBM2Y7S0FBOGhCLE1BQUs7T0FBQyxLQUFJLEdBQUw7T0FBUyxLQUFJLE9BQWI7T0FBcUIsUUFBTyxJQUE1QjtNQUFuaUI7S0FBcWtCLE1BQUs7T0FBQyxLQUFJLEdBQUw7T0FBUyxLQUFJLE9BQWI7T0FBcUIsUUFBTyxJQUE1QjtNQUExa0I7SUFBWjtHQUF5bkIsU0FBUTtLQUFDLEtBQUksQ0FBQyxHQUFELEVBQUssR0FBTCxDQUFMO0tBQWUsS0FBSSxDQUFDLEdBQUQsRUFBSyxHQUFMLENBQW5CO0tBQTZCLEtBQUksQ0FBQyxHQUFELENBQWpDO0tBQXVDLEtBQUksQ0FBQyxHQUFELENBQTNDO0tBQWlELEtBQUksQ0FBQyxHQUFELEVBQUssR0FBTCxDQUFyRDtLQUErRCxLQUFJLENBQUMsR0FBRCxDQUFuRTtLQUF5RSxNQUFLLENBQUMsR0FBRCxDQUE5RTtLQUFvRixNQUFLLENBQUMsR0FBRCxDQUF6RjtLQUErRixNQUFLLENBQUMsR0FBRCxFQUFLLElBQUwsQ0FBcEc7S0FBK0csTUFBSyxDQUFDLElBQUQsQ0FBcEg7S0FBMkgsTUFBSyxDQUFDLElBQUQsQ0FBaEk7S0FBdUksTUFBSyxDQUFDLElBQUQsQ0FBNUk7SUFBam9CO0VBQXRCOztBQUNMLE1BQUssWUFBWSxDQUFDLFFBQWIsQ0FBc0I7R0FBQyxZQUFXO0tBQUMsS0FBSTtPQUFDLEtBQUksR0FBTDtPQUFTLEtBQUksT0FBYjtPQUFxQixRQUFPLEdBQTVCO01BQUw7S0FBc0MsS0FBSTtPQUFDLEtBQUksRUFBTDtPQUFRLEtBQUksT0FBWjtPQUFvQixRQUFPLEdBQTNCO01BQTFDO0tBQTBFLEtBQUk7T0FBQyxLQUFJLEdBQUw7T0FBUyxLQUFJLE9BQWI7T0FBcUIsUUFBTyxHQUE1QjtNQUE5RTtLQUErRyxLQUFJO09BQUMsS0FBSSxFQUFMO09BQVEsS0FBSSxPQUFaO09BQW9CLFFBQU8sR0FBM0I7TUFBbkg7S0FBbUosS0FBSTtPQUFDLEtBQUksR0FBTDtPQUFTLEtBQUksT0FBYjtPQUFxQixRQUFPLEdBQTVCO01BQXZKO0tBQXdMLEtBQUk7T0FBQyxLQUFJLEVBQUw7T0FBUSxLQUFJLE1BQVo7T0FBbUIsUUFBTyxHQUExQjtNQUE1TDtLQUEyTixLQUFJO09BQUMsS0FBSSxHQUFMO09BQVMsS0FBSSxPQUFiO09BQXFCLFFBQU8sR0FBNUI7TUFBL047S0FBZ1EsS0FBSTtPQUFDLEtBQUksR0FBTDtPQUFTLEtBQUksTUFBYjtPQUFvQixRQUFPLEdBQTNCO01BQXBRO0tBQW9TLEtBQUk7T0FBQyxLQUFJLEdBQUw7T0FBUyxLQUFJLE1BQWI7T0FBb0IsUUFBTyxHQUEzQjtNQUF4UztLQUF3VSxLQUFJO09BQUMsS0FBSSxHQUFMO09BQVMsS0FBSSxPQUFiO09BQXFCLFFBQU8sR0FBNUI7TUFBNVU7SUFBWjtHQUEwWCxTQUFRO0tBQUMsS0FBSSxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxDQUFMO0tBQW1CLEtBQUksQ0FBQyxHQUFELENBQXZCO0tBQTZCLEtBQUksQ0FBQyxHQUFELENBQWpDO0tBQXVDLEtBQUksQ0FBQyxHQUFELENBQTNDO0tBQWlELEtBQUksQ0FBQyxHQUFELEVBQUssR0FBTCxDQUFyRDtLQUErRCxLQUFJLENBQUMsR0FBRCxDQUFuRTtJQUFsWTtFQUF0Qjs7QUFFTCxNQUFLLENBQUssZUFBVyxNQUFYLEVBQW1CLEVBQW5CLENBQUwsRUFBaUMsZUFBVyxNQUFYLEVBQW1CLEVBQW5CLENBQWpDOztBQUNMLG9CQUFtQixnQkFBZ0IsQ0FBQyxNQUFqQixDQUF3QixFQUF4Qjs7QUFHbkIsT0FBTSxTQUFDLENBQUQ7VUFBTyxPQUFPLENBQUMsR0FBUixDQUFZLElBQUksQ0FBQyxTQUFMLENBQWUsWUFBWSxDQUFDLHlCQUFiLENBQXVDLEVBQUcsR0FBRSxDQUFDLEtBQTdDLENBQWYsQ0FBWjtBQUFQOztBQUlOLEVBQUMsQ0FBQyxRQUFGLENBQVcsTUFBWCxFQUFtQjtHQUFDLDBCQUFEO0dBQWUsUUFBZjtHQUFvQixNQUFwQjtFQUFuQjs7Ozs7OztBQ3hDQTs7QUFBQSxTQUFRLG9CQUFRLENBQVI7O0FBQ1IsZUFBYyxvQkFBUSxDQUFSOztBQUNkLFNBQVEsb0JBQVEsQ0FBUjs7QUFFUixPQUFNLENBQUMsT0FBUCxHQUNNO0dBRVcsZ0NBQUMsU0FBRCxFQUFhLEtBQWI7S0FBQyxJQUFDLGFBQUQ7S0FBWSxJQUFDLHlCQUFELFFBQVMsSUFBSTtLQUNuQyxJQUFDLElBQUQsR0FBTyxFQUFFLFVBQUYsQ0FBYSxDQUFDLEdBQWQsQ0FBa0IsQ0FBbEI7S0FDUCxJQUFDLElBQUQsR0FBTyxJQUFDLElBQUcsQ0FBQyxVQUFMLENBQWdCLElBQWhCO0tBQ1AsSUFBQyxJQUFHLENBQUMsS0FBTCxHQUFhLElBQUMsSUFBRyxDQUFDLE1BQUwsR0FBYztLQUMzQixJQUFDLE1BQUQsR0FBUztPQUNMLEdBQUcsQ0FERTtPQUNDLEdBQUcsQ0FESjtPQUVMLFFBQVEsSUFGSDs7S0FJVCxJQUFDLE1BQUQsR0FBUztLQUNULElBQUMsY0FBRDtLQUNBLEVBQUUsSUFBQyxVQUFILENBQWEsQ0FBQyxNQUFkLENBQXFCLElBQUMsSUFBdEI7S0FDQSxJQUFDLGFBQUQsR0FBb0IsZ0JBQVksSUFBQyxNQUFiLEVBQW9CLElBQUMsSUFBckI7R0FYWDs7b0NBYWIsZUFBYyxTQUFDLENBQUQ7QUFDVjtLQUFBLE1BQU0sS0FBSyxDQUFDLHVCQUFOLENBQThCLElBQUMsSUFBL0IsRUFBb0MsQ0FBcEM7S0FDTixJQUFDLE1BQUssQ0FBQyxDQUFQLEdBQVcsR0FBRyxDQUFDO1lBQ2YsSUFBQyxNQUFLLENBQUMsQ0FBUCxHQUFXLEdBQUcsQ0FBQztHQUhMOztvQ0FLZCxnQkFBZTtLQUNYLEVBQUUsSUFBQyxJQUFILENBQU8sQ0FBQyxRQUFSLENBQWlCO2NBQUE7Z0JBQUcsS0FBQyxNQUFELEdBQVM7T0FBWjtLQUFBLFFBQWpCO0tBQ0EsRUFBRSxJQUFDLElBQUgsQ0FBTyxDQUFDLFNBQVIsQ0FBa0I7Y0FBQTtnQkFBRyxLQUFDLE1BQUQsR0FBUztPQUFaO0tBQUEsUUFBbEI7S0FFQSxFQUFFLElBQUMsSUFBSCxDQUFPLENBQUMsU0FBUixDQUFrQjtjQUFBLFNBQUMsQ0FBRDtBQUNkO1NBQUEsS0FBQyxhQUFELENBQWMsQ0FBZDtTQUNBLElBQUcsS0FBQyxNQUFLLENBQUMsTUFBVjtXQUNJLElBQUcsS0FBQyxNQUFLLENBQUMsUUFBUCxLQUFtQixNQUF0QjthQUNJLGNBQWMsS0FBQyxNQUFLLENBQUM7YUFDckIsS0FBQyxNQUFLLENBQUMsU0FBUCxDQUFpQixXQUFqQixFQUE4QixLQUFLLENBQUMsSUFBTixDQUFXLEtBQUMsTUFBSyxDQUFDLENBQWxCLEVBQXFCLEtBQUMsTUFBSyxDQUFDLENBQTVCLENBQTlCLEVBRko7O1dBR0EsSUFBRyxLQUFDLE1BQUssQ0FBQyxRQUFQLEtBQW1CLE1BQXRCO29CQUNJLEtBQUMsTUFBSyxDQUFDLE9BQVAsR0FBaUIsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxLQUFLLENBQUMsSUFBTixDQUFXLEtBQUMsTUFBSyxDQUFDLENBQWxCLEVBQXFCLEtBQUMsTUFBSyxDQUFDLENBQTVCLENBQVIsRUFEckI7WUFKSjs7T0FGYztLQUFBLFFBQWxCO0tBU0EsRUFBRSxJQUFDLElBQUgsQ0FBTyxDQUFDLFNBQVIsQ0FBa0I7Y0FBQSxTQUFDLENBQUQ7QUFDZDtTQUFBLFFBQVEsS0FBQyxhQUFZLENBQUMsZUFBZCxDQUE4QixLQUFDLE1BQS9CO1NBQ1IsSUFBRyxtQkFBVyw0QkFBWCxJQUE4QixLQUFDLE1BQUssQ0FBQyxRQUFQLEtBQW1CLE1BQXBEO1dBQ0ksS0FBQyxNQUFLLENBQUMsUUFBUCxDQUFnQixLQUFDLE1BQUssQ0FBQyxNQUF2QixFQUErQixLQUEvQjtBQUNBLGtCQUZKOztTQUdBLEtBQUMsTUFBSyxDQUFDLE1BQVAsR0FBZ0I7Z0JBQ2hCLEtBQUMsTUFBSyxDQUFDLFFBQVAsR0FBa0I7T0FOSjtLQUFBLFFBQWxCO0tBUUEsRUFBRSxJQUFDLElBQUgsQ0FBTyxDQUFDLE9BQVIsQ0FBZ0I7Y0FBQSxTQUFDLENBQUQ7U0FDWixLQUFDLE1BQUssQ0FBQyxNQUFQLEdBQWdCO2dCQUNoQixLQUFDLE1BQUssQ0FBQyxRQUFQLEdBQWtCO09BRk47S0FBQSxRQUFoQjtZQUlBLEVBQUUsUUFBRixDQUFXLENBQUMsT0FBWixDQUFvQjtjQUFBLFNBQUMsQ0FBRDtBQUNoQjtTQUFBLEtBQWMsS0FBQyxNQUFmO0FBQUE7O1NBQ0EsS0FBSyxNQUFNLENBQUMsWUFBUCxDQUFvQixDQUFDLENBQUMsT0FBdEIsQ0FBOEIsQ0FBQyxXQUEvQjtBQUNMLGlCQUFPLEVBQVA7QUFBQSxnQkFFUyxHQUZUO2FBR1EsUUFBUSxLQUFDLGFBQVksQ0FBQyxlQUFkLENBQThCLEtBQUMsTUFBL0I7b0JBQ1IsS0FBQyxNQUFLLENBQUMsUUFBUCxDQUFnQixLQUFoQjtBQUpSLGdCQU9TLEdBUFQ7YUFRUSxPQUFPLEtBQUMsTUFBSyxDQUFDLGFBQVA7b0JBQ1AsS0FBQyxNQUFLLENBQUMsVUFBUCxDQUFrQixJQUFsQixFQUF3QjtlQUNwQixHQUFHLEtBQUMsTUFBSyxDQUFDLENBRFU7ZUFDUCxHQUFHLEtBQUMsTUFBSyxDQUFDLENBREg7ZUFDTSxVQUROO2NBQXhCO0FBVFIsZ0JBY1MsR0FkVDthQWVRLE1BQU0sT0FBTyxpQkFBUDthQUNOLE9BQU8sQ0FBQyxDQUFDLElBQUYsQ0FBTyxHQUFHLENBQUMsS0FBSixDQUFVLElBQVYsQ0FBUCxFQUF3QixFQUF4QjthQUNQLFNBQVMsU0FBQyxDQUFEO3NCQUFPLE9BQU8sQ0FBQyxHQUFSLENBQVksQ0FBWjthQUFQO0FBQ1QscUJBQU8sSUFBSyxHQUFaO0FBQUEsb0JBRVMsTUFGVDtpQkFHUSxJQUFTLElBQUksQ0FBQyxNQUFMLEdBQWMsQ0FBdkI7QUFBQTs7d0JBQ0EsT0FBTyxpQ0FBaUMsS0FBQyxNQUFLLENBQUMsSUFBUCxDQUFZLElBQUssR0FBakIsRUFBcUIsSUFBSyxHQUExQixDQUF4QztBQUpSLG9CQU1TLFFBTlQ7d0JBT1EsT0FBTyxLQUFDLE1BQUssQ0FBQyxNQUFQLENBQWMsSUFBSyxHQUFuQixDQUFQO0FBUFI7QUFKQztBQWRULGdCQTRCUyxHQTVCVDthQTZCUSxJQUFHLENBQUMsQ0FBQyxRQUFMO0FBQ0k7QUFBQTs7aUJBQ0ksS0FBQyxNQUFLLENBQUMsVUFBUCxDQUFrQixDQUFsQjtBQURKO0FBRUEsc0JBSEo7O2FBSUEsUUFBUSxLQUFDLGFBQVksQ0FBQyxlQUFkLENBQThCLEtBQUMsTUFBL0I7b0JBQ1IsS0FBQyxNQUFLLENBQUMsVUFBUCxDQUFrQixLQUFsQjtBQWxDUixnQkFxQ1MsR0FyQ1Q7YUFzQ1EsUUFBUSxLQUFDLGFBQVksQ0FBQyxlQUFkLENBQThCLEtBQUMsTUFBL0I7YUFDUixLQUFDLE1BQUssQ0FBQyxNQUFQLEdBQWdCO29CQUNoQixLQUFDLE1BQUssQ0FBQyxRQUFQLEdBQWtCO0FBeEMxQixnQkEyQ1MsR0EzQ1Q7b0JBNENRLE9BQU8sQ0FBQyxHQUFSLENBQVksS0FBQyxNQUFiO0FBNUNSO09BSGdCO0tBQUEsUUFBcEI7R0F6Qlc7O29DQTBFZixTQUFRLFNBQUMsRUFBRDs7b0NBRVIsZ0JBQWU7QUFDWDtLQUFBLElBQUcsK0JBQW1CLElBQUMsTUFBSyxDQUFDLFFBQVAsS0FBbUIsTUFBdEMsSUFBaUQsNEJBQXBEO09BQ0ksSUFBSSxJQUFDLE1BQUssQ0FBQyxTQUFQLENBQWlCLElBQUMsTUFBSyxDQUFDLE1BQXhCO2NBQ0osS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsSUFBQyxJQUFqQixFQUFzQixDQUF0QixFQUF5QixJQUFDLE1BQTFCLEVBRko7O0dBRFc7O29DQUtmLFNBQVE7S0FDSixJQUFDLElBQUcsQ0FBQyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixJQUFDLElBQUcsQ0FBQyxLQUExQixFQUFpQyxJQUFDLElBQUcsQ0FBQyxNQUF0QztLQUNBLElBQUMsY0FBRDtZQUNBLElBQUMsYUFBWSxDQUFDLE1BQWQ7R0FISTs7Ozs7Ozs7Ozs7QUN6R1o7O0FBQUEsUUFBTyxTQUFDLENBQUQsRUFBSSxDQUFKO1VBQVUsSUFBSSxDQUFDLElBQUwsQ0FBVSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQUMsQ0FBQyxDQUFGLEdBQU0sQ0FBQyxDQUFDLENBQWpCLEVBQW9CLENBQXBCLElBQXlCLElBQUksQ0FBQyxHQUFMLENBQVMsQ0FBQyxDQUFDLENBQUYsR0FBTSxDQUFDLENBQUMsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBbkM7QUFBVjs7QUFDUCxRQUFPLFNBQUMsQ0FBRCxFQUFJLENBQUo7VUFBVTtLQUFDLElBQUQ7S0FBSSxJQUFKOztBQUFWOztBQUdQLDJCQUEwQixTQUFDLEVBQUQsRUFBSyxDQUFMO0FBQ3RCO0dBQUEsU0FBUyxFQUFFLEVBQUYsQ0FBSyxDQUFDLE1BQU47QUFDVCxVQUFPO0tBQ0gsR0FBRyxDQUFDLENBQUMsS0FBRixHQUFVLE1BQU0sQ0FBQyxJQURqQjtLQUVILEdBQUcsQ0FBQyxDQUFDLEtBQUYsR0FBVSxNQUFNLENBQUMsR0FGakI7O0FBRmU7O0FBUzFCLGNBQWEsU0FBQyxHQUFELEVBQU0sQ0FBTjtBQUNUOztLQURlLElBQUk7O0dBQ25CLE1BQU0sUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkI7QUFDTjs7S0FDSSxLQUFLLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCO0FBQ0w7O09BQ0ksSUFBTyxDQUFDLENBQUMsTUFBRixJQUFhLE1BQUssQ0FBckIsR0FBNEIsSUFBNUIsR0FBc0M7T0FDMUMsT0FBTyxRQUFRLENBQUMsYUFBVCxDQUF1QixDQUF2QjtPQUNQLE1BQU0sR0FBSSxHQUFHO09BQ2IsSUFBRyxDQUFDLENBQUMsUUFBRixDQUFXLEdBQVgsQ0FBSDtTQUNJLElBQUksQ0FBQyxTQUFMLEdBQWlCLElBRHJCO1FBQUE7U0FHSSxJQUFJLENBQUMsV0FBTCxDQUFpQixHQUFqQixFQUhKOztPQUlBLEVBQUUsQ0FBQyxXQUFILENBQWUsSUFBZjtBQVJKO0tBU0EsR0FBRyxDQUFDLFdBQUosQ0FBZ0IsRUFBaEI7QUFYSjtBQVlBLFVBQU87QUFkRTs7QUFpQmIsYUFBWSxTQUFDLEdBQUQsRUFBTSxDQUFOLEVBQVMsQ0FBVDtHQUNSLEdBQUcsQ0FBQyxTQUFKO0dBQ0EsR0FBRyxDQUFDLE1BQUosQ0FBVyxDQUFDLENBQUMsQ0FBYixFQUFnQixDQUFDLENBQUMsQ0FBbEI7R0FDQSxHQUFHLENBQUMsTUFBSixDQUFXLENBQUMsQ0FBQyxDQUFiLEVBQWdCLENBQUMsQ0FBQyxDQUFsQjtVQUNBLEdBQUcsQ0FBQyxNQUFKO0FBSlE7O0FBTVoseUJBQXdCLFNBQUMsR0FBRCxFQUFNLENBQU4sRUFBUyxDQUFULEVBQVksQ0FBWixFQUFlLElBQWYsRUFBcUIsQ0FBckI7R0FDcEIsR0FBRyxDQUFDLElBQUosR0FBYyxDQUFDLENBQUMsTUFBSCxHQUFVLEtBQVYsR0FBZSxDQUFDLENBQUM7R0FDOUIsR0FBRyxDQUFDLFNBQUo7R0FDQSxHQUFHLENBQUMsR0FBSixDQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixJQUFJLElBQUksQ0FBQyxFQUE3QjtHQUNBLEdBQUcsQ0FBQyxTQUFKLEdBQWdCLENBQUMsQ0FBQztHQUNsQixHQUFHLENBQUMsSUFBSjtHQUNBLEdBQUcsQ0FBQyxTQUFKLEdBQWdCLENBQUMsQ0FBQztHQUNsQixHQUFHLENBQUMsU0FBSixHQUFnQjtHQUNoQixHQUFHLENBQUMsWUFBSixHQUFtQjtVQUNuQixHQUFHLENBQUMsUUFBSixDQUFhLElBQWIsRUFBbUIsQ0FBbkIsRUFBc0IsSUFBSSxDQUFDLENBQUMsTUFBRixHQUFTLENBQW5DO0FBVG9COztBQVl4QixPQUFNLENBQUMsT0FBUCxHQUFpQjtHQUViLFVBRmE7R0FFUCxVQUZPO0dBSWIsZ0RBSmE7R0FJWSxzQkFKWjtHQU1iLG9CQU5hO0dBTUYsNENBTkU7Ozs7Ozs7O0FDakRqQjs7QUFBQSxTQUFRLG9CQUFRLENBQVI7O0FBR1IsVUFBUzs7QUFDVCxXQUFVOztBQUdWLE9BQU0sQ0FBQyxPQUFQLEdBQ007R0FFVyxxQkFBQyxLQUFELEVBQVMsR0FBVDtLQUFDLElBQUMsU0FBRDtLQUFRLElBQUMsT0FBRDtHQUFUOzt5QkFHYixrQkFBaUIsU0FBQyxHQUFEO0FBQ2I7QUFBQTtBQUFBOztPQUNJLElBQWUsS0FBSyxDQUFDLElBQU4sQ0FBVyxHQUFYLEVBQWdCLElBQWhCLElBQXdCLE9BQXZDO0FBQUEsZ0JBQU8sS0FBUDs7QUFESjtHQURhOzt5QkFJakIsY0FBYSxTQUFDLFdBQUQsRUFBYyxPQUFkO1lBQ1QsSUFBQyxNQUFLLENBQUMsU0FBUCxDQUFpQixXQUFqQixFQUE4QixPQUE5QjtHQURTOzt5QkFJYixhQUFZO0FBQ1I7QUFBQTtBQUFBO1VBQUE7O09BQ0ksSUFBSSxJQUFDLE1BQUssQ0FBQyxTQUFQLENBQWlCLENBQUMsQ0FBQyxJQUFuQjtPQUNKLElBQUksSUFBQyxNQUFLLENBQUMsU0FBUCxDQUFpQixDQUFDLENBQUMsRUFBbkI7b0JBQ0osS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsSUFBQyxJQUFqQixFQUFzQixDQUF0QixFQUF5QixDQUF6QjtBQUhKOztHQURROzt5QkFNWixnQkFBZTtBQUNYO0FBQUE7QUFBQTtVQUFBOztPQUNJLFlBQWUsSUFBQyxNQUFLLENBQUMsT0FBUCxDQUFlLElBQWYsQ0FBSCxHQUE0QixLQUE1QixHQUF1QztvQkFDbkQsS0FBSyxDQUFDLHFCQUFOLENBQ0ksSUFBQyxJQURMLEVBQ1UsSUFBSSxDQUFDLENBRGYsRUFDa0IsSUFBSSxDQUFDLENBRHZCLEVBQzBCLE9BRDFCLEVBQ21DLElBRG5DLEVBQ3lDO1NBQ2pDLFFBQVEsTUFEeUI7U0FDakIsWUFBWSxXQURLO1NBRWpDLGFBQWEsT0FGb0I7U0FFWCxXQUFXLFNBRkE7UUFEekM7QUFGSjs7R0FEVzs7eUJBVWYsU0FBUTtLQUNKLElBQUMsSUFBRyxDQUFDLElBQUw7S0FDQSxJQUFDLFdBQUQ7S0FDQSxJQUFDLGNBQUQ7WUFDQSxJQUFDLElBQUcsQ0FBQyxPQUFMO0dBSkk7Ozs7Ozs7Ozs7O0FDbkNaO0dBQUE7O0FBQUEsT0FBTSxDQUFDLE9BQVAsR0FDTTtHQUNXO0tBQ1QsSUFBQyxTQUFELEdBQVk7S0FDWixJQUFDLE1BQUQsR0FBUztLQUNULElBQUMsSUFBRCxHQUFPO0tBQ1AsSUFBQyxNQUFELEdBQVM7S0FDVCxJQUFDLGlCQUFELEdBQW9CO0tBQ3BCLElBQUMsVUFBRCxHQUFhO0tBQ2IsSUFBQyxLQUFELEdBQVE7S0FDUixJQUFDLGdCQUFELEdBQW1CO0tBQ25CLElBQUMsV0FBRCxHQUFjO0dBVEw7O21CQWFiLFNBQVE7QUFDSjtLQUFBLElBQVUsSUFBQyxXQUFYO0FBQUE7O0FBQ0E7QUFBQTs7T0FDSSxJQUFDLE1BQU0sR0FBRSxDQUFDLEdBQVYsR0FBZ0IsSUFBQyxjQUFELENBQWUsQ0FBZjtBQURwQjtZQUVBLElBQUMsV0FBRCxHQUFjO0dBSlY7O21CQU1SLFVBQVMsU0FBQyxDQUFEO1lBQU8sTUFBSyxJQUFDO0dBQWI7O21CQUNULFdBQVUsU0FBQyxDQUFEO0tBQ04sSUFBVSxNQUFLLElBQUMsS0FBaEI7QUFBQTs7S0FDQSxJQUFDLEtBQUQsR0FBUTtZQUNSLElBQUMsUUFBRDtHQUhNOzttQkFLVixTQUFRLFNBQUMsSUFBRDtBQUNKOztPQURLLE9BQU8sSUFBQzs7S0FDYixJQUFDLE9BQUQ7S0FDQSxNQUFNO0tBQ04sVUFBVSxJQUFDLE1BQU0sTUFBSyxDQUFDO0FBQ3ZCO0FBQUE7O09BQ0ksSUFBRyxPQUFRLEdBQUUsQ0FBQyxXQUFXLENBQUMsTUFBdkIsS0FBaUMsQ0FBcEM7U0FDSSxHQUFHLENBQUMsSUFBSixDQUFTLENBQVQsRUFESjs7QUFESjtBQUdBLFlBQU87R0FQSDs7bUJBU1IsZ0JBQWUsU0FBQyxDQUFEO0FBQ1g7S0FBQSxJQUFJLENBQUMsQ0FBRDtLQUNKLE9BQU87S0FDUCxJQUFLLEdBQUwsR0FBVTtLQUNWLE1BQU07QUFDTjtBQUFBOztPQUFBLEdBQUksR0FBSixHQUFTO0FBQVQ7S0FDQSxHQUFJLEdBQUUsQ0FBQyxJQUFQLEdBQWM7S0FDZCxHQUFJLEdBQUUsQ0FBQyxXQUFQLEdBQXFCO0FBQ3JCLFlBQU0sQ0FBQyxDQUFDLE1BQUYsR0FBVyxDQUFqQjtPQUNJLElBQUksQ0FBQyxDQUFDLEtBQUY7T0FDSixJQUErQiwwQkFBL0I7U0FBQSxHQUFJLEdBQUUsQ0FBQyxXQUFQLEdBQXFCLEdBQXJCOztBQUNBO0FBQUE7O1NBQ0ksSUFBRyxJQUFDLFFBQUQsQ0FBUyxDQUFULEVBQVksQ0FBWixLQUFtQixDQUFJLElBQUssR0FBL0I7V0FDSSxHQUFJLEdBQUUsQ0FBQyxXQUFXLENBQUMsSUFBbkIsQ0FBd0IsQ0FBeEI7V0FDQSxHQUFJLEdBQUUsQ0FBQyxJQUFQLEdBQWMsR0FBSSxHQUFFLENBQUMsSUFBUCxHQUFjO1dBQzVCLElBQUssR0FBTCxHQUFVO1dBQ1YsQ0FBQyxDQUFDLElBQUYsQ0FBTyxDQUFQLEVBSko7O0FBREo7S0FISjtBQVNBLFlBQU87R0FqQkk7O21CQW1CZixPQUFNLFNBQUMsQ0FBRCxFQUFJLENBQUo7QUFDRjtLQUFBLElBQVUsQ0FBSSxJQUFDLFVBQUQsQ0FBVyxDQUFYLENBQUosSUFBcUIsQ0FBSSxJQUFDLFVBQUQsQ0FBVyxDQUFYLENBQW5DO0FBQUE7O0tBQ0EsSUFBQyxPQUFEO0tBQ0EsTUFBTSxJQUFDLE1BQU0sR0FBRSxDQUFDLEdBQUksR0FBRSxDQUFDO0FBQ3ZCLFlBQU87R0FKTDs7bUJBTU4sa0JBQWlCLFNBQUMsQ0FBRDtBQUNiO0tBQUEsTUFBTTtBQUNOO0FBQUE7O09BQ0ksR0FBRyxDQUFDLElBQUosQ0FBUyxJQUFDLEtBQUQsQ0FBTSxDQUFOLEVBQVMsQ0FBVCxDQUFUO0FBREo7QUFFQSxZQUFPO0dBSk07O21CQU9qQixZQUFXLFNBQUMsUUFBRDtZQUNQLElBQUMsaUJBQWdCLENBQUMsSUFBbEIsQ0FBdUIsUUFBdkI7R0FETzs7bUJBR1gsVUFBUztBQUNMO0tBQUEsSUFBQyxXQUFELEdBQWM7S0FDZCxJQUFVLElBQUMsZ0JBQVg7QUFBQTs7QUFDQTtBQUFBO1VBQUE7O29CQUNJLFNBQVMsSUFBVDtBQURKOztHQUhLOzttQkFNVCxlQUFjO1lBQ1YsSUFBQyxnQkFBRCxHQUFtQjtHQURUOzttQkFHZCxpQkFBZ0I7WUFDWixJQUFDLGdCQUFELEdBQW1CO0dBRFA7O21CQUloQixnQkFBZTtBQUNYO0tBQUEsSUFBQyxVQUFTLENBQUMsSUFBWCxDQUFnQixTQUFDLENBQUQsRUFBSSxDQUFKO2NBQVUsSUFBSTtLQUFkLENBQWhCO0tBQ0EsTUFBTTtBQUNOLFlBQU0sSUFBQyxVQUFTLENBQUMsTUFBWCxHQUFvQixDQUExQjtPQUNJLElBQUksS0FBSyxJQUFDLFVBQVMsQ0FBQyxLQUFYO09BQ1QsSUFBWSxDQUFJLElBQUMsVUFBRCxDQUFXLENBQVgsQ0FBaEI7QUFBQSxnQkFBTyxFQUFQOztLQUZKO0FBR0EsWUFBTyxLQUFLLElBQUMsZUFBRDtHQU5EOzttQkFRZixpQkFBZ0I7WUFBRyxJQUFDLFNBQVEsQ0FBQztHQUFiOzttQkFFaEIsWUFBVyxTQUFDLElBQUQ7QUFDUCxZQUFPLGFBQVEsSUFBQyxTQUFUO0dBREE7O21CQUdYLFlBQVcsU0FBQyxJQUFEO1lBQVUsSUFBQyxNQUFNO0dBQWpCOzttQkFFWCxZQUFXLFNBQUMsSUFBRCxFQUFPLElBQVA7QUFDUDtLQUFBLElBQU8sd0JBQVA7T0FDSSxJQUFDLE1BQU0sTUFBUCxHQUFlO0FBQ2YsY0FGSjs7S0FHQSxJQUF1QyxZQUF2QztBQUFBO1lBQUE7O3NCQUFBLElBQUMsTUFBTSxNQUFNLEdBQWIsR0FBa0I7QUFBbEI7c0JBQUE7O0dBSk87O21CQU1YLGFBQVksU0FBQyxJQUFELEVBQU8sSUFBUDtLQUNSLElBQUMsVUFBRCxDQUFXLElBQVgsRUFBaUIsSUFBakI7S0FDQSxJQUFVLElBQUMsVUFBRCxDQUFXLElBQVgsQ0FBVjtBQUFBOztLQUNBLElBQUMsU0FBUSxDQUFDLElBQVYsQ0FBZSxJQUFmO0tBQ0EsSUFBQyxJQUFJLE1BQUwsR0FBYTtLQUNiLElBQU8saUJBQVA7T0FDSSxJQUFDLEtBQUQsR0FBUSxLQURaOztZQUVBLElBQUMsUUFBRDtHQVBROzttQkFTWixhQUFZLFNBQUMsSUFBRDtBQUNSO0tBQUEsSUFBVSxDQUFJLElBQUMsVUFBRCxDQUFXLElBQVgsQ0FBZDtBQUFBOztLQUVBLG1CQUFtQixJQUFDO0tBQ3BCLElBQUMsYUFBRDtLQUVBLENBQUMsQ0FBQyxJQUFGLENBQU8sSUFBQyxTQUFSLEVBQWtCLElBQWxCO0tBQ0EsT0FBTyxJQUFDLE1BQU07S0FDZCxJQUFDLFVBQVMsQ0FBQyxJQUFYLENBQWdCLFNBQVMsSUFBVCxDQUFoQjtLQUNBLElBQUMsc0JBQUQsQ0FBdUIsSUFBdkI7S0FDQSxJQUFHLFNBQVEsSUFBQyxLQUFaO09BQ0ksSUFBQyxLQUFELEdBQVcsSUFBQyxTQUFRLENBQUMsTUFBVixHQUFtQixDQUF0QixHQUE2QixJQUFDLFNBQVMsR0FBdkMsR0FBK0MsS0FEM0Q7O0tBR0EsSUFBQyxnQkFBRCxHQUFtQjtZQUNuQixJQUFDLFFBQUQ7R0FkUTs7bUJBaUJaLGNBQWE7QUFDVCxZQUFPLElBQUMsTUFBSyxDQUFDO0dBREw7O21CQUdiLGFBQVksU0FBQyxFQUFELEVBQUssRUFBTDtBQUNSO0tBQUEsTUFBTSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQVEsQ0FBQyxJQUFUO0FBQ04sWUFBTztPQUFFLE1BQU0sR0FBSSxHQUFaO09BQWdCLElBQUksR0FBSSxHQUF4Qjs7R0FGQzs7bUJBSVosV0FBVSxTQUFDLEVBQUQsRUFBSyxFQUFMO0tBQ04sSUFBVSxJQUFDLFFBQUQsQ0FBUyxFQUFULEVBQWEsRUFBYixDQUFWO0FBQUE7O0tBQ0EsSUFBQyxNQUFLLENBQUMsSUFBUCxDQUFZLElBQUMsV0FBRCxDQUFZLEVBQVosRUFBZ0IsRUFBaEIsQ0FBWjtLQUNBLElBQUMsSUFBSSxJQUFJLElBQVQsR0FBZSxJQUFDLElBQUksSUFBSSxJQUFULEdBQWU7WUFDOUIsSUFBQyxRQUFEO0dBSk07O21CQU1WLFdBQVUsU0FBQyxFQUFELEVBQUssRUFBTDtBQUNOO0tBQUEsSUFBSSxTQUFDLENBQUQ7Y0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFGLEtBQVUsRUFBVixJQUFpQixDQUFDLENBQUMsRUFBRixLQUFRLEVBQTFCLEtBQWlDLENBQUMsQ0FBQyxDQUFDLElBQUYsS0FBVSxFQUFWLElBQWlCLENBQUMsQ0FBQyxFQUFGLEtBQVEsRUFBMUI7S0FBeEM7WUFDSixJQUFDLFVBQUQsQ0FBVyxDQUFYO0dBRk07O21CQUlWLHdCQUF1QixTQUFDLENBQUQ7QUFDbkI7S0FBQSxJQUFJLFNBQUMsQ0FBRDtjQUFPLGFBQUssQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUFULENBQUw7S0FBUDtZQUNKLElBQUMsVUFBRCxDQUFXLENBQVg7R0FGbUI7O21CQUl2QixvQkFBbUIsU0FBQyxFQUFELEVBQUssRUFBTDtLQUNmLElBQUMsSUFBSSxJQUFJLElBQVQsR0FBZSxJQUFDLElBQUksSUFBSSxJQUFULEdBQWU7WUFDOUIsSUFBQyxRQUFEO0dBRmU7O21CQUluQixZQUFXLFNBQUMsU0FBRDtBQUNQO0tBQUEsTUFBTTtBQUNOO0FBQUE7O09BQ0ksSUFBRyxVQUFVLENBQVYsQ0FBSDtTQUNJLElBQUMsa0JBQUQsQ0FBbUIsQ0FBQyxDQUFDLElBQXJCLEVBQTJCLENBQUMsQ0FBQyxFQUE3QixFQUFpQyxLQUFqQyxFQURKO1FBQUE7U0FHSSxHQUFHLENBQUMsSUFBSixDQUFTLENBQVQsRUFISjs7QUFESjtLQUtBLElBQUMsTUFBRCxHQUFTO1lBQ1QsSUFBQyxRQUFEO0dBUk87O21CQVVYLFVBQVMsU0FBQyxFQUFELEVBQUssRUFBTDtBQUNMLFlBQU8sQ0FBQyxDQUFDLElBQUMsSUFBSSxJQUFJO0dBRGI7Ozs7Ozs7Ozs7O0FDeEtiOztBQUFBLFNBQVEsb0JBQVEsQ0FBUjs7O0FBR1I7Ozs7Ozs7Ozs7O0FBVUEsT0FBTSxDQUFDLE9BQU8sQ0FDZCxRQURBLEdBQ1csU0FBQyxPQUFEO0FBQ1A7R0FBQSxJQUFJLElBQUk7QUFDUjtBQUFBOztLQUFBLENBQUMsQ0FBQyxVQUFGLENBQWEsS0FBRyxJQUFoQixFQUFzQixJQUF0QjtBQUFBO0FBQ0E7QUFBQTs7QUFDSTs7T0FDSSxDQUFDLENBQUMsUUFBRixDQUFXLEtBQUcsQ0FBZCxFQUFpQixLQUFHLENBQXBCO0FBREo7QUFESjtBQUdBLFVBQU87QUFOQTs7QUFRWCxPQUFNLENBQUMsT0FBTyxDQUNkLHlCQURBLEdBQzRCLFNBQUMsS0FBRDtBQUN4QjtHQUFBLFdBQVcsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxLQUFLLENBQUMsS0FBZDtHQUNYLFFBQVE7QUFDUjtBQUFBO29CQUFLLGtCQUFNO0tBQ1AsSUFBd0IsbUJBQXhCO09BQUEsS0FBTSxNQUFOLEdBQWMsR0FBZDs7S0FDQSxLQUFNLE1BQUssQ0FBQyxJQUFaLENBQWlCLEVBQWpCO0FBRko7QUFHQSxVQUFPO0tBQUMsa0JBQUQ7S0FBVyxZQUFYOztBQU5pQjs7Ozs7OztBQ3ZCNUI7O0FBQUEsU0FBUSxvQkFBUSxDQUFSOztBQUNSLFNBQVEsb0JBQVEsQ0FBUjs7QUFDUiwwQkFBeUIsb0JBQVEsQ0FBUjs7QUFDekIsYUFBWSxvQkFBUSxDQUFSOztBQUVaLFdBQVU7O0FBRVYsT0FBTSxDQUFDLE9BQVAsR0FDTTtHQUNXLG9CQUFDLFNBQUQsRUFBYSxLQUFiO0FBQ1Q7S0FEVSxJQUFDLGFBQUQ7S0FBWSxJQUFDLHlCQUFELFFBQVMsSUFBSTtLQUNuQyxJQUFDLEdBQUQsR0FBTSxPQUFPO0tBQ2Isc0JBQXNCLEVBQUUsT0FBRixDQUFVLENBQUMsSUFBWCxDQUFnQixJQUFoQixFQUFzQixJQUFDLEdBQUQsR0FBTSxJQUE1QixDQUFpQyxDQUFDLEdBQWxDLENBQXNDLENBQXRDO0tBQ3RCLHFCQUFxQixFQUFFLE9BQUYsQ0FBVSxDQUFDLElBQVgsQ0FBZ0IsSUFBaEIsRUFBc0IsSUFBQyxHQUFELEdBQU0sTUFBNUIsQ0FBbUMsQ0FBQyxHQUFwQyxDQUF3QyxDQUF4QztLQUVyQixJQUFDLEdBQUQsR0FBTSxLQUFLLENBQUMsVUFBTixDQUFpQixDQUNuQixDQUFDLGVBQUQsRUFBa0Isb0JBQWxCLENBRG1CLEVBRW5CLENBQ0ksbUJBREosRUFDeUIsa0JBRHpCLENBRm1CLENBQWpCLEVBS0g7T0FBRSxRQUFRLElBQVY7TUFMRztLQU1OLEVBQUUsSUFBQyxVQUFILENBQWEsQ0FBQyxNQUFkLENBQXFCLElBQUMsR0FBdEI7S0FFQSxJQUFDLEdBQUQsR0FBVSwyQkFBdUIsbUJBQXZCLEVBQTRDLElBQUMsTUFBN0M7S0FDVixJQUFDLEdBQUQsR0FBVSxjQUFVLGtCQUFWLEVBQThCLElBQUMsTUFBL0I7R0FkRDs7d0JBZ0JiLFNBQVE7S0FDSixJQUFnQixzQkFBaEI7Y0FBQSxJQUFDLEdBQUUsQ0FBQyxNQUFKOztHQURJOzt3QkFHUixTQUFRO1lBQ0osSUFBQyxHQUFFLENBQUMsTUFBSjtHQURJOzs7Ozs7Ozs7OztBQzNCWjs7QUFBQSxXQUFVOztBQUdWLE9BQU0sQ0FBQyxPQUFQLEdBQ007R0FDVyxtQkFBQyxTQUFELEVBQWEsS0FBYjtBQUNUO0tBRFUsSUFBQyxhQUFEO0tBQVksSUFBQyx5QkFBRCxRQUFTLElBQUk7S0FDbkMsSUFBb0MsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxJQUFDLFVBQVosQ0FBcEM7T0FBQSxJQUFDLFVBQUQsR0FBYSxFQUFFLElBQUMsVUFBSCxDQUFhLENBQUMsR0FBZCxDQUFrQixDQUFsQixFQUFiOztLQUNBLElBQUMsR0FBRCxHQUFNLGNBQWM7S0FDcEIsSUFBQyxHQUFELEdBQU0sRUFBRSxPQUFGLENBQVUsQ0FBQyxHQUFYLENBQWUsQ0FBZjtLQUNOLEVBQUUsSUFBQyxVQUFILENBQWEsQ0FBQyxNQUFkLENBQXFCLElBQUMsR0FBdEI7S0FDQSxJQUFDLEtBQUQsR0FDSTtPQUFBLFVBQ0k7U0FBQSxPQUFPLFNBQVA7U0FDQSxNQUFNO2tCQUFBO29CQUNGLEtBQUMsTUFBSyxDQUFDLE1BQVAsRUFBZSxDQUFDLElBQWhCLENBQXFCLElBQXJCO1dBREU7U0FBQSxRQUROO1FBREo7T0FJQSxrQkFDSTtTQUFBLE9BQU8sb0JBQVA7U0FDQSxNQUFNO2tCQUFBO29CQUFHLEtBQUMsTUFBSyxDQUFDLGNBQVA7V0FBSDtTQUFBLFFBRE47UUFMSjtPQU9BLGVBQ0k7U0FBQSxPQUFPLG1CQUFQO1NBQ0EsTUFBTTtrQkFBQTtvQkFBRyxLQUFDLE1BQUssQ0FBQyxXQUFQO1dBQUg7U0FBQSxRQUROO1FBUko7T0FVQSxjQUNJO1NBQUEsT0FBTyxjQUFQO1NBQ0EsTUFBTTtrQkFBQTtvQkFBRyxLQUFDLFdBQUQ7V0FBSDtTQUFBLFFBRE47UUFYSjs7QUFjSjtBQUFBOztPQUNJLEVBQUUsSUFBQyxHQUFILENBQU0sQ0FBQyxNQUFQLENBQWMsRUFBRSxhQUFXLENBQUMsQ0FBQyxLQUFiLEdBQW1CLGdCQUFuQixHQUFrQyxDQUFDLElBQUMsR0FBRCxHQUFJLEVBQUwsQ0FBbEMsR0FBMEMsZ0JBQTVDLENBQWQ7QUFESjtLQUVBLElBQUMsTUFBSyxDQUFDLFNBQVAsQ0FBaUI7Y0FBQTtnQkFBRyxLQUFDLFlBQUQ7T0FBSDtLQUFBLFFBQWpCO0tBQ0EsSUFBQyxZQUFEO0tBRUEsSUFBQyxpQkFBRCxHQUFvQjtLQUNwQixJQUFDLElBQUQsR0FBTztHQTFCRTs7dUJBMENiLGFBQVk7QUFDUjtLQUFBLE1BQU07S0FJTixHQUFHLENBQUMsZUFBSixHQUFzQixJQUFDLE1BQUssQ0FBQyxlQUFQO0tBQ3RCLE1BQU0sSUFBSSxDQUFDLFNBQUwsQ0FBZSxHQUFmLEVBQW9CLElBQXBCLEVBQTBCLENBQTFCO0FBQ04sWUFBTyxFQUFFLFVBQVEsR0FBUixHQUFZLFFBQWQ7R0FQQzs7dUJBU1osY0FBYTtBQUNUO0tBQUEsSUFBQyxNQUFLLENBQUMsTUFBUDtBQUNBO0FBQUE7VUFBQTs7T0FDSSxLQUFLLElBQUMsR0FBRCxHQUFNO09BQ1gsTUFBTSxDQUFDLENBQUMsSUFBRjtPQUNOLEVBQUUsTUFBSSxFQUFOLENBQVMsQ0FBQyxJQUFWLENBQWUsRUFBZjtvQkFDQSxFQUFFLE1BQUksRUFBTixDQUFTLENBQUMsTUFBVixDQUFpQixHQUFqQjtBQUpKOztHQUZTIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZmJlOTI3NjM5YjAyZDI3MTU2YzhcbiAqKi8iLCJcclxuQ2FudmFzR3JhcGhDb25zdHJ1Y3RvciA9IHJlcXVpcmUgJy4vQ2FudmFzR3JhcGhDb25zdHJ1Y3RvcidcclxuR3JhcGhCdWlsZGVyID0gcmVxdWlyZSAnLi9HcmFwaEJ1aWxkZXInXHJcbkdyYXBoVGFibGUgPSByZXF1aXJlICcuL0dyYXBoVGFibGUnXHJcblxyXG5cclxubWFpbmxvb3Bfb2JqZWN0cyA9IFtdXHJcblxyXG5cclxubWFpbmxvb3AgPSAtPlxyXG4gICAgdGltZSA9IERhdGUubm93KClcclxuICAgIGR0ID0gMTRcclxuICAgIHN0ZXAgPSAtPlxyXG4gICAgICAgIGN1cl9kdCA9IERhdGUubm93KCkgLSB0aW1lXHJcbiAgICAgICAgdGltZSA9IERhdGUubm93KClcclxuICAgICAgICBjdXJfZHQgPSBNYXRoLm1pbihjdXJfZHQsIDEwMDApXHJcbiAgICAgICAgd2hpbGUgY3VyX2R0ID4gMFxyXG4gICAgICAgICAgICBmb3Igb2JqIGluIG1haW5sb29wX29iamVjdHNcclxuICAgICAgICAgICAgICAgIG9iai51cGRhdGUgZHQgaWYgb2JqLnVwZGF0ZT8gXHJcbiAgICAgICAgICAgIGN1cl9kdCAtPSBkdFxyXG4gICAgICAgIGZvciBvYmogaW4gbWFpbmxvb3Bfb2JqZWN0c1xyXG4gICAgICAgICAgICBvYmoucmVuZGVyKCkgaWYgb2JqLnJlbmRlcj9cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgc3RlcFxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHN0ZXBcclxuXHJcbm1haW5sb29wKClcclxuXHJcblxyXG5cclxuIyBKU09OLnN0cmluZ2lmeShHcmFwaEJ1aWxkZXIubWFrZV9vcHRpb25zX2Zvcl9idWlsZGVyMShnYjEuZ3JhcGgpLCBudWxsKVxyXG5nMSA9IEdyYXBoQnVpbGRlci5idWlsZGVyMSB7XCJ2ZXJ0aWNlc1wiOntcIjBcIjp7XCJ4XCI6MTk4LFwieVwiOjM3NS4xODc1fSxcIjFcIjp7XCJ4XCI6OTMsXCJ5XCI6MzI2LjE4NzV9LFwiMlwiOntcInhcIjozMDIsXCJ5XCI6MzM4LjE4NzV9LFwiM1wiOntcInhcIjo0MyxcInlcIjoyNTAuMTg3NSxcIm5hbWVcIjpcIjNcIn0sXCI0XCI6e1wieFwiOjE1NCxcInlcIjoyNDcuMTg3NSxcIm5hbWVcIjpcIjRcIn0sXCI1XCI6e1wieFwiOjMwMCxcInlcIjoyNzIuMTg3NSxcIm5hbWVcIjpcIjVcIn0sXCI2XCI6e1wieFwiOjI2MSxcInlcIjoyMDguMTg3NSxcIm5hbWVcIjpcIjZcIn0sXCI3XCI6e1wieFwiOjM1NCxcInlcIjoyMjkuMTg3NSxcIm5hbWVcIjpcIjdcIn0sXCI4XCI6e1wieFwiOjEwMyxcInlcIjoxNzAuMTg3NSxcIm5hbWVcIjpcIjhcIn0sXCI5XCI6e1wieFwiOjM3LFwieVwiOjU4LjE4NzUsXCJuYW1lXCI6XCI5XCJ9LFwiMTBcIjp7XCJ4XCI6MTEzLFwieVwiOjYyLjE4NzUsXCJuYW1lXCI6XCIxMFwifSxcIjExXCI6e1wieFwiOjE5NCxcInlcIjo2MC4xODc1LFwibmFtZVwiOlwiMTFcIn0sXCIxMlwiOntcInhcIjozMjcsXCJ5XCI6MTgzLjE4NzUsXCJuYW1lXCI6XCIxMlwifSxcIjEzXCI6e1wieFwiOjM2MSxcInlcIjoxNDUuMTg3NSxcIm5hbWVcIjpcIjEzXCJ9LFwiMTRcIjp7XCJ4XCI6MzIwLFwieVwiOjExMy4xODc1LFwibmFtZVwiOlwiMTRcIn0sXCIxNVwiOntcInhcIjozNTcsXCJ5XCI6NzcuMTg3NSxcIm5hbWVcIjpcIjE1XCJ9LFwiMTZcIjp7XCJ4XCI6MzE3LFwieVwiOjQ2LjE4NzUsXCJuYW1lXCI6XCIxNlwifX0sXCJsaW5rc1wiOntcIjBcIjpbXCIxXCIsXCIyXCJdLFwiMVwiOltcIjNcIixcIjRcIl0sXCIyXCI6W1wiNVwiXSxcIjNcIjpbXCI4XCJdLFwiNVwiOltcIjZcIixcIjdcIl0sXCI4XCI6W1wiOVwiXSxcIjEwXCI6W1wiOFwiXSxcIjExXCI6W1wiOFwiXSxcIjEyXCI6W1wiN1wiLFwiMTNcIl0sXCIxM1wiOltcIjE0XCJdLFwiMTRcIjpbXCIxNVwiXSxcIjE1XCI6W1wiMTZcIl19fVxyXG5nMiA9IEdyYXBoQnVpbGRlci5idWlsZGVyMSB7XCJ2ZXJ0aWNlc1wiOntcIjBcIjp7XCJ4XCI6MTkxLFwieVwiOjM4MC4zNzUsXCJuYW1lXCI6XCIwXCJ9LFwiMVwiOntcInhcIjo1MCxcInlcIjozMjAuMzc1LFwibmFtZVwiOlwiMVwifSxcIjJcIjp7XCJ4XCI6MzA5LFwieVwiOjMwMy4zNzUsXCJuYW1lXCI6XCIyXCJ9LFwiM1wiOntcInhcIjo2OCxcInlcIjoxOTAuMzc1LFwibmFtZVwiOlwiM1wifSxcIjRcIjp7XCJ4XCI6MzA2LFwieVwiOjE4MC4zNzUsXCJuYW1lXCI6XCI0XCJ9LFwiNVwiOntcInhcIjo2NSxcInlcIjo3MS4zNzUsXCJuYW1lXCI6XCI1XCJ9LFwiNlwiOntcInhcIjoxODQsXCJ5XCI6MTg3LjM3NSxcIm5hbWVcIjpcIjZcIn0sXCI3XCI6e1wieFwiOjI2NixcInlcIjo4OS4zNzUsXCJuYW1lXCI6XCI3XCJ9LFwiOFwiOntcInhcIjozNTIsXCJ5XCI6ODIuMzc1LFwibmFtZVwiOlwiOFwifSxcIjlcIjp7XCJ4XCI6MTc3LFwieVwiOjI5Ny4zNzUsXCJuYW1lXCI6XCI5XCJ9fSxcImxpbmtzXCI6e1wiMFwiOltcIjJcIixcIjFcIixcIjlcIl0sXCIxXCI6W1wiM1wiXSxcIjJcIjpbXCI0XCJdLFwiM1wiOltcIjVcIl0sXCI0XCI6W1wiN1wiLFwiOFwiXSxcIjZcIjpbXCI5XCJdfX1cclxuXHJcbmd0ID0gW25ldyBHcmFwaFRhYmxlKFwiI2d0MVwiLCBnMSksIG5ldyBHcmFwaFRhYmxlIFwiI2d0MlwiLCBnMl1cclxubWFpbmxvb3Bfb2JqZWN0cyA9IG1haW5sb29wX29iamVjdHMuY29uY2F0IGd0XHJcblxyXG5cclxucHJnID0gKGkpIC0+IGNvbnNvbGUubG9nIEpTT04uc3RyaW5naWZ5KEdyYXBoQnVpbGRlci5tYWtlX29wdGlvbnNfZm9yX2J1aWxkZXIxKGd0W2ldLmdyYXBoKSlcclxuXHJcblxyXG5cclxuXy5kZWZhdWx0cyB3aW5kb3csIHtHcmFwaEJ1aWxkZXIsIHByZywgZ3R9XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbWFpbi5jb2ZmZWVcbiAqKi8iLCJcclxudXRpbHMgPSByZXF1aXJlICcuL3V0aWxzJ1xyXG5HcmFwaERyYXdlciA9IHJlcXVpcmUgJy4vR3JhcGhEcmF3ZXInXHJcbkdyYXBoID0gcmVxdWlyZSAnLi9HcmFwaCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gXHJcbmNsYXNzIENhbnZhc0dyYXBoQ29uc3RydWN0b3JcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogKEBjb250YWluZXIsIEBncmFwaCA9IG5ldyBHcmFwaCkgLT5cclxuICAgICAgICBAY2FuID0gJChcIjxjYW52YXM+XCIpLmdldCAwXHJcbiAgICAgICAgQGN0eCA9IEBjYW4uZ2V0Q29udGV4dCAnMmQnXHJcbiAgICAgICAgQGNhbi53aWR0aCA9IEBjYW4uaGVpZ2h0ID0gNDAwXHJcbiAgICAgICAgQG1vdXNlID0geyBcclxuICAgICAgICAgICAgeDogMCwgeTogMCAjINGC0LXQutGD0YnQuNC1INC60L7QvtGA0LTQuNC90LDRgtGLINC80YvRiNC4INC90LDQtCBAY2FuXHJcbiAgICAgICAgICAgIHRhcmdldDogbnVsbCAjINC40LzRjyDQstC10YDRiNC40L3RiyDQvdCw0LQg0LrQvtGC0L7RgNC+0Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLRgdGPINC90LXQutC+0YLQvtGA0L7QtSDQtNC10LnRgdGC0LLQuNC1XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBmb2N1cyA9IGZhbHNlXHJcbiAgICAgICAgQGhhbmRsZV9ldmVudHMoKVxyXG4gICAgICAgICQoQGNvbnRhaW5lcikuYXBwZW5kIEBjYW5cclxuICAgICAgICBAZ3JhcGhfZHJhd2VyID0gbmV3IEdyYXBoRHJhd2VyIEBncmFwaCwgQGN0eFxyXG5cclxuICAgIHVwZGF0ZV9tb3VzZTogKGUpIC0+XHJcbiAgICAgICAgcG9zID0gdXRpbHMuZ2V0X21vdXNlcG9zX2luX2VsZW1lbnQgQGNhbiwgZVxyXG4gICAgICAgIEBtb3VzZS54ID0gcG9zLnhcclxuICAgICAgICBAbW91c2UueSA9IHBvcy55XHJcblxyXG4gICAgaGFuZGxlX2V2ZW50czogLT5cclxuICAgICAgICAkKEBjYW4pLm1vdXNlb3V0ID0+IEBmb2N1cyA9IGZhbHNlXHJcbiAgICAgICAgJChAY2FuKS5tb3VzZW92ZXIgPT4gQGZvY3VzID0gdHJ1ZVxyXG4gICAgICAgIFxyXG4gICAgICAgICQoQGNhbikubW91c2Vtb3ZlIChlKSA9PlxyXG4gICAgICAgICAgICBAdXBkYXRlX21vdXNlIGVcclxuICAgICAgICAgICAgaWYgQG1vdXNlLnRhcmdldFxyXG4gICAgICAgICAgICAgICAgaWYgQG1vdXNlLmRyYWd0eXBlID09IFwibW92ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4X25hbWUgPSBAbW91c2UudGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgQGdyYXBoLnNldF92aW5mbyB2ZXJ0ZXhfbmFtZSwgdXRpbHMudmVjMihAbW91c2UueCwgQG1vdXNlLnkpXHJcbiAgICAgICAgICAgICAgICBpZiBAbW91c2UuZHJhZ3R5cGUgPT0gXCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICBAbW91c2UubGlua2VuZCA9IF8uY2xvbmUgdXRpbHMudmVjMiBAbW91c2UueCwgQG1vdXNlLnlcclxuXHJcbiAgICAgICAgJChAY2FuKS5tb3VzZWRvd24gKGUpID0+XHJcbiAgICAgICAgICAgIHZuYW1lID0gQGdyYXBoX2RyYXdlci5nZXRfdmVydGV4X2J5eHkgQG1vdXNlXHJcbiAgICAgICAgICAgIGlmIHZuYW1lPyBhbmQgQG1vdXNlLnRhcmdldD8gYW5kIEBtb3VzZS5kcmFndHlwZSA9PSBcImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgQGdyYXBoLmFkZF9saW5rIEBtb3VzZS50YXJnZXQsIHZuYW1lXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgQG1vdXNlLnRhcmdldCA9IHZuYW1lXHJcbiAgICAgICAgICAgIEBtb3VzZS5kcmFndHlwZSA9IFwibW92ZVwiXHJcblxyXG4gICAgICAgICQoQGNhbikubW91c2V1cCAoZSkgPT5cclxuICAgICAgICAgICAgQG1vdXNlLnRhcmdldCA9IG51bGxcclxuICAgICAgICAgICAgQG1vdXNlLmRyYWd0eXBlID0gbnVsbFxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5rZXlkb3duIChlKSA9PlxyXG4gICAgICAgICAgICByZXR1cm4gdW5sZXNzIEBmb2N1c1xyXG4gICAgICAgICAgICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIHN3aXRjaCBjaFxyXG4gICAgICAgICAgICAgICAgIyBTZXQgbmV3IHJvb3RcclxuICAgICAgICAgICAgICAgIHdoZW4gJ3InXHJcbiAgICAgICAgICAgICAgICAgICAgdm5hbWUgPSBAZ3JhcGhfZHJhd2VyLmdldF92ZXJ0ZXhfYnl4eSBAbW91c2VcclxuICAgICAgICAgICAgICAgICAgICBAZ3JhcGguc2V0X3Jvb3Qgdm5hbWVcclxuXHJcbiAgICAgICAgICAgICAgICAjIEFkZCB2ZXJ0ZXhcclxuICAgICAgICAgICAgICAgIHdoZW4gJ3YnXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IEBncmFwaC5nZW5lcmF0ZV9uYW1lKClcclxuICAgICAgICAgICAgICAgICAgICBAZ3JhcGguYWRkX3ZlcnRleCBuYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IEBtb3VzZS54LCB5OiBAbW91c2UueSwgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjIFF1ZXJ5IGZvciBncmFwaFxyXG4gICAgICAgICAgICAgICAgd2hlbiAncSdcclxuICAgICAgICAgICAgICAgICAgICBjbWQgPSBwcm9tcHQoXCLQktCy0LXQtNC40YLQtSDQutC+0LzQsNC90LTRg1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBfLnB1bGwgY21kLnNwbGl0KC9cXHMvKSwgJydcclxuICAgICAgICAgICAgICAgICAgICBfcHJpbnQgPSAocykgLT4gY29uc29sZS5sb2cgc1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCBhcmdzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVuIFwiZGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBpZiBhcmdzLmxlbmd0aCA8IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9wcmludCBcItCg0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LLQtdGA0YjQuNC90LDQvNC4OiBcIiArIEBncmFwaC5kaXN0KGFyZ3NbMV0sIGFyZ3NbMl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVuIFwibGVhdmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9wcmludCBAZ3JhcGgubGVhdmVzIGFyZ3NbMV1cclxuXHJcbiAgICAgICAgICAgICAgICAjIERlbGV0ZSB2ZXJ0ZXhcclxuICAgICAgICAgICAgICAgIHdoZW4gJ2QnXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgZS5zaGlmdEtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgdiBpbiBfLmNsb25lIEBncmFwaC52ZXJ0aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGdyYXBoLmRlbF92ZXJ0ZXggdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB2bmFtZSA9IEBncmFwaF9kcmF3ZXIuZ2V0X3ZlcnRleF9ieXh5IEBtb3VzZVxyXG4gICAgICAgICAgICAgICAgICAgIEBncmFwaC5kZWxfdmVydGV4IHZuYW1lXHJcblxyXG4gICAgICAgICAgICAgICAgIyBBZGQgbGlua1xyXG4gICAgICAgICAgICAgICAgd2hlbiAnbCdcclxuICAgICAgICAgICAgICAgICAgICB2bmFtZSA9IEBncmFwaF9kcmF3ZXIuZ2V0X3ZlcnRleF9ieXh5IEBtb3VzZVxyXG4gICAgICAgICAgICAgICAgICAgIEBtb3VzZS50YXJnZXQgPSB2bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIEBtb3VzZS5kcmFndHlwZSA9IFwibGlua1wiXHJcblxyXG4gICAgICAgICAgICAgICAgIyBQcmludCBvdGhlciBpbmZvXHJcbiAgICAgICAgICAgICAgICB3aGVuICcxJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIEBtb3VzZVxyXG5cclxuICAgIHVwZGF0ZTogKGR0KSAtPlxyXG5cclxuICAgIGRyYXdfZHJhZ2xpbms6IC0+XHJcbiAgICAgICAgaWYgQG1vdXNlLnRhcmdldD8gYW5kIEBtb3VzZS5kcmFndHlwZSA9PSBcImxpbmtcIiBhbmQgQG1vdXNlLmxpbmtlbmQ/XHJcbiAgICAgICAgICAgIHYgPSBAZ3JhcGguZ2V0X3ZpbmZvIEBtb3VzZS50YXJnZXRcclxuICAgICAgICAgICAgdXRpbHMuZHJhd19saW5lIEBjdHgsIHYsIEBtb3VzZVxyXG5cclxuICAgIHJlbmRlcjogLT5cclxuICAgICAgICBAY3R4LmNsZWFyUmVjdCAwLCAwLCBAY2FuLndpZHRoLCBAY2FuLmhlaWdodFxyXG4gICAgICAgIEBkcmF3X2RyYWdsaW5rKClcclxuICAgICAgICBAZ3JhcGhfZHJhd2VyLnJlbmRlcigpXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NhbnZhc0dyYXBoQ29uc3RydWN0b3IuY29mZmVlXG4gKiovIiwiXHJcbiMgPT09PT0gbWF0aHMgdXRpbHMgPT09PT1cclxuZGlzdCA9IChhLCBiKSAtPiBNYXRoLnNxcnQoTWF0aC5wb3coYS54IC0gYi54LCAyKSArIE1hdGgucG93KGEueSAtIGIueSwgMikpXHJcbnZlYzIgPSAoeCwgeSkgLT4ge3gsIHl9XHJcblxyXG4jID09PT09IHV0aWxzIGZvciBodG1sIGVsZW1lbnRzID09PT09IFxyXG5nZXRfbW91c2Vwb3NfaW5fZWxlbWVudCA9IChlbCwgZSkgLT5cclxuICAgIG9mZnNldCA9ICQoZWwpLm9mZnNldCgpXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICB4OiBlLnBhZ2VYIC0gb2Zmc2V0LmxlZnQsIFxyXG4gICAgICAgIHk6IGUucGFnZVkgLSBvZmZzZXQudG9wIFxyXG4gICAgfVxyXG5cclxuIyBjcmVhdGUgaHRtbCB0YWJsZSBieSBqcyBtYXRyaXhcclxuIyBvOiB7IGhlYWRlcjogYm9vbCB9XHJcbm1ha2VfdGFsYmUgPSAoYXJyLCBvID0ge30pIC0+XHJcbiAgICB0YmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICd0YWJsZSdcclxuICAgIGZvciBsaW5lLCBpIGluIGFyclxyXG4gICAgICAgIHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAndHInXHJcbiAgICAgICAgZm9yIHZhbCwgaiBpbiBsaW5lXHJcbiAgICAgICAgICAgIHQgPSBpZiBvLmhlYWRlciBhbmQgaSA9PSAwIHRoZW4gJ3RoJyBlbHNlICd0ZCdcclxuICAgICAgICAgICAgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgdFxyXG4gICAgICAgICAgICB2YWwgPSBhcnJbaV1bal1cclxuICAgICAgICAgICAgaWYgXy5pc1N0cmluZyB2YWxcclxuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gdmFsXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQgdmFsXHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkIGNlbGxcclxuICAgICAgICB0YmwuYXBwZW5kQ2hpbGQgdHJcclxuICAgIHJldHVybiB0YmxcclxuXHJcbiMgPT09PT0gR3JhcGhpY3MgPT09PT1cclxuZHJhd19saW5lID0gKGN0eCwgYSwgYikgLT5cclxuICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgY3R4Lm1vdmVUbyBhLngsIGEueVxyXG4gICAgY3R4LmxpbmVUbyBiLngsIGIueVxyXG4gICAgY3R4LnN0cm9rZSgpXHJcblxyXG5kcmF3X2NpcmNsZV93aXRoX3RleHQgPSAoY3R4LCB4LCB5LCByLCB0ZXh0LCBvKSAtPlxyXG4gICAgY3R4LmZvbnQgPSBcIiN7by5mb250c3p9cHggI3tvLmZvbnRGYW1pbHl9XCJcclxuICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgY3R4LmFyYyB4LCB5LCByLCAwLCAyICogTWF0aC5QSVxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IG8uY2lyY2xlQ29sb3JcclxuICAgIGN0eC5maWxsKClcclxuICAgIGN0eC5maWxsU3R5bGUgPSBvLnRleHRDb2xvclxyXG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInXHJcbiAgICBjdHgudGV4dEJhc2VMaW5lID0gJ21pZGRsZSdcclxuICAgIGN0eC5maWxsVGV4dCB0ZXh0LCB4LCB5ICsgby5mb250c3ovNFxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgIyBtYXRoIHV0aWxzXHJcbiAgICBkaXN0LCB2ZWMyXHJcbiAgICAjIGh0bWwgdXRpbHNcclxuICAgIGdldF9tb3VzZXBvc19pbl9lbGVtZW50LCBtYWtlX3RhbGJlXHJcbiAgICAjIEdyYXBoaWNzXHJcbiAgICBkcmF3X2xpbmUsIGRyYXdfY2lyY2xlX3dpdGhfdGV4dFxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdXRpbHMuY29mZmVlXG4gKiovIiwiXHJcbnV0aWxzID0gcmVxdWlyZSAnLi91dGlscydcclxuXHJcblxyXG5GT05UU1ogPSAyMFxyXG5SQURJSVVTID0gRk9OVFNaXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBcclxuY2xhc3MgR3JhcGhEcmF3ZXJcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3I6IChAZ3JhcGgsIEBjdHgpIC0+XHJcblxyXG4gICAgIyA9PT0gVkVSVElDRVMgPT09IFxyXG4gICAgZ2V0X3ZlcnRleF9ieXh5OiAocG9zKSAtPlxyXG4gICAgICAgIGZvciBuYW1lLCBpbmZvIG9mIEBncmFwaC52aW5mb1xyXG4gICAgICAgICAgICByZXR1cm4gbmFtZSBpZiB1dGlscy5kaXN0KHBvcywgaW5mbykgPCBSQURJSVVTXHJcblxyXG4gICAgbW92ZV92ZXJ0ZXg6ICh2ZXJ0ZXhfbmFtZSwgbmV3X3BvcykgLT5cclxuICAgICAgICBAZ3JhcGguc2V0X3ZpbmZvIHZlcnRleF9uYW1lLCBuZXdfcG9zXHJcblxyXG4gICAgIyA9PT0gUkVOREVSID09PVxyXG4gICAgZHJhd19saW5rczogKCkgLT5cclxuICAgICAgICBmb3IgbCBpbiBAZ3JhcGgubGlua3NcclxuICAgICAgICAgICAgYSA9IEBncmFwaC5nZXRfdmluZm8gbC5mcm9tXHJcbiAgICAgICAgICAgIGIgPSBAZ3JhcGguZ2V0X3ZpbmZvIGwudG9cclxuICAgICAgICAgICAgdXRpbHMuZHJhd19saW5lIEBjdHgsIGEsIGJcclxuXHJcbiAgICBkcmF3X3ZlcnRpY2VzOiAoKSAtPlxyXG4gICAgICAgIGZvciBuYW1lLCBpbmZvIG9mIEBncmFwaC52aW5mb1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3IgPSBpZiBAZ3JhcGguaXNfcm9vdCBuYW1lIHRoZW4gJ3JlZCcgZWxzZSAnd2hpdGUnXHJcbiAgICAgICAgICAgIHV0aWxzLmRyYXdfY2lyY2xlX3dpdGhfdGV4dChcclxuICAgICAgICAgICAgICAgIEBjdHgsIGluZm8ueCwgaW5mby55LCBSQURJSVVTLCBuYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udHN6OiBGT05UU1osIGZvbnRGYW1pbHk6ICdNb25vc3BhY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZUNvbG9yOiAnYmxhY2snLCB0ZXh0Q29sb3I6IHRleHRDb2xvclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgcmVuZGVyOiAoKSAtPlxyXG4gICAgICAgIEBjdHguc2F2ZSgpXHJcbiAgICAgICAgQGRyYXdfbGlua3MoKVxyXG4gICAgICAgIEBkcmF3X3ZlcnRpY2VzKClcclxuICAgICAgICBAY3R4LnJlc3RvcmUoKVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaERyYXdlci5jb2ZmZWVcbiAqKi8iLCJcclxuIyBUT0RPOiDQsdC70L7QutC40YDQvtCy0LrQsCDQuCDRgNCw0LfQsdC70L7QutC40YDQvtCy0LrQsCBjYWxsX2NoYW5nZWRcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gXHJcbmNsYXNzIEdyYXBoXHJcbiAgICBjb25zdHJ1Y3RvcjogLT5cclxuICAgICAgICBAdmVydGljZXMgPSBbXVxyXG4gICAgICAgIEBsaW5rcyA9IFtdXHJcbiAgICAgICAgQG1hcCA9IHt9XHJcbiAgICAgICAgQHZpbmZvID0ge30gIyBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGZvciB2ZXJ0ZXhcclxuICAgICAgICBAY2hhbmdlX2xpc3RlbmVycyA9IFtdXHJcbiAgICAgICAgQGZyZWVuYW1lcyA9IFtdXHJcbiAgICAgICAgQHJvb3QgPSBudWxsXHJcbiAgICAgICAgQGlzX2NoYW5nZXNfbG9jayA9IGZhbHNlXHJcbiAgICAgICAgQGlzX3VwZGF0ZWQgPSBmYWxzZVxyXG5cclxuICAgICMgPT09IE9USEVSID09PT1cclxuICAgICMgdXBkYXRlIGFsbCBpbmZvIGludG8gdGhpcyBncmFwaFxyXG4gICAgdXBkYXRlOiAtPlxyXG4gICAgICAgIHJldHVybiBpZiBAaXNfdXBkYXRlZFxyXG4gICAgICAgIGZvciB2IGluIEB2ZXJ0aWNlc1xyXG4gICAgICAgICAgICBAdmluZm9bdl0uYmZzID0gQG1ha2VfYmZzX2luZm8gdlxyXG4gICAgICAgIEBpc191cGRhdGVkID0gZmFsc2VcclxuXHJcbiAgICBpc19yb290OiAodikgLT4gdiA9PSBAcm9vdFxyXG4gICAgc2V0X3Jvb3Q6IChyKSAtPiBcclxuICAgICAgICByZXR1cm4gaWYgciA9PSBAcm9vdFxyXG4gICAgICAgIEByb290ID0gclxyXG4gICAgICAgIEBjaGFuZ2VkKClcclxuXHJcbiAgICBsZWF2ZXM6IChyb290ID0gQHJvb3QpIC0+XHJcbiAgICAgICAgQHVwZGF0ZSgpXHJcbiAgICAgICAgcmVzID0gW11cclxuICAgICAgICByb290YmZzID0gQHZpbmZvW3Jvb3RdLmJmc1xyXG4gICAgICAgIGZvciB1IGluIEB2ZXJ0aWNlc1xyXG4gICAgICAgICAgICBpZiByb290YmZzW3VdLnN1YnZlcnRpY2VzLmxlbmd0aCA9PSAwXHJcbiAgICAgICAgICAgICAgICByZXMucHVzaCB1XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG5cclxuICAgIG1ha2VfYmZzX2luZm86IChzKSAtPlxyXG4gICAgICAgIHEgPSBbc11cclxuICAgICAgICB1c2VkID0ge31cclxuICAgICAgICB1c2VkW3NdID0gdHJ1ZVxyXG4gICAgICAgIHJlcyA9IHt9XHJcbiAgICAgICAgcmVzW3VdID0ge30gZm9yIHUgaW4gQHZlcnRpY2VzXHJcbiAgICAgICAgcmVzW3NdLmRpc3QgPSAwXHJcbiAgICAgICAgcmVzW3NdLnN1YnZlcnRpY2VzID0gW11cclxuICAgICAgICB3aGlsZSBxLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgdiA9IHEuc2hpZnQoKVxyXG4gICAgICAgICAgICByZXNbdl0uc3VidmVydGljZXMgPSBbXSBpZiBub3QgcmVzW3ZdLnN1YnZlcnRpY2VzP1xyXG4gICAgICAgICAgICBmb3IgdSBpbiBAdmVydGljZXNcclxuICAgICAgICAgICAgICAgIGlmIEBpc19saW5rKHYsIHUpIGFuZCBub3QgdXNlZFt1XVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc1t2XS5zdWJ2ZXJ0aWNlcy5wdXNoIHVcclxuICAgICAgICAgICAgICAgICAgICByZXNbdV0uZGlzdCA9IHJlc1t2XS5kaXN0ICsgMVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZWRbdV0gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgcS5wdXNoIHVcclxuICAgICAgICByZXR1cm4gcmVzXHJcblxyXG4gICAgZGlzdDogKHUsIHYpIC0+XHJcbiAgICAgICAgcmV0dXJuIGlmIG5vdCBAaXNfdmVydGV4KHUpIG9yIG5vdCBAaXNfdmVydGV4KHYpXHJcbiAgICAgICAgQHVwZGF0ZSgpXHJcbiAgICAgICAgcmVzID0gQHZpbmZvW3VdLmJmc1t2XS5kaXN0XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG5cclxuICAgIGRpc3RzX3RvX2xlYXZlczogKHYpIC0+XHJcbiAgICAgICAgcmVzID0gW11cclxuICAgICAgICBmb3IgbCBpbiBAbGVhdmVzKClcclxuICAgICAgICAgICAgcmVzLnB1c2ggQGRpc3QgbCwgdlxyXG4gICAgICAgIHJldHVybiByZXNcclxuXHJcbiAgICAjID09PSBDSEFOR0VTID09PVxyXG4gICAgb25fY2hhbmdlOiAoY2FsbGJhY2spIC0+IFxyXG4gICAgICAgIEBjaGFuZ2VfbGlzdGVuZXJzLnB1c2ggY2FsbGJhY2tcclxuXHJcbiAgICBjaGFuZ2VkOiAtPiBcclxuICAgICAgICBAaXNfdXBkYXRlZCA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIGlmIEBpc19jaGFuZ2VzX2xvY2tcclxuICAgICAgICBmb3IgY2FsbGJhY2sgaW4gQGNoYW5nZV9saXN0ZW5lcnNcclxuICAgICAgICAgICAgY2FsbGJhY2sodGhpcylcclxuXHJcbiAgICBsb2NrX2NoYW5nZXM6IC0+XHJcbiAgICAgICAgQGlzX2NoYW5nZXNfbG9jayA9IHRydWVcclxuXHJcbiAgICB1bmxvY2tfY2hhbmdlczogLT5cclxuICAgICAgICBAaXNfY2hhbmdlc19sb2NrID0gZmFsc2VcclxuXHJcbiAgICAjID09PSBWRVJUSUNFUyA9PT0gXHJcbiAgICBnZW5lcmF0ZV9uYW1lOiAtPlxyXG4gICAgICAgIEBmcmVlbmFtZXMuc29ydCAoYSwgYikgLT4gYSAtIGJcclxuICAgICAgICByZXMgPSBcIlwiXHJcbiAgICAgICAgd2hpbGUgQGZyZWVuYW1lcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgIHYgPSBcIlwiICsgQGZyZWVuYW1lcy5zaGlmdCgpXHJcbiAgICAgICAgICAgIHJldHVybiB2IGlmIG5vdCBAaXNfdmVydGV4IHZcclxuICAgICAgICByZXR1cm4gXCJcIiArIEBjb3VudF92ZXJ0aWNlcygpXHJcblxyXG4gICAgY291bnRfdmVydGljZXM6IC0+IEB2ZXJ0aWNlcy5sZW5ndGhcclxuXHJcbiAgICBpc192ZXJ0ZXg6IChuYW1lKSAtPlxyXG4gICAgICAgIHJldHVybiBuYW1lIGluIEB2ZXJ0aWNlc1xyXG5cclxuICAgIGdldF92aW5mbzogKG5hbWUpIC0+IEB2aW5mb1tuYW1lXVxyXG5cclxuICAgIHNldF92aW5mbzogKG5hbWUsIGluZm8pIC0+XHJcbiAgICAgICAgdW5sZXNzIEB2aW5mb1tuYW1lXT9cclxuICAgICAgICAgICAgQHZpbmZvW25hbWVdID0gaW5mb1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICBAdmluZm9bbmFtZV1ba10gPSB2IGZvciBrLHYgb2YgaW5mbyBpZiBpbmZvP1xyXG5cclxuICAgIGFkZF92ZXJ0ZXg6IChuYW1lLCBpbmZvKSAtPlxyXG4gICAgICAgIEBzZXRfdmluZm8gbmFtZSwgaW5mb1xyXG4gICAgICAgIHJldHVybiBpZiBAaXNfdmVydGV4IG5hbWVcclxuICAgICAgICBAdmVydGljZXMucHVzaCBuYW1lXHJcbiAgICAgICAgQG1hcFtuYW1lXSA9IHt9XHJcbiAgICAgICAgaWYgbm90IEByb290P1xyXG4gICAgICAgICAgICBAcm9vdCA9IG5hbWVcclxuICAgICAgICBAY2hhbmdlZCgpXHJcblxyXG4gICAgZGVsX3ZlcnRleDogKG5hbWUpIC0+XHJcbiAgICAgICAgcmV0dXJuIGlmIG5vdCBAaXNfdmVydGV4KG5hbWUpXHJcblxyXG4gICAgICAgIHByZXZfbG9ja19zdGF0dXMgPSBAaXNfY2hhbmdlc19sb2NrXHJcbiAgICAgICAgQGxvY2tfY2hhbmdlcygpXHJcblxyXG4gICAgICAgIF8ucHVsbCBAdmVydGljZXMsIG5hbWVcclxuICAgICAgICBkZWxldGUgQHZpbmZvW25hbWVdXHJcbiAgICAgICAgQGZyZWVuYW1lcy5wdXNoIHBhcnNlSW50KG5hbWUpXHJcbiAgICAgICAgQGRlbF9saW5rc193aXRoX3ZlcnRleCBuYW1lXHJcbiAgICAgICAgaWYgbmFtZSA9PSBAcm9vdFxyXG4gICAgICAgICAgICBAcm9vdCA9IGlmIEB2ZXJ0aWNlcy5sZW5ndGggPiAwIHRoZW4gQHZlcnRpY2VzWzBdIGVsc2UgbnVsbFxyXG5cclxuICAgICAgICBAaXNfY2hhbmdlc19sb2NrID0gcHJldl9sb2NrX3N0YXR1c1xyXG4gICAgICAgIEBjaGFuZ2VkKClcclxuXHJcbiAgICAjID09PSBMSU5LUyA9PT0gXHJcbiAgICBjb3VudF9saW5rczogLT4gXHJcbiAgICAgICAgcmV0dXJuIEBsaW5rcy5sZW5ndGhcclxuXHJcbiAgICBfbWFrZV9saW5rOiAodjEsIHYyKSAtPlxyXG4gICAgICAgIGFyciA9IFt2MSwgdjJdLnNvcnQoKVxyXG4gICAgICAgIHJldHVybiB7IGZyb206IGFyclswXSwgdG86IGFyclsxXSB9XHJcblxyXG4gICAgYWRkX2xpbms6ICh2MSwgdjIpIC0+XHJcbiAgICAgICAgcmV0dXJuIGlmIEBpc19saW5rKHYxLCB2MilcclxuICAgICAgICBAbGlua3MucHVzaCBAX21ha2VfbGluayh2MSwgdjIpXHJcbiAgICAgICAgQG1hcFt2MV1bdjJdID0gQG1hcFt2Ml1bdjFdID0gdHJ1ZVxyXG4gICAgICAgIEBjaGFuZ2VkKClcclxuXHJcbiAgICBkZWxfbGluazogKHYxLCB2MikgLT5cclxuICAgICAgICBwID0gKGwpIC0+IChsLmZyb20gPT0gdjEgYW5kIGwudG8gPT0gdjIpIG9yIChsLmZyb20gPT0gdjIgYW5kIGwudG8gPT0gdjEpXHJcbiAgICAgICAgQGRlbF9saW5rcCBwXHJcblxyXG4gICAgZGVsX2xpbmtzX3dpdGhfdmVydGV4OiAodikgLT5cclxuICAgICAgICBwID0gKGwpIC0+IHYgaW4gXy52YWx1ZXMgbFxyXG4gICAgICAgIEBkZWxfbGlua3AgcFxyXG5cclxuICAgIGRlbF9saW5rX2Zyb21fbWFwOiAodjEsIHYyKSAtPlxyXG4gICAgICAgIEBtYXBbdjFdW3YyXSA9IEBtYXBbdjJdW3YxXSA9IGZhbHNlXHJcbiAgICAgICAgQGNoYW5nZWQoKVxyXG5cclxuICAgIGRlbF9saW5rcDogKHByZWRpY2F0ZSkgLT5cclxuICAgICAgICByZXMgPSBbXVxyXG4gICAgICAgIGZvciBsIGluIEBsaW5rc1xyXG4gICAgICAgICAgICBpZiBwcmVkaWNhdGUgbFxyXG4gICAgICAgICAgICAgICAgQGRlbF9saW5rX2Zyb21fbWFwIGwuZnJvbSwgbC50bywgZmFsc2VcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmVzLnB1c2ggbFxyXG4gICAgICAgIEBsaW5rcyA9IHJlc1xyXG4gICAgICAgIEBjaGFuZ2VkKClcclxuXHJcbiAgICBpc19saW5rOiAodjEsIHYyKSAtPlxyXG4gICAgICAgIHJldHVybiAhIUBtYXBbdjFdW3YyXVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaC5jb2ZmZWVcbiAqKi8iLCJcclxuR3JhcGggPSByZXF1aXJlICcuL0dyYXBoJ1xyXG5cclxuXHJcbiMjI1xyXG5leGFtcGxlIGZvciBidWlsZGVyMTpcclxub3B0aW9uc1xyXG4gICAgdmVydGljZXM6XHJcbiAgICAgICAgMDogeDogMTAwLCB5OiAxMDBcclxuICAgICAgICAxOiB4OiA1MCwgeTogNTBcclxuICAgICAgICAyOiB4OiAxNTAsIHk6IDUwXHJcbiAgICBsaW5rczpcclxuICAgICAgICAwOiBbMSwgMl1cclxuIyMjXHJcbm1vZHVsZS5leHBvcnRzLlxyXG5idWlsZGVyMSA9IChvcHRpb25zKSAtPlxyXG4gICAgZyA9IG5ldyBHcmFwaFxyXG4gICAgZy5hZGRfdmVydGV4IFwiXCIrbmFtZSwgaW5mbyBmb3IgbmFtZSwgaW5mbyBvZiBvcHRpb25zLnZlcnRpY2VzXHJcbiAgICBmb3IgYSwgYXJyIG9mIG9wdGlvbnMubGlua3NcclxuICAgICAgICBmb3IgYiBpbiBhcnJcclxuICAgICAgICAgICAgZy5hZGRfbGluayBcIlwiK2EsIFwiXCIrYlxyXG4gICAgcmV0dXJuIGdcclxuXHJcbm1vZHVsZS5leHBvcnRzLlxyXG5tYWtlX29wdGlvbnNfZm9yX2J1aWxkZXIxID0gKGdyYXBoKSAtPlxyXG4gICAgdmVydGljZXMgPSBfLmNsb25lIGdyYXBoLnZpbmZvXHJcbiAgICBsaW5rcyA9IHt9XHJcbiAgICBmb3Ige2Zyb20sIHRvfSBpbiBncmFwaC5saW5rc1xyXG4gICAgICAgIGxpbmtzW2Zyb21dID0gW10gaWYgbm90IGxpbmtzW2Zyb21dP1xyXG4gICAgICAgIGxpbmtzW2Zyb21dLnB1c2ggdG9cclxuICAgIHJldHVybiB7dmVydGljZXMsIGxpbmtzfVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0dyYXBoQnVpbGRlci5jb2ZmZWVcbiAqKi8iLCJcclxuR3JhcGggPSByZXF1aXJlICcuL0dyYXBoJ1xyXG51dGlscyA9IHJlcXVpcmUgJy4vdXRpbHMnXHJcbkNhbnZhc0dyYXBoQ29uc3RydWN0b3IgPSByZXF1aXJlICcuL0NhbnZhc0dyYXBoQ29uc3RydWN0b3InXHJcbkdyYXBoSW5mbyA9IHJlcXVpcmUgJy4vR3JhcGhJbmZvJ1xyXG5cclxuY291bnRlciA9IDBcclxuXHJcbm1vZHVsZS5leHBvcnRzID1cclxuY2xhc3MgR3JhcGhUYWJsZVxyXG4gICAgY29uc3RydWN0b3I6IChAY29udGFpbmVyLCBAZ3JhcGggPSBuZXcgR3JhcGgpIC0+XHJcbiAgICAgICAgQGlkID0gXCJndFwiICsgY291bnRlcisrXHJcbiAgICAgICAgZGl2X2Zvcl9jb25zdHJ1Y3RvciA9ICQoXCI8ZGl2PlwiKS5hdHRyKCdpZCcsIEBpZCArIFwiZ2JcIikuZ2V0IDBcclxuICAgICAgICBkaXZfZm9yX2dyYXBoX2luZm8gPSAkKFwiPGRpdj5cIikuYXR0cignaWQnLCBAaWQgKyBcImluZm9cIikuZ2V0IDBcclxuXHJcbiAgICAgICAgQGVsID0gdXRpbHMubWFrZV90YWxiZSBbXHJcbiAgICAgICAgICAgIFsn0KDQuNGB0YPQvdC+0Log0LPRgNCw0YTQsCcsICfQmNC90YTQvtGA0LzQsNGG0LjRjyDQviDQs9GA0LDRhNC1J10sIFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBkaXZfZm9yX2NvbnN0cnVjdG9yLCBkaXZfZm9yX2dyYXBoX2luZm9cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF0sIHsgaGVhZGVyOiB0cnVlIH1cclxuICAgICAgICAkKEBjb250YWluZXIpLmFwcGVuZCBAZWxcclxuXHJcbiAgICAgICAgQGdiID0gbmV3IENhbnZhc0dyYXBoQ29uc3RydWN0b3IgZGl2X2Zvcl9jb25zdHJ1Y3RvciwgQGdyYXBoXHJcbiAgICAgICAgQGdpID0gbmV3IEdyYXBoSW5mbyBkaXZfZm9yX2dyYXBoX2luZm8sIEBncmFwaFxyXG5cclxuICAgIHVwZGF0ZTogLT5cclxuICAgICAgICBAZ2IudXBkYXRlKCkgaWYgQGdiLnVwZGF0ZT9cclxuXHJcbiAgICByZW5kZXI6IC0+XHJcbiAgICAgICAgQGdiLnJlbmRlcigpXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0dyYXBoVGFibGUuY29mZmVlXG4gKiovIiwiXHJcblxyXG5jb3VudGVyID0gMFxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID1cclxuY2xhc3MgR3JhcGhJbmZvXHJcbiAgICBjb25zdHJ1Y3RvcjogKEBjb250YWluZXIsIEBncmFwaCA9IG5ldyBHcmFwaCkgLT5cclxuICAgICAgICBAY29udGFpbmVyID0gJChAY29udGFpbmVyKS5nZXQgMCBpZiBfLmlzU3RyaW5nIEBjb250YWluZXJcclxuICAgICAgICBAaWQgPSBcImdyYXBoaW5mb1wiICsgY291bnRlcisrXHJcbiAgICAgICAgQGVsID0gJChcIjxkaXY+XCIpLmdldCAwXHJcbiAgICAgICAgJChAY29udGFpbmVyKS5hcHBlbmQgQGVsXHJcbiAgICAgICAgQGluZm8gPVxyXG4gICAgICAgICAgICBcImxlYXZlc1wiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JvQuNGB0YLRjNGPOlwiXHJcbiAgICAgICAgICAgICAgICBmdW5jOiA9PlxyXG4gICAgICAgICAgICAgICAgICAgIEBncmFwaC5sZWF2ZXMoKS5qb2luICcsICdcclxuICAgICAgICAgICAgXCJjb3VudF92ZXJ0aWNlc1wiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JrQvtC70LjRh9C10YHRgtCy0L4g0LLQtdGA0YjQuNC9OlwiLFxyXG4gICAgICAgICAgICAgICAgZnVuYzogPT4gQGdyYXBoLmNvdW50X3ZlcnRpY2VzKClcclxuICAgICAgICAgICAgXCJjb3VudF9saW5rc1wiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JrQvtC70LjRh9C10YHRgtCy0L4g0YDQtdCx0LXRgDpcIixcclxuICAgICAgICAgICAgICAgIGZ1bmM6ID0+IEBncmFwaC5jb3VudF9saW5rcygpXHJcbiAgICAgICAgICAgIFwiaW52YXJpYW50M1wiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi0JjQvdCy0LDRgNC40LDQvdGCIDM6XCJcclxuICAgICAgICAgICAgICAgIGZ1bmM6ID0+IEBpbnZhcmlhbnQzKClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgZm9yIGlkLG8gb2YgQGluZm9cclxuICAgICAgICAgICAgJChAZWwpLmFwcGVuZCgkKFwiPGRpdj48dT4je28udGl0bGV9PC91PiA8c3BhbiBpZD0je0BpZCtpZH0+PC9zcGFuPjwvZGl2PlwiKSlcclxuICAgICAgICBAZ3JhcGgub25fY2hhbmdlID0+IEB1cGRhdGVfaW5mbygpXHJcbiAgICAgICAgQHVwZGF0ZV9pbmZvKClcclxuXHJcbiAgICAgICAgQGNoYW5nZV9saXN0ZW5lcnMgPSBbXVxyXG4gICAgICAgIEByZXMgPSBcIlwiXHJcblxyXG4gICAgIyA9PT09PSBDSEFOR0VTID09PT09XHJcbiAgICAjIHNldF9yZXM6IChuZXdfcmVzKSAtPlxyXG4gICAgIyAgICAgcmV0dXJuIGlmIEByZXMgPT0gbmV3X3Jlc1xyXG4gICAgIyAgICAgQHJlcyA9IG5ld19yZXNcclxuICAgICMgICAgIEBjaGFuZ2VkKClcclxuXHJcbiAgICAjIG9uX2NoYW5nZTogKGNhbGxiYWNrKSAtPiBcclxuICAgICMgICAgIEBjaGFuZ2VfbGlzdGVuZXJzLnB1c2ggY2FsbGJhY2tcclxuXHJcbiAgICAjIGNoYW5nZWQ6IC0+IFxyXG4gICAgIyAgICAgZm9yIGNhbGxiYWNrIGluIEBjaGFuZ2VfbGlzdGVuZXJzXHJcbiAgICAjICAgICAgICAgY2FsbGJhY2sodGhpcylcclxuXHJcbiAgICAjID09PT09IElORk8gPT09PT1cclxuICAgIGludmFyaWFudDM6IC0+XHJcbiAgICAgICAgcmVzID0ge31cclxuICAgICAgICAjIGZvciB2IGluIEBncmFwaC52ZXJ0aWNlc1xyXG4gICAgICAgICMgICAgIHJlc1t2XSA9IEBncmFwaC52aW5mb1t2XS5kaXN0dG9yb290XHJcbiAgICAgICAgIyBjb252ZXJ0IHJlcyB0byBzdHJpbmdcclxuICAgICAgICByZXMuZGlzdHNfdG9fbGVhdmVzID0gQGdyYXBoLmRpc3RzX3RvX2xlYXZlcygpXHJcbiAgICAgICAgcmVzID0gSlNPTi5zdHJpbmdpZnkgcmVzLCBudWxsLCAyXHJcbiAgICAgICAgcmV0dXJuICQoXCI8cHJlPiN7cmVzfTwvcHJlPlwiKVxyXG5cclxuICAgIHVwZGF0ZV9pbmZvOiAtPlxyXG4gICAgICAgIEBncmFwaC51cGRhdGUoKVxyXG4gICAgICAgIGZvciBpZCwgbyBvZiBAaW5mb1xyXG4gICAgICAgICAgICBpZCA9IEBpZCArIGlkXHJcbiAgICAgICAgICAgIHJlcyA9IG8uZnVuYygpXHJcbiAgICAgICAgICAgICQoJyMnK2lkKS5odG1sIFwiXCJcclxuICAgICAgICAgICAgJCgnIycraWQpLmFwcGVuZCByZXNcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9HcmFwaEluZm8uY29mZmVlXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==